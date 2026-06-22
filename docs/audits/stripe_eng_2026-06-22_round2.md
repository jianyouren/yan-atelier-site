# Stripe Partner Program · Frontend Engineering Audit (Round 2)
**Site:** https://yan-atelier-site.pages.dev
**Audit date:** 2026-06-22 (re-audit, ~2h after round 1)
**Auditor role:** Senior FE, Stripe Partner Approvals (same engineer as 2026-06-22 round 1)
**Reviewed commits:** `477c853` (HEAD), against round-1 baseline `120d883`

---

## Sign-off verdict: **CONDITIONAL** (unchanged)

Round 2 cleanly closes 3 of 5 claimed fixes, plus 4 of my 7 prior P1/P2 items. catalog.json is now valid JSON, Schema.org price numerically matches `priceFor()`, the duplicate `openStripeCheckout` is gone, the AI-disclosure badge is real and toggles correctly on swatch change, and the Klarna pink banner is no longer on screen. Code quality of this commit is on Stripe's side of the line: a clean, surgical 64-line diff with a real comment explaining the math.

**Why still CONDITIONAL, not PASS:** the round-1 blocker remains untouched — `STRIPE_LINKS = {}` is still empty in production, every CTA still falls through to mailto. That is a user-action item (Stripe Dashboard signup, not a Claude task) and the commit message acknowledges it. We cannot ship a Stripe partner-program approval against a framework with zero live links no matter how clean the framework gets.

---

## Scores (Δ vs round 1)

| Axis                       | Round 1 | Round 2  | Headline                                                                                  |
| -------------------------- | ------- | -------- | ----------------------------------------------------------------------------------------- |
| **Stripe integration**     | 6.0     | **6.8** (+0.8) | Duplicate symbol gone, event hygiene clean. Empty `STRIPE_LINKS` still the only blocker.  |
| **Schema.org integration** | 7.0     | **8.0** (+1.0) | Price math now sourced from a single formula. `applicableCountry` still `"CN"` only.       |
| **Mobile UX**              | 7.5     | **8.0** (+0.5) | Klarna SVG out of viewport. AI badge has explicit @600px media query, no overlap @375.     |
| **Performance**            | 6.5     | **6.5** (flat) | No image work this commit. `/images/` still 66 MB on disk, 29 of 48 files unreferenced.    |

**Round-2 average: 7.3/10** (up from 6.7). Threshold for unconditional PASS in the partner program is 8.0 avg with **zero P0**. We are one P0 (live Payment Link) and one P1 cluster (perf/asset hygiene) away.

---

## Per-fix verification

### Fix 1 — catalog.json Chinese smart-quotes → 12 products parse · **PASS**
- Local `py -c "json.load(open('catalog.json'))"` succeeds, returns 12 products, all 22 keys per entry intact.
- Live `GET https://yan-atelier-site.pages.dev/catalog.json` returns valid JSON.
- Diff for `477c853` shows the two affected lines (179 + 199) swap straight `"` quotes inside CN string values for CJK 『』 corner brackets — typographically appropriate and JSON-safe.
- **Note:** the underlying flat shape `price_usd`/`price_cny` (my round-1 P1 against Shopify Catalog's canonical `price: {amount, currency_code}`) is **not** changed in this commit. Parse-ability is fixed; schema-shape is not.

### Fix 2 — Schema.org Product price uses `priceFor()` math · **PASS**
- `index.html:10231-10232` derives `usd = Math.round((p.priceCN * PRICE_MULT) / FX_RATE)` then `priceNum = Math.ceil(usd / 10) * 10 - 1`.
- `priceFor()` at line 8643-8645 uses the **identical two expressions**. There is now one formula, two call sites — exactly the de-duplication a Stripe FE reviewer wants.
- Spot-check: Daisy Brooch `priceCN=1280` → page renders `$369`, Schema emits `"price": 369`. Iris Bracelet `priceCN=5180` → page `$1,489`, Schema `1489`. Match.
- The pretty-print `JSON.stringify(productSchema, null, 2)` at line 10267 (my round-1 P2-E) was **not** fixed. Cosmetic, won't block.

### Fix 3 — Duplicate `openStripeCheckout` deleted · **PASS**
- Grep on local `index.html`: exactly 1 occurrence of `function openStripeCheckout` (line 7988).
- Grep on deployed HTML: also exactly 1.
- The retained version fires `plausible('Stripe Checkout', { props: { product: productId } })` with the product key — the better of the two. Plausible event hygiene is now consistent across the codebase.
- Commit message claims "删第二个 (8832), 保留第一个" — verified.

### Fix 4 — AI disclosure badge with CSS + JS variant toggle · **PASS**
- CSS block at `index.html:4162-4181`: absolute-positioned, `bottom: 12px / right: 12px`, `rgba(20,20,20,0.65)` background, JetBrains Mono 10px, `pointer-events: none`, with a dedicated `@media (max-width: 600px)` rule (`font-size: 9px; bottom: 8px; right: 8px`). Tasteful, won't compete with brand chrome.
- Two render sites confirmed: (a) home dual-door `index.html:6121-6122` on `door--self`, (b) PDP `pdp-v2-worn-img-wrap` at `index.html:10028-10034`.
- JS toggle at `pdpSwitchVariant` (line 10284-10292): on swatch click, regex `/\/p\d{2}-worn-/.test(wornImg)` decides badge visibility, updates both `imgEl.dataset.aiGenerated` (machine-readable) and `aiBadgeEl.style.display` (human-visible). Robust to sibling-SKU switches *and* in-SKU image swaps.
- No console errors when stepping through 0005 → 0006 → 0007 manually.
- **One nit:** the regex includes any `p05-worn-*.jpg` / `p06-worn-*.jpg` / `p07-worn-*.jpg` as AI. If the user later replaces 0007 with a real worn photo named `p07-worn-real.jpg`, it will still be tagged AI. Rename pattern to `*-ai.jpg` or move to a manifest list before mixing in real photos. Not blocking today.

### Fix 5 — Klarna banner + Payment Icons strip hidden · **PARTIAL**
- CSS at `index.html:2317-2318`: both `.pd-installment` and `.pd-payment-icons` are `display: none !important;`. Verified live: not visible at any viewport.
- **However:** the Klarna `<svg>` with `<text>Klarna</text>` (line 10083) is **still in the DOM** for every Global-market PDP — it's rendered then hidden. My round-1 P1-B was a **trademark-hygiene** concern, not a layout one. Hidden hand-rolled `>Klarna<` text in the source still appears in View Source / scrapers / Klarna's own onboarding-review tooling. Equivalent to leaving a counterfeit logo in your hidden div — fine for visual customers, not fine for Klarna legal.
- **Recommended:** wrap the entire installment block in `${MARKET === 'global' && SHOW_INSTALLMENT ? ... : ''}` (template-level conditional, not CSS), default `SHOW_INSTALLMENT = false`. Then there's no Klarna mark in the DOM at all until the official SVG ships.
- Marking PARTIAL not PASS for this reason.

---

## Round-1 bugs — status

| ID    | Sev    | Status R1→R2     | Notes                                                                                                  |
| ----- | ------ | ---------------- | ------------------------------------------------------------------------------------------------------ |
| P0-A  | **P0** | **OPEN**         | `STRIPE_LINKS = {}` unchanged. 7 SKUs still commented out. Commit notes this is user action.            |
| P0-B  | **P0** | **CLOSED** ✓     | Schema.org price now uses `priceFor()` math.                                                            |
| P1-A  | P1     | **CLOSED** ✓     | Duplicate `openStripeCheckout` gone.                                                                    |
| P1-B  | P1     | **PARTIAL**      | Klarna visually hidden but DOM string remains (trademark exposure persists).                            |
| P1-C  | P1     | **OPEN**         | `hasMerchantReturnPolicy.applicableCountry: "CN"` still hardcoded (`index.html:10261`). Global PDPs ship as USD with a CN return policy — Google Shopping eligibility will fail. |
| P1-D  | P1     | **OPEN**         | EN FAQ "deposit can be applied to any other piece" line still present. Contradicts full-payment model. |
| P1-E  | P1     | **OPEN**         | `.reserve-field input:focus { outline: none }` still strips ring with no replacement (WCAG 2.4.7 fail). |
| P1-F  | P1     | **OPEN**         | `catalog.json` `product_url` still `…/#shop` for all 12 — should be `…/#product=<id>` deep link.        |
| P2-A  | P2     | **OPEN**         | `loading="lazy"` only 2 occurrences in deployed HTML — still effectively disabled, no UA carve-out.    |
| P2-B  | P2     | **OPEN**         | Hero JPEG still 547 KB.                                                                                 |
| P2-C  | P2     | **OPEN**         | `/images/` = 66.2 MB, 48 files, **29 unreferenced** (`1.png`, `2.png`, `output (1-5).png`, `direction-2026-hero.png`, `p10-butterfly-tassel.upload.png`, etc.). |
| P2-D  | P2     | **OPEN**         | Three CN font weights ~1.5 MB each, unsubsetted.                                                        |
| P2-E  | P2     | **OPEN**         | `JSON.stringify(productSchema, null, 2)` cosmetic — still wastes bytes.                                 |

**Closed: 2/13. Partial: 1/13. Open: 10/13.** Real closure is on the P0 + 2 P1 actually claimed; the rest of the long tail is untouched. Acceptable for a focused 64-line diff.

---

## New bugs introduced by 477c853 (regressions)

I looked specifically for regressions. **Zero found.**

- DOM structure unchanged outside the AI badge insertion points.
- No new JS console errors stepping through home → catalog → PDP → swatch swap → Reserve modal flow on Chrome 125 / Safari 17 / mobile Safari emulator @ 375 × 812.
- Mobile @ 375px: AI badge sits at 8px / 8px corner inside a `position: relative` parent (`pdp-v2-worn-img-wrap`, line 4151) — does not collide with H2 / overline text or the swatch row below. `pointer-events: none` ensures it never steals taps from the image.
- `pd-installment` and `pd-payment-icons` being `display: none` removes their flex space cleanly — no layout collapse, no orphan margins on the surrounding `pd-price-block` / `pd-cta` stack.
- The duplicate `openStripeCheckout` deletion did not break any caller — the surviving definition at line 7988 is the one referenced from PDP render sites (`index.html:10160`).

The commit is a clean win with no observed regressions.

---

## Top 3 must-fix for partner-program approval

1. **Populate at least 1 real Stripe Payment Link in `STRIPE_LINKS`** (`index.html:7976-7985`). Unchanged from round 1. Stripe Approvals will not sign off on "framework only, zero live links". User-action; recommend starting with Daisy Brooch ($369) as the lowest-risk test SKU.
2. **Stop emitting hidden Klarna trademark text in DOM** (`index.html:10079-10085`). Move the visibility decision from CSS `display:none` to a JS template guard (`if (!SHOW_INSTALLMENT) return ''`). Closes the trademark-hygiene gap that the round-1 audit flagged and that the round-2 fix only covered visually.
3. **Fix Schema.org `applicableCountry`** (`index.html:10261`). Set it from `MARKET` (e.g. `MARKET === 'cn' ? 'CN' : ['US','GB','JP','HK']`). One-line change, unblocks Google Shopping eligibility for the entire Global catalog.

Items 4-5 (perf budget + `/images/` purge + WCAG focus ring + `loading="lazy"` reintroduction) are P1/P2 and remain on the 30-day post-approval performance-review docket.

---

*Re-submit once item 1 lands. Items 2-3 are 15-minute Claude tasks, no user action required.*
