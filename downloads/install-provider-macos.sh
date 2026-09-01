#!/usr/bin/env bash
# svitlo-provider — macOS automatic installer
#
# Usage:
#   curl -fsSL https://www.svitlochain.com/downloads/install-provider-macos.sh | bash
#
# What this does:
#   1. Downloads svitlo-provider + svitlo-wallet (universal binaries --
#      one download works on both Apple Silicon and Intel) and the two
#      Python worker scripts they shell out to for training/inference
#      jobs, into ~/.svitlo/bin
#   2. Creates a provider wallet on first run (svitlo-wallet keygen +
#      export-provider-key -- both prompt for a password on /dev/tty
#      directly, which works fine even piped through `curl | bash`)
#   3. Ensures python3 + torch are present (installed via Homebrew /
#      pip if missing -- NOT bundled; this is the whole reason this is
#      a script and not a multi-GB installer)
#   4. Registers a LaunchAgent so the provider starts on login and
#      restarts if it crashes
#
# Deliberately NOT downloaded through a browser: this repo has no Apple
# Developer ID certificate configured, so the binaries are ad-hoc signed
# but not notarized. A browser download sets the com.apple.quarantine
# extended attribute and Gatekeeper would refuse to run them. A `curl`
# fetch does not set that attribute, so running this script sidesteps
# the problem entirely without needing a paid Developer ID enrollment.
set -euo pipefail

DOWNLOAD_BASE="https://www.svitlochain.com/downloads"
NODE_URL="${SVITLO_NODE_URL:-https://rpc.svitlochain.com}"
INSTALL_DIR="$HOME/.svitlo"
BIN_DIR="$INSTALL_DIR/bin"
LOG_DIR="$INSTALL_DIR/logs"
PLIST_PATH="$HOME/Library/LaunchAgents/com.svitlochain.provider.plist"

info() { printf '  \033[36m%s\033[0m\n' "$1"; }
ok()   { printf '  \033[32m✔\033[0m %s\n' "$1"; }
warn() { printf '  \033[33m⚠\033[0m %s\n' "$1"; }
die()  { printf '  \033[31m✖\033[0m %s\n' "$1" >&2; exit 1; }

if [[ "$(uname -s)" != "Darwin" ]]; then
  die "This installer is for macOS only."
fi

mkdir -p "$BIN_DIR" "$LOG_DIR"

info "Downloading svitlo-provider..."
curl -fsSL "$DOWNLOAD_BASE/svitlo-provider-macos-universal" -o "$BIN_DIR/svitlo-provider"
chmod +x "$BIN_DIR/svitlo-provider"
ok "svitlo-provider installed"

info "Downloading worker scripts..."
curl -fsSL "$DOWNLOAD_BASE/svitlo_tensor_worker.py" -o "$BIN_DIR/svitlo_tensor_worker.py"
ok "Inference worker installed (svitlo_tensor_worker.py)"

# 2026-09-01: svitlo_train_worker.py access is now restricted to approved
# testers (was a public download here) -- don't silently fetch the
# access-restricted placeholder text as if it were the real script, that
# would just fail confusingly later when svitlo-provider tries to run it
# as Python. Skip it and tell the operator how to actually get it.
warn "svitlo_train_worker.py (remote TRAINING support) is tester-access only now."
info "Inference jobs work fine without it. Training access is invite-only --"
info "if you have an account, download it at https://api.svitlochain.com/gated/login"

PROVIDER_WALLET="$BIN_DIR/provider-wallet.json"
if [[ ! -f "$PROVIDER_WALLET" ]]; then
  info "No provider wallet found -- creating one now."
  curl -fsSL "$DOWNLOAD_BASE/svitlo-wallet-macos-universal" -o "$BIN_DIR/svitlo-wallet"
  chmod +x "$BIN_DIR/svitlo-wallet"
  warn "You'll be prompted for a NEW password (encrypts wallet.json) and"
  warn "shown a 24-word recovery phrase ONCE -- write it down."
  "$BIN_DIR/svitlo-wallet" keygen --output "$INSTALL_DIR/wallet.json"
  info "Exporting provider signing key (same password, once more)..."
  "$BIN_DIR/svitlo-wallet" export-provider-key \
    --wallet "$INSTALL_DIR/wallet.json" --output "$PROVIDER_WALLET"
  ok "Provider wallet ready: $PROVIDER_WALLET"
else
  ok "Existing provider wallet found: $PROVIDER_WALLET"
fi

if ! command -v python3 >/dev/null 2>&1; then
  info "python3 not found."
  if command -v brew >/dev/null 2>&1; then
    info "Installing via Homebrew..."
    brew install python3
  else
    die "Install Python 3.10+ from https://python.org (or Homebrew), then re-run this script."
  fi
fi

PY_VER=$(python3 -c 'import sys; print("%d.%d" % sys.version_info[:2])')
info "python3 found: $PY_VER"

info "Installing/upgrading torch (this is the only heavy dependency, fetched"
info "at install time rather than bundled -- can take a few minutes)..."
python3 -m pip install --quiet --upgrade torch
ok "torch ready"

info "Registering LaunchAgent (auto-start on login, auto-restart on crash)..."
cat > "$PLIST_PATH" <<PLIST
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key><string>com.svitlochain.provider</string>
  <key>ProgramArguments</key>
  <array>
    <string>$BIN_DIR/svitlo-provider</string>
    <string>start</string>
    <string>--node</string>
    <string>$NODE_URL</string>
    <string>--wallet</string>
    <string>$PROVIDER_WALLET</string>
  </array>
  <key>WorkingDirectory</key><string>$BIN_DIR</string>
  <key>RunAtLoad</key><true/>
  <key>KeepAlive</key><true/>
  <key>StandardOutPath</key><string>$LOG_DIR/provider.log</string>
  <key>StandardErrorPath</key><string>$LOG_DIR/provider.log</string>
  <key>ThrottleInterval</key><integer>30</integer>
</dict>
</plist>
PLIST

launchctl unload "$PLIST_PATH" >/dev/null 2>&1 || true
launchctl load -w "$PLIST_PATH"
ok "LaunchAgent loaded: com.svitlochain.provider"

echo
ok "svitlo-provider is installed and running."
info "Logs:   tail -f $LOG_DIR/provider.log"
info "Stop:   launchctl unload $PLIST_PATH"
info "Start:  launchctl load -w $PLIST_PATH"
echo
