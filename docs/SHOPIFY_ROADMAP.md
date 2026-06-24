# YÀN Atelier · Shopify Roadmap

*Last updated: 2026-06-24 · Author: post-AutoEdit + post-Airwallex consolidation*

This doc answers: **"When and how do we move to Shopify?"**

Short answer: not yet, not Path A, eventually Path C, ultimately Path B.

---

## Current state (2026-06-24)

- Single-file SPA at `index.html` (~75K lines incl. JS), deployed to Cloudflare Pages
- 73 SKUs hand-managed via `PRODUCTS` array + `PRODUCT_META` dict
- i18n via parallel CN + EN `COPY` objects (manual)
- Reserve flow = mailto via Formspree
- Payment = Airwallex Global Payment Links (Phase 1, scaffold ready, URLs pending account approval)
- Inventory tracking = none (status: available / made-to-order, no stock counts)
- Customer accounts = none
- Order management = email + manual

This stack is fine for **0–10 orders/month**. Migration triggers below.

---

## The 3 migration paths

### Path A · Full Shopify migration

**What**: Buy a Shopify luxury theme (Prestige $350 / Impulse $350 / similar), migrate 73 SKUs to Shopify Products, recreate i18n via Shopify Markets + translation app, customise Liquid sections to approximate atelier voice. Drop Cloudflare Pages.

**Cost**: Shopify Basic $39/mo → Plus $2,300/mo, plus 2.9% + ¥1.80 per transaction. Initial migration: 2–4 weeks of work.

**Pro**: Industry default. Full app ecosystem (Klaviyo / Loox / Smile / Gorgias / Afterpay). Zero ops gap.

**Con**: Theme framework constrains design. YÀN's atelier voice + non-standard catalog (Atelier vs Daily filter, Featured 6 hand-picked, Edition counters, Plate vocabulary) is the brand moat — Path A dilutes this by forcing standard product grid + standard PDP layout.

**Verdict**: **Do not pursue.** Even at high volume. The atelier voice cannot survive a stock theme; defeating the purpose of choosing Shopify in the first place would mean heavy theme customisation which approaches Path B cost without Path B's benefits.

---

### Path C · Storefront API + current SPA (recommended first move)

**What**: Keep current single-file SPA. Add Shopify only as commerce backend. Replace `PAYMENT_LINKS` dict with `SHOPIFY_VARIANTS` dict mapping SKU id → Shopify ProductVariant ID. Replace `openCheckout()` with Shopify `cartCreate` mutation + redirect to Shopify-hosted checkout.

**Implementation**:
1. Create Shopify account (Basic plan $39/mo to start)
2. Add 4 trial SKUs (0001 / 0005 / 0006 / 0007) as Shopify Products
3. Set up Cloudflare Pages Function (`/functions/cart.js`) as Storefront API proxy — hides Storefront API access token
4. Update `index.html` `openCheckout()` to call cart Function → redirect to returned `checkoutUrl`
5. Sync remaining 69 SKUs as time allows
6. Optionally enable Shopify Markets for ¥/$/£ multi-currency (replaces manual FX in Path C of memo)

**Code changes**: ~80 lines added across `index.html` + 1 new file `/functions/cart.js` (~60 lines). Estimated 3–5 days of focused dev.

**Pro**:
- Current SPA design 100% intact (full custom control)
- Gains Shopify-hosted PCI-compliant checkout (replaces Airwallex Payment Link bounce)
- Gains Shopify inventory tracking (variant-level stock counts)
- Gains Klaviyo / Loox / Smile.io integration eligibility
- Gains Shopify order email infrastructure
- Gains Shopify Markets multi-currency (auto-FX, settled per market)
- Customer experience: same atelier brand, smoother checkout, abandon recovery, repeat-buyer accounts

**Con**: Two systems to maintain (SPA on Cloudflare + Shopify product catalog). SKU sync is manual unless you build a write-script.

**Triggers to start Path C**:
- Monthly orders ≥ **10** (manual ops fatigue)
- Customer asks "can I create an account?" (signals demand for repeat-buyer)
- Want to install Klaviyo for abandoned-cart recovery (typical 5–15% conversion lift, single biggest e-commerce gain)
- Inventory tracking pain (currently no stock counts — 73 SKUs makes "is it sold" manual)
- Want Apple Pay / Google Pay in checkout (Shopify supports natively, Airwallex Payment Links does not by default)

---

### Path B · Hydrogen headless (the terminal state)

**What**: Shopify backend + custom React/Remix frontend via Hydrogen v2 framework. Deploy to Shopify Oxygen edge runtime (or Cloudflare via Workers). Full custom design preserved + full Shopify commerce + edge performance.

**Cost**: Shopify Basic $39/mo + Oxygen hosting (Shopify-included). Initial migration: 4–6 weeks (React rewrite of current SPA pages).

**Pro**:
- Best of both: ecosystem + custom design
- Industry direction (Allbirds / Pangaia / SBB use Hydrogen variant)
- Real component library, real state management (not 75K-line single file)
- Server-side rendering for SEO
- Edge runtime = comparable to current Cloudflare Pages perf

**Con**: Most expensive in dev hours. React stack required. Hydrogen v2 ramp curve. Need React-comfortable dev to maintain (currently single-file SPA is hand-editable).

**Triggers to migrate Path C → Path B**:
- Monthly orders ≥ **50** (current SPA maintenance becomes the bottleneck)
- Multiple devs touching code (single-file conflicts)
- Need real authentication / customer dashboard
- Want B2B / wholesale features
- Series A funding committed (dev hire budget exists)

---

## What to keep from the 2026-03 research

Moved to `docs/competitor_research/` (3 files, ~45KB total):
- `us_market_research_2026-03.md` — US market sizing, 3-tier competitor map (Mejuri / Alison Lou / Ilgiz F), channel priorities (IG/Pinterest P0, Klaviyo/Afterpay P2), Shopify app stack reference. Long-lived.
- `buyer_persona_us_2026-03.md` — 3-persona US-market sketch (Millennial self-purchase / Gen Z / Gen X gifter). Relevant.
- `consumer_voice_us_2026-03.md` — US consumer voice/copy patterns. Relevant.

**NOT carried forward** (lived in `shopify-jewelry/` only, kept there until archive):
- The Dawn theme fork (incomplete)
- The Next.js v2 prototype (parallel re-architecture, superseded by current SPA)
- `products-import.csv` content (wrong prices, dead image URLs)
- 'Enamel + Beadwork' categorisation (we dropped beadwork)
- Specific theme recommendations (Prestige) — invalidated by Path A verdict

---

## Implementation checklist (Path C, when triggered)

1. [ ] Shopify Basic account · pick `.myshopify.com` subdomain (suggest `yan-atelier-store.myshopify.com`)
2. [ ] Create Storefront API access token · scope: `unauthenticated_read_product_listings` + `unauthenticated_write_checkouts`
3. [ ] Add 4 trial SKUs as Shopify Products (0001 / 0005 / 0006 / 0007) · include variant per option · upload product images
4. [ ] Populate `SHOPIFY_VARIANTS` dict in `index.html` with variant GIDs
5. [ ] Create `/functions/cart.js` Cloudflare Pages Function (proxies Storefront API, hides token)
6. [ ] Update `openCheckout()` to call `/functions/cart` → redirect to `checkoutUrl`
7. [ ] Test full flow on staging (Shopify dev store + Cloudflare preview)
8. [ ] Disable corresponding `PAYMENT_LINKS` entries (or keep as fallback)
9. [ ] Sync remaining 69 SKUs (manual via Shopify admin, OR write a one-shot import script)
10. [ ] Enable Shopify Markets for multi-currency (¥ / $ / £ / € / AUD / HKD)
11. [ ] Install Klaviyo · set up abandoned-cart email flow + post-purchase + winback
12. [ ] Install Loox · enable photo reviews
13. [ ] Decide on subscription analytics (Mixpanel / native Shopify reports)

---

## Open questions for the user (when triggered)

- Currency: settle in ¥ (Hong Kong subsidiary entity?) or $ (Shopify Markets primary)?
- Subdomain: `shop.yan-atelier.com` (when custom domain bought) or stay on `.myshopify.com`?
- Translation app: Langify / Weglot / native Shopify Markets — depends on whether you want EN/CN parity or auto-translation
- Klaviyo welcome series + monthly newsletter migration from current mailto reserve flow

---

## What to ignore for now

- Hydrogen v2 specifics (revisit at Path B trigger)
- Shopify Plus comparison ($2,300/mo, only relevant at Series A scale)
- POS integration (only if you do pop-ups / events)
- Subscription/membership tier (no current product fit)
- Multi-language CMS (current hand-written COPY arrays work)
