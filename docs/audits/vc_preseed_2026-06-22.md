# YÀN Atelier — Pre-Seed VC Audit · 2026-06-22

**Reviewer lens:** $500K–$2M ticket, indie-luxury / DNVB pre-seed. Live site walked: https://yan-atelier-site.pages.dev (cold, desktop + mobile viewport).

---

## Verdict

**MAYBE — Score: 79/100** (+2 vs prior 77/100). Conviction inched up on infrastructure scaffolding, but the headline commerce promise (Stripe live, catalog discoverable by Google, conversion path executable) is **wired but not energized**. I do not yet write the check — I extend the term-sheet conditional from "30d 2-of-3" to "30d 3-of-3 + Stripe live URLs swapped in."

---

## 3 Wins (this deploy moved the needle)

1. **SEO/AI-discovery substrate is real, not theatre.** Schema.org `Organization` JSON-LD is in the static `<head>` (line 33); `Article` schema on the craft history page; `Product` schema dynamically injected per PDP view with `Offer.priceCurrency`, `availability`, `shippingDetails`, `MerchantReturnPolicy.merchantReturnDays: 14`. This is materially better than a typical pre-seed DTC site at this stage — most ship Wix/Shopify defaults that miss `MerchantReturnPolicy`. Combined with `hreflang` zh-CN / en / x-default and a `Sitemap:` declaration in `/robots.txt`, this is a credible Google-Shopping-feed + AEO foundation.

2. **Trust-stack visible at the right altitude.** Payment-method icons strip (Visa/MC/AMEX/Apple Pay/PayPal on global; 微信/支付宝/银联 on CN — properly market-gated), Klarna "From $X" installment band on global PDPs only (line 2313 hides on CN — correct), stock badge with three states (in-stock / made-to-order / sold) and a 48-hour ship line, sticky bottom buy-bar with live price + variant. PIPL consent checkbox in the reservation flow. CN-only 营业执照 disclosure block (统一社会信用代码 92530111MAET9QTM34, 电商法第15条 compliance) — this is the kind of detail an indie LP doesn't expect, and it actively de-risks a China-market lawsuit narrative.

3. **Self-hosted Google Fonts (Italiana, Cormorant Garamond 300–600, Noto Serif SC 300–700) preloaded as woff2 with `crossorigin`.** Removes the `fonts.googleapis.com` third-party hop, which is both a 中国大陆 latency win and a GDPR/PIPL bone thrown to anyone doing legal diligence. Small but it's the kind of move that signals the team reads engineering blogs, not just Shopify blogs.

---

## 3 Must-Fixes Before I Cut a SAFE

1. **`STRIPE_LINKS` is an entirely commented-out stub (line 7946–7953).** Every product falls through to a mailto reservation. The "Purchase this piece →" button on PDP is dark code waiting on the user to paste 7 `buy.stripe.com/xxx` URLs into a const. This is the single biggest "demo vs reality" gap on the site. From a diligence standpoint: until I see *one* SKU with a live link AND one successful test transaction in the Stripe Dashboard, the entire commerce narrative is a screenshot. **Fix: ship 3 live Payment Links for the in-stock SKUs (Daisy / Ginkgo / Iris) by EOW, with Klarna enabled on the Stripe side so the on-page banner isn't a lie.**

2. **`/catalog.json` has a JSON parse error.** `node -e "require('./catalog.json')"` throws at line 179 — the description for SKU 0008 (Fish & Lotus Pendant) contains an unescaped `"成人之礼"` inside a string already wrapped in `"…"`. Any consumer (Shopify feed import, Google Merchant Center, a future agent crawler, the upcoming YAN_AutoEdit pipeline) gets a 400. The catalog being public AND broken is worse than no catalog — it's a credibility flag for anyone who actually opens it. **Fix: escape the inner quotes, add a CI step that runs `JSON.parse(readFile('catalog.json'))` on every commit.**

3. **UGC + Press sections are styled, populated in code, then explicitly `style="display:none;"` on the page (lines 6282, 6298).** Social proof above the fold is the #1 indie-luxury conversion lever, and the user has built the apparatus but hidden it because there are no real testimonials / press hits yet. This is honest, but it also means the prior "Customer Letters" cut from 06-08 hasn't been replaced. **Fix: either (a) ship 3 real photographed customer quotes with first names + city + SKU and unhide, or (b) replace with a credible "First 12 pieces shipping July 2026 — be one of them" pre-order counter.** Empty social-proof DOM with no plan to fill it is dead weight in diligence.

---

## 5-min Demo Day Walkthrough (what I'd narrate to LPs)

> **00:00 — Hero (10s).** "戴出去, 别人会问你哪儿淘的 / Wear it. People will ask where you found it." Buyer-side, not brand-side — clears the 3-second cold-visitor parse test. Real model photo, hero image is `hero-model-butterfly-wing.jpg`, not stock.
>
> **00:10 — Dual door (30s).** "Ready to wear" (现货) vs "Make it yours" (定制) — two JTBDs surfaced as transaction primitives, not as collections. "8 available · 12 made" is honest scarcity, not fake countdowns.
>
> **00:40 — Catalog (60s).** 12 SKUs, $178–$526 (RMB ¥1,280–¥3,780). Renamed 06-19 to the Pattern A locked convention (Daisy Brooch, Ginkgo Leaf Brooch, Iris Bracelet, Fish & Lotus Pendant). Coherent. No literary 4-character traps.
>
> **01:40 — PDP (90s).** Stock badge, price, **Klarna "From $45 with Klarna" banner on global**, sticky buy-bar, tombstone meta (Piece / Material / Dimension / Completed), trust strip (returns / shipping / care), payment-icons strip, mini-FAQ. The PDP is genuinely 2026-grade indie DTC — Foundrae / SBB register, not Shopify-default.
>
> **03:10 — Maker page (45s).** Hu Yan + Yunnan studio. Real photos. Now lives in primary nav (Tier B from 06-19 audit shipped).
>
> **03:55 — Craft history page (45s).** Plique-à-jour lineage, 10 academic citations, Schema.org `Article`. This is the GEO/AEO moat — when ChatGPT and Perplexity answer "what is plique-à-jour" they will increasingly cite this page. Defensible content layer.
>
> **04:40 — Footer (20s).** CN: 营业执照 + 统一社会信用代码 displayed (电商法 §15). Global: hidden correctly. Plausible analytics pre-wired. PIPL consent in reservation flow.
>
> **05:00 — Close.** "Working product, not deck. ¥1,280 entry point, founder is the maker, defensible craft moat. We're asking $500K SAFE at $8M cap to ship Stripe live, fund first photoshoot, and pilot the academy partnership."
>
> **Hard cuts:** The hidden UGC/Press sections (I will not narrate empty DOM). The Bespoke configurator (too deep for 5min). The geo banner (incidental). The PDP customize panel (works, but eats time).

---

## Comparison to Prior 77/100 (specific dimensions)

| Dimension | 06-11 (77) | 06-22 (79) | Δ |
|---|---|---|---|
| **Schema.org / AEO discovery** | Missing | Org + Article + Product (dynamic) | **+5** |
| **Payment trust signals** | Text-only chips | SVG icon strip + Klarna banner + sticky buy-bar | **+3** |
| **Legal / compliance posture** | Generic terms | 营业执照 + 电商法 §15 + PIPL Art.14 consent + self-host fonts | **+3** |
| **Stripe / actual checkout** | mailto only | mailto + dark Stripe button waiting on links | **0** (no live transaction yet) |
| **Catalog feed integrity** | n/a (no feed) | feed exists but **JSON parse error** | **−2** |
| **Social proof** | "Customer Letters" cut, plan TBD | UGC/Press sections built but hidden | **−1** (regression vs "honestly empty") |
| **Photography (the perpetual bottleneck)** | Hu Yan + ICIF added | Same set, no new shoot | **0** |
| **SKU naming coherence** | 12 SKUs in-flight rename | Pattern A locked, shipped | **+2** |
| **Mobile / viewport** | basic responsive | 54 `@media` rules, viewport-fit=cover, hero stable | **+1** |
| **Brand voice (cold-buyer parse)** | Hero contested 3:1 | Locked buyer-side, panel converged | **+1** |

**Net: +9, −3 = +6 nominal**, dampened to +2 by the unresolved Stripe gap (the single biggest pre-seed conviction driver). Until Stripe goes live, the ceiling on this site is ~82. The instant a Payment Link processes one real transaction, I re-rate to 85+ and the SAFE conversation gets real.

---

**Bottom line:** The team has done the boring infrastructure work most pre-seed DTCs skip (Schema, PIPL, font self-host, market-gated payments). They are one weekend of `buy.stripe.com` link-pasting + one JSON escape + one weekend of customer photography away from a YES. That's why this is a MAYBE, not a NO — the surface area between here and investable is unusually small and unusually mechanical.

— *VC review · 2026-06-22 · based on live cold walk + raw HTML inspection*
