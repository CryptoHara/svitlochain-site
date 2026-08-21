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

Model architecture is embedded directly (not imported from EMMA) so this
file is the only thing that needs distributing to a provider machine,
matching the model-file-only distribution story of svitlo_tensor_worker.py
-- copied from EMMA/models/ft_transformer_model.py, must be kept in sync
by hand if that file changes.

Input envelope (stdin, JSON):
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
    import torch.nn.functional as F
    from torch.utils.data import DataLoader, TensorDataset

    cfg = json.loads(sys.stdin.read())
    if cfg.get('model_arch') != 'ft_transformer':
        print(f"unsupported model_arch: {cfg.get('model_arch')!r}", file=sys.stderr)
        return 1

    n, input_size = cfg['x_shape']
    x_bytes = bytearray(base64.b64decode(cfg['x_b64']))
    y_dir_bytes = bytearray(base64.b64decode(cfg['y_dir_b64']))
    X = torch.frombuffer(x_bytes, dtype=torch.float32).clone().reshape(n, input_size)
    y_dir = torch.frombuffer(y_dir_bytes, dtype=torch.int64).clone().reshape(n)
    if cfg.get('y_mag_b64'):
        y_mag_bytes = bytearray(base64.b64decode(cfg['y_mag_b64']))
        y_mag = torch.frombuffer(y_mag_bytes, dtype=torch.float32).clone().reshape(n)
    else:
        y_mag = torch.zeros(n, dtype=torch.float32)

    model = build_model(cfg)
    if cfg.get('warm_start_b64'):
        try:
            state = torch.load(io.BytesIO(base64.b64decode(cfg['warm_start_b64'])),
                                map_location='cpu', weights_only=True)
            model.load_state_dict(state)
            print('warm-started from provided weights', file=sys.stderr)
        except Exception as exc:
            print(f'warm_start load failed, training from scratch: {exc}', file=sys.stderr)

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

    train_acc = correct / max(total, 1)

    buf = io.BytesIO()
    torch.save(model.state_dict(), buf)
    result = {
        'state_dict_b64': base64.b64encode(buf.getvalue()).decode('ascii'),
        'train_acc': train_acc,
        'n_samples': int(n),
        'epochs_run': epochs,
    }
    print(json.dumps(result))
    return 0


if __name__ == '__main__':
    sys.exit(main())
