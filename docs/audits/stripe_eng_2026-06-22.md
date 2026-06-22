# Stripe Partner Program · Frontend Engineering Audit
**Site:** https://yan-atelier-site.pages.dev
**Audit date:** 2026-06-22
**Auditor role:** Senior FE, Stripe Partner Approvals
**Last reviewed commits:** `120d883` (HEAD), `bfe1d6e` (alleged JS-error fix), `770df11` (Stripe scaffold landed)

---

## Sign-off verdict: **CONDITIONAL**

The framework is correctly wired, the live site has no runtime SyntaxError, and the on-wire payload is healthy (122 KB br-compressed). However, **`STRIPE_LINKS` is an empty object in production** — every PDP CTA silently falls through to the mailto reservation modal, so the integration is not actually live. Plus a duplicate function definition the "fix" commit missed, Klarna brand-asset hygiene gaps, a Schema.org Offer/MerchantReturnPolicy mismatch with stated commerce terms, and a 67 MB raw `/images/` directory shipped to production. Resolve the must-fixes below, re-submit for sign-off.

---

## Scores

| Axis                       | Score   | Headline                                                                  |
| -------------------------- | ------- | ------------------------------------------------------------------------- |
| **Stripe integration**     | 6.0/10  | Scaffold is correct; zero live Payment Links; one duplicate symbol smell. |
| **Schema.org integration** | 7.0/10  | Org + Product both inject. Currency math + return-policy region wrong.    |
| **Mobile UX**              | 7.5/10  | Real overflow guards present, focus-visible global. Klarna SVG sketchy.   |
| **Performance**            | 6.5/10  | 122 KB br HTML is fine. /images is 67 MB, lazy-loading is **disabled**.   |

---

## 1. Stripe integration (6.0/10)

| Check                                                                   | Result                                                                                                                                                                                                                                                          |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `STRIPE_LINKS` declared exactly once                                    | PASS — `index.html:7946`. The `bfe1d6e` fix correctly removed the second `const` declaration.                                                                                                                                                                   |
| `openStripeCheckout()` declared exactly once                            | **FAIL** — declared at `index.html:7958` **and** `index.html:8832`. JS function hoisting means the second definition silently wins (the first one's `plausible('Stripe Checkout', …)` event with `props.product` is dead code; the live event name is different — see P1-A). No runtime error but a real semantic drift between the two implementations. |
| PDP CTA branches on `STRIPE_LINKS[id]`                                  | PASS — both render sites (`index.html:9940`, `index.html:10129`) check `STRIPE_LINKS[p.id]` and fall back to `openReserveModal(id, false)` when unset.                                                                                                          |
| Live Stripe URLs configured                                             | **FAIL (blocking)** — `STRIPE_LINKS = {}` in production (`index.html:7946-7955`, all 7 candidate SKUs commented out). 100% of "purchase" intents route to mailto. The site advertises Stripe payment icons (`pd-payment-icons`, line 10137) it cannot honour.   |
| Deposit model code-correctness (30% vs full)                            | PASS — comment at line 7943 declares "全款收取 · 不存在尾款", the `pdTerms` copy at line 6855 matches, and the FAQ refresh (`8d84ca5`) consistently says "全款付清". **However** the legacy `pdTerms` deposit-refund language survives at line 7860 ("deposit can be applied to any other piece") — Stripe Payment Links charge full amount, so this EN FAQ line is a contradiction. |
| `noopener` on `window.open`                                             | PASS — both definitions use `'_blank', 'noopener'`.                                                                                                                                                                                                             |
| Plausible event hygiene                                                 | MIXED — first defn fires `'Stripe Checkout'` with props (line 7966); second (winning) defn fires `'Stripe Checkout Opened'` without that key (line 8835). Pick one event name, delete the other definition.                                                     |

## 2. Schema.org (7.0/10)

- **Organization** (`index.html:33-64`) — valid, includes founder/address/contactPoint. Good.
- **Article** (Craft page injection, line 9384) — well-structured with `citation[]`. Above standard for indie shops.
- **Product** (line 10185) — injects on `openProduct()`, renders `Offer.priceCurrency`, `availability`, `shippingDestination`, `hasMerchantReturnPolicy`. Three concrete defects:
  1. `priceNum = Math.round(p.priceCN / 7.19)` (line 10194) **conflicts with site pricing logic** (`priceFor()` uses FX_RATE `7.0` + `PRICE_MULT` `2.0` + "$X9" rounding). Google Merchant rejects feeds where on-page price ≠ schema price. **P0.**
  2. `hasMerchantReturnPolicy.applicableCountry: "CN"` (line 10222) is hardcoded — for a USD-priced PDP the applicable country should be `"US"` (or an array). Will fail Google Shopping eligibility for the global market. **P1.**
  3. No `priceValidUntil` and no `aggregateRating` placeholder. Not blocking but reduces SERP CTR.

## 3. catalog.json (7/10)

`/catalog.json` returns 200, valid JSON, 14.3 KB, ETag set, `Access-Control-Allow-Origin: *`. Includes `catalog_version`, `updated_at`, 12 products, dual-locale fields.

**Shopify Catalog API / Google Merchant compliance gaps:**
- Uses `price_usd` + `price_cny` as flat keys instead of canonical `price: { amount, currency_code }`. Shopify Catalog and GMC both require the nested object.
- `availability` value `"in_stock"` is correct GMC syntax; `"out_of_stock"` correct; **but** Stripe Product Sync expects schema.org URIs (`https://schema.org/InStock`). Two different consumers will need a transform.
- Every `product_url` is `…/#shop` — not a deep link to that SKU. Stripe partner program requires individually addressable product URLs; recommend `…/#product=YA-2026-0001` (the in-page router already understands this, per Schema.org `offers.url` at line 10210).
- No `gtin` / `mpn` — OK for handmade exemption but flag with `identifier_exists: false`.
- No `image[]` array — only single `image_url`. GMC strongly recommends 3+ images per SKU.

## 4. Mobile UX (7.5/10) — 375px viewport simulated

- `html { overflow-x: hidden }` + `body { overflow-x: hidden }` (lines 206 + 214) — defense in depth, good.
- Hero H1 uses `clamp(1.6rem, 7vw, 2.2rem)` with `word-break: keep-all` (line 3503) — correct CN handling, no broken-on-character.
- `.pd-stock-badge` (line 2220), `.pd-payment-icons` (line 2259), and `.pd-installment` Klarna band (line 2290) all render in flexbox; no fixed widths. Clean.
- **Klarna SVG is rolled by hand** (line 10051-10054, `<rect fill="#FFB3C7"><text>Klarna</text>`). Klarna brand guidelines require the official SVG mark; using a text-in-rect placeholder is a **trademark hazard** *and* will trip Klarna's site-onboarding review when the user eventually applies. **P1.**
- The chinese-payment-icons (微信/支付宝/银联) are also hand-rolled SVGs (lines 10140-10142). For Stripe sign-off this is a soft fail — partner pages must use Stripe's `payment_methods` brand SVG bundle (or PNG marks from `stripe.com/files/brand`).
- Catalog grid is `repeat(3, 1fr)` desktop, collapses correctly on mobile.

## 5. Performance (6.5/10)

- HTML on wire: **122 KB Brotli** / 474 KB raw — single-file SPA is dense but acceptable.
- Hero `images/hero-model-butterfly-wing.jpg` = **547 KB** with `fetchpriority="high"` preload. Should be ≤180 KB (resize 1600px wide @ q80, plus AVIF + WebP `<picture>` fallback). LCP estimate on Slow 4G: ~3.2 s. Target ≤2.5 s.
- `/images/` directory = **67 MB on disk, 48 files**, including unreferenced bloat: `1.png` 3.3 MB, `2.png` 3.2 MB, `output.png` / `output (1..5).png` ~12 MB total, `p10-butterfly-tassel.upload.png` 2.1 MB, `direction-2026-hero.png` 2.0 MB. Cloudflare Pages will only serve what's requested, but every push uploads them and they pollute the deployment.
- `loading="lazy"` count across the file: **0 occurrences** (removed in commit `6334dc1` to fix a WeChat-browser issue). Means all below-fold product images load eagerly — net negative on LCP and data plans. Reintroduce with a WeChat UA carve-out instead.
- Fonts: 7.5 MB total, dominated by Noto Serif SC 300/500/regular at ~1.5 MB each. Three CN weights × 1.5 MB is excessive; subset to GB2312 or Hanzi-Frequency-1500.

## 6. JS errors

- No `SyntaxError` / no duplicate `const` (`bfe1d6e` did its job for `STRIPE_LINKS`).
- **Duplicate `function openStripeCheckout()`** at lines 7958 + 8832 — legal JS, but a code-review red flag and the two implementations have drifted (different Plausible event names, different fallback behaviour). Delete the first defn (line 7958-7969); keep the B1-labelled one.
- `productSchemaEl.textContent = JSON.stringify(productSchema, null, 2)` (line 10228) — pretty-printing JSON-LD adds bytes for zero search-engine benefit; pass no third arg.

## 7. Accessibility

- Global `*:focus-visible { outline: 2px solid var(--ink); outline-offset: 3px }` (line 4385) — meets WCAG 2.4.7.
- Skip-link present (`.skip-link:focus { top: 0 }`, line 3769).
- Product cards: `tabindex="0" role="button" aria-label=… onkeydown=Enter|Space` (line 9629) — proper. Door cards, atelier-CTA, plique-link all keyboard-equivalent (lines 6091, 6105, 6239, 6258).
- 32 `aria-label`/`tabindex`/`role=` total — reasonable density for a 12-SKU SPA.
- `.reserve-field input:focus { outline: none }` at line 3425-3426 strips focus ring *without* a visible replacement border on every input — fails WCAG 2.4.7 for keyboard users on the Reserve modal. **P1.**

## 8. AI-disclosure handling

`images/p05-stack-hero.jpg` is on disk (2.1 MB, dated 2026-06-22) but **grep across `index.html` returns zero references**. The asset is uploaded to Cloudflare Pages but unreferenced — so no disclosure attribute is *required*, but the file should be moved out of `/images/` (or deleted) to avoid accidental future use without disclosure. **P2.**

The site has zero `data-ai` / `data-generated` attributes anywhere — fine today, but when real AI imagery does ship (any of the planned generator outputs) the disclosure convention needs to be picked now, not retrofit.

---

## Bugs found

| ID    | Sev    | Where                             | Issue                                                                                                                                       |
| ----- | ------ | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| P0-A  | **P0** | `index.html:7946-7955`            | `STRIPE_LINKS = {}` in prod. Site advertises Stripe but no live Payment Link. Block to partner approval until ≥1 real URL is populated.     |
| P0-B  | **P0** | `index.html:10194`                | Schema.org `Offer.price` uses `/7.19` while on-page price uses FX_RATE `7.0 × 2.0`. GMC will reject for price mismatch.                     |
| P1-A  | P1     | `index.html:7958` vs `8832`       | Duplicate `function openStripeCheckout`. Drift in Plausible event name + behaviour. Delete the first definition.                            |
| P1-B  | P1     | `index.html:10051-10054`          | Hand-rolled Klarna `<text>Klarna</text>` SVG — trademark + onboarding-review risk. Use Klarna's official SVG mark.                          |
| P1-C  | P1     | `index.html:10222`                | `hasMerchantReturnPolicy.applicableCountry: "CN"` hardcoded — wrong for global PDPs.                                                        |
| P1-D  | P1     | `index.html:7860`                 | EN FAQ still references transferable deposit on bespoke pieces — contradicts full-payment model adopted in `8d84ca5`.                       |
| P1-E  | P1     | `index.html:3425-3426`            | `.reserve-field input:focus { outline:none }` strips focus ring with no replacement → WCAG 2.4.7 fail on Reserve modal.                     |
| P1-F  | P1     | `catalog.json` (all 12 products)  | `product_url` is `…/#shop` not `…/#product=<id>` — Stripe partner program requires deep links.                                              |
| P2-A  | P2     | `index.html` (whole file)         | `loading="lazy"` removed in `6334dc1`. Reintroduce with WeChat UA carve-out; current state hurts LCP and mobile data.                       |
| P2-B  | P2     | `images/hero-model-butterfly-wing.jpg` | 547 KB preloaded JPEG. Resize + AVIF/WebP — target ≤180 KB.                                                                          |
| P2-C  | P2     | `images/` directory               | 67 MB on disk, 14+ unreferenced assets (`1.png`, `2.png`, `output*.png`, `*.upload.png`, `p05-stack-hero.jpg`). Move to a separate folder. |
| P2-D  | P2     | `fonts/noto-serif-sc-*.woff2`     | 3 × 1.5 MB CN weights, all preloaded. Subset to top-1500 hanzi (~250 KB each).                                                              |
| P2-E  | P2     | `index.html:10228`                | Pretty-printed JSON-LD wastes bytes. Drop the `null, 2` arg.                                                                                |

---

## Top 5 must-fixes for Stripe partner approval

1. **Populate at least 1 real Stripe Payment Link** (`index.html:7946`). The integration framework is correct, but the empty `STRIPE_LINKS = {}` state means *zero* live commerce paths — Stripe Approvals will reject "framework only, no live links". Recommend starting with the 7 in-stock SKUs already enumerated as comments.
2. **De-duplicate `openStripeCheckout`** — delete the first definition (lines 7958-7969), keep the B1-labelled one (line 8832). Standardise on one Plausible event name (`'Stripe Checkout Opened'` with `props.product`).
3. **Fix Schema.org price + return-policy mismatch** (lines 10194 + 10222). Use the same `priceFor(p)`-derived USD number as on-page; set `applicableCountry` based on `MARKET` (CN or array of shipping countries).
4. **Replace hand-rolled Klarna SVG** (line 10051) with the official Klarna brand asset; ditto for Visa/Mastercard/Amex/Apple Pay/PayPal icons (lines 10144-10148) — fetch from Stripe's brand-assets CDN (`stripe.com/files/brand`). Trademark hygiene is a non-negotiable partner-program check.
5. **Reintroduce `loading="lazy"` with a WeChat UA carve-out** and resize hero to ≤180 KB AVIF/WebP. Current LCP estimate on mid-tier Android over Slow 4G is ~3.2 s; target ≤2.5 s for partner-program performance gate.

---

*Re-submit for sign-off once items 1-3 above are addressed; 4-5 are required within 30 days of approval per partner-program performance review cadence.*
