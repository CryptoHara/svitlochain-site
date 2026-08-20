#!/usr/bin/env python3
"""
svitlo-provider tensor-inference worker.

Invoked by svitlo_provider.rs (run_tensor_inference) as a subprocess — the
same "shell out to an external tool" pattern already used there for
llama.cpp/mlx_lm, rather than pulling a Rust ML runtime (ort/tch) into the
provider binary.

Model requirement: TorchScript (torch.jit.script/trace), NOT a bare
state_dict. A state_dict alone doesn't carry the model's class definition,
so a generic provider with no knowledge of EMMA's (or anyone else's) Python
model classes couldn't reconstruct the architecture before loading weights.
TorchScript is self-contained — this script never needs to import any
model-specific code.

Usage (called by svitlo_provider.rs, not meant to be run by hand):
    echo -n <base64 float32 bytes> | python3 svitlo_tensor_worker.py \\
        --model <path.pt> --shape "1,127"

Input tensor data is read from stdin as base64 rather than an argv flag --
2026-08-19: found live via a real external provider, a plain 256x256
float32 sample is already ~350KB base64, and combined with a normal dev
machine's PATH/env that reliably blew the kernel's ARG_MAX when it was
still passed as a --data-b64 argument (OSError: Argument list too long).
stdin has no such limit -- same reasoning svitlo_train_worker.py already
uses for its (typically larger) training envelope.

Prints exactly one line to stdout: base64-encoded float32 output bytes.
Everything else (errors, progress) goes to stderr so stdout stays clean
for the Rust caller to parse.
"""
import argparse
import base64
import sys


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--model", required=True, help="Path to a TorchScript .pt file")
    ap.add_argument("--shape", required=True, help="Comma-separated input shape, e.g. '1,127'")
    args = ap.parse_args()
    data_b64 = sys.stdin.read().strip()

    try:
        import torch
    except ImportError:
        print("PyTorch not installed on this provider — pip install torch", file=sys.stderr)
        return 1

    try:
        shape = tuple(int(d) for d in args.shape.split(","))
    except ValueError:
        print(f"malformed --shape {args.shape!r}", file=sys.stderr)
        return 1

    raw = base64.b64decode(data_b64)
    x = torch.frombuffer(bytearray(raw), dtype=torch.float32).clone().reshape(shape)

    try:
        model = torch.jit.load(args.model, map_location="cpu")
    except Exception as exc:
        print(f"failed to load TorchScript model {args.model}: {exc}", file=sys.stderr)
        return 1

    model.eval()
    with torch.no_grad():
        out = model(x)
        # Multi-output models (e.g. dir_logits, mag_pred) — take the first
        # tensor; a real deployment would want the job to specify which
        # output it wants, out of scope for this first pass.
        if isinstance(out, (tuple, list)):
            out = out[0]
        out = out.detach().to(torch.float32).contiguous()

    out_bytes = out.numpy().tobytes()
    print(base64.b64encode(out_bytes).decode("ascii"))
    return 0


if __name__ == "__main__":
    sys.exit(main())
