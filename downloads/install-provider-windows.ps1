# svitlo-provider — Windows automatic installer
#
# Usage (PowerShell, run as your normal user -- NOT as Administrator):
#   irm https://www.svitlochain.com/downloads/install-provider-windows.ps1 | iex
#
# What this does:
#   1. Downloads svitlo-provider + svitlo-wallet (both x86_64, Windows
#      10/11 only) and the inference worker script into
#      $env:USERPROFILE\.svitlo\bin
#   2. Creates a provider wallet on first run (svitlo-wallet keygen +
#      export-provider-key -- prompts for a password interactively)
#   3. Adds a Windows Defender exclusion for the install directory --
#      see the note below for why this is unavoidable, not optional
#   4. Registers a Scheduled Task so the provider starts on login and
#      restarts automatically if it crashes (Windows equivalent of the
#      macOS installer's LaunchAgent)
#
# 2026-09-03 (real incident, live, Alik's RTX 5090 -- see
# WINDOWS_PROVIDER_JOURNEY.md for the full multi-hour diagnosis):
#   - A fresh svitlo-provider.exe download failed immediately with
#     "os error 10013" (socket access forbidden) until a Windows
#     Defender exclusion was added for the install path -- step 3 below
#     does this automatically instead of requiring a manual, easy-to-
#     get-wrong `Add-MpPreference` call in an elevated shell.
#   - Past that point, EVERY request to rpc.svitlochain.com timed out
#     regardless of TLS backend (rustls, then native-tls) -- root cause
#     was neither Rust TLS binding available to minreq completing this
#     server's TLS renegotiation, something Windows' native schannel (as
#     curl.exe drives it directly) handles transparently. Confirmed by
#     exhaustive process of elimination: NOT clock skew, NOT the local
#     network/ISP (identical failure on two unrelated networks), NOT
#     local antivirus (identical failure with Norton paused). The fix
#     landed in svitlo-provider itself (shells out to curl.exe on
#     Windows now, see svitlo-chain@350ce85) -- this installer's ONLY
#     Windows-specific responsibility on top of that is the Defender
#     exclusion, so a first-time operator never has to independently
#     rediscover any of this.
#
# Deliberately NOT downloaded through a browser for the same reason as
# the macOS installer: no code-signing certificate is configured for
# these binaries yet, so SmartScreen would flag a browser download.
# Running this script via `irm | iex` sidesteps that (no Mark-of-the-Web
# zone-identifier stream gets attached the way a browser save does).

$ErrorActionPreference = "Stop"

function Info($msg) { Write-Host "  $msg" -ForegroundColor Cyan }
function Ok($msg)   { Write-Host "  [OK] $msg" -ForegroundColor Green }
function Warn($msg) { Write-Host "  [!]  $msg" -ForegroundColor Yellow }
function Die($msg)  { Write-Host "  [X]  $msg" -ForegroundColor Red; exit 1 }

if ($PSVersionTable.PSVersion.Major -lt 5) {
    Die "PowerShell 5.1+ required. You're on $($PSVersionTable.PSVersion)."
}
if (-not (Get-Command curl.exe -ErrorAction SilentlyContinue)) {
    Die "curl.exe not found -- this installer (and svitlo-provider itself) requires it. It ships with Windows 10 1803+/11 by default; if it's genuinely missing, this Windows install predates that update."
}

$DownloadBase = "https://www.svitlochain.com/downloads"
$NodeUrl      = if ($env:SVITLO_NODE_URL) { $env:SVITLO_NODE_URL } else { "https://rpc.svitlochain.com" }
# 2026-09-04 (security review): $NodeUrl is environment-controlled and later
# gets written into a generated .cmd file that a Scheduled Task executes
# unattended -- an unvalidated value there is a command-injection vector
# (e.g. SVITLO_NODE_URL = 'https://x & del /f /q C:\Users' would run the
# second command too, since batch splits on unescaped `&`). Restrict to
# exactly what a real node URL looks like -- scheme + host, nothing a
# batch-file interpreter treats specially -- before it's used for anything.
if ($NodeUrl -notmatch '^https://[a-zA-Z0-9.-]+(?::[0-9]{1,5})?/?$') {
    Die "SVITLO_NODE_URL doesn't look like a plain https://host[:port] URL: $NodeUrl"
}
$InstallDir   = "$env:USERPROFILE\.svitlo"
$BinDir       = "$InstallDir\bin"
$LogDir       = "$InstallDir\logs"
$TaskName     = "SvitloProvider"

New-Item -ItemType Directory -Force -Path $BinDir, $LogDir | Out-Null

# 2026-09-04 (security review): no binary this script fetches is
# checksummed or code-signed yet -- same trust model the existing macOS
# installer already relies on (a straight `curl.exe -fsSL ... | -o path`
# with no verification afterward), and true supply-chain protection would
# need either a signing certificate (not configured for these binaries)
# or a hash channel independent of the server the binary itself comes
# from (a hash published alongside it on the same host only catches
# transit corruption, not a compromised origin). What THIS function adds
# is real, if partial: every .exe download is checked for the "MZ" PE
# header and a plausible minimum size before anything is allowed to run
# it -- this reliably catches the actually-common failure mode (a
# truncated download, or an HTML error/redirect page saved in place of
# the real binary because of a network hiccup or a stale/broken URL),
# which a raw curl exit-code check alone does not.
function Get-VerifiedExe($url, $outPath, $minBytes = 100000) {
    curl.exe -fsSL $url -o $outPath
    if (-not (Test-Path $outPath)) {
        Die "Download produced no file: $url"
    }
    $bytes = [System.IO.File]::ReadAllBytes($outPath)
    if ($bytes.Length -lt $minBytes) {
        Remove-Item $outPath -ErrorAction SilentlyContinue
        Die "Downloaded file is implausibly small ($($bytes.Length) bytes) -- likely a truncated download or an error page, not the real binary: $url"
    }
    if ($bytes[0] -ne 0x4D -or $bytes[1] -ne 0x5A) {
        Remove-Item $outPath -ErrorAction SilentlyContinue
        Die "Downloaded file is not a valid Windows executable (missing MZ header) -- got something other than the real binary: $url"
    }
}

# 2026-09-03: the socket-permission failure (os error 10013) that blocked
# every first run on Alik's machine went away entirely once Windows
# Defender had an exclusion for this exact path -- doing it here, before
# svitlo-provider.exe is ever invoked, means a fresh install never hits
# that error at all instead of needing to be independently diagnosed
# again. Best-effort: Add-MpPreference needs an elevated shell, and this
# installer is deliberately meant to run as a normal user (a Scheduled
# Task registered under the current user is simpler and safer than one
# requiring elevation just to install). If it's not elevated, warn and
# move on -- everything else below still works; only the Defender gap
# stays open until the operator adds the exclusion themselves (message
# below tells them exactly how).
Info "Adding Windows Defender exclusion for $InstallDir..."
try {
    Add-MpPreference -ExclusionPath $InstallDir -ErrorAction Stop
    Ok "Defender exclusion added"
} catch {
    Warn "Could not add a Defender exclusion automatically (needs an elevated PowerShell)."
    Warn "If svitlo-provider fails to start with 'os error 10013', run this in an admin PowerShell:"
    Warn "  Add-MpPreference -ExclusionPath `"$InstallDir`""
}

Info "Downloading svitlo-provider..."
Get-VerifiedExe "$DownloadBase/svitlo-provider-windows-x86_64.exe" "$BinDir\svitlo-provider.exe"
Ok "svitlo-provider installed"

Info "Downloading inference worker script..."
curl.exe -fsSL "$DownloadBase/svitlo_tensor_worker.py" -o "$BinDir\svitlo_tensor_worker.py"
Ok "Inference worker installed (svitlo_tensor_worker.py)"

# 2026-09-01: svitlo_train_worker.py access is restricted to approved
# testers (an NDA-gated download, not a public one) -- see
# svitlo_train_worker_ip_exposure_0901 for why. Don't silently skip it
# without saying so, and don't attempt to script around the gate --
# accepting the confidentiality notice is a deliberate human step, not
# mechanical friction to route around.
Warn "svitlo_train_worker.py (remote TRAINING support) is tester-access only."
Info "Inference jobs work fine without it. If you have training access,"
Info "log in at https://api.svitlochain.com/gated/login and download it to:"
Info "  $BinDir\svitlo_train_worker.py"

# Python + PyTorch aren't bundled into svitlo-provider.exe -- fetched
# here, same as the macOS installer's `python3 -m pip install torch`
# step, rather than shipping a multi-GB installer.
function Refresh-Path {
    # A silent installer updates the registry's PATH, but this already-
    # running process's own $env:Path snapshot never sees it -- the
    # manual instructions on the setup page say "open a new PowerShell
    # window" for exactly this reason. Re-read both machine and user
    # PATH from the registry so the rest of THIS script can find
    # python.exe/pip without asking the operator to re-run it.
    $machine = [System.Environment]::GetEnvironmentVariable("Path", "Machine")
    $user    = [System.Environment]::GetEnvironmentVariable("Path", "User")
    $env:Path = "$machine;$user"
}

$python = Get-Command python -ErrorAction SilentlyContinue
if (-not $python -or (& python -c "print(1)" 2>$null) -ne "1") {
    # The pre-installed "App Execution Alias" stub prints a Microsoft
    # Store redirect instead of running Python even when `python` is
    # found on PATH -- the `-c "print(1)"` probe above catches that case
    # too, not just "missing entirely".
    Info "Installing Python 3.12..."
    $pyInstaller = "$env:TEMP\python-installer.exe"
    Get-VerifiedExe "https://www.python.org/ftp/python/3.12.7/python-3.12.7-amd64.exe" $pyInstaller
    Start-Process -FilePath $pyInstaller -ArgumentList "/quiet InstallAllUsers=0 PrependPath=1" -Wait
    Remove-Item $pyInstaller -ErrorAction SilentlyContinue
    Refresh-Path
    Get-AppxPackage *PythonSoftwareFoundation* -ErrorAction SilentlyContinue | Remove-AppxPackage -ErrorAction SilentlyContinue
    Ok "Python installed"
} else {
    Ok "Python found: $(python --version)"
}

Info "Installing/upgrading torch with CUDA 12.8 support (this is the only heavy"
Info "dependency, fetched at install time rather than bundled -- can take a"
Info "few minutes)..."
python -m pip install --quiet --upgrade torch --index-url https://download.pytorch.org/whl/cu128
Ok "torch ready"

$ProviderWallet = "$BinDir\provider-wallet.json"
if (-not (Test-Path $ProviderWallet)) {
    Info "No provider wallet found -- creating one now."
    Get-VerifiedExe "$DownloadBase/svitlo-wallet-windows-x86_64.exe" "$BinDir\svitlo-wallet.exe"
    Warn "You'll be prompted for a NEW password (encrypts wallet.json) and"
    Warn "shown a 24-word recovery phrase ONCE -- write it down."
    & "$BinDir\svitlo-wallet.exe" keygen --output "$InstallDir\wallet.json"
    Info "Exporting provider signing key (same password, once more)..."
    & "$BinDir\svitlo-wallet.exe" export-provider-key --wallet "$InstallDir\wallet.json" --output $ProviderWallet
    Ok "Provider wallet ready: $ProviderWallet"
} else {
    Ok "Existing provider wallet found: $ProviderWallet"
}

Info "Registering Scheduled Task (auto-start on login, auto-restart on crash)..."
$existing = Get-ScheduledTask -TaskName $TaskName -ErrorAction SilentlyContinue
if ($existing) {
    Unregister-ScheduledTask -TaskName $TaskName -Confirm:$false
}

# StandardOutput/Error redirection isn't a native Register-ScheduledTaskAction
# feature (the macOS installer gets it for free from launchd's
# StandardOutPath/ErrorPath) -- rather than fight cmd.exe's famously
# fragile nested-quote parsing for a `/c "... >> "log" 2>&1"` one-liner,
# write the real invocation into a small, plain, easy-to-read .cmd file
# and point the Scheduled Task at that. No quote-escaping puzzle, and
# `type run-provider.cmd` is an easy way for an operator to see (or
# hand-edit) exactly what actually runs.
$launcherPath = "$BinDir\run-provider.cmd"
@"
@echo off
"$BinDir\svitlo-provider.exe" start --node "$NodeUrl" --wallet "$ProviderWallet" >> "$LogDir\provider.log" 2>&1
"@ | Out-File -FilePath $launcherPath -Encoding ascii
$action = New-ScheduledTaskAction -Execute $launcherPath -WorkingDirectory $BinDir
$trigger = New-ScheduledTaskTrigger -AtLogOn
$settings = New-ScheduledTaskSettingsSet `
    -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries `
    -RestartCount 999 -RestartInterval (New-TimeSpan -Seconds 30) `
    -ExecutionTimeLimit (New-TimeSpan -Seconds 0)  # no time limit -- this runs indefinitely

Register-ScheduledTask -TaskName $TaskName -Action $action -Trigger $trigger -Settings $settings `
    -Description "Svitlo compute provider daemon (GPU marketplace)" | Out-Null
Start-ScheduledTask -TaskName $TaskName
Ok "Scheduled Task '$TaskName' registered and started"

Write-Host ""
Ok "svitlo-provider is installed and running."
Info "Logs:      Get-Content -Wait `"$LogDir\provider.log`""
Info "Stop:      Stop-ScheduledTask -TaskName $TaskName"
Info "Start:     Start-ScheduledTask -TaskName $TaskName"
Info "Uninstall: Unregister-ScheduledTask -TaskName $TaskName -Confirm:`$false"
Write-Host ""
