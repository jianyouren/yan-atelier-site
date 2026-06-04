# YÀN Atelier · Deploy Checklist

Step-by-step from "code on GitHub" to "investor can click a real link." Total time: ~12 min of clicks across 3 services.

---

## ① Cloudflare Pages · ship the site (3 min)

This gets you `https://yan-atelier-site.pages.dev` — the URL you'll send investors.

1. Open https://dash.cloudflare.com/ → sign up (free tier, **no card required**)
2. Left sidebar → **Workers & Pages**
3. **Create application** button → **Pages** tab → **Connect to Git**
4. **Connect GitHub** → authorize → grant access to `yan-atelier-site` repo only
5. Pick repo: `yan-atelier-site` → **Begin setup**
6. Settings:
   - Project name: `yan-atelier-site` (or anything — affects only the URL)
   - Production branch: `main`
   - Framework preset: **None**
   - Build command: *(leave blank)*
   - Build output directory: `/` *(just a slash)*
7. **Save and Deploy** → wait ~30 sec
8. **Done.** Click the URL Cloudflare shows you. Send me back:
   - The actual URL (probably `https://yan-atelier-site.pages.dev`)
   - A confirmation you can open it on iPhone

> 🔁 **Future deploys are automatic**: every `git push origin main` triggers a redeploy in ~30 sec.

---

## ② Plausible Analytics · turn on real metrics (2 min)

Plausible script is already in the page (`<head>`). You need to register the property.

1. https://plausible.io/register → free 30-day trial (or use existing account)
2. **Add website** → enter the exact domain Cloudflare gave you (e.g. `yan-atelier-site.pages.dev`) — **must match `data-domain` in `<head>`**
3. Skip "Send me a snippet" — already wired
4. **Open the live URL** in another tab → reload once → return to Plausible → you should see "1 visitor right now"
5. Tell me when it works — I'll wire custom events (Reserve / Customize / Gift Finder) into a dashboard view.

> When the real `yan-atelier.com` domain is wired, change `data-domain="yan-atelier-site.pages.dev"` to `yan-atelier.com` in two places: `index.html` line 31 and Plausible site settings.

---

## ③ Anthropic API key · turn on AI Gift Finder backend (5 min) · OPTIONAL

The Gift Finder POC works offline with a hardcoded demo. To make it actually call Claude:

1. https://console.anthropic.com/ → sign in / sign up → add a payment method (pay-per-use, typical Gift Finder call ≈ $0.015)
2. **API Keys** → **Create Key** → name it `yan-atelier-worker` → copy the `sk-ant-...` string somewhere safe
3. Open a terminal on your computer:
   ```bash
   cd "d:\YAN_Atelier_Site"
   npx wrangler login   # opens browser, click Allow
   npx wrangler secret put ANTHROPIC_API_KEY
   # paste the sk-ant-... key when prompted, press Enter
   npx wrangler deploy
   ```
4. Wrangler prints a URL like `https://yan-gift-finder.<your-subdomain>.workers.dev`
5. Open `gift-finder-ai.html` → find this line near the top of `<script>`:
   ```js
   const GIFT_FINDER_ENDPOINT = '';
   ```
   Paste your Worker URL inside the quotes.
6. Commit + push → Cloudflare Pages redeploys → Gift Finder now calls real Claude
7. Tell me — I'll add Plausible event tracking on Gift Finder submissions.

> Skip this until after Cloudflare Pages is live. Demo mode is enough for investor first look.

---

## ④ iPhone test (2 min · do this RIGHT after ①)

1. On your iPhone Safari, open the Cloudflare URL
2. Run the 5-min demo path:
   - Hero loads, scroll to **Bespoke / For Yourself** dual-door
   - Tap **For Yourself** → catalog hero band appears
   - Open any piece → scroll to **Light Customize** panel → tap a chip → watch price update live
   - Tap **Request to Reserve** → modal opens → walk through 4 steps → submit
   - Verify mailto opens your iOS Mail app prefilled
3. Add `#audit` to the URL → reload → open Safari DevTools (Settings → Safari → Advanced → Web Inspector) on a Mac, or just trust the visual check
4. Send me a screenshot or "looks good / breaks at X"

---

## ⑤ The 3-of-3 condition precedent (Investor's SAFE clause)

Your investor agent's term sheet requires 30-day delivery of **two of these three**:

- [ ] **12+ real photos** (Hu Yan portrait + at least 8 SKU × 4 angles) — your iPhone weekend
- [x] **国礼 claim resolved** — DONE (vague-but-honest version, shipped this cycle)
- [ ] **Stripe Payment Links live** — your account + my integration (~30 min)

Once any second item lands, send me the artifacts (photo files / Stripe link IDs) — I'll integrate same day.

---

## ⑥ Custom domain `yan-atelier.com` (later, when ready)

Cloudflare Pages → your project → **Custom domains** → **Set up a custom domain** → enter `yan-atelier.com` → Cloudflare guides through DNS records.

After custom domain is live, ping me and I'll swap:
- `data-domain` in Plausible script (1 line)
- hreflang URLs in `<head>` (3 lines)
- `og:url` (1 line)
- `_headers` file if any HSTS adjustments needed

---

## Troubleshooting one-liners

| Problem | Fix |
|---|---|
| Cloudflare build fails | Check Build output directory is literally `/` not blank |
| Plausible shows 0 visitors | data-domain must match the exact URL (no `https://`, no trailing slash) |
| Worker `wrangler deploy` errors | Run `wrangler login` first; verify Node.js installed |
| iPhone shows mixed content | Some assets still HTTP — check console; usually a stray `http://` in CSS background |
| Page loads but Hero is white | JavaScript error — open DevTools → fix the first red error, redeploy |

---

That's the playbook. Hit ① first.
