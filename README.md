# VIBE — installers

Public download page for **VIBE (Visual Icon Based Executer)**, a VS Code extension.

This repository holds **release builds only**: the source code lives in a private
repository, so installing from here needs **no GitHub account, no invite and no key**.

## Install

### Option 1 — no terminal (works everywhere)

1. Open the [latest release](https://github.com/MatiasZL/vibe-dist/releases/latest).
2. Under **Assets**, download `vibe.vsix`.
3. In VS Code: **Extensions** → `...` (top right of the panel) → **Install from VSIX…** → pick the file.
4. Reload VS Code (`Cmd+R` / `Ctrl+R`).

### Option 2 — with the installer script

1. Download `install-vibe.command` (macOS / Linux) or `install-vibe.ps1` (Windows) from the
   [latest release](https://github.com/MatiasZL/vibe-dist/releases/latest).
2. Run it:

```bash
# macOS / Linux
chmod +x install-vibe.command && ./install-vibe.command
```

```powershell
# Windows (PowerShell)
powershell -ExecutionPolicy Bypass -File .\install-vibe.ps1
```

The script downloads the newest build, installs it with `code --install-extension`, and — if the
`code` command is missing — copies the VSIX to your Downloads folder and tells you what to do.

> The `chmod +x` is required: GitHub does not preserve the executable bit on release assets, and
> macOS quarantines downloaded scripts. The same applies to `ExecutionPolicy` on Windows.

### Option 3 — one line, if you have `curl` and the `code` CLI

```bash
curl -fL -o /tmp/vibe.vsix https://github.com/MatiasZL/vibe-dist/releases/latest/download/vibe.vsix \
  && code --install-extension /tmp/vibe.vsix --force
```

```powershell
curl.exe -fL -o $env:TEMP\vibe.vsix https://github.com/MatiasZL/vibe-dist/releases/latest/download/vibe.vsix
code --install-extension $env:TEMP\vibe.vsix --force
```

## Update

Repeat the install step. The link below always points to the newest build — there is nothing to
uninstall first.

## Stable download link

```
https://github.com/MatiasZL/vibe-dist/releases/latest/download/vibe.vsix
```

## Requirements

- VS Code `^1.80.0`
- For the script options: the `code` command on your `PATH`
  (VS Code: `Cmd/Ctrl+Shift+P` → *Shell Command: Install 'code' command in PATH*)

## Notes

- Release notes are generated automatically from the commits.
- `Source code (zip/tar.gz)` in the Assets list contains only this README: the extension source is
  not published here.
