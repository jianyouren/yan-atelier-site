#!/bin/sh
# preflight.sh · 2026-06-28 · run before a Claude / cc session in this repo.
# Two guards added after the 06-25 rollback incident (manual file paste replaced HEAD).
#
# Guard 1 — stale working-copy: index.html dirty for >24h without commit.
# Guard 2 — SHA256 drift: working-copy hash differs from last-known-good (post-commit
#           hook records the baseline at .git/index_html.sha).
#
# Exits 0 if clean. Exits 1 with a banner if either guard fires.
# Wire into your `cc` alias as:  preflight.sh && claude --continue --dangerously-skip-permissions

set -e
REPO="$(git rev-parse --show-toplevel 2>/dev/null || echo "")"
if [ -z "$REPO" ]; then
  echo "preflight: not in a git repo, skipping checks" >&2
  exit 0
fi
INDEX="$REPO/index.html"
SHA_FILE="$REPO/.git/index_html.sha"
WARN=0

# Guard 1 — stale working-copy
if [ -f "$INDEX" ]; then
  if [ -n "$(git status --porcelain "$INDEX" 2>/dev/null)" ]; then
    MTIME=$(stat -c %Y "$INDEX" 2>/dev/null || stat -f %m "$INDEX" 2>/dev/null || echo 0)
    NOW=$(date +%s)
    AGE=$(( NOW - MTIME ))
    if [ "$AGE" -gt 86400 ]; then
      echo "" >&2
      echo "  ⚠ preflight · index.html is dirty AND >24h old" >&2
      echo "    last modified: $(date -d @$MTIME 2>/dev/null || date -r $MTIME 2>/dev/null)" >&2
      echo "    commit-or-archive before piling more edits, or pass --allow-dirty" >&2
      WARN=1
    fi
  fi

  # Guard 2 — SHA drift vs last-known-good
  if [ -f "$SHA_FILE" ]; then
    EXPECTED=$(cat "$SHA_FILE" 2>/dev/null | tr -d '\n\r ')
    if command -v sha256sum >/dev/null 2>&1; then
      ACTUAL=$(sha256sum "$INDEX" | awk '{print $1}')
    elif command -v shasum >/dev/null 2>&1; then
      ACTUAL=$(shasum -a 256 "$INDEX" | awk '{print $1}')
    else
      ACTUAL=""
    fi
    if [ -n "$EXPECTED" ] && [ -n "$ACTUAL" ] && [ "$EXPECTED" != "$ACTUAL" ]; then
      # Drift is expected if there are uncommitted changes from this same session;
      # only warn when working tree is CLEAN per git but hash diverges (rollback signature).
      if [ -z "$(git status --porcelain "$INDEX" 2>/dev/null)" ]; then
        echo "" >&2
        echo "  ⚠ preflight · index.html SHA256 drift detected" >&2
        echo "    expected (last commit): $EXPECTED" >&2
        echo "    actual  (working copy): $ACTUAL" >&2
        echo "    But working tree shows clean — file may have been replaced by external paste." >&2
        WARN=1
      fi
    fi
  fi
fi

if [ "$WARN" -eq 1 ] && [ "$1" != "--allow-dirty" ]; then
  echo "" >&2
  echo "  Re-run with --allow-dirty to bypass, or fix first." >&2
  exit 1
fi
exit 0
