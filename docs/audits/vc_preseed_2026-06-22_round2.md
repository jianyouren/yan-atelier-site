# VC Pre-Seed Audit · Round 2 (post 477c853)

**Auditor:** same pre-seed lead, 2 hrs after round 1
**Method:** 5-min Demo Day lens · live URL `https://yan-atelier-site.pages.dev` (HTTP 200, 476 KB) · diff vs commit `477c853` · spot-check on PDP `?sku=YA-2026-0005` + home + 375 px viewport
**Prior:** 79 / 100 MAYBE

---

## NEW VERDICT — 81 / 100 · still MAYBE

Net **+2** versus round 1. Two cosmetic deal-killers closed (JSON parse, payments-strip noise). The headline deal-killer — **Stripe payment infrastructure is theatre** — is unchanged. The AI-disclosure work is real CSS plus two render sites; that earns the merit points.

---

## Fix-by-fix verification

### 1. catalog.json smart-quotes — **PASS**
`curl … | JSON.parse` returns **12 products** cleanly. `grep "[“”‘’]" catalog.json` returns zero hits. `『』` CJK book quotes substituted on the offending value strings. Google Merchant feed will now ingest. Caveat: catalog schema uses `id` not `sku`, and the field names (`price_usd`, `price_cny`, `title_cn`) diverge from the in-page Schema.org Product injector. Not a blocker for the feed itself, but Shopify import will need a column map.

### 2. Schema.org price = on-page price — **PASS**
Lines 10231–10232 mirror `priceFor()` (lines 8643–8644) byte-for-byte: `Math.round(priceCN * PRICE_MULT / FX_RATE)` → `Math.ceil(usd/10)*10 − 1`. For Iris bracelet `priceCN: 2590` global market output is **$739** in both the visible price node AND the injected JSON-LD `offers.price`. Google Merchant Center will no longer reject. Old `/7.19` hard-coded divisor is gone.

### 3. Duplicate `openStripeCheckout` — **PASS**
`grep "function openStripeCheckout"` returns **one** hit at line 7988. Second definition (round-1 line ~8832) is deleted. Plausible event-name drift (`'Stripe Checkout'` vs `'Stripe Checkout Opened'`) resolved — single canonical event name now ships.

### 4. AI-disclosure badge — **PARTIAL**
CSS at lines 4162–4181 is well-built (bottom-right, blurred dark scrim, mono caps, 10 px / 9 px mobile, `pointer-events: none`). Two render sites confirmed:
- Home `door--self` line 6122 — **but text is hardcoded `AI 辅助`** with no EN fallback. An English-market visitor sees Chinese characters bottom-right of a hero image. Five-min Demo Day lens: a foreign LP will notice.
- PDP worn-img-wrap lines 10031–10033 — conditional regex `/\/p\d{2}-worn-/.test(defaultWornImg)` correctly toggles `display:none`; this one IS i18n-aware (`isCn ? 'AI 辅助' : 'AI assisted'`). Good.

Compliance posture is materially better than round 1 (where badge count = 0), but the home-page hardcoded CN string is a 2-minute fix the dev shipped wrong.

### 5. Klarna banner + Payment Icons strip hidden — **PASS**
Lines 2317–2318 set `display: none !important` globally on `.pd-installment` and `.pd-payment-icons`. The DOM is still rendered (lines 10079, 10167) so the dev can flip-flop later, but visually they are gone. Matches the file's own line 1675 rule and the SBB-audit feedback. CSS-only suppression is fragile — recommend deleting the render branches before pre-seed close — but it ships.

---

## Deal-killers that REMAIN after 477c853

1. **Stripe Payment Links are still 100 % commented-out stubs** (lines 7977–7984). Every Buy CTA falls through `openStripeCheckout()` → `openReserveModal()` → `mailto:`. The 30-day target quote ("我们上周收了第一笔新定价订单") is mechanically impossible. This was deal-killer #1 in round 1 and it is **untouched**.
2. **UGC + Press sections still `style="display:none;"`** (lines 6312, 6328). Built, populated, deliberately hidden. Same pattern as Klarna — engineering debt accumulating. This was deal-killer #3 in round 1, also **untouched**.
3. **No real product photography.** Hero + dual-door + 5/6/7 worn shots are AI swaps. Dev has now LABELLED them honestly (good), but a 5-min Demo Day still shows a brand with no camera output. The single ICIF/bench photo only carries the Bespoke door. Both audit panels (round 1 + 5-persona 06-19) flagged photography as the unanimous bottleneck.

---

## Verdict change

**I would now keep watching — unchanged from round 1.** Score moves 79 → 81. The fixes that shipped are real and well-engineered (catalog parse, Schema parity, function dedup), but the cheque-cutting blocker is the same one I cited two hours ago: a 12-line `STRIPE_LINKS` object with twelve `//` comments in front of the URLs. Until the founder pastes seven live Payment-Link URLs and deletes the comment slashes, this is a beautifully audited demo, not a business.

Cut SAFE the day STRIPE_LINKS goes live and one in-stock SKU has a real worn photo. That is a Tuesday-afternoon task.
