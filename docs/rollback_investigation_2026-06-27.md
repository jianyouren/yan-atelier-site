# Rollback Investigation — 2026-06-27

**Trigger:** working-copy `index.html` was sitting at **4,586 lines** (broken, missing 7,000 lines + `og:url` corrupted to `"\n"`), 2 days uncommitted. HEAD was correctly at `5bb3efa` (11,593 lines) and deployed. User had NOT noticed.

**Question:** what process replaced the working copy with an older/broken version on 2026-06-25 around 16:02?

---

## Conclusion (HIGH confidence)

**The user themselves manually placed an old uncommitted fork of `index.html` into the working tree**, most likely via drag-drop or clipboard paste from an external backup (USB stick, deleted scratch folder, Cloudflare Pages direct-upload zip extract, or editor "restore previous version" gesture).

NOT a Claude session. NOT the WeChat bridge. NOT a git operation. NOT a cron / hook / script.

## Smoking guns

1. **Git reflog is clean.** HEAD has been at `5bb3efa` continuously since 06-25 15:45. No checkout / reset / merge / rebase happened. The rollback was **not via git**.
2. **The broken file content matches NO git blob.** All 293 historical `index.html` blobs were enumerated. The closest is `7309de57…` (4,421 lines = commit `873e12a` from May 28). The broken file is a **unique 165-line fork** of that May-28 commit adding `"Aesop: 图主导,文字给慷慨的左侧 breathing"` CSS comments — **never committed to any branch**.
3. **Unique content exists nowhere else on disk.** The Aesop-CSS string was grepped against all of: site dir / brand parent dir / `_audit_round2/` / OneDrive / `C:\…\Temp\claude\` / `/d/yan-gen-cdn/` / WeChat-claude bridge dir. Zero hits anywhere.
4. **No process activity at the claimed mtime.** Between 06-25 15:58 (Claude session ended cleanly writing only `MEMORY.md` + `project_session_state_2026-06-25*.md`) and 06-25 18:26 (a separate Desktop CWD session opened), **no Claude logs were written anywhere**. Bridge dir `D:\wechat-claude\` last mtime = 06-23. No autosave / swap / `.bak` / `.orig` files exist.
5. **User was hand-operating Cloudflare dashboard at the exact minute.** `D:\YAN_Atelier 品牌\Untitled` has mtime **06-25 16:02:31** and content = Cloudflare Pages UI text clipboard paste. The broken-file mtime is **06-25 16:02:29** — 2 seconds earlier. Highly consistent with the user manually shuffling files while testing a Cloudflare Pages direct-upload.
6. **Working tree was untouched 06-25 → 06-27.** `find` confirms no file in `D:\YAN_Atelier_Site\` (other than images / videos already committed) was modified between 06-25 00:10 and 06-27 00:22 when the investigation backup ran.

## Hypothesis ranking

| Rank | Hypothesis | Evidence |
|---|---|---|
| HIGH | User manually copied a stale `index.html` backup from elsewhere into the project (possibly Cloudflare direct-upload zip extract, USB stick, or deleted scratch folder), thinking it was a newer version | Structurally complete file (not OOM truncation) · content older than `873e12a` fork lineage not in git · user active on Cloudflare dashboard at exact time · no Claude/bridge activity |
| LOW | Editor/IDE "Restore previous version" feature triggered manually on a saved auto-backup from May/June, restoring old draft over current file | Cannot be confirmed read-only (Windows VSS / editor history not inspectable) |
| VERY LOW | WeChat bridge command misfired | RULED OUT: `D:\wechat-claude\` mtime stuck at 06-23 23:19; bridge not run since |
| RULED OUT | Claude heap-OOM mid-edit | Broken file is complete with `</html>` |
| RULED OUT | Merge conflict | No MERGE_HEAD, no rebase ref |
| RULED OUT | Cron / git hook | No scheduled jobs, no hooks in `.husky` for site repo |

## Recommended preventive measures

### 1. SHA256 mismatch hook on session start
Add a `pre-commit` (or `post-checkout`) git hook in `D:\YAN_Atelier_Site\` that records SHA256 of `index.html` to `.git/index_html.sha`. On `claude` startup, compare working-copy hash to last-known-good; warn if mismatch and no commit between.

### 2. Stale-working-copy guard in `cc` alias
Have the daily-restart `cc` alias also run `git status --porcelain index.html` and **refuse to start** if there are uncommitted changes >24 hours old without explicit `--allow-dirty` flag. Forces explicit commit-or-archive before a new session can pile on top.

### 3. Move `_archive/` outside the working tree
Move from `D:\YAN_Atelier_Site\_archive\` → `D:\YAN_Atelier_archive\` (sibling, not nested). Any future "I'll just stash a copy here" gesture won't risk being confused with a live file by globbing tools or accidental drag-drops.

### 4. (Optional) Bridge bypassPermissions audit
Per `reference_wechat_claude_code_bridge.md`, the WeChat bridge runs `bypassPermissions: autonomous`. Bridge was NOT involved this time, but the configuration means any future incident from that surface would also bypass user confirmation. Consider downgrading to `acceptEdits` and requiring confirm-from-phone for destructive ops.

## Key file paths

- `D:\YAN_Atelier_Site\_archive\index_broken_2026-06-27.html` (4,586 lines, the artifact)
- `D:\YAN_Atelier_Site\index.html` (11,593 lines, restored from HEAD this session)
- `D:\YAN_Atelier 品牌\Untitled` (Cloudflare dashboard paste, mtime 06-25 16:02:31 — co-incident with the rollback time)
- `C:\Users\Answer\.claude\projects\D--YAN-Atelier---\ce80799e-2110-421f-a467-5b3c2ab7ba43.jsonl` (last Claude session that day, ended cleanly 15:58:23 from BRAND PARENT CWD — did not edit website files)
- `D:\YAN_Atelier_Site\.git\logs\HEAD` (reflog confirms zero HEAD movement after 15:45)

## What the user should remember

Two days of "lost work" weren't actually lost — the live deploy was always serving HEAD = correct version. The forgotten broken working copy didn't reach production. **But it was 2 days away from being committed by accident** if anyone (Claude or user) had opened a new session here and run `git add index.html && git commit`. The risk surface is real even though this incident's outcome was benign.
