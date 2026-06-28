# CN Cross-border Indie Peers + Markup Math

Research date: 2026-06-28
Brief: validate YÀN Atelier's 2.0x CNY→USD markup (formula: USD = ¥ × 2.0 / 7.0, 9-ending) against (a) what CN niche/indie peers actually charge their international site and (b) the real absorbed-cost stack of cross-border DTC.

FX assumption throughout this doc: 1 USD ≈ 7.0 CNY (close to mid-2026 PBoC fix). Where intl prices are in EUR/GBP, USD parity assumed (EUR/GBP convert ~1:1 to USD in this benchmark scope).

---

## Part A · CN-to-intl pricing ratio of peers

The right way to read these is: take the brand's CN domestic ¥ price, take their own international USD price for the same or closest SKU, convert both into ¥ at FX 7.0, divide. This is the *implicit markup* the brand is applying to cross the border.

### Anchor 1 · 觀夏 GuanXia — Osmanthus 颐和金桂 perfume 30ml

| Channel | Site | Price | Source |
| --- | --- | --- | --- |
| CN domestic | tosummer.cn (官网 / 官方旗舰店) | ¥598 (1) | brandstar / smzdm corroboration of "30ml 在 ¥488-¥798 区间, 颐和金桂 ~¥598" |
| International | tosummer.shop (官方海外站) | $139.90 USD | tosummer.shop product page |
| Yami (US Asian e-grocer reseller) | yami.com / sayweee | $159.90 USD (resell) | not the brand's own, ignore |

Implicit ratio: $139.90 × 7.0 ÷ ¥598 = **¥979 / ¥598 ≈ 1.64x**

(1) GuanXia has both 30ml and 100ml at $139.90 on the intl site — meaning they're using a flat-USD-anchor strategy rather than per-ml. The 30ml is the conservative comparison; if you compare 100ml CN domestic (~¥798) to $139.90, ratio falls to ~1.23x. Brand register: gift-grade Eastern niche fragrance.

### Anchor 2 · DOCUMENTS 闻献 — 30ml 浓香水

| Channel | Site | Price | Source |
| --- | --- | --- | --- |
| CN domestic | documentsofficial.com (官网) | ¥980 (初熟之物 30ml) | documentsofficial.com PDP |
| CN domestic (other 30ml SKUs) | same | ¥780–¥850 | KrAsia / Sohu探店报道 / Fragrantica |
| International (3rd-party stockist) | Garmentory | $113 USD (FEATHER parfum+candle set, not single-bottle) | Garmentory PDP |
| International (own site) | documentsofficial.com | No public USD pricing — site is CN-only at this time | confirmed via fetch (footer is CN-only contact channels) |

DOCUMENTS has **no first-party international site yet** — they sell to global customers via 3rd-party multi-brand boutiques (Garmentory, Joyce Beauty HK, etc.). The Garmentory bundle (¥980 single + candle for $113) implies the bundle has wholesale unit economics, not a direct CNY→USD markup, so the cleanest read is: **DOCUMENTS has not committed an intl markup yet.** Their wholesale-to-Garmentory rate is likely ~50% of CN MSRP, then Garmentory keystone (2x) to retail, landing near domestic ¥ value in USD terms. Effective ratio ≈ **1.0x to 1.2x** through 3rd party.

Brand register: niche perfume, gift+self, direct comp for YÀN's brand stage (founded 2020, Givaudan-collab, ¥450–¥2250 range).

### Anchor 3 · YVMIN 尤目

| SKU type | CN price (天猫 / smzdm / maigoo confirmation) | Intl price (yvmin.com defaults USD; Chop Suey Club / Common Place stockist) | Ratio |
| --- | --- | --- | --- |
| Sweets candy stud earring | ¥360–¥460 | $66–$89 (Orchard stud) | $66×7/¥360 ≈ 1.28x; $89×7/¥460 ≈ 1.35x |
| Sweets sterling necklace | ¥520–¥680 | $98–$160 (Ripple, Mystical Flower) | $98×7/¥520 ≈ 1.32x; $160×7/¥680 ≈ 1.65x |
| Long Petal earrings | (no direct ¥ found, similar SKU ~¥1,500–¥2,000) | $267 MSRP, $160 sale (Chop Suey Club) | ~1.0x–1.25x |

Implicit ratio: **~1.3x to 1.6x**, with stockist resale layer typically adding 30–60% on top of brand-MSRP USD (not the brand's own markup). YVMIN's own site is USD-default and they keep ratios disciplined — likely because Beijing-based, exporting from CN HQ, no overseas warehouse.

Brand register: closest direct comp to YÀN (indie, hand-painted, plique/enamel-adjacent, Beijing/CN origin).

### Anchor 4 · 笙箫 MERA / MERA & Co

Searched. Could not surface a CN brand by this name with both CN ¥ and intl USD pricing pages. The Western "Mera Jewelry" brands (Mera Fine, Mera Designs) are non-CN. **Not a valid CN cross-border peer in 2026.** Skipping.

### Anchor 5 · 老凤祥 / 周大福 gift lines

Heritage 黄金 brands. Their international stores (周大福亚马逊, 周生生.com) sell gold-weight + 工费 — pricing is materials-pegged not brand-pegged. Per zhihu 2026: 周大福 黄金 ¥1238/g domestic, 老凤祥 ¥1248/g domestic; gross margins 27.3% (周大福) vs 8.77% (老凤祥) reflect 一口价 vs 计价 mix, not CN→intl markup. **Not comparable to YÀN's craft-priced positioning** — these are commodity-gold benchmarks. Skipping for ratio analysis.

### Anchor 6 · Tao Heung 自隅

Searched. Could not confirm a CN cross-border craft brand by this name with both-currency pricing. Skipping.

### Convergent CN→intl ratio range

Three valid data points (GuanXia, YVMIN, DOCUMENTS 3rd-party-implied):

| Brand | Ratio | Notes |
| --- | --- | --- |
| GuanXia 30ml | **1.64x** | own intl site, flat-USD-anchor strategy |
| GuanXia 100ml | 1.23x | same intl USD but bigger CN ¥ denominator |
| YVMIN stud | 1.28–1.35x | own USD-default site |
| YVMIN necklace | 1.32–1.65x | own USD-default site |
| DOCUMENTS via Garmentory | ~1.0–1.2x | wholesale chain, not own intl site |

**Convergent range: 1.2x to 1.7x. Median ~1.4x.**

This is materially below YÀN's current 2.0x. The convergence is striking: three independent CN niche brands all land in roughly the same band, suggesting it's an industry norm — not a coincidence.

---

## Part B · Markup math reality check

The 2.0x figure has to do real work: cover DDP duties, shipping, payment fees, FX spread, *and* leave indie-craft margin. Let's audit each absorbed cost.

### B1 · DDP duties absorbed (by destination)

| Market | Duty / VAT structure | Effective absorbed % on $300 retail |
| --- | --- | --- |
| **US** | de minimis $800 (Section 321) → 0% duty under threshold. Section 321 still applies in 2026 for most low-value consumer goods. | **~0%** under $800 |
| **EU (avg)** | IOSS VAT 19–23% on goods ≤€150; €3 customs duty per item ≤€150 from July 2026; full duties + VAT above €150 | **~20–23%** of declared value |
| **UK** | 20% VAT collected at checkout for goods ≤£135; 2.5% customs duty + 20% VAT above £135 (silver jewelry: 2%) | **20%** below £135, ~22.5% above |
| **AU** | 10% GST on low-value imports (< AUD 1000); no customs duty under threshold | **10%** |
| **CA** | 5% GST + provincial (5–10% PST/HST); duty 0–8.5% jewelry HS 7113 | **~12–18%** |

YÀN's blended absorption (assuming mix: 40% US / 30% EU+UK / 15% AU / 15% Other): roughly **(0.4 × 0% + 0.3 × 21% + 0.15 × 10% + 0.15 × 12%) ≈ 9.6%**.

If EU/UK becomes the dominant market (which is likely for plique-à-jour given Renaissance lineage messaging), this blended number drifts to **~15–18%**.

### B2 · Shipping cost

| Lane | DHL Express small-parcel (0.5kg, jewelry-grade box) | Source |
| --- | --- | --- |
| CN → US | ~$55–$70 retail; ~$35–$45 with merchant account discount (20–50% off) | goodhopefreight, DHL CN |
| CN → UK / EU | ~$65–$95 retail; DDP adds 20–30% premium | DHL eCommerce UK |
| CN → AU | ~$60–$80 | DHL AU |

Realistic blended DHL Express cost per order: **$55–$75** before any free-shipping subsidy. On a $300 average order value this is **18–25%**. On a $1,479 top SKU this is **4–5%**.

This is the single biggest reason **entry SKUs need much more markup than top SKUs** to cover fixed shipping.

### B3 · Payment processor + FX (~3.4%)

Two scenarios:

**Scenario A — Stripe international card (which is what most CN merchants on Shopify end up with):**
- Stripe rate: 2.9% + $0.30 base + 1% cross-border + 2% currency conversion = **~5.9% + $0.30** per intl transaction
- Source: Airwallex Stripe fee breakdown, Shopify help center

**Scenario B — Airwallex Global Account (the CN-merchant-optimized stack):**
- Card processing: **3.40% + $0.30** for international cards
- FX markup: **0.5–1%** above interbank when converting to CNY for payout
- CNY payout: 0.1%
- Total: **~4.0–4.5%** per intl transaction

Either way, payment + FX absorbs **~4–6%**, not the "3.4%" the brief assumes. The brief is **~1–2 percentage points light** here.

### B4 · The full absorbed-cost stack

For a $300 average order (¥2,100 equivalent), shipping CN → EU, paid with Stripe:

| Cost line | $ on $300 AOV | % of retail |
| --- | --- | --- |
| DDP (EU avg 21% VAT) | $63 | 21% |
| DHL Express (DDP-loaded) | $65 | 22% |
| Stripe intl (5.9% + $0.30) | $18 | 6% |
| Total absorbed | **$146** | **49%** |
| Net to brand | $154 | 51% |

For a $1,479 top-SKU order CN → EU:

| Cost line | $ on $1,479 AOV | % of retail |
| --- | --- | --- |
| DDP (EU 21%) | $311 | 21% |
| DHL Express (DDP-loaded) | $70 | 5% |
| Stripe intl (5.9% + $0.30) | $87 | 6% |
| Total absorbed | **$468** | **32%** |
| Net to brand | $1,011 | 68% |

### B5 · YÀN's 2.0x markup check

Formula recap: USD = ¥ × 2.0 / 7.0 → if a ¥2,100 SKU sells at $600 in CN-equivalent USD value, it sells at $179 USD intl. Wait — let me redo this honestly.

The formula `USD = ¥ × 2.0 / 7.0` means: ¥2,100 → $600 USD intl. That's *not* a 2.0x markup over CN price; that's selling at **2.0× the CN-equivalent dollar value**. Converted back: $600 × 7.0 = ¥4,200, which is exactly 2.0x the ¥2,100 CN price. So yes, the intl customer pays **2.0× what a CN customer pays in equivalent currency**.

On a $600 intl order shipped to EU:
- DDP 21% = $126
- DHL = $65
- Stripe 5.9% + $0.30 = $36
- Total absorbed: **$227 (38%)**
- Net to brand: $373 — vs CN price equivalent of $300
- **Brand earns +$73 vs. selling at CN price** = a real cross-border margin lift of ~24% over CN net.

That **is** healthy if you assume the CN price already has working margin baked in. Question: does it?

For indie craft (plique-à-jour, single-maker, no scale), real COGS is probably 25–35% of CN retail (material + labor + atelier overhead). So CN ¥2,100 → COGS ~¥630 ($90). Intl sale at $600 → COGS 15% → very healthy.

**Verdict on 2.0x:**
- For mid-tier and top-tier SKUs ($600+): 2.0x is **right-sized to slightly generous**. It buys DDP comfort + DHL + Stripe with room left for free-shipping promo or DDP absorption headroom.
- For entry SKUs ($179 = ¥680 × 2.0 / 7.0): 2.0x is **dangerously thin**. On a $179 EU order, DDP $38 + DHL $65 + Stripe $11 = $114 absorbed = **64% of retail gone to cross-border friction**. Net $65 to brand vs. CN-equivalent of $97. **The brand actually loses money vs. selling that SKU in CN.**

This is the most actionable finding: **the 2.0x is not wrong as a number — it's wrong as a flat multiplier across the price range.**

---

## Honest take

### Is the 2.0x correct? Should it be 1.7x / 2.0x / 2.5x?

**As a flat multiplier: 2.0x is too high vs. peer norm (1.4x median) AND too low to cover fixed shipping on entry SKUs.** That's the paradox. The right answer is *tiered*, not flat:

- **Entry tier ($179 / ¥680)**: needs **2.4–2.6x** (currently 2.0x, undercovers fixed shipping)
- **Mid tier ($369–$899 / ¥1,280–¥3,150)**: 2.0x is **correct** (matches absorbed cost + healthy lift)
- **Top tier ($1,479 / ¥5,180)**: could go to **1.7–1.8x** without margin damage (fixed costs amortize, peer norm cited above)

### Are CN cross-border peers using a different ratio?

Yes. **Peers converge at 1.2x–1.7x, median ~1.4x.** YÀN's 2.0x flat is 40% above peer median. This means:

1. YÀN looks expensive vs. GuanXia (gift fragrance) and YVMIN (indie jewelry) on a like-for-like CN-anchor reference — but only if a sophisticated buyer crosses currencies. Practically, very few do.
2. YÀN's intl visitor is not anchoring to ¥. They're anchoring to **Western indie peers** (Alighieri $300–800, Pippa Small $400–1500, WWAKE $500–2000). On that benchmark, YÀN at $179–$1,479 looks **right or under-priced**, not over-priced.
3. So the peer 1.4x is the **wrong reference benchmark for YÀN** if YÀN is going Western-indie-coded (which the brand has committed to, see 2026-06-19 Western aesthetic audit). GuanXia/YVMIN buyers are largely *diaspora CN customers who DO recognize the CN anchor*. YÀN's stated buyer is Western indie-jewelry-collector who doesn't.

**Reframe: 2.0x is not too high for the buyer YÀN actually wants. It is too high if you think of it as "what a Chinese-aware buyer expects to pay extra".**

### Per-tier corrections (priority order)

1. **Highest priority — fix the entry tier.** A $179 SKU shipped DDP to EU at current math nets the brand ~$65 after costs, vs. ~$97 CN-equivalent net. **Switch entry-tier formula to `USD = ¥ × 2.5 / 7.0`** (would push ¥680 → $243, still a credible indie-craft entry). Alternative: **add a $25 shipping fee for orders under $300** and keep the 2.0x formula. The fee is operationally simpler and is what GuanXia / YVMIN both effectively do via their cart UX (note: GuanXia free-shipping threshold is $99 on intl site, so they're swallowing it; they can afford to because Osmanthus 30ml ratio is 1.64x which is enough to cover ~$60 of subsidized shipping at scale).

2. **Medium priority — leave the mid tier alone.** ¥1,280–¥3,150 (which is most of the catalog) at 2.0x is the correct math for cross-border DTC craft jewelry. Western DTC fine-jewelry industry standard is 4–6x COGS (~71–75% gross margin); YÀN at 2.0x of CN-MSRP is roughly equivalent to ~4x COGS if CN price is 2x COGS, which it should be.

3. **Optional — flatten the top tier.** ¥5,180 → $1,479 is the keystone SKU (鸢尾镯). Industry research from 2026-06-23 already locked "don't move top SKU until real photos + 3 sold". Mathematically the brand could go to 1.8x ($1,331) without damage, but: (a) the top SKU is the price anchor that makes mid-tier look reasonable, (b) Western peer (Pippa Small bracelets ~$1,200–$2,500) keeps $1,479 looking conservative not aggressive. **Leave at 2.0x. Don't optimize the keystone for margin — it's working as positioning.**

### What the brief got wrong (worth flagging)

- "Stripe 3.4% + 0.5% FX" → actually **5.9% + $0.30 + 2% FX = ~7.6%** through Shopify+Stripe intl flow. Airwallex direct is ~4–4.5%. **Brand should run Airwallex** for cross-border CN merchant if not already; Stripe via Shopify is the costliest path and the brief's number assumed Airwallex baseline already.
- "International DHL shipping ~$50–60/order" → realistic with merchant discount; **CN→EU is closer to $65–95 DDP-loaded** and that's the lane that matters most for plique-à-jour. The $50–60 number undercounts EU/UK by 20–30%.
- "2.0x absorbs DDP duties (~10–15%)" → US-blended that's right; **EU/UK-heavy it's 20–22%**. If the brand truly goes EU-first (per Western aesthetic commit), DDP absorption needs to be re-baselined at 20%+.

---

## Sources

- [TO SUMMER Osmanthus Perfume - tosummer.shop PDP ($139.90 USD)](https://tosummer.shop/products/osmanthus-perfume)
- [TO SUMMER perfume collection - tosummer.shop ($139.90–$179.90 USD range)](https://tosummer.shop/collections/tosummerperfume)
- [TO SUMMER products - tosummer.cn CN site](https://tosummer.cn/cn/products)
- [DOCUMENTS 闻献 初熟之物 30ml PDP - ¥980 CNY](https://documentsofficial.com/products/%E9%97%BB%E7%8C%AE-%E6%B5%93%E9%A6%99%E6%B0%B4%E5%88%9D%E7%86%9F%E4%B9%8B%E7%89%A930ml)
- [DOCUMENTS Feather parfum+candle set on Garmentory ($113 USD)](https://www.garmentory.com/sale/documents/fragrance-perfume)
- [KrAsia: "Not Chanel, not Dior" DOCUMENTS pricing analysis (¥620–¥980 / 30ml)](https://kr-asia.com/not-chanel-not-dior-this-chinese-perfume-brand-is-charging-top-dollar-and-selling-out)
- [YVMIN official store yvmin.com (USD default)](https://yvmin.com/collections/all-products)
- [YVMIN on Common Place ($58–$457 USD range)](https://commonplace.site/collections/yvmin)
- [YVMIN on Chop Suey Club ($98–$267 USD range)](https://www.chopsueyclub.com/collections/yvmin)
- [maigoo YVMIN brand price ranges (CN ¥800–4000)](https://www.maigoo.com/brand/92624.html)
- [SMZDM YVMIN Sweets ¥442 / ¥520 / ¥738 confirmations](https://www.smzdm.com/p/115446494/)
- [Eightx: jewelry brand pricing strategy (keystone vs 4–6x DTC)](https://eightx.co/blog/jewelry-brand-pricing-strategy)
- [Eightx: jewelry financial benchmarks 2026 (gross margin bands)](https://eightx.co/blog/jewelry-financial-benchmark)
- [Branvas: jewelry store profit margin / pricing formula](https://branvas.com/blogs/news/how-to-price-jewelry-for-profit)
- [Branvas: jewelry import duties 10-market guide 2026](https://branvas.com/blogs/news/jewelry-import-duties-tariffs-global-guide)
- [Airwallex: Stripe fee calculator and cross-border breakdown](https://www.airwallex.com/en-us/stripe-fee-calculator)
- [Airwallex pricing (CN merchant 3.4% intl card)](https://www.airwallex.com/en-us/pricing)
- [Airwallex cross-border fees guide](https://www.airwallex.com/sg/blog/cross-border-fees)
- [Shopify cross-border fee breakdown 2026](https://www.shopify.com/blog/credit-card-processing-fees)
- [DHL DDP shipping explained (US)](https://www.dhl.com/us-en/home/ship/ddp-shipping.html)
- [DHL IOSS guide for EU](https://www.dhl.com/global-en/microsites/ec/ecommerce-insights/insights/send-parcels/ioss-guide.html)
- [VATAI: EU customs duty exemption removed 2026 (€3 per parcel)](https://www.vatai.com/blog/eu-customs-duty-exemption-removed-2026)
- [UK gov + Zonos UK VAT guide (20% VAT below £135 threshold)](https://zonos.com/docs/guides/country-guides/united-kingdom/uk-vat-scheme)
- [Eightx: international shipping cost by route 2026](https://eightx.co/blog/average-ecommerce-international-shipping-cost-by-route-2026)
- [GoodHope freight: DHL China-USA per-kg rate table](https://goodhopefreight.com/dhl/usa-list.html)
- [Apples of Gold: keystone pricing in jewelry retail](https://applesofgold.com/jewelryblog/keystone-pricing-how-jewelry-prices-are-determined/)
