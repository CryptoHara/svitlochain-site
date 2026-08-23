#!/usr/bin/env python3
"""
svitlo-provider training worker (single-node, DataParallel-style).

Invoked by svitlo_provider.rs (run_training) the same way
svitlo_tensor_worker.py is invoked for inference -- reads a JSON envelope
from stdin, trains, prints a JSON result to stdout.

Scope (2026-08-16, first step of the FT-Transformer training roadmap):
single-node only. The orchestrator's split_data() already fans a training
job out into N independent subtasks, each with its own data shard
(input_uri) and no dependency between them (DataParallel, not
PipelineParallel -- no layer_range). This worker trains a full model on
ONE shard and returns its trained weights; averaging the N returned
state_dicts (FedAvg-style) into one combined model is the CALLER's job
(EMMA-side, not implemented here) -- this system has no live inter-node
communication during training, so synchronous per-step gradient averaging
(what "DataParallel" usually means in a single machine/cluster) isn't
possible here. Weight averaging after independent local training is the
realistic fit for an async job-marketplace like this one.

NOT implemented (the second roadmap step, if it's ever needed):
PipelineParallel -- loading only a layer_range slice of a model and
passing intermediate activations to another node. That needs its own
worker design, not an extension of this one.

Model architectures are embedded directly (not imported from EMMA) so
this file is the only thing that needs distributing to a provider
machine, matching the model-file-only distribution story of
svitlo_tensor_worker.py -- copied from the corresponding EMMA/models/*.py
file, must be kept in sync by hand if those change.

2026-08-21: extended from FT-Transformer-only to all 6 rotatable
architectures EMMA's continuous_trainer.py trains (LSTM, TCN, TFT, Mamba,
CNN, FT-Transformer) -- the user clarified the platform's actual goal is
speeding up training for the existing model set, not offloading
inference for a couple of them. FT-Transformer is multi-task
(dir_logits + mag_pred) and flat-input (N, features); the other 5 are
single-task and sequence-input (N, seq_len, features) with an otherwise
identical loss/optimizer recipe (FocalLoss + class weights, AdamW,
CosineAnnealingWarmRestarts, recency-weighted sampling) -- see
EMMA/training/continuous_trainer.py's per-architecture _train_*_cycle
methods, which this mirrors.

2026-08-22: added 'mlp' -- the seventh (and primary) model, initially
left out of the 2026-08-21 pass. Flat input like FT-Transformer, but
single-task, with an OPTIONAL per-symbol embedding (sym_idx_b64) --
EMMA/training/continuous_trainer.py's ContinuousTrainer._fit().

Input envelope (stdin, JSON) -- ft_transformer (flat, multi-task):
{
  "model_arch": "ft_transformer",
  "input_size": 127, "d_token": 128, "nhead": 8, "num_layers": 3,
  "dim_feedforward": 256, "dropout": 0.15,
  "x_shape": [N, input_size], "x_b64": "<float32 bytes>",
  "y_dir_b64": "<int64 bytes, shape [N]>",
  "y_mag_b64": "<float32 bytes, shape [N]> (optional, zeros if absent)",
  "epochs": 5, "lr": 0.0002, "batch_size": 512,
  "warm_start_b64": "<optional: base64 torch.save(state_dict) bytes>"
}

Input envelope -- mlp (flat, single-task, optional symbol embedding):
{
  "model_arch": "mlp",
  "input_size": 127, "hidden_size": 256, "num_symbols": 98, "embed_dim": 8,
  "x_shape": [N, input_size], "x_b64": "<float32 bytes>",
  "y_dir_b64": "<int64 bytes, shape [N]>",
  "sym_idx_b64": "<int64 bytes, shape [N]> (optional, omitted if num_symbols=0)",
  "epochs": 50, "lr": 0.001, "t0": 10, "t_mult": 2, "batch_size": 512,
  "warm_start_b64": "<optional>"
}

Input envelope -- lstm/tcn/tft/mamba/cnn (sequence, single-task):
{
  "model_arch": "lstm" | "tcn" | "tft" | "mamba" | "cnn",
  "input_size": 127, "seq_len": 48, <arch-specific kwargs...>,
  "x_shape": [N, seq_len, input_size], "x_b64": "<float32 bytes>",
  "y_dir_b64": "<int64 bytes, shape [N]>",
  "epochs": 40, "lr": 0.001, "t0": 10, "t_mult": 2, "batch_size": 256,
  "warm_start_b64": "<optional>"
}

Output (stdout, one line of JSON):
{"state_dict_b64": "...", "train_acc": 0.61, "n_samples": 12345, "epochs_run": 5}
"""
from __future__ import annotations

import base64
import io
import json
import sys


def build_model(cfg: dict):
    import torch
    import torch.nn as nn

    arch = cfg['model_arch']

    if arch == 'ft_transformer':
        class _FTTransformerModel(nn.Module):
            """Mirrors EMMA/models/ft_transformer_model.py::FTTransformerModel."""

            def __init__(self, input_size, d_token=128, nhead=8, num_layers=3,
                         dim_feedforward=256, dropout=0.15, num_classes=2):
                super().__init__()
                self.input_size = input_size
                self.d_token = d_token
                self.token_w = nn.Parameter(torch.empty(input_size, d_token))
                self.token_b = nn.Parameter(torch.zeros(input_size, d_token))
                nn.init.xavier_uniform_(self.token_w)
                self.cls = nn.Parameter(torch.zeros(1, 1, d_token))
                encoder_layer = nn.TransformerEncoderLayer(
                    d_model=d_token, nhead=nhead, dim_feedforward=dim_feedforward,
                    dropout=dropout, batch_first=True, norm_first=True,
                )
                self.encoder = nn.TransformerEncoder(encoder_layer, num_layers=num_layers)
                self.norm = nn.LayerNorm(d_token)
                self.dir_head = nn.Linear(d_token, num_classes)
                self.mag_head = nn.Sequential(
                    nn.Linear(d_token, 64), nn.ReLU(), nn.Linear(64, 1), nn.Sigmoid(),
                )

            def forward(self, x, return_mag=False):
                b = x.size(0)
                tokens = x.unsqueeze(-1) * self.token_w.unsqueeze(0) + self.token_b.unsqueeze(0)
                tokens = torch.cat([self.cls.expand(b, -1, -1), tokens], dim=1)
                out = self.encoder(tokens)
                cls_out = self.norm(out[:, 0])
                dir_logits = self.dir_head(cls_out)
                if return_mag:
                    mag_pred = self.mag_head(cls_out).squeeze(-1)
                    return dir_logits, mag_pred
                return dir_logits

        return _FTTransformerModel(
            input_size=cfg['input_size'],
            d_token=cfg.get('d_token', 128),
            nhead=cfg.get('nhead', 8),
            num_layers=cfg.get('num_layers', 3),
            dim_feedforward=cfg.get('dim_feedforward', 256),
            dropout=cfg.get('dropout', 0.15),
        )

    if arch == 'lstm':
        class _LSTMPriceModel(nn.Module):
            """Mirrors EMMA/models/lstm_model.py::LSTMPriceModel."""

            def __init__(self, input_size, hidden_size=128, num_layers=2,
                         num_classes=2, dropout=0.3):
                super().__init__()
                self.lstm = nn.LSTM(
                    input_size=input_size, hidden_size=hidden_size, num_layers=num_layers,
                    batch_first=True, dropout=dropout if num_layers > 1 else 0.0,
                    bidirectional=True,
                )
                d = hidden_size * 2
                self.attention = nn.Sequential(
                    nn.Linear(d, hidden_size), nn.Tanh(), nn.Linear(hidden_size, 1),
                )
                self.classifier = nn.Sequential(
                    nn.Linear(d, hidden_size), nn.ReLU(), nn.BatchNorm1d(hidden_size),
                    nn.Dropout(dropout), nn.Linear(hidden_size, num_classes),
                )

            def forward(self, x):
                out, _ = self.lstm(x)
                w = torch.softmax(self.attention(out), dim=1)
                context = (w * out).sum(dim=1)
                return self.classifier(context)

        return _LSTMPriceModel(input_size=cfg['input_size'])

    if arch == 'tcn':
        class _Chomp1d(nn.Module):
            def __init__(self, pad):
                super().__init__()
                self.pad = pad

            def forward(self, x):
                return x[:, :, :-self.pad].contiguous() if self.pad > 0 else x

        class _TCNBlock(nn.Module):
            def __init__(self, in_ch, out_ch, kernel, dilation, dropout):
                super().__init__()
                pad = (kernel - 1) * dilation
                self.net = nn.Sequential(
                    nn.utils.weight_norm(nn.Conv1d(in_ch, out_ch, kernel, dilation=dilation, padding=pad)),
                    _Chomp1d(pad), nn.ReLU(), nn.Dropout(dropout),
                    nn.utils.weight_norm(nn.Conv1d(out_ch, out_ch, kernel, dilation=dilation, padding=pad)),
                    _Chomp1d(pad), nn.ReLU(), nn.Dropout(dropout),
                )
                self.proj = nn.Conv1d(in_ch, out_ch, 1) if in_ch != out_ch else None
                self.act = nn.ReLU()

            def forward(self, x):
                res = x if self.proj is None else self.proj(x)
                return self.act(self.net(x) + res)

        class _TCNPriceModel(nn.Module):
            """Mirrors EMMA/models/tcn_model.py::TCNPriceModel."""

            def __init__(self, input_size, channels=(64, 64, 128, 128, 256),
                         kernel_size=3, dropout=0.2, num_classes=2):
                super().__init__()
                dilations = [1, 2, 4, 8, 16]
                blocks = []
                in_ch = input_size
                for out_ch, dil in zip(channels, dilations):
                    blocks.append(_TCNBlock(in_ch, out_ch, kernel_size, dil, dropout))
                    in_ch = out_ch
                self.tcn = nn.Sequential(*blocks)
                self.classifier = nn.Sequential(
                    nn.Linear(in_ch, in_ch // 2), nn.ReLU(), nn.Dropout(dropout),
                    nn.Linear(in_ch // 2, num_classes),
                )

            def forward(self, x):
                x = x.transpose(1, 2)
                out = self.tcn(x)
                out = out.mean(dim=-1)
                return self.classifier(out)

        return _TCNPriceModel(input_size=cfg['input_size'])

    if arch == 'tft':
        class _GRN(nn.Module):
            def __init__(self, d, d_context=0, dropout=0.1):
                super().__init__()
                self.fc1 = nn.Linear(d + d_context, d)
                self.fc2 = nn.Linear(d, d * 2)
                self.proj = nn.Linear(d, d, bias=False)
                self.norm = nn.LayerNorm(d)
                self.drop = nn.Dropout(dropout)

            def forward(self, x, context=None):
                import torch.nn.functional as F
                inp = torch.cat([x, context], dim=-1) if context is not None else x
                h = F.elu(self.fc1(inp))
                h = self.drop(h)
                out = self.fc2(h)
                val, gate = out.chunk(2, dim=-1)
                gated = val * torch.sigmoid(gate)
                return self.norm(x + gated)

        class _TFTModel(nn.Module):
            """Mirrors EMMA/models/tft_model.py::TFTModel (VSN unused there, omitted)."""

            def __init__(self, input_size, d_model=64, nhead=4, num_lstm_layers=2,
                         num_attn_layers=2, dropout=0.1, num_classes=2):
                super().__init__()
                if d_model % nhead != 0:
                    nhead = max(1, nhead // 2)
                self.input_proj = nn.Linear(input_size, d_model)
                self.vsn_grn = _GRN(d_model, dropout=dropout)
                self.lstm_encoder = nn.LSTM(
                    input_size=d_model, hidden_size=d_model, num_layers=num_lstm_layers,
                    batch_first=True, dropout=dropout if num_lstm_layers > 1 else 0.0,
                )
                self.lstm_grn = _GRN(d_model, dropout=dropout)
                attn_layer = nn.TransformerEncoderLayer(
                    d_model=d_model, nhead=nhead, dim_feedforward=d_model * 2,
                    dropout=dropout, batch_first=True, norm_first=True,
                )
                self.attn_encoder = nn.TransformerEncoder(attn_layer, num_layers=num_attn_layers)
                self.output_grn = _GRN(d_model, dropout=dropout)
                self.norm_out = nn.LayerNorm(d_model)
                self.dir_head = nn.Sequential(
                    nn.Linear(d_model, d_model // 2), nn.ReLU(), nn.Dropout(dropout),
                    nn.Linear(d_model // 2, num_classes),
                )
                # Unused by _train_single_task (no return_mag here) but the
                # real TFTModel always constructs it in __init__, so it's
                # always present in state_dict() -- omitting it here made
                # load_state_dict() fail on the real class with "missing
                # key(s): mag_head.*" (strict=True is the default).
                self.mag_head = nn.Sequential(
                    nn.Linear(d_model, 32), nn.ReLU(), nn.Linear(32, 1), nn.Sigmoid(),
                )

            def forward(self, x):
                h = self.input_proj(x)
                h = self.vsn_grn(h)
                lstm_out, _ = self.lstm_encoder(h)
                lstm_out = self.lstm_grn(lstm_out)
                attn_out = self.attn_encoder(lstm_out)
                out = self.output_grn(attn_out + lstm_out)
                out = self.norm_out(out)
                pooled = out.mean(dim=1)
                return self.dir_head(pooled)

        return _TFTModel(
            input_size=cfg['input_size'], d_model=cfg.get('d_model', 128),
            nhead=cfg.get('nhead', 8), num_lstm_layers=cfg.get('num_lstm_layers', 2),
            num_attn_layers=cfg.get('num_attn_layers', 2),
        )

    if arch == 'mamba':
        class _SSMBlock(nn.Module):
            def __init__(self, d_model, d_state=16, dropout=0.1):
                super().__init__()
                self.d_model = d_model
                self.d_state = d_state
                self.A_log = nn.Parameter(torch.log(torch.rand(d_model, d_state) + 0.5))
                self.D = nn.Parameter(torch.ones(d_model))
                self.B_proj = nn.Linear(d_model, d_state, bias=False)
                self.C_proj = nn.Linear(d_model, d_state, bias=False)
                self.delta_proj = nn.Linear(d_model, d_model)
                self.in_proj = nn.Linear(d_model, d_model * 2)
                self.out_proj = nn.Linear(d_model, d_model)
                self.norm = nn.LayerNorm(d_model)
                self.drop = nn.Dropout(dropout)

            def forward(self, x):
                import torch.nn.functional as F
                B, L, D = x.shape
                residual = x
                xz = self.in_proj(x)
                x_in, z = xz.chunk(2, dim=-1)
                x_in = F.silu(x_in)
                delta = F.softplus(self.delta_proj(x_in))
                B_t = self.B_proj(x_in)
                C_t = self.C_proj(x_in)
                A = -torch.exp(self.A_log)
                A_bar = torch.exp(
                    torch.clamp(delta.unsqueeze(-1) * A.unsqueeze(0).unsqueeze(0), min=-20.0, max=0.0)
                )
                B_bar = delta.unsqueeze(-1) * B_t.unsqueeze(2)
                h = torch.zeros(B, D, self.d_state, device=x.device, dtype=x.dtype)
                ys = []
                for t in range(L):
                    h = A_bar[:, t] * h + B_bar[:, t] * x_in[:, t].unsqueeze(-1)
                    y_t = (h * C_t[:, t].unsqueeze(1)).sum(-1) + self.D * x_in[:, t]
                    ys.append(y_t)
                y = torch.stack(ys, dim=1)
                y = y * F.silu(z)
                y = self.drop(self.out_proj(y))
                return self.norm(y + residual)

        class _MambaLiteModel(nn.Module):
            """Mirrors EMMA/models/mamba_model.py::MambaLiteModel."""

            def __init__(self, input_size, d_model=64, d_state=16, num_layers=4,
                         dropout=0.1, num_classes=2):
                super().__init__()
                self.input_proj = nn.Sequential(
                    nn.Linear(input_size, d_model), nn.LayerNorm(d_model),
                )
                self.ssm_blocks = nn.ModuleList([
                    _SSMBlock(d_model, d_state, dropout) for _ in range(num_layers)
                ])
                self.classifier = nn.Sequential(
                    nn.Linear(d_model, d_model // 2), nn.ReLU(), nn.Dropout(dropout),
                    nn.Linear(d_model // 2, num_classes),
                )

            def forward(self, x):
                h = self.input_proj(x)
                for block in self.ssm_blocks:
                    h = block(h)
                pooled = h.mean(dim=1)
                return self.classifier(pooled)

        return _MambaLiteModel(
            input_size=cfg['input_size'], d_model=cfg.get('d_model', 64),
            d_state=cfg.get('d_state', 16), num_layers=cfg.get('num_layers', 4),
        )

    if arch == 'cnn':
        class _ScaleBranch(nn.Module):
            def __init__(self, in_ch, out_ch, kernel, dropout):
                super().__init__()
                pad = kernel // 2
                self.net = nn.Sequential(
                    nn.Conv1d(in_ch, out_ch, kernel, padding=pad), nn.BatchNorm1d(out_ch), nn.ReLU(), nn.Dropout(dropout),
                    nn.Conv1d(out_ch, out_ch, kernel, padding=pad), nn.BatchNorm1d(out_ch), nn.ReLU(),
                )

            def forward(self, x):
                return self.net(x)

        class _MultiScaleCNNModel(nn.Module):
            """Mirrors EMMA/models/cnn_model.py::MultiScaleCNNModel."""

            def __init__(self, input_size, branch_ch=48, kernels=(3, 7, 15, 31),
                         dropout=0.15, num_classes=2):
                super().__init__()
                self.input_proj = nn.Sequential(
                    nn.Conv1d(input_size, branch_ch, 1), nn.BatchNorm1d(branch_ch), nn.ReLU(),
                )
                self.branches = nn.ModuleList([
                    _ScaleBranch(branch_ch, branch_ch, k, dropout) for k in kernels
                ])
                merged_ch = branch_ch * len(kernels)
                self.merge = nn.Sequential(
                    nn.Conv1d(merged_ch, branch_ch * 2, 1), nn.BatchNorm1d(branch_ch * 2),
                    nn.ReLU(), nn.Dropout(dropout),
                )
                self.classifier = nn.Sequential(
                    nn.Linear(branch_ch * 2, branch_ch), nn.ReLU(), nn.Dropout(dropout),
                    nn.Linear(branch_ch, num_classes),
                )

            def forward(self, x):
                x = x.transpose(1, 2)
                h = self.input_proj(x)
                branch_outs = [branch(h) for branch in self.branches]
                merged = torch.cat(branch_outs, dim=1)
                out = self.merge(merged)
                pooled = out.mean(dim=-1)
                return self.classifier(pooled)

        return _MultiScaleCNNModel(
            input_size=cfg['input_size'], branch_ch=cfg.get('branch_ch', 48),
            kernels=tuple(cfg.get('kernels', (3, 7, 15, 31))),
        )

    if arch == 'mlp':
        class _ResBlock(nn.Module):
            def __init__(self, dim, dropout=0.3):
                super().__init__()
                self.net = nn.Sequential(
                    nn.Linear(dim, dim), nn.BatchNorm1d(dim), nn.ReLU(), nn.Dropout(dropout),
                    nn.Linear(dim, dim), nn.BatchNorm1d(dim),
                )

            def forward(self, x):
                import torch.nn.functional as F
                return F.relu(x + self.net(x))

        class _PricePredictionModel(nn.Module):
            """Mirrors EMMA/models/pytorch_model.py::PricePredictionModel."""

            def __init__(self, input_size, hidden_size=256, num_classes=2,
                         num_symbols=0, embed_dim=8):
                super().__init__()
                self.num_symbols = num_symbols
                self.embed_dim = embed_dim
                self.sym_embed = (
                    nn.Embedding(num_symbols + 1, embed_dim) if num_symbols > 0 else None
                )
                eff_input = input_size + (embed_dim if num_symbols > 0 else 0)
                self.input_proj = nn.Sequential(
                    nn.Linear(eff_input, hidden_size), nn.BatchNorm1d(hidden_size), nn.ReLU(),
                )
                self.res_blocks = nn.Sequential(
                    _ResBlock(hidden_size, dropout=0.3), _ResBlock(hidden_size, dropout=0.3),
                )
                self.classifier = nn.Sequential(
                    nn.Linear(hidden_size, hidden_size // 2), nn.ReLU(), nn.Dropout(0.15),
                    nn.Linear(hidden_size // 2, num_classes),
                )

            def forward(self, x, sym_idx=None):
                if self.sym_embed is not None and sym_idx is not None:
                    idx = sym_idx.clamp(0, self.num_symbols)
                    x = torch.cat([x, self.sym_embed(idx)], dim=1)
                x = self.input_proj(x)
                x = self.res_blocks(x)
                return self.classifier(x)

        return _PricePredictionModel(
            input_size=cfg['input_size'], hidden_size=cfg.get('hidden_size', 256),
            num_symbols=cfg.get('num_symbols', 0), embed_dim=cfg.get('embed_dim', 8),
        )

    raise ValueError(f'unsupported model_arch: {arch!r}')


class _FocalLoss:
    """Mirrors continuous_trainer.py::_FocalLoss exactly."""

    def __init__(self, weight=None, gamma=2.0, label_smoothing=0.0):
        self.gamma = gamma
        self.weight = weight
        self.label_smoothing = label_smoothing

    def __call__(self, inp, target):
        import torch
        import torch.nn.functional as F
        ce = F.cross_entropy(inp, target, weight=self.weight,
                              label_smoothing=self.label_smoothing, reduction='none')
        pt = torch.exp(-ce)
        return (((1.0 - pt) ** self.gamma) * ce).mean()


def _train_ft_transformer(cfg: dict, model, device) -> tuple[float, int]:
    """Multi-task (dir_logits + mag_pred) training loop -- unchanged from
    before this file supported other architectures."""
    import torch
    import torch.nn.functional as F
    from torch.utils.data import DataLoader, TensorDataset

    n, input_size = cfg['x_shape']
    x_bytes = bytearray(base64.b64decode(cfg['x_b64']))
    y_dir_bytes = bytearray(base64.b64decode(cfg['y_dir_b64']))
    X = torch.frombuffer(x_bytes, dtype=torch.float32).clone().reshape(n, input_size).to(device)
    y_dir = torch.frombuffer(y_dir_bytes, dtype=torch.int64).clone().reshape(n).to(device)
    if cfg.get('y_mag_b64'):
        y_mag_bytes = bytearray(base64.b64decode(cfg['y_mag_b64']))
        y_mag = torch.frombuffer(y_mag_bytes, dtype=torch.float32).clone().reshape(n).to(device)
    else:
        y_mag = torch.zeros(n, dtype=torch.float32, device=device)

    epochs = int(cfg.get('epochs', 5))
    lr = float(cfg.get('lr', 2e-4))
    batch_size = int(cfg.get('batch_size', 512))

    ds = TensorDataset(X, y_dir, y_mag)
    dl = DataLoader(ds, batch_size=batch_size, shuffle=True, drop_last=len(ds) > batch_size)

    opt = torch.optim.AdamW(model.parameters(), lr=lr, weight_decay=1e-4)
    ce = torch.nn.CrossEntropyLoss(label_smoothing=0.05)

    model.train()
    correct = total = 0
    for ep in range(epochs):
        correct = total = 0
        for xb, yb_d, yb_m in dl:
            opt.zero_grad()
            d_logits, m_pred = model(xb, return_mag=True)
            loss = ce(d_logits, yb_d) + 0.1 * F.mse_loss(m_pred, yb_m)
            loss.backward()
            torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)
            opt.step()
            pred = d_logits.argmax(dim=1)
            correct += (pred == yb_d).sum().item()
            total += yb_d.size(0)
        acc = correct / max(total, 1)
        print(f'epoch {ep + 1}/{epochs}  train_acc={acc:.3f}', file=sys.stderr)

    return correct / max(total, 1), epochs


def _train_single_task(cfg: dict, model, device) -> tuple[float, int]:
    """Single-task (dir_logits only) training loop shared by lstm/tcn/tft/
    mamba/cnn -- mirrors the FocalLoss + class-weighted + recency-weighted-
    sampler + AdamW + CosineAnnealingWarmRestarts recipe every one of
    continuous_trainer.py's per-architecture _train_*_cycle methods uses."""
    import torch
    from torch.utils.data import DataLoader, TensorDataset, WeightedRandomSampler

    n, seq_len, input_size = cfg['x_shape']
    x_bytes = bytearray(base64.b64decode(cfg['x_b64']))
    y_dir_bytes = bytearray(base64.b64decode(cfg['y_dir_b64']))
    X = torch.frombuffer(x_bytes, dtype=torch.float32).clone().reshape(n, seq_len, input_size).to(device)
    y_dir = torch.frombuffer(y_dir_bytes, dtype=torch.int64).clone().reshape(n).to(device)

    epochs = int(cfg.get('epochs', 40))
    lr = float(cfg.get('lr', 1e-3))
    t0 = int(cfg.get('t0', 10))
    t_mult = int(cfg.get('t_mult', 2))
    batch_size = int(cfg.get('batch_size', 256))

    n_sell = int((y_dir == 0).sum()); n_buy = int((y_dir == 1).sum()); tot = n_sell + n_buy
    class_weights = torch.tensor(
        [tot / (2.0 * n_sell + 1e-9), tot / (2.0 * n_buy + 1e-9)], dtype=torch.float32, device=device,
    )

    ds = TensorDataset(X, y_dir)
    # Recency-weighted sampling: same 3x-over-the-batch exponential ramp
    # every local _train_*_cycle method uses (most-recent rows sampled more).
    rw = torch.exp(torch.log(torch.tensor(3.0)) * torch.arange(n, dtype=torch.float32) / max(n - 1, 1))
    sampler = WeightedRandomSampler(rw, num_samples=n, replacement=True)
    dl = DataLoader(ds, batch_size=batch_size, sampler=sampler, drop_last=len(ds) > batch_size)

    opt = torch.optim.AdamW(model.parameters(), lr=lr, weight_decay=1e-5)
    sch = torch.optim.lr_scheduler.CosineAnnealingWarmRestarts(opt, T_0=t0, T_mult=t_mult, eta_min=1e-5)
    crit = _FocalLoss(weight=class_weights, gamma=2.0, label_smoothing=0.05)

    model.train()
    correct = total = 0
    for ep in range(1, epochs + 1):
        correct = total = 0
        for xb, yb in dl:
            opt.zero_grad()
            logits = model(xb)
            loss = crit(logits, yb)
            loss.backward()
            torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)
            opt.step()
            pred = logits.argmax(dim=1)
            correct += (pred == yb).sum().item()
            total += yb.size(0)
        sch.step(ep)
        acc = correct / max(total, 1)
        print(f'epoch {ep}/{epochs}  train_acc={acc:.3f}', file=sys.stderr)

    return correct / max(total, 1), epochs


def _train_mlp(cfg: dict, model, device) -> tuple[float, int]:
    """Flat (N, features), single-task, with an OPTIONAL per-symbol
    embedding (sym_idx) -- mirrors continuous_trainer.py::ContinuousTrainer
    ._fit()'s FINAL training phase specifically (plain weighted
    CrossEntropyLoss, not FocalLoss -- unlike the 5 sequence architectures
    above, _fit()'s own final phase doesn't use focal loss either). Does
    NOT reproduce _fit()'s walk-forward CV or ensemble-distillation soft
    labels -- see _train_mlp_remote_cycle's docstring on the EMMA side for
    why that's a deliberate simplification, not an oversight."""
    import torch
    from torch.utils.data import DataLoader, TensorDataset, WeightedRandomSampler

    n, input_size = cfg['x_shape']
    x_bytes = bytearray(base64.b64decode(cfg['x_b64']))
    y_dir_bytes = bytearray(base64.b64decode(cfg['y_dir_b64']))
    X = torch.frombuffer(x_bytes, dtype=torch.float32).clone().reshape(n, input_size).to(device)
    y_dir = torch.frombuffer(y_dir_bytes, dtype=torch.int64).clone().reshape(n).to(device)

    use_sym = bool(cfg.get('sym_idx_b64'))
    if use_sym:
        sym_bytes = bytearray(base64.b64decode(cfg['sym_idx_b64']))
        sym_idx = torch.frombuffer(sym_bytes, dtype=torch.int64).clone().reshape(n).to(device)

    epochs = int(cfg.get('epochs', 50))
    lr = float(cfg.get('lr', 1e-3))
    t0 = int(cfg.get('t0', 10))
    t_mult = int(cfg.get('t_mult', 2))
    batch_size = int(cfg.get('batch_size', 512))

    n_sell = int((y_dir == 0).sum()); n_buy = int((y_dir == 1).sum()); tot = n_sell + n_buy
    class_weights = torch.tensor(
        [tot / (2.0 * n_sell + 1e-9), tot / (2.0 * n_buy + 1e-9)], dtype=torch.float32, device=device,
    )

    ds = TensorDataset(X, sym_idx, y_dir) if use_sym else TensorDataset(X, y_dir)
    rw = torch.exp(torch.log(torch.tensor(3.0)) * torch.arange(n, dtype=torch.float32) / max(n - 1, 1))
    sampler = WeightedRandomSampler(rw, num_samples=n, replacement=True)
    dl = DataLoader(ds, batch_size=batch_size, sampler=sampler, drop_last=len(ds) > batch_size)

    opt = torch.optim.AdamW(model.parameters(), lr=lr, weight_decay=1e-4)
    sch = torch.optim.lr_scheduler.CosineAnnealingWarmRestarts(opt, T_0=t0, T_mult=t_mult, eta_min=1e-5)
    crit = torch.nn.CrossEntropyLoss(weight=class_weights, label_smoothing=0.05)

    model.train()
    correct = total = 0
    for ep in range(1, epochs + 1):
        correct = total = 0
        for batch in dl:
            opt.zero_grad()
            if use_sym:
                xb, sb, yb = batch
                logits = model(xb, sym_idx=sb)
            else:
                xb, yb = batch
                logits = model(xb)
            loss = crit(logits, yb)
            loss.backward()
            torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)
            opt.step()
            pred = logits.argmax(dim=1)
            correct += (pred == yb).sum().item()
            total += yb.size(0)
        sch.step(ep)
        acc = correct / max(total, 1)
        print(f'epoch {ep}/{epochs}  train_acc={acc:.3f}', file=sys.stderr)

    return correct / max(total, 1), epochs


def main() -> int:
    # 2026-08-21: found live -- a real external provider (the same one
    # already fixed for svitlo_tensor_worker.py) has torch installed
    # without numpy, which `pip install torch` does not guarantee. Here it
    # was fatal, not just a warning: `import numpy` at module scope raised
    # ImportError, the whole process exited within milliseconds of spawn,
    # and the parent's stdin.write_all() (still trying to send the training
    # envelope) saw the pipe already closed on the other end -- "Broken
    # pipe (os error 32)", giving no hint that numpy was the actual cause.
    # torch.frombuffer covers every use numpy had here -- no reason to
    # carry the extra dependency for a provider that only ever needs torch.
    import torch

    cfg = json.loads(sys.stdin.read())
    arch = cfg.get('model_arch')
    if arch not in ('ft_transformer', 'mlp', 'lstm', 'tcn', 'tft', 'mamba', 'cnn'):
        print(f"unsupported model_arch: {arch!r}", file=sys.stderr)
        return 1

    model = build_model(cfg)
    if cfg.get('warm_start_b64'):
        try:
            state = torch.load(io.BytesIO(base64.b64decode(cfg['warm_start_b64'])),
                                map_location='cpu', weights_only=True)
            model.load_state_dict(state)
            print('warm-started from provided weights', file=sys.stderr)
        except Exception as exc:
            print(f'warm_start load failed, training from scratch: {exc}', file=sys.stderr)

    # 2026-08-23: found live -- this file never once called .cuda()/.to()
    # anywhere, for any architecture. Every "remote training" job actually
    # ran on CPU regardless of the provider's real GPU, silently -- no
    # error, no crash, just training that's 10-50x+ slower than it should
    # be. Invisible on the inference side (svitlo_tensor_worker.py has the
    # same gap, but a single forward pass is cheap enough on CPU that
    # nobody noticed), but for actual training -- 80 epochs over 30K
    # samples -- this plausibly turned a job that should take minutes on
    # a real GPU into one that takes hours on CPU, well past EMMA's own
    # 25min client patience (REMOTE_POLL_GIVEUP_SEC) every single time.
    # Matches everything observed live today: dispatch succeeds (node
    # goes busy), the job neither completes nor fails within any
    # reasonable window, and a since-expired orphaned job was still
    # showing busy=true hours after submission -- consistent with a CPU-
    # bound job still genuinely working, just far slower than assumed.
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    print(f'training device: {device}', file=sys.stderr)
    model = model.to(device)

    n = cfg['x_shape'][0]
    if arch == 'ft_transformer':
        train_acc, epochs_run = _train_ft_transformer(cfg, model, device)
    elif arch == 'mlp':
        train_acc, epochs_run = _train_mlp(cfg, model, device)
    else:
        train_acc, epochs_run = _train_single_task(cfg, model, device)

    model = model.to('cpu')
    buf = io.BytesIO()
    torch.save(model.state_dict(), buf)
    result = {
        'state_dict_b64': base64.b64encode(buf.getvalue()).decode('ascii'),
        'train_acc': train_acc,
        'n_samples': int(n),
        'epochs_run': epochs_run,
    }
    print(json.dumps(result))
    return 0


if __name__ == '__main__':
    sys.exit(main())
