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

## Image-gen flow (style-ref → matched product → generated image)

When user sends a reference image via WeChat and asks for "同款 / 类似风格的产品图 / generate similar":

**Pipeline**:
1. **Vision-analyze the ref image** — describe composition, lighting, mood, color palette, background, subject framing.
2. **Find best matching SKU** — read `PRODUCTS` array (line ~7159 in `index.html`). Match by form (brooch / bracelet / necklace / pendant / etc) + dominant motif. If user said which SKU, use that. If multiple candidates, pick top 1 — don't ask the user to choose (they're on mobile).
3. **Build curl call** to AutoEdit's image gen API (server runs on local PC):
   ```bash
   curl --noproxy '*' -X POST http://127.0.0.1:8765/api/generate/image \
     -F preset_id=etsy_lifestyle \
     -F modifier="<short modifier from ref-image analysis: lighting/background/mood cue>" \
     -F sku_ref=@D:/YAN_Atelier_Site/images/<product-image>.jpg \
     -F style_ref=@<saved-ref-image-path>
   ```
4. **Parse response** for `assets[0].path` (local file path on PC).
5. **Push to public CDN** so user can open from any network. yan-gen-cdn project is **NOT** connected to GitHub — git push does NOT auto-deploy. **Use wrangler:**
   ```bash
   # Copy generated image into yan-gen-cdn (use distinctive filename — never overwrite)
   cp "<assets[0].path>" "D:/yan-gen-cdn/images/<timestamp>-<sku-id>.png"
   # Deploy via wrangler (CLOUDFLARE_API_TOKEN already in env; uses --commit-dirty=true since no git tracking required)
   cd /d D:/yan-gen-cdn
   CLOUDFLARE_API_TOKEN="$CLOUDFLARE_API_TOKEN" npx --yes wrangler@latest pages deploy . --project-name=yan-gen-cdn --branch=main --commit-dirty=true
   # Wrangler outputs the preview URL + main URL takes ~30s extra to propagate.
   # Public URL pattern:
   #   https://yan-gen-cdn.pages.dev/images/<filename>
   ```
   **DO NOT** use `git add + git commit + git push` for yan-gen-cdn — that pushes to GitHub but Cloudflare doesn't watch GitHub for this project. The actual deploy mechanism is `wrangler pages deploy`.
6. **VERIFY** before sending URL to user: `curl --noproxy '*' -o /dev/null -w "%{http_code}" <full-url>` should return 200. Wait 30s after deploy + retry if first attempt 404s (propagation lag).
7. **Then send the public URL via WeChat**. Don't send the URL before verifying — user gets index.html / 404 page when file isn't live yet.

**Presets to pick from** (depends on use case):
- `white_bg_main` — Amazon-grade pure white bg main image
- `macro_detail` — close-up texture/material shot
- `flat_lay_collection` — top-down flat-lay with 3-5 similar pieces
- (More via `curl http://127.0.0.1:8765/api/generate/presets`)

**SKU → image path map** (current local images for sku_ref):
| SKU | Image path |
|---|---|
| YA-2026-0001 (Daisy Brooch) | `D:/YAN_Atelier_Site/images/p01-daisy-green.jpg` |
| YA-2026-0002 (Butterfly Brooch) | `D:/YAN_Atelier_Site/images/p02-butterfly-blue.jpg` |
| YA-2026-0003 (Ginkgo Leaf Brooch) | `D:/YAN_Atelier_Site/images/p03-ginkgo-ring.jpg` |
| YA-2026-0004 (Ginkgo Hair Pin · Pair) | `D:/YAN_Atelier_Site/images/p04-ginkgo-hairpin.jpg` |
| YA-2026-0005 (Iris Bracelet) | `D:/YAN_Atelier_Site/images/p05-bracelet-purple.jpg` |
| YA-2026-0006 (Iris Bracelet · Azure) | `D:/YAN_Atelier_Site/images/p06-bracelet-blue.jpg` |
| YA-2026-0007 (Iris Bracelet · Dusk) | `D:/YAN_Atelier_Site/images/p07-bracelet-purple2.jpg` |
| YA-2026-0008 (Fish & Lotus Pendant) | `D:/YAN_Atelier_Site/images/p08-lock.jpg` |
| YA-2026-0009 (Cloud Bangle · 福) | `D:/YAN_Atelier_Site/images/p09-bangle-fu.jpg` |
| YA-2026-0010 (Butterfly Necklace) | `D:/YAN_Atelier_Site/images/p10-butterfly-tassel.jpg` |
| YA-2026-0011 (Cloud Bangle · Plain) | `D:/YAN_Atelier_Site/images/p11-bangle-cloud.jpg` |
| YA-2026-0012 (Lotus Cord Bracelet) | `D:/YAN_Atelier_Site/images/p12-bracelet-cord.jpg` |

**Reply template to WeChat** (Markdown OK):
```
匹配到: <SKU name>
风格分析: <brief 1-2 lines>
预设: <preset_id>

生成图: https://yan-gen-cdn.pages.dev/images/<filename>
(任何网络都能开 · 推 Cloudflare Pages 约 30-60s 后生效)
```

**Notes / caveats**:
- API server is on `0.0.0.0:8765` PID known via `netstat -ano | findstr :8765`. If down, run `D:\YAN_AutoEdit\start_api.bat`.
- Active image provider: `siliconflow_kolors` (env `SILICONFLOW_API_KEY` set). Each call costs a few cents of SF credit.
- Generation takes 10-30s typically.
- Output saved to `D:\YAN_AutoEdit\out\<date>\<job-id>_<n>.png`.
- The 12 SKU images above are MOSTLY placeholder/AI-touched (per user, real product photos are pending). Final results will improve once user shoots real photos.
- When user sends a ref image to WeChat, the bridge saves it locally — read from `~/.wechat-claude-code/sessions/` or use whatever path the daemon exposes. (TODO: verify exact saved path after first test.)
