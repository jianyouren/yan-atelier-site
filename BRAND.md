# YÀN Atelier · Brand Operating Rules

Living document. Rules added here are non-negotiable until explicitly retired in the same file. New rules go above the dated log section.

---

## R1 · Section titles name the job, never enumerate contents (2026-06-19)

Section titles, overlines, and sub-headings name the **job** the section does for the buyer. They never enumerate the section's current children, current inventory state, current taxonomy, or the count of items inside.

If you swap the inventory, the children, or the taxonomy, the title must still be true.

### Why
A title that derives meaning from its contents rots the moment the contents change. "12 in this batch, 4 sold" is a tombstone the day everything sells. "Three ways to reach us" breaks the moment you cut a channel. "From the same series" lies the moment you delete Series. Titles are commitments; they must outlive the surface they wrap.

### How to apply
- Before writing a title, ask: "Would this title still be true if I swap the contents?"
- If the answer is no, the title is enumeration, not naming. Rewrite to the **job**.
- Inventory facts and counts go into a **ribbon / strip** below or beside the title, where their decay is honest and visible.
- Generic AI-default labels ("Our Process", "Featured Products", "FAQ") are weak naming — prefer brand-voice naming when possible, but never enumeration.

### Worked examples
| Wrong (enumeration) | Right (job) |
|---|---|
| `12 in this batch. 4 sold.` | H: `Pieces ready at the bench. Take one home.`<br/>ribbon: `12 in batch · 4 sold` (auto-updates) |
| `Three ways to reach us` | `How to reach the bench` |
| `From the same series · You may also like` | `You may also like` (Series taxonomy was deleted) |
| `A Maker's Record / 匠人履历` | `About the maker` or `Background` |
| `Bespoke & In-Stock` (section name) | section name lives on the JOBS, never on the buckets |

### Banned phrasings (permanent)
- "Three / Four / N ways to X"
- "From the same [taxonomy that may not exist tomorrow]"
- "X in this batch, Y sold" (in titles — fine in ribbons)
- "Our Process" (AI-default; not enumeration but lazy naming — flag for rewrite)

---

## R2 · Voice by ZONE, not by section type or page (2026-06-19, revised same-day)

The site is divided into three zones by **buyer investment**, not by page identity or section type. Voice register is set per zone.

### The three zones

| Zone | Where | Voice | Reason |
|---|---|---|---|
| **Cold zone** | Home above-the-fold: Hero copy, hero meta bridge, dual-door (the part visible without scrolling) | **Strict commerce voice** + 3-second parse test | Cold visitor's bounce window. Must be decodable instantly or they leave. |
| **Warm zone** | Home below-the-fold (Marquee, Maker, Atelier, Plique, Direction, Featured, Promise, FAQ) + sub-views reached via nav (catalog, gift) | **Atelier register allowed** (R1 enumeration rule still applies) | Buyer scrolled or clicked = opted into more content. Can handle depth. This is where YÀN's brand moat (plique, Yunnan, 800°C) lives. |
| **Deep zone** | Dedicated pages: /craft, /about, /consult, /heritage, /legal | **Atelier register encouraged** | Buyer actively navigated to a deep page = fully opted into depth. |

### Why ZONE not PAGE or TYPE
- **Why not page location** — strips Home of its differentiator. Sophie Bille Brahe / Anna Hu / Alighieri all run atelier register below the home fold. Descending Plique / Maker / Atelier sections to commerce voice would make YÀN look like Mejuri.
- **Why not section type** — rule inflates ("this section discusses Craft, so it's exempt") and R1 starts leaking. Zones are physical and verifiable.

### The 3-second test (cold zone gate)
A cold visitor lands on Home. In 3 seconds, can they answer:
1. What is this site selling?
2. What makes it different from generic e-commerce?

If yes on both — cold zone copy passes. If a phrase requires brand knowledge or art-historical literacy to parse, it does not belong above the fold.

### Footer exception
Footer tagline is technically cold zone (visible on every page) but is conventionally a brand-voice region. Atelier register allowed in tagline only; nav columns and address remain commerce voice.

### Concrete current-state mapping
- **Cold-zone, must descend**: Hero H1, dual-door H + ribbon, hero meta bridge — all already commerce voice after D1/D2.
- **Warm-zone, atelier kept on purpose**: Plique section H "Hold it to the light. Renaissance goldsmiths did.", Atelier section H "Colour fired at 800°C. It does not fade.", Maker section H — all permitted.
- **Deep-zone, atelier expected**: Craft article, About bio paragraphs, Consult Bespoke flow.

---

## R3 · Trust info lives inline near CTA on PDP, never as top promo bar (2026-06-19)

On product detail pages, trust micro-copy (returns / shipping / lifetime care) lives **inline near the CTA** — not in a top promo bar that competes with the product for mobile viewport. Top promo bar is permitted ONLY for editorial / seasonal merch announcements, never for shipping/returns terms.

### Why (evidence-led)
Audit of 7 indie fine-jewelry benchmarks (Sophie Bille Brahe, Pippa Small, Alighieri, WWAKE, FARIS, Catbird, Mejuri) on PDP mobile, 2026-06-19:
- **5/7 brands** put trust info **inline near CTA** (badges / pills / one-line strips). This is the dominant pattern.
- **WWAKE** — the closest aesthetic peer to YÀN (small-batch, made-to-order, warranty-bearing) — uses **zero top promo bar** and runs a 3-pillar inline trust callout (Made / Crafted to last / Shipping & Returns).
- **Catbird and Mejuri** reserve their top bar for editorial / seasonal merch ("Just Landed", "Father's Day Gifts"), **not** shipping trust. Trust is inline.
- Of the 3 brands that DO use top bar for trust (SBB / Pippa / Alighieri), 2 of 3 **also carry inline trust** — top-bar-as-only-trust-channel is an SBB-only edge case (and SBB has no sticky bottom CTA so its top bar is its only persistent chrome).

The "promo bar must carry shipping copy" assumption is a Shopify default, not a benchmark behavior.

### How to apply
- PDP mobile: top promo bar hides on `body:has(#view-product.active)` (already implemented G3).
- Inline trust strips already render twice on PDP body: `.pdp-v2-buy-trust` under hero buy block (line 9084) + `.pd-trust-strip` mid-page (line 9146). Both pull from `pdTrustReturns / pdTrustShipping / pdTrustCare` COPY keys.
- If future top promo bar copy is added, it must be editorial / seasonal (new piece announcement, ship-by date for gifts), NOT shipping terms.
- If trust info needs to evolve, edit the inline strips in COPY — never push it back to the top bar.

### Banned phrasings (permanent — top promo bar)
- "Free shipping" / "Lifetime care" / "Returns" / "Warranty" type lines as top-bar default content.
- Persistent top-bar trust strip (always-on) competing with the product for mobile viewport.

---

## Dated log

- **2026-06-19** — R1 (section-title rule) and R2 (commerce voice contract) committed after grilling cycle. Trigger: dual-door H "12 in this batch, 4 sold" was enumeration disguised as naming; EN nav "Shop / Gift" was already commerce voice while CN was holding atelier register inconsistently.
- **2026-06-19 (revised same day)** — R2 reframed from PAGE-location to ZONE-by-buyer-investment after the original PAGE rule was found too restrictive for a luxury craft brand. SBB / Anna Hu / Alighieri benchmarks all run atelier register below home fold; descending to commerce voice on warm-zone sections would strip YÀN's differentiator. Cold-zone strictness retained because of the 3-second parse test.
- **2026-06-19 (late)** — R3 (PDP trust pattern) committed after evidence-led research on 7 indie fine-jewelry PDPs. Trigger: G3 audit hid promo bar on PDP mobile to reclaim 28px viewport. Initial concern was loss of trust info, but research showed WWAKE / Catbird / Mejuri / FARIS all keep trust inline near CTA, not in top bar — and YÀN's site already renders 2 inline trust strips on PDP. Rule formalizes the pattern.
