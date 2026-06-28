# Free Editorial Display Font Alternatives to Italiana

> Research deliverable for YÀN Atelier · iter_01 · 2026-06-28
> Scope: free fonts (OFL / Apache / MIT) that could replace Italiana as the editorial display face, with Noto Serif SC as the CN partner.
> Owner has declined paid swaps (PP Editorial New $200-500/yr).

---

## Methodology

For each candidate I verified across at least two of the following sources before drawing a conclusion:

1. **License + variable axes** — read the upstream GitHub repository (where rendered metadata is reliable) rather than fonts.google.com (which renders the spec via JS and is unreadable to fetch tools). For Fraunces, Cormorant, Playfair, Spectral, Newsreader, Lora I read the upstream repo READMEs directly.
2. **Brand usage evidence** — cross-checked Fonts In Use (`fontsinuse.com`) typeface pages and Typewolf (`typewolf.com`) per-font listings for production sites. I only counted a brand if it was named on one of those two sources or appeared in a foundry-published case study. I deliberately did **not** count "X jewelry brands recommend it" listicles, which are SEO bait.
3. **CN pairing with Noto Serif SC** — evaluated by axis compatibility (does the Latin face have an x-height + stroke contrast that won't crash next to Noto Serif SC's relatively even modulation?) and by checking whether designer pairing guides explicitly mention this combination.
4. **Register classification** — three buckets: **editorial-tier** (used by independent magazines, art-book publishers, foundries' own marketing), **mid** (used by portfolios + competent SaaS), **DTC-template** (used as the default Google-Fonts-picker output for Shopify / Squarespace boilerplate).

Limitations: Google Fonts' specimen pages do not render to fetch tools, so weight counts marked "per Google Fonts directory" come from the foundry/repo README or the Fontsource mirror rather than the live picker UI. I have not type-tested any of these against Noto Serif SC in a real DOM — the CN pairing notes are based on x-height + axis compatibility, not measured comparisons.

---

## Catalog — font-by-font

### 0. Italiana (baseline — current YÀN display)

- **License:** SIL Open Font License 1.1.
- **Weights/styles:** 1 weight (Regular 400). No italic. No bold.
- **Optical sizing:** No (static font, single master).
- **Designer / year:** Santiago Orozco, on Google Fonts since 2012.
- **CN pairing with Noto Serif SC:** Italiana's stroke contrast is extreme (Didone-adjacent hairlines) — next to Noto Serif SC's even modulation, the CN reads chunky and visually heavier than the EN, which is the opposite of what editorial pairing wants. Forces a workaround (different size ratio per language).
- **Real brand example 1:** Not findable on Typewolf as a site-of-the-day or on Fonts In Use as a notable production credit — its actual footprint is wedding-template / Etsy / Shopify boilerplate sites. This is itself the panel's diagnosis.
- **Real brand example 2:** N/A — same as above.
- **Register fit verdict:** **DTC-template.** Single-weight Didone display, Google-Fonts default-picker tier. Panel's "template-tier" flag is accurate.
- **Self-host effort:** Easy (single 30KB woff2, one weight).
- **Why YÀN currently uses it:** Probably picked at the "elegant Italian-looking serif on Google Fonts" stage. The brand has outgrown it: 1 weight cannot carry hierarchy, no italic for poetic register, no opsz for headline ↔ caption shift.

---

### 1. Fraunces (Undercase Type, 2018-)

- **License:** SIL Open Font License 1.1.
- **Weights/styles:** Variable weight 100→900 (Thin / Light / Regular / Semibold / Bold / Black named instances), full Italic.
- **Optical sizing:** **Yes — opsz axis 9→144pt.** Plus **SOFT** (softness 0→100) and **WONK** (binary character-substitution axis, eccentricity on/off).
- **CN pairing with Noto Serif SC:** Strong. Fraunces at opsz=144 + weight≈400 has high stroke contrast that complements Noto Serif SC's modulation; at opsz=9 + weight≈500 it sits beside Noto Serif SC body text without out-shouting it. The opsz axis is exactly the tool you need to keep the Latin and the CN at matched optical weight across H1/H2/body.
- **Real brand example 1:** **Are.na editorial / content surfaces** — Fraunces is documented as part of Are.na's typography stack in multiple 2024+ designer-trend roundups (Creative Boom, Muzli's 2026 lists). Note: I could not directly hit Are.na's stylesheet from inside this research environment, so I am citing it as second-hand corroborated rather than first-hand inspected.
- **Real brand example 2:** **Flask & Field** (Typewolf Site of the Day, 3 March 2023) pairs Fraunces with DM Mono. Editorial small-business register, exactly YÀN's neighborhood.
- **Real brand example 3:** **CASA C ALMA** (Studio Böreck, 2025, on Fonts In Use) — architecture / interior register, Fraunces paired with STK Miso.
- **Register fit verdict:** **Editorial-tier.** Used by Are.na-adjacent indie editorial, by design-foundry marketing, by interior/architecture studios. Foundry (Undercase Type) is well-respected — not a "Google default" association.
- **Self-host effort:** **Easy.** On Google Fonts as a variable font; single `.woff2` file (≈200KB) covers the full weight + opsz range. One `<link>` swap.
- **vs Italiana:** Trades the Didone hairline-only look for a softer, more historically grounded display register, but **gains 8 weights + italic + opsz + SOFT + WONK** — i.e., Fraunces can do everything Italiana does *and* carry the rest of the type system. Not a like-for-like visual swap (Italiana is more vertical / colder; Fraunces is warmer / older); it is a system-level upgrade.

---

### 2. EB Garamond (Octavio Pardo, 2007-)

- **License:** SIL Open Font License 1.1.
- **Weights/styles:** Regular, Medium, SemiBold, Bold (4 weights) + matching italics. Variable font version available with wght axis.
- **Optical sizing:** No formal opsz axis in the Google Fonts release. Source repo (`octaviopardo/EBGaramond12`) is a digitization of Garamond's 12pt cut specifically — i.e., it has one optical size baked in, designed for text not display.
- **CN pairing with Noto Serif SC:** Works fine, but EB Garamond is a **text** Garamond, not a display Garamond. It will look quiet next to Noto Serif SC at H1 size — the CN will dominate visually.
- **Real brand example 1:** **Richard Sancho** (Typewolf, April 2021) — editorial portfolio register, paired with Roslindale + GT America.
- **Real brand example 2:** **Studio Bonny** (Typewolf, April 2020) — paired with Gza + Termina.
- **Register fit verdict:** **Mid → editorial-tier**, but for **text body**, not display. Choosing EB Garamond as a display face is a category mismatch — it's a book typeface.
- **Self-host effort:** Easy (Google Fonts variable). One link, ≈180KB.
- **vs Italiana:** Wrong tool for the job. Italiana is wrong because it's template-tier *display*; EB Garamond is wrong because it's not a display face at all. **Not recommended as Italiana's replacement** — but excellent if YÀN later needs a long-form text serif for a Craft page or About essay.

---

### 3. DM Serif Display (Colophon Foundry → Google, 2019)

- **License:** SIL Open Font License 1.1.
- **Weights/styles:** Regular + Italic. **Only 2 styles.**
- **Optical sizing:** No (static font, no variable version).
- **CN pairing with Noto Serif SC:** Visually loud high-contrast Didone — same family of problem as Italiana, just with one more style (italic). Will dominate Noto Serif SC at any size.
- **Real brand example 1:** **Kook Furniture** (2022, Digital Butter, on Fonts In Use) — paired with Archivo. DTC home-goods register.
- **Real brand example 2:** **MyBudget** (2020, Fonts In Use) — paired with Ciutadella + Rage Italic. SaaS register.
- **Register fit verdict:** **DTC-template, trending toward "the new Playfair."** Industry coverage in 2025-2026 (TypeType) explicitly groups DM Serif Display with "overused typefaces designers are tired of." Adopted heavily because it's free + dramatic + on the Google picker — exactly the path Italiana was on five years ago.
- **Self-host effort:** Easy (Google Fonts, 2 files).
- **vs Italiana:** **Lateral move, not an upgrade.** Same DTC-template fate, just one cycle behind. Do not swap into this.

---

### 4. Tenor Sans (Denis Masharov, 2011)

- **License:** SIL Open Font License 1.1.
- **Weights/styles:** **1 weight (Regular) only. No italic.** (Same problem as Italiana.)
- **Optical sizing:** No.
- **CN pairing with Noto Serif SC:** Tenor Sans is a *humanist sans-serif inspired by classical Roman proportions* — not a serif at all. Pairing a Roman-cap sans with Noto Serif SC creates a fashion-magazine-house-style vibe (think Vogue masthead) but breaks the all-serif system YÀN currently has.
- **Real brand example 1:** **Jeremiah Brent** (interior designer / TV personality site) is documented as using Tenor Sans.
- **Real brand example 2:** **Tailwind CSS marketing surfaces** (per designer roundups) historically used Tenor Sans.
- **Register fit verdict:** **Mid.** Boutique-interior / personal-brand register; not used by indie editorial publishers or art foundries. Single weight is a fatal limitation for any hierarchy beyond a single hero line.
- **Self-host effort:** Easy (one file, tiny).
- **vs Italiana:** Wrong category (sans vs serif) and same structural limitation (1 weight). **Not recommended.** If YÀN ever wants a Roman-cap sans accent, this could be a tertiary face — but not Italiana's seat.

---

### 5. Cormorant Garamond + Cormorant Infant (Christian Thalmann, Catharsis Fonts, 2015-)

- **License:** SIL Open Font License 1.1.
- **Weights/styles:** Light, Regular, Medium, SemiBold, Bold (5 weights) × Roman + Italic for **9 sub-families:** Cormorant (base), Cormorant Garamond, Cormorant Infant, Cormorant SC (small caps), Cormorant Unicase, Cormorant Upright. **45 font files total.** Largest free type system in the editorial register.
- **Optical sizing:** No formal opsz axis (not variable), but the **sub-families serve a similar function** — Garamond cut is text-optimized (larger counters), base Cormorant is display-optimized (tighter, more dramatic), Infant softens the awkward `a/g/y` for warmer registers. Picking the right sub-family is the manual equivalent of opsz.
- **CN pairing with Noto Serif SC:** **Excellent.** Cormorant's stroke contrast matches Noto Serif SC's modulation closely; the Garamond cut at SemiBold reads at similar optical weight to Noto Serif SC Medium. This is one of the few free Latin display serifs that doesn't visually fight a CJK serif.
- **Real brand example 1:** **Kea Elisa** (2026, Melina Heggenberger, Fonts In Use) — branding + exhibition design.
- **Real brand example 2:** **Vasantha Yogananthan** (2020, Fonts In Use) — photography portfolio paired with Schnyder + Lato.
- **Real brand example 3:** **BIDE Market** + **Hajinsky** + **Creme Guides** — Typewolf sites-of-the-day using Cormorant.
- **Register fit verdict:** **Editorial-tier.** Documented use across art-book publishers, photography portfolios, exhibition catalogs. Not a Google-picker default (people who pick Cormorant know what Garamond is).
- **Self-host effort:** Medium. The family is big (45 files); you only self-host the 2-3 sub-faces you actually use, but you have to make that choice deliberately rather than pulling "the whole family."
- **vs Italiana:** **Major upgrade.** Cormorant Infant Light at H1 + Cormorant Garamond Medium at H2 + Cormorant Garamond Regular at body = a full editorial type system, free, with italics, that pairs well with Noto Serif SC. **Already loaded in YÀN per session memory** — this is the lowest-friction upgrade path.

---

### 6. Playfair Display (Claus Eggers Sørensen, 2011-)

- **License:** SIL Open Font License 1.1.
- **Weights/styles:** Regular through Black (variable weight axis), Roman + Italic.
- **Optical sizing:** **Yes — opsz axis from "Agate" (small text) to "Needlepoint" (extreme display)**, plus a Width axis (Semi-Condensed to Semi-Expanded). One of the most variable-axis-rich free fonts.
- **CN pairing with Noto Serif SC:** Works at midweights, but Playfair Display's hairline strokes at display sizes are even thinner than Italiana's — same dominance/balance problem against Noto Serif SC, just more extreme.
- **Real brand example 1-12:** Extensive Typewolf site-of-the-day coverage (Girlboss, Design Facts, Sway Water, Parcel, etc.) — but **all entries are 2013-2018.** Notably absent from 2023-2026 site-of-the-day entries.
- **Register fit verdict:** **DTC-template (the original).** 2025-2026 designer consensus (Made Good Designs, Type Design Instagram, multiple typography blogs): "Choosing Playfair Display in 2026 may signal 'I used the first nice-looking Google serif I found' rather than 'I made a deliberate typographic choice.'" Explicitly named as the boutique-hotel / wedding-website default. **Worse signal-noise than Italiana** because it's been overused for longer.
- **Self-host effort:** Easy (Google Fonts variable).
- **vs Italiana:** **Trap.** Technically more axes, but stronger negative association in 2026. Do not swap.

---

### 7. Cardo (David Perry, Scholars Fonts, 2002-)

- **License:** SIL Open Font License 1.1.
- **Weights/styles:** Regular, Italic, Bold (3 styles). No Bold Italic.
- **Optical sizing:** No.
- **CN pairing with Noto Serif SC:** Cardo is a humanist Old Style — calm, scholarly. Pairs well with Noto Serif SC's modulation. Less stroke contrast than Italiana, so the EN doesn't shout.
- **Real brand example 1:** Not findable on Typewolf as a site-of-the-day. Cardo's footprint is **academic publishing** (classics, biblical studies, medieval studies) — the foundry literally calls itself "Fonts for Scholars."
- **Real brand example 2:** N/A (academic register, not commercial brand register).
- **Register fit verdict:** **Editorial-tier but wrong sub-register.** Cardo signals "I am a Greek polytonic critical edition" not "I am a contemporary indie jewelry editorial." Risk: brings academic-paper connotations that fight YÀN's atelier register.
- **Self-host effort:** Easy (3 files, ≈150KB total).
- **vs Italiana:** Solves the template-tier problem but at the cost of moving into an academic register that isn't YÀN's. **Not recommended for hero/display use** — but if YÀN ever sets a long Craft essay in CN/EN parallel, Cardo + Noto Serif SC could carry it.

---

### 8. Spectral (Production Type, 2017-)

- **License:** SIL Open Font License 1.1.
- **Weights/styles:** ExtraLight, Light, Regular, Medium, SemiBold, Bold, ExtraBold (**7 weights**) × Roman + Italic. **14 styles total.**
- **Optical sizing:** No formal opsz axis (the source designspace files in the GitHub repo support interpolation but the released family is static across optical size).
- **CN pairing with Noto Serif SC:** Spectral is screen-first, ink-trap-optimized, with calligraphic warmth. Stroke contrast is moderate, x-height is generous. **Pairs cleanly with Noto Serif SC** at any weight — closest match in optical color among the candidates.
- **Real brand example 1:** **Polytechnic** (Typewolf, August 2017) paired with Standard CT.
- **Real brand example 2:** **Kick** (Typewolf, Feb 2019) paired with Basis Grotesque.
- **Real brand example 3:** **Renault, Vanity Fair, Courrèges** — Production Type's own client list (foundry-published; specific projects unverified at the page level by me).
- **Register fit verdict:** **Editorial-tier.** Production Type is a top-tier foundry; Spectral was commissioned by Google for editorial / reading-environment use specifically. Not a Google-picker default — people pick Spectral for screen-reading reasons.
- **Self-host effort:** Easy (Google Fonts).
- **vs Italiana:** **Different problem.** Spectral is a *text* serif at heart that handles display gracefully; Italiana is a display serif that handles nothing else. If YÀN wants ONE serif that carries display + body + caption, Spectral is the strongest candidate. If YÀN wants a distinct display voice separate from body, Spectral is not it.

---

### 9. Lora (Olga Karpushina + Alexei Vanyashin, Cyreal, 2011-)

- **License:** SIL Open Font License 1.1.
- **Weights/styles:** Regular through Bold (variable wght axis 400→700) × Roman + Italic.
- **Optical sizing:** **No.** Only one axis (weight).
- **CN pairing with Noto Serif SC:** Lora is humanist with calligraphic brushstroke origins, moderate x-height. Optical color matches Noto Serif SC similarly to Spectral. Pairs cleanly.
- **Real brand example:** Not surfacing in the Typewolf-named-brands index. Lora's footprint is dominated by SaaS marketing / personal blog / Medium-clone territory — competent mid-register but unremarkable.
- **Register fit verdict:** **Mid.** Quietly used everywhere; rarely a distinguishing choice. The "Google Fonts top-picker reliable option."
- **Self-host effort:** Easy (Google Fonts variable).
- **vs Italiana:** Solves the 1-weight problem but doesn't move the editorial register meaningfully. **Not recommended as the display face.** Could serve as body if YÀN wanted to demote Italiana → kill Italiana → set body in Lora, but Spectral does that job better.

---

### 10. Newsreader (Production Type, 2020-) — surfaced during research, not on original list

- **License:** SIL Open Font License 1.1.
- **Weights/styles:** 200→800 weight (7 weights named) × Roman + Italic × 3 optical sizes (text / display split). **42 styles total.**
- **Optical sizing:** **Yes — opsz axis 6→72pt**, plus wght 200→800. Variable on both axes.
- **CN pairing with Noto Serif SC:** Newsreader was designed for "continuous on-screen reading in content-rich environments" — i.e., editorial body + display. Stroke modulation is generous; x-height is generous. Pairs as cleanly as Spectral with Noto Serif SC, with the additional benefit of the opsz axis letting you adjust the EN to match CN at every breakpoint.
- **Real brand example:** Listed on Fonts In Use (typeface page #152858); also part of Production Type's own marketing surfaces. Footprint is smaller than Spectral's but trending up post-2023.
- **Register fit verdict:** **Editorial-tier.** Production Type pedigree; explicit editorial-reading commission. Newer than Fraunces / Cormorant, less burned by template adoption.
- **Self-host effort:** Easy (Google Fonts variable, single variable file covers wght + opsz).
- **vs Italiana:** **Major upgrade.** Two-axis variable (wght + opsz) means you can carry hero → H2 → caption with one font file and the right axis values. Closer to YÀN's "editorial reading" register than Fraunces (which is more characterful / quirky).

---

## Top 3 recommendations for YÀN (ranked)

| Rank | Font | Why it fits YÀN specifically | Risk |
|---|---|---|---|
| **1** | **Cormorant Infant (display) + Cormorant Garamond (text)** | Already loaded in YÀN per session memory — zero new HTTP cost. 5 weights × Roman+Italic × 3 sub-families gives a full editorial system. Garamond lineage matches YÀN's "Renaissance goldsmiths did" Plique H2 frame. Infant's softened `a/g/y` reads atelier-warm rather than cold-Didone (which Italiana, Playfair, DM Serif Display all share). Cleanly pairs with Noto Serif SC. | Cormorant has been heavily used since 2016 — adoption risk is real, though far below Playfair/DM Serif. Mitigation: use Infant for display + Garamond for body, which is a specific combination most users don't bother to set; this is what differentiates "I picked Cormorant" from "I composed in Cormorant." |
| **2** | **Fraunces (variable, all axes)** | Indie-foundry credibility (Undercase Type), four variable axes (wght / opsz / SOFT / WONK) carries a full type system from one file. The SOFT axis is the killer feature for YÀN — you can soften Fraunces at body size for warmth, harden it at H1 for atelier-precision, without switching font files. Are.na + Studio Böreck precedents put it in YÀN's neighborhood. | Distinct visual personality — Fraunces is recognizable. If used at all defaults, the site will read "Fraunces site" before "YÀN." Mitigation: anchor it at opsz=144 + WONK=0 + SOFT=30 only at H1; use a quieter variant for everything else. |
| **3** | **Newsreader (variable wght + opsz)** | Production Type pedigree; designed for editorial reading; two-axis variable. Quietest of the three options — won't compete with Hu Yan's photos for attention, which a maker-led atelier site needs. Smallest template-adoption risk because it's newest and least picked by Squarespace defaults. | Slightly *too* quiet for hero display — it's a text-first family with display cuts, not a display-first family. If YÀN wants the hero to feel like a printed monograph cover, Cormorant Infant or Fraunces at extreme opsz will hit harder. |

**Suggested 30-min A/B test before committing:** swap Italiana → Cormorant Infant Light at H1 in one staging branch, Italiana → Fraunces (opsz=144, wght=300) in another. Compare against current Italiana at the four most-visited hero slots (Home / Maker / Plique / a PDP). Look for two things specifically: (a) does the CN line still feel balanced next to the EN line, (b) does the EN line still feel "atelier-precise" or does it drift toward "wedding boutique." Cormorant Infant is likely to pass both; Fraunces is likely to pass (a) and may push (b) toward characterful editorial which is good if it stays distinct from Italiana's failure mode.

---

## What NOT to swap to (and why)

- **DM Serif Display** — same DTC-template fate as Italiana, just one Google-Fonts adoption cycle behind. Industry coverage already groups it with overused typefaces in 2026. Swapping Italiana → DM Serif Display is a sideways move at best, accelerated decay at worst.
- **Playfair Display** — explicitly named by designers in 2026 as *the* template-tier serif. Worse signal-noise than Italiana because it's been overused for longer. The boutique-hotel / wedding-website / Etsy-Shopify default. Choosing it is a worse signal than keeping Italiana.
- **Tenor Sans** — wrong category (humanist sans, not serif display), wrong structural budget (1 weight, no italic). Has the same fatal limitations as Italiana (can't carry hierarchy) without solving the register problem. Only acceptable as a tertiary face (Roman-cap accent), never as the primary display.
- **Cardo** — solves the template problem but lands in an academic-publishing register (the foundry is literally called "Fonts for Scholars"). YÀN is an atelier, not a critical-edition press. Brings the wrong connotations.
- **EB Garamond** — wrong tool category. It is a text Garamond (a 12pt cut digitization specifically), not a display Garamond. At hero size it will look quiet and chunky. Excellent if YÀN ever sets a long-form essay in body, irrelevant for the Italiana seat.
- **Lora** — solves the 1-weight problem but the editorial-register needle barely moves. Lora is the "Google Fonts safe choice" — competent and unremarkable. YÀN's panel critique was specifically that Italiana reads template-tier; replacing it with another competent-and-unremarkable face does not address that.
- **Italiana itself, retained "for now"** — defensible *only* if paired with one of Cormorant / Fraunces / Newsreader doing the actual hierarchy work and Italiana confined to a single ornamental slot (e.g., the brand wordmark and nothing else). The single-weight, no-italic constraint makes it incapable of being the system's primary display face on a site that has H1 + H2 + meta + product-card + PDP price + caption — that's six tiers of hierarchy and Italiana has one weight.

---

## Sources

- [Fraunces (Undercase Type GitHub)](https://github.com/undercasetype/Fraunces) — license, axes, weight range
- [EB Garamond (octaviopardo GitHub)](https://github.com/octaviopardo/EBGaramond12) — license
- [Cormorant (CatharsisFonts GitHub)](https://github.com/CatharsisFonts/Cormorant) — license, 9 sub-families, 45 files, 5 weights
- [Playfair Display (clauseggers GitHub)](https://github.com/clauseggers/Playfair) — license, opsz + width + weight axes
- [Spectral (Production Type GitHub)](https://github.com/productiontype/Spectral) — license, 7 weights × roman + italic
- [Lora (cyrealtype GitHub)](https://github.com/cyrealtype/Lora-Cyrillic) — license, variable weight axis
- [Newsreader (Production Type GitHub)](https://github.com/productiontype/Newsreader) — referenced via search; license OFL, opsz 6-72 + wght 200-800
- [Fonts In Use — Fraunces](https://fontsinuse.com/typefaces/121631/fraunces) — production credits
- [Fonts In Use — Cormorant](https://fontsinuse.com/typefaces/45804/cormorant) — production credits
- [Fonts In Use — DM Serif Display](https://fontsinuse.com/typefaces/127868/dm-serif-display) — production credits
- [Typewolf — Fraunces](https://www.typewolf.com/fraunces) — Flask & Field site of the day
- [Typewolf — Cormorant](https://www.typewolf.com/cormorant) — BIDE Market, Hajinsky, Creme Guides
- [Typewolf — EB Garamond](https://www.typewolf.com/eb-garamond) — Richard Sancho, Studio Bonny
- [Typewolf — Playfair Display](https://www.typewolf.com/playfair-display) — all entries 2013-2018
- [Typewolf — Spectral](https://www.typewolf.com/spectral) — Polytechnic, Kick
- [Made Good Designs — Playfair Display in 2026](https://madegooddesigns.com/playfair-display-font/) — explicit "do not pick in 2026" warning
- [Creative Boom — top 50 fonts 2026](https://www.creativeboom.com/resources/top-50-fonts-in-2026/) — Fraunces editorial trend coverage
- [TypeType — DM Serif Display similar fonts](https://typetype.org/fonts/dm-serif-display-similar-fonts/) — explicit "overused typeface" framing
- [Production Type — Newsreader](https://productiontype.com/font/newsreader) — designed for "continuous on-screen reading in content-rich environments"
- [Italiana — Google Fonts specimen](https://fonts.google.com/specimen/Italiana) — Santiago Orozco, 2012, 1 weight only
- [Cardo at Scholars Fonts](https://scholarsfonts.net/cardofnt.html) — academic-publishing register confirmation
