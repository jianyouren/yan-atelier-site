# YÀN Gift Finder POC · Deployment Guide

**What you got:**
- `gift-finder-ai.html` — standalone working frontend (demo mode works without backend)
- `worker.js` — Cloudflare Worker backend (calls Claude API)
- `wrangler.toml` — Cloudflare Worker config
- This file

**Total user time to ship:** ~30 minutes (with accounts already in place: ~15 min)
**Monthly cost:** $0 for Cloudflare + ~$0.01 per Gift Finder query (Anthropic API)

---

## Phase 0 · Try the demo immediately (0 min)

Open `gift-finder-ai.html` directly in your browser. You can:
- Click through the 5-step questionnaire
- Switch CN ↔ EN (top-right toggle)
- See sample recommendations (hardcoded, no API needed)

This is **demo mode** — perfect for showing investors / friends "this is the UX" before paying for anything.

When you're happy with the UX, proceed to Phase 1 to wire real AI.

---

## Phase 1 · Get accounts ready (10 min)

### 1.1 Sign up Anthropic (5 min)

1. Go to https://console.anthropic.com/
2. Sign up with email
3. **Add payment method** (required — Claude API is pay-per-use, very cheap; typical Gift Finder call costs ~$0.005-0.015)
4. Go to **API Keys** → create new key → copy it somewhere safe (you can't view it again)

### 1.2 Sign up Cloudflare (5 min)

1. Go to https://dash.cloudflare.com/sign-up
2. Sign up with email (free)
3. You don't need to add any domain — Workers run on `*.workers.dev` for free

---

## Phase 2 · Deploy the Worker (10 min)

You need Node.js installed (https://nodejs.org if you don't have it).

### 2.1 Install wrangler CLI (1 min)

```bash
npm install -g wrangler
```

### 2.2 Log in to Cloudflare (1 min)

```bash
wrangler login
```

This opens a browser tab — click Allow.

### 2.3 Set the Anthropic API key as a Secret (1 min)

```bash
cd "d:\YAN_Atelier_Site"
wrangler secret put ANTHROPIC_API_KEY
```

When prompted, paste your Anthropic API key (the `sk-ant-...` string from Phase 1.1).

### 2.4 Deploy the Worker (1 min)

```bash
wrangler deploy
```

You'll see something like:
```
Uploaded yan-gift-finder
Published https://yan-gift-finder.YOUR-SUBDOMAIN.workers.dev
```

**Copy that URL** — you need it in the next step.

---

## Phase 3 · Wire frontend to the Worker (2 min)

1. Open `gift-finder-ai.html`
2. Find this line near the top of the `<script>` block:

   ```js
   const GIFT_FINDER_ENDPOINT = '';
   ```

3. Paste your Worker URL:

   ```js
   const GIFT_FINDER_ENDPOINT = 'https://yan-gift-finder.YOUR-SUBDOMAIN.workers.dev';
   ```

4. Save the file.

5. Open `gift-finder-ai.html` in your browser. The demo banner should now say "已连接 API". Run through the questionnaire — you should get a real LLM-generated response from Claude.

---

## Phase 4 · Embed into main site (optional, 10 min)

If you want to host the Gift Finder at `yan-atelier.com/gift-finder-ai`:

1. Upload `gift-finder-ai.html` to your hosting (Cloudflare Pages, Netlify, Vercel, GitHub Pages — wherever `index.html` lives now)
2. Add a link from `index.html` Gift Finder page:

   ```html
   <a href="/gift-finder-ai.html">Try the AI gift assistant →</a>
   ```

3. Or — replace the existing `view-gift` content with a `<iframe src="/gift-finder-ai.html">` for quickest integration

---

## Phase 5 · Monitor + improve

### See real usage
- Cloudflare dashboard → Workers → yan-gift-finder → shows requests/day, errors, p50/p95 latency
- Anthropic console → Usage → shows token consumption + cost
- Add Plausible event tracking by editing `gift-finder-ai.html` to call `plausible('Gift Finder Submitted', { props: { recipient, occasion } })` before `submit()`

### Cost expectations
- Sonnet 4.6 pricing: ~$3 / million input tokens, ~$15 / million output tokens
- Each Gift Finder call: ~1500 input + ~800 output ≈ $0.017 per call
- 100 calls/month = ~$1.70
- 1,000 calls/month = ~$17

### When to update the catalog
**Every time a piece sells or new piece launches:**
1. Update `PRODUCTS` array in `index.html`
2. Update `PRODUCT_CATALOG` in `worker.js`
3. Re-deploy: `wrangler deploy`
4. Update `ai-knowledge-base.md` § 5

If you forget to update the worker, the Gift Finder will keep recommending sold pieces — exactly the disaster scenario in `ai-knowledge-base.md` § 22 ("lazy day minimum"). Build the habit.

### Iterate on prompt
The prompt that drives recommendations is in `worker.js` → `buildSystemPrompt()`. To improve:
- Add more atelier voice examples
- Refine the "do not invent" rules
- Adjust word count for reasoning (currently 40-60)
- Add escalation: if user says "for my mom turning 60" → AI should still recommend, but include a softer "the atelier can refine further if you'd like" line

After any edit: `wrangler deploy` → changes go live in ~10 seconds.

---

## Troubleshooting

**"Worker exception: ANTHROPIC_API_KEY undefined"**
→ You forgot Phase 2.3. Run `wrangler secret put ANTHROPIC_API_KEY` and paste your key.

**"Anthropic API error: 401"**
→ Your API key is invalid. Generate a new one in Anthropic console, then re-do Phase 2.3.

**"Anthropic API error: 429"**
→ You hit rate limits. Either: add payment method (free tier is low), upgrade Anthropic tier, or implement retry-with-backoff in the worker.

**"LLM returned no JSON"**
→ Claude responded with prose instead of JSON. Tighten the system prompt (or add `response_format: 'json'` once Anthropic supports it natively). For now, the frontend falls back to sampleResult().

**CORS errors in browser console**
→ Your worker isn't returning the right `Access-Control-Allow-Origin` header. Check `worker.js` — those headers are set, but if you forked the file, re-paste from the source.

**Frontend stuck on loading**
→ Open browser DevTools → Network tab → see if the POST to your worker URL succeeded. If not, your endpoint URL in `gift-finder-ai.html` is wrong.

---

## Cost ceiling — what to watch

| Monthly | Cost |
|---|---|
| 100 Gift Finder runs | ~$2 |
| 1,000 runs | ~$17 |
| 10,000 runs | ~$170 |

If you ever hit 10K runs/month, you're getting real traffic — celebrate, then consider caching common answer combinations to drop cost.

---

## What this POC proves to you and to investors

1. **You can ship AI features without an engineering team** (this took 1 conversation)
2. **The brand voice scales** without diluting (KB → system prompt → consistent voice)
3. **Unit economics work** ($17/month for 1K conversions = laughably cheap)
4. **Capacity 10x** (Hu Yan + you cannot do 1K personalized gift recommendations/month; AI can)
5. **The Gift Finder is now a real DTC moat asset**, not a static quiz

This is the JTBD 2 (decision-outsourcing) infrastructure landed. JTBD 1 (insider craft) is supported by Craft page. JTBD 3 (self-purchase life-marker) needs separate UX work next.

---

## Next steps after Gift Finder is live

1. **Run 20-30 real customer/friend tests** — watch where the AI hesitates, where users abandon, where reasoning feels off-tone
2. **Tune the system prompt** based on those gaps (edit `buildSystemPrompt()` in worker.js)
3. **Add Plausible events** to measure: completion rate, recipient distribution, average budget, CTR to PDP from results
4. **Add escalation copy** for high-value scenarios (¥5K+ → suggest 私约 alongside picks)
5. **Build the Concierge inbox AI assistant** (the next tool — uses same KB + worker pattern, but for inbound emails)

Anything beyond this is your call — you have the architecture now.
