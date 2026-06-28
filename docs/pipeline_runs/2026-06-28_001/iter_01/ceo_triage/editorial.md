# CEO Triage · Editorial archetype · iter 01

> Archetype: T Magazine senior editor / ex-Pentagram strategy / 15yr at Wallpaper.
> Trigger: would this ship at Pentagram for a Maison-tier client? What's the typographic argument?

## Iteration goal (1-line)

Retire Italiana from the display tier and install a typographic argument the persona panel can score above DTC-template — without paying foundry rent, without breaking the China firewall self-host rule, and without pretending we are Alighieri.

## Pre-mortem (3 specific expected failures — Phase 6 will check these)

1. **Camille will recognize Cormorant as the new Italiana.** If we ship Cormorant parent at H1 with default tracking and no opsz, the FR curator will say it's "Etsy art-book templating, just one tier above Italiana." The Cormorant cargo-cult on Pinterest moodboards is real (research doc 3 explicitly warns). Camille's bar is "have I seen this on a wedding-stationery board this year." If yes, fail. Without aggressive tracking (-0.022em min at H1), a small-caps overline cut (Cormorant SC), and an opsz-substitute hierarchy via parent/Garamond split, she will flag the swap as lateral.

2. **Sophie (SBB lens) will flag the missing italic register.** SBB ships Elza with multiple weights *and* relies on body Assistant for tone shifts. If we swap Italiana→Cormorant but never deploy Cormorant Italic anywhere visible (Hu Yan signature line, "Renaissance goldsmiths did" Plique H2 leading clause, or atelier essay accents), the swap reads as a font replacement, not a system upgrade. The italic is where the editorial argument actually lives. Sophie will say "still feels single-register."

3. **Giulia (T Magazine adjacent) will catch the accent-collision on `plique-à-jour`.** Research doc 3 names this specifically: Cormorant has "flamboyantly tall accents" and line-height: 1.05 is the minimum on H1. If we ship without auditing every accented headline (`plique-à-jour`, `à votre service`, `café`, `Hu Yán`) and the `à` collides with the preceding descender in even one hero state, Giulia will read it as amateur typesetting and the editorial-tier claim collapses immediately. This is the bug that Stripe-engineering-blog craftsmanship Investor named in Cycle 3 review — Claude was praised for *catching* this class of bug; if we ship it now we lose that credit.

## P0 (ship this iter)

| Item | Why high-leverage from EDITORIAL lens | Effort | Source research |
|---|---|---|---|
| Swap `--font-display` from Italiana → **Cormorant** (parent, NOT Cormorant Garamond) at weights 500 + 600 | Doc 3 is unambiguous: the parent is the display optimum the designer engineered; Garamond is the body sibling. Using Garamond as display when the parent exists is the typographic equivalent of typing in a font picker. Pentagram would not. | 30min CSS + self-host 2 woff2 (~50KB) | research/03 |
| Keep Cormorant Garamond 400 at body — no change | Honors Thalmann's hand-rolled opsz system. The parent/Garamond split IS the optical-size argument we make to Camille. | 0 | research/03 |
| Add **Cormorant SC** at 11px for overlines (PLATE NO. / EDITION / 卷次) with letter-spacing 0.16em | Real small-caps cut, not CSS `text-transform`. This is the Alighieri move (`mrs-eaves-roman-all-small-ca`). Closes the persona panel's small-caps-look-fake critique permanently. | 1hr (find every overline occurrence, swap) | research/01, research/03 |
| Deploy **Cormorant Italic** at H2 lede phrase + Hu Yan signature line + any "in our atelier" / "at the bench" accent | Italic = editorial register signal. Without it the swap is a replacement, not an argument. SBB / Alighieri / Chesnais all deploy italic deliberately. | 1.5hr (audit 8-12 sites, hand-place) | research/02 (Fraunces italic), research/03 (Cormorant italic) |
| Force `line-height: 1.05` minimum on display H1 + audit every accented string (`plique-à-jour`, `à`, `é`, `Hu Yán`) for accent-collision at 3 breakpoints (1440 / 1024 / 390) | Research doc 3 names this as the #1 production gotcha. Shipping this bug = panel sees amateur typesetting = entire swap is net negative. This is the editorial equivalent of the JS template-literal backtick fix — a small infra discipline that gates whether the upgrade reads as deliberate. | 1hr audit + CSS guard | research/03 |
| Tighten H1 letter-spacing to `-0.022em` (Cormorant @ 4-5rem) and H2 to `-0.012em` | Default tracking is what makes Cormorant read templated. Negative tracking at display + positive tracking at overline = the typographic argument. | 30min | research/03 |
| Write 1-paragraph typography colophon in `BRAND.md` documenting "Cormorant (display) + Cormorant Garamond (body) + Cormorant SC (overline) + Noto Serif SC (CN, weight 500)" as the locked system, with rationale | If this isn't locked, the next session will revert under "let's try Fraunces" temptation. Pentagram clients have a documented type system; YÀN should too. | 20min | all 3 |

**Total P0 effort: ~4.5hr Claude time + 0 user time + 0 cost.**

## P1 (ship if budget allows)

| Item | Why from EDITORIAL lens | Effort | Source research |
|---|---|---|---|
| Run a 1-page **A/B staging** of Cormorant vs Fraunces (Atelier or Maker page only) and capture screenshots for the user | Research doc 2's Fraunces case is genuinely strong — the SOFT + WONK + opsz axes give it a typographic argument Cormorant lacks. We should not foreclose Fraunces just because Cormorant is the safer ship. Capture both, let the user/persona panel see them side-by-side. | 2hr | research/02 |
| Trial Cormorant Upright Cursive on ONE element only — Hu Yan signature line on Maker page | Doc 3 says it's "conditional accent only, never primary." But ONE deliberate use of an unslanted cursive on the maker signature is exactly the Chesnais English1776 move. High-risk, high-reward editorial detail. | 1hr | research/03 |
| Audit CN side: bump `:lang(zh) h1` to Noto Serif SC weight 500 (not 600 — doc 3 warns 600 looks heavy next to Cormorant) | The bilingual register is currently fractured (Italiana doesn't carry CN). The swap is also a CN tightening opportunity. | 30min | research/03 |

## P2 (defer)

| Item | Why deferred | Effort | Source research |
|---|---|---|---|
| Explore custom-named sans (`Charlotte` / `A-Gothic` pattern via PP Editorial New rename) | Doc 1's highest-ceiling move ($0-150). But this is a sans direction, and YÀN's locked register is serif editorial. Sans pivot is a separate strategic decision, not a Phase 1 font swap. Revisit after the panel scores the Cormorant swap. | — | research/01 |
| Buy Mrs Eaves (~$50/yr Adobe Fonts) or Semplicita Pro (~$200 one-off) | Owner declined paid swaps. Re-raise only after photos ship + first sale on new font system + panel re-score. | — | research/01 |
| Switch to Newsreader (Production Type pedigree, opsz axis) | Doc 2 ranks #3 but flags it as "too quiet for hero." For a maker-led atelier site that needs hero punch, Newsreader is the wrong shape. Park for a future Craft-essay or Letters page. | — | research/02 |

## REJECT

| Item | Why rejected from EDITORIAL lens |
|---|---|
| **Playfair Display** | Research doc 2 is explicit and I agree harder: in 2026 this is the *boutique-hotel default*. Worse signal than Italiana. Pentagram would not. T Magazine would not. Reject permanently — and document the rejection in BRAND.md so no future iter reopens this. |
| **DM Serif Display** | Lateral move into a font already named "overused 2026" (TypeType). Reject. |
| **Tenor Sans** | 1 weight + sans + Roman-cap. Same fatal hierarchy budget as Italiana. Reject. |
| **EB Garamond as display** | Category error — it's a 12pt text Garamond. Doc 2 is correct. Reject as display; keep it on the bench as a potential long-form Craft essay body face only. |
| **Cardo** | Academic / Greek polytonic register. YÀN is an atelier, not a critical edition press. Reject. |
| **Lora** | Doc 2: "Google Fonts safe choice — competent and unremarkable." Doesn't address Camille's template critique. Reject. |
| **Cormorant Infant** | Doc 3 is right: softened single-story `a/g/y` reads "children-adjacent." YÀN's authority signal needs the double-story `g`. Reject. |
| **Cormorant Unicase** | Doc 3: "Quirky, dates fast." Reject. |
| **Keep Italiana, "for now"** | Defensible only if Italiana is confined to ornamental wordmark slot AND another family carries the hierarchy. Doing nothing means Camille's score stays at 5/10 and the swap question reopens every cycle. Reject the "do nothing" option specifically because it's the highest-likelihood Phase 5 trap. |

## Where I diverge from cross-agent default

The 3 research agents converge on **Cormorant as the safe play** (doc 2 ranks it #1, doc 3 endorses the parent variant). I agree — but the editorial lens adds a sharper read the research docs don't make:

**The swap is not the deliverable. The swap-plus-italic-plus-small-caps-plus-tracking is the deliverable.** Just swapping the font file changes nothing the panel will reward. Research doc 1 shows Pippa Small running the entire brand on Playfair Display alone — *and Pippa is the cleanest counter-example to "Google = template"* because of how she deploys it (5 cuts, italic, deliberate). Cormorant without Cormorant Italic, Cormorant SC, and tightened tracking is just Italiana with a different file name. The agents researched the font; I am triaging the *typographic argument*.

Second divergence: **Fraunces deserves a real A/B, not a research-document dismissal.** Doc 2 ranks it #2 but the SOFT + WONK + opsz quad is genuinely the more distinctive editorial argument — Are.na and Studio Böreck are stronger peer signals than Cormorant's wedding-stationery exposure. The reason it's P1 (A/B) not P0 (ship) is risk management — Cormorant is the lower-variance ship, Fraunces is the higher-ceiling ship. Pentagram would test both. Decide after seeing screens.

Third divergence: the agents are silent on **the BRAND.md colophon**. From an editorial lens this is non-negotiable — every type system that survived more than 6 months at Pentagram had a documented argument. If we ship the swap and don't write down *why* (parent for display, Garamond for body, SC for overline, italic for accent, Noto Serif SC 500 for CN, no Playfair forever), Phase 6 will reopen the question and we'll burn this iteration's gains.

## Open questions for user

1. **Cormorant Italic on Hu Yan signature line — yes or no?** This is a register choice (atelier-warm vs cold-curatorial) and the owner has had strong feedback on personal-narrative voice (06-03 atelier-voice rule). I read italic on a *signature* (not in commerce copy) as compatible with the rule. Confirm.
2. **Fraunces A/B — does the user want to see it before we commit?** P0 ships Cormorant; P1 stages Fraunces. If user wants to defer Fraunces entirely, drop P1 item 1.
3. **Cormorant Upright Cursive (P1 item 2) — willing to risk one decorative element on Maker page?** This is the Chesnais move. High-reward, but if it lands wrong the persona panel will hammer it. Default: skip unless explicit OK.
