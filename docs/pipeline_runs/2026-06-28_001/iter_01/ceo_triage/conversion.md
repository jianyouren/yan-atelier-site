# Conversion CEO Triage — iter_01 font swap

> Archetype: Conversion CEO (ex-Mejuri / ex-Cuyana). Lens: time-to-first-action, click-to-cart, mobile checkout, social proof. Bias: hostile to editorial moves that don't move revenue. Date: 2026-06-28.

---

## TL;DR

**This iteration is editorially correct but commercially mistimed.** Three research docs converge on a clean answer (kill Italiana, promote parent `Cormorant` 500/600 to display tier, keep Cormorant Garamond 400 at body, optionally add Cormorant SC for overlines). The execution is small (~50–75KB woff2 added, one token swap, one weight cascade fix). My problem is not the answer — it's the **slot it occupies**.

YÀN currently has **two queued user-action sprints that each move conversion by an order of magnitude more than a font swap**:

1. **Stripe checkout** (~30 min user-action) — kills the mailto-Reserve flow. The 5-persona panel called Reserve-via-mailto "the biggest commerce wound" and the Investor (2026-06-04) made Stripe a 30-day deal-killer. Every day without Stripe = real lost transactions; not hypothetical.
2. **iPhone photo sprint** (~30 min user-action) — 5/12 SKUs still on AI render. Every panel (5-persona × 2 cycles, 4-agent, 5-audit) lists photography as the **unanimous #1 bottleneck**. AI badges were just removed (2026-06-28), making the gap MORE visible, not less.

A font swap does not move add-to-cart on a site that **has no cart**. It does not move PDP conversion when the PDP image is still AI-rendered. The editorial CEO is solving a legitimate problem in the wrong order.

**My P0 list is narrow on purpose**: only the parts of the font swap that (a) reduce risk for the Stripe checkout that lands next, or (b) cost zero user-attention because Claude does them in the background while the user does the Stripe + photo work. Everything else is REJECT or DEFER.

---

## P0 — must-do (only if the Stripe + photo sprints are unblocked first)

> Hard gate: do not start this iteration's font work until Stripe Checkout Links are live AND at least 2 more SKUs have real photography. Until then this iteration is REJECTED (see below).

If/when the gate is cleared, these are the minimal P0s — and only because they cost Claude time, not user time:

- **P0-1. Token + cascade swap only (no axis experiments, no Fraunces, no Newsreader).** Adopt Doc 3's recipe verbatim: `--font-display: "Cormorant"`, parent at 500 (not 600 — too dark at hero), keep Cormorant Garamond 400 at body, keep Noto Serif SC at CN. **One commit, one token, one weight cascade**. This is the lowest-variance editorial improvement available and the only one I'd let near production during a checkout sprint.
- **P0-2. Preload + `font-display: swap` discipline.** Mandatory. We are about to send paid traffic to Stripe checkout; FOIT or layout shift on hero = bounce. Preload the 1–2 Cormorant weights that render above the fold; `font-display: swap` on everything else. Self-host (not Google Fonts CDN) — we already pay the CN firewall tax on Noto Serif SC, no new third-party request budget.
- **P0-3. Hard-test `plique-à-jour` and accented strings in H1.** Doc 3 flagged this — Cormorant's tall accents will collide with the previous line at default line-height. YÀN uses `plique-à-jour` in literally every hero variant. `line-height: 1.05` minimum at H1, verify in DOM. Skipping this = visible accent-clip on launch = brand-credibility hit at exactly the moment paid checkout traffic arrives.
- **P0-4. Lighthouse / Web Vitals diff before and after.** Cormorant adds ~50–75KB woff2 over Italiana. On 3G mobile (where Chinese visitors often sit) this is non-zero. Measure LCP + CLS pre/post. If LCP regresses >100ms or CLS >0.05, roll back to Italiana and re-plan. **A font change that costs conversion is not "editorial-only," it's negative.**

That's it for P0. Four items, all defensive, all Claude-side, all measurable.

---

## P1 — should consider, but later

- **P1-1. Cormorant SC for `EDITION` / `PLATE NO.` / overlines.** Editorially great per Docs 1 + 3. Conversion impact: zero. Schedule this for the iteration AFTER Stripe + photos land. Cost: trivial (+15KB woff2). Why it's not P0: it touches chrome elements that don't drive add-to-cart, and the cost of getting it wrong (broken small-caps fallback on Windows Chrome) is non-zero during a checkout sprint.
- **P1-2. CN weight bump cascade (`:lang(zh) body { font-weight: 500 }` etc.).** Doc 3's bilingual hierarchy correction. Editorially correct. Conversion impact: marginal — CN market is ~half of traffic per memory, but the weight bump is invisible to buyers who don't read CN. Bundle with P1-1.
- **P1-3. A/B-test Fraunces or Newsreader (variable opsz fonts).** Doc 2 makes a strong case that variable-axis fonts give a richer system. Conversion-CEO read: **adopt only if a paying customer has ever complained that YÀN's type feels template-tier**. Has one? No data on this. Until there's a single conversion-rate-relevant signal (bounce rate on PDP correlated with hero typeface, customer email feedback), this is editorial speculation. Defer to a future iteration AFTER 50+ orders shipped.

---

## P2 — interesting, not now

- **P2-1. Paid foundry buy (Mrs Eaves / Semplicita Pro, ~$200–500/yr).** Per Doc 1, this is the leap to the SBB/Alighieri tier. Real conversion impact: **unmeasurable in YÀN's current order volume**. At <50 orders/year a $200/yr font lease is fine; at zero orders/year it's pure burn. Revisit at first Series-Seed conversation, not now.
- **P2-2. Commission a custom-named sans (Chesnais's `Charlotte` / Foundrae's `A-Gothic` pattern).** This is a brand-defining move and the right long-term ambition. Wrong time. Costs $0–$5K plus weeks. Revisit at 12-month mark per Strategic Path B + academy memo.
- **P2-3. Rename ornament accent in Cormorant Upright.** Cute, low-impact. Backlog.

---

## REJECT outright

- **REJECT-1. The iteration itself, executed THIS sprint, ahead of Stripe + photo work.** I'm going on record: **if Stripe and photos are not unblocked by EOW, this iteration should be paused, not run.** Font swap consumes Claude's bandwidth, owner's review cycles, and the multi-agent loop's adversarial budget — all of which are scarce. None of those resources are best-spent on a font when there is **no checkout** and **5/12 PDPs still show AI renders**. The editorial CEO will protest "but this is an easy parallel task" — it isn't, because every iteration carries a regression risk (see P0-3 accent collision; see P0-4 LCP regression), and a regression that lands the same week as Stripe is launched is exactly the kind of unforced error that costs first-month conversions.
- **REJECT-2. Playfair Display, DM Serif Display, Italiana-retained-as-ornament.** All three documents explicitly call these traps. Concur. Hard reject regardless of timing.
- **REJECT-3. Italiana → Cormorant Garamond at H1 (the brief's original premise).** Doc 3 corrects this: Garamond cut is for body, parent Cormorant is the display optimum. If we execute, execute the corrected version. Never the brief-as-written.
- **REJECT-4. "Let's also kill Italiana on the wordmark/logo."** Not in scope. Wordmark is brand IP — touching it during a conversion sprint is a separate decision tree.

---

## Opportunity cost — explicit math

| Move | User-action cost | Claude-time cost | Conversion lift estimate | Confidence |
|---|---|---|---|---|
| **Stripe checkout sprint (queued)** | ~30 min | ~2–4h | **+∞%** (going from 0 → any checkout) | Very high |
| **iPhone photo sprint (queued)** | ~30 min × 2–3 sessions | ~1h post-processing | **+15–40% PDP→cart** (industry benchmark for real vs AI product photos in fine jewelry) | High |
| **Cormorant font swap (this iter)** | ~5 min review | ~2h Claude + ~3h multi-agent loop | **+0–2% bounce-rate improvement** (best case, unmeasurable at current traffic) | Low |
| **Cormorant + axis font system (Fraunces/Newsreader future iter)** | ~15 min review | ~4h Claude + ~6h loop | **+0–3% editorial-perception lift** (panel-score only, not order-correlated) | Low |

The font swap is the smallest box in this table. Running it now while the two giant boxes are sitting queued is a process smell.

---

## Pre-mortem — what fails if we ship this iteration anyway

1. **Most likely failure mode (40%): nothing breaks, nothing moves.** Font swaps cleanly. Panel scores stop calling Italiana template-tier. Conversion KPIs unchanged. Claude burns 2h, multi-agent loop burns 3h, owner reviews for 5 min. Net cost: half a day of brand-team capacity for a panel-score adjustment. Acceptable if Stripe and photos are already done; expensive if they aren't.
2. **Accent collision in production (20%).** P0-3 skipped or imperfect. `plique-à-jour` clips into line above on a real device that wasn't tested. Visible on Home + Plique + multiple PDPs. Brand-credibility hit lands the same week as Stripe launch. Recovery: emergency hotfix, line-height patch, possibly 24–48h of degraded hero.
3. **LCP regression on 3G China (15%).** Cormorant 500 + 600 + Garamond + Noto Serif SC = font payload climbs. Mobile Chinese traffic gets a measurable LCP regression. CN visitors bounce ~5–10% harder. Discovered only post-launch via field metrics.
4. **CSS cascade collision with existing weight rules (10%).** YÀN's index.html is a single-file SPA with extensive inline CSS. The `:lang(zh)` weight cascade in Doc 3 will collide with existing weight rules in N places (project memory references φ-ratio type scale, paper-grain noise, lots of typography state). Each collision is a small visual regression. Aggregate: visible typographic inconsistency for 1–2 days while it's patched.
5. **Owner pulls Stripe attention to react to font feedback (10%).** Multi-agent loop produces panel-score deltas + editorial debate. Owner gets pulled into typography discourse during the week the actual Stripe sprint was scheduled. Stripe slips by a week. **This is the real cost.** The whole iteration could finish "successfully" and still hurt revenue by displacing the Stripe sprint.
6. **Cross-iter regression to a prior locked decision (5%).** Project memory shows BRAND.md R1/R2/R3 + Hero copy lock + 12 SKU rename are all load-bearing. Font cascade changes ripple through Hero overline, PDP titles, FAQ headings, footer colophon (deleted), Maker title (CN/EN asymmetric per Round 2 score). A font change touching all these surfaces invites a regression on a previously-locked surface, which the adversarial team will catch but at the cost of more cycles.

---

## My position on whether to run iter_01 at all

**RECOMMEND PAUSE.** This iteration should not run until at least one of these is true:

1. Stripe Checkout Links are live on at least 2 SKUs (e.g. the Iris Lattice family, since it has real photos).
2. iPhone photo sprint has delivered real product photography for at least 3 more SKUs.
3. Owner has explicitly looked at the Stripe and photo blockers and said "those will not happen for >14 days for [reason], use Claude capacity in the meantime."

If condition 3 holds and the iteration runs anyway, my P0 list is the minimal-risk path. **But the editorial CEO and I disagree on whether to run, and this should be surfaced to the user as a conflict, not papered over.**

If the user says "run it anyway because Stripe is genuinely 2+ weeks out and I want the brand-perception delta in the meantime," I downgrade my objection but hold the P0-3 and P0-4 gates hard. Conversion CEO does not pre-approve a font swap that doesn't have an LCP/CLS guard.

---

## Honest devil's-advocate against my own position

Three reasons I might be wrong to push pause:

- **(a) Editorial credibility IS conversion at this brand stage.** YÀN's investor positioning + 5-persona panel + Investor MAYBE→YES move at Round 3 (71/100) are all gated on "does this feel premium and intentional or templated and DTC?" If a typography-literate Series-Seed investor lands on the site between today and Stripe-launch day, Italiana could be the single visible artifact that triggers the "template-tier" read. In that narrow scenario, the font swap directly moves an investor-conversion event, which is the actual revenue engine right now (not retail orders). I do not have data on how many such investor visits the site is getting per week.
- **(b) The work is small enough to be a true parallel task.** Doc 3's recipe is ~2 hours of Claude work. If the owner is genuinely blocked on Stripe by a queue they don't control (Stripe approval, bank linkage, ID upload) and the photo sprint is weather/scheduling-dependent, then Claude doing the font swap in parallel is free utility, not displaced capacity.
- **(c) Cormorant is already partially loaded.** Per Doc 3 + project memory, Cormorant Garamond is already self-hosted at YÀN. Adding the parent variant is incremental, not a fresh family load. The font-payload risk in my pre-mortem is partly overstated — it's +50KB, not +150KB.

If any of (a)/(b)/(c) is decisive for the user, run with my P0 list and accept the small risk. If the user is on the fence, my call stands: pause this iteration, push the multi-agent loop's first-iter slot to a higher-leverage problem (Stripe button copy A/B, mobile PDP load time, real-photo PDP layout test).

---

## What I'd prefer this iteration's goal to be instead

If we're going to spend the multi-agent loop's first slot, spend it on one of these (each higher conversion leverage than a font swap):

1. **PDP buy-bar audit + Stripe checkout copy prep.** Iterate on the Reserve mailto → Stripe button transition, including button copy for USD/GBP/EUR/AUD post-multi-currency-switcher. Outcome: Stripe sprint lands faster + with tested copy.
2. **Mobile PDP < 60s checkout audit.** Five trigger-questions worth of work. Outcome: confirmed mobile checkout flow + photographed friction list owner can fix during the photo sprint.
3. **Hero CTA + first-fold trust-strip A/B prep** — for the day Stripe ships, we want to know which CTA pattern + which trust signal converts. Build the A/B harness now; flip the switch the day Stripe lands.

Any of these would deliver actual add-to-cart leverage. The font swap doesn't.
