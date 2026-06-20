# YÀN Atelier · Claude Operating Notes

Project-level instructions Claude reads automatically before acting.

## Live URLs

- **Production (LIVE)**: `https://yan-atelier-site.pages.dev/`
  - This is the URL to give the user for any "test the site" / "mobile preview" / "send to customer" request.
  - Mobile + desktop both responsive. Works on any network (no LAN required).
  - Latest commit auto-deploys via Cloudflare Pages ~30-60s after `git push origin main`.
- **Custom domain (NOT yet wired)**: `https://yan-atelier.com/` — DNS not resolving. Do NOT give this URL to user; it returns nothing.

## Mobile testing

When user asks "给我手机测试链接" or "mobile link" or similar:
- **DO**: reply with `https://yan-atelier-site.pages.dev/`
- **DO NOT**: start a local dev server (no dev server needed; site is single-file static HTML).
- **DO NOT**: invent LAN IP addresses like `http://192.168.x.x:3000` — these almost never work and confuse the user.

## Deploy flow

This IS a git repo (despite environment occasionally reporting otherwise). Repo on GitHub → Cloudflare Pages auto-builds on push to `main`.

To ship a change:
1. Edit files in `D:\YAN_Atelier_Site\`
2. `git add <file>` (be specific — avoid `git add -A`; there are untracked WeChat-export images that should NOT be committed)
3. `git commit -m "..."` (include `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`)
4. `git push origin main`
5. Wait 30-60s, Cloudflare deploys
6. Hard-refresh on `https://yan-atelier-site.pages.dev/` to verify (browser cache can mask new deploys)

## Operating rules (load-bearing — see BRAND.md for full)

- **R1**: Section titles name the JOB, never enumerate contents/inventory/taxonomy
- **R2 (ZONE)**: Voice by zone — Cold (Home above-fold) strict commerce, Warm (Home below-fold) atelier-register, Deep (/craft, /about, /consult) atelier-encouraged
- **R3**: PDP trust info inline near CTA, never as top promo bar

Read `BRAND.md` for full rule details + worked examples + banned phrasings before any voice/title/PDP changes.

## Substance protection (do NOT touch)

- plique-à-jour technique name + Renaissance lineage (in Plique section)
- Hu Yan name + Founder status (biographical references in About / Maker)
- Yunnan workshop / 滇韵珐琅手工坊 / Yunnan Studio
- 800°C high-fire fact
- Craft page Schema.org Article markup + 10 academic citations
- Hero copy "Wear it. People will ask where you found it. / 戴出去, 别人会问你哪儿淘的。"
- CN view full readability (cascade flips must preserve CN view)

## What NOT to do

- Do not start local dev servers for "mobile testing" — use prod URL
- Do not invent LAN URLs
- Do not push to remote without explicit user confirmation when working via WeChat bridge (user can't quickly intervene from mobile)
- Do not commit WeChat export files (`images/_cgi-bin_*`, `images/00 (*).png`, `images/output*.png`, Chinese-filename reference images, `video/`, `docs/`)
- Do not give user the custom domain `yan-atelier.com` — not live

## WeChat bridge context

If this Claude session is reached via WeChat ClawBot (user typing from mobile):
- Be more conservative with destructive ops (no git push without "yes do it")
- Show diffs / changes summary BEFORE applying
- Replies should be tight (mobile screen reads shorter)
- Long-running agents are fine (user reads at next WeChat check)
- Never start local servers (user can't see localhost from phone unless same WiFi + firewall open + correct port)
