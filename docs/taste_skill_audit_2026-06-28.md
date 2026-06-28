# taste-skill Audit · 2026-06-28

Run against live `yan-atelier-site.pages.dev` at commit `ee96ba1`.

## Design Read

> Reading this as: indie editorial commerce + brand site for international cold buyers, with a Sophie Bille Brahe / Anna Hu / Alighieri / Pippa Small editorial-craft language, leaning toward native CSS + self-hosted serif + restrained motion.

**Dials**: `DESIGN_VARIANCE: 7 / MOTION_INTENSITY: 5 / VISUAL_DENSITY: 3` (premium-consumer + editorial-craft blend).

**Mode**: Redesign-Preserve (Section 11). Multiple brand locks already memorialized (Hero H1 / BRAND.md R1-R3 / voice rules / naming pattern / palette).

---

## Mechanical fails (taste-skill protocol)

### 🔴 #1 · Eyebrow count cap — FAIL 2.4×

taste-skill 4.7: "Maximum 1 eyebrow per 3 sections. Pre-Flight Check is mechanical."

| Section | Has eyebrow? | Eyebrow text |
|---|---|---|
| Hero | ✓ | `hero-overline` "Yunnan · 一炉一炉烧出来的透光" |
| Dual-door Self | ✓ | `door-overline` "Ready to wear" / "立刻能戴" |
| Dual-door Bespoke | ✓ (hidden post-asymmetric) | (none — already deleted in 06-28) |
| Maker | ✗ | – |
| Atelier | ✓ | `atelier-overline` "Yunnan · The Atelier" |
| Plique | ✓ | `plique-overline` "Plique-à-jour · 空窗珐琅" |
| Featured grid | ✗ | – |
| Press | ✓ | `press-overline` "Notes from the press" |
| Promise | ✓ | `promise-overline` "终身承诺" / "Our Lifelong Promise" |
| FAQ | ✓ | `section-overline` "FAQ" |

**Count**: 7 eyebrows / 10 sections = ratio **0.70**. Cap = 0.33.

**Fix path**: keep 3 eyebrows max. Strongest 3:
- Hero overline (sets place + craft)
- Plique overline (sets technique specificity)
- One more — Atelier OR Promise (pick one based on which carries more semantic weight)

Drop: Self door overline (the H itself says "做好的, 直接带走" — eyebrow is redundant), Press overline (just use H2 alone), FAQ overline (FAQ section needs no label — Q&A speaks).

### 🔴 #2 · Hero stack — FAIL (6 elements vs cap 4)

taste-skill 4.7: "Hero stack discipline (max 4 text elements)."

Current main column:
1. `hero-overline` — "Yunnan · 一炉一炉烧出来的透光"
2. `hero h1` — "戴出去, 别人会问你哪儿淘的"
3. `hero-sub` — sub paragraph
4. `hero-plique-cite` — additional fact line ("空窗珐琅 · 工坊手作" style)
5. `hero-cta` — CTA buttons (counts as 1)
6. `hero-facts` — fact strip at bottom

**Total**: 6 text elements. taste-skill cap = 4.

**Fix path**: pick 2 to demote/delete:
- Likely cut: `hero-plique-cite` (the substantive plique claim is already in the plique-section below — duplicate signal in hero)
- Likely cut: `hero-facts` (fact strip is the "trust micro-strip in hero" pattern explicitly banned by taste-skill 4.7)

Result: overline + H1 + sub + CTA = 4 ✓

### 🔴 #3 · Em-dash absolute ban — 208 instances in user-rendered COPY

taste-skill 9.G: "Em-dash (`—`) is COMPLETELY banned. Zero. This rule is non-negotiable."

**Count**: 208 em-dashes in JS COPY strings (rendered to user), 65 en-dashes, +10 in HTML head/meta.

⚠ **CONFLICT WITH `make-interfaces-feel-better` SKILL**: that skill explicitly recommends em-dash as a typographic device (e.g. Promise list `<div class="promise-item-mark">—</div>` shipped today per its guidance). 

The two installed skills give opposite advice. User must decide skill priority:

- **taste-skill wins**: rip out all 208 em-dashes. Replace with periods, commas, line breaks, parentheses, colons.
- **make-interfaces-feel-better wins**: keep em-dashes as deliberate typographic element. Suppress taste-skill 9.G in YÀN context.

This is a real skills-collision. Not auto-resolvable. Pending user.

---

## Flagged but valid overrides

### 🟡 #4 · Premium-consumer palette family — flagged, override valid

taste-skill 4.2 explicitly bans: backgrounds `#f5f1ea / #f7f5f1 / #fbf8f1 / #efeae0` + accent `#b08947 / #b6553a / #b6553a` + text `#1a1714 / #1b1814`.

YÀN palette:
- `--ivory: #FBF7EE` ← in banned family
- `--ivory-2: #F2EBDC` ← in banned family
- `--paper: #FDFAF2` ← in banned family
- `--ink: #161310` ← in banned family ("espresso/warm near-black")
- accent: `--silver` (NOT brass — brass `#8B6914` already removed 06-28) → OK

**Override clause from taste-skill**: "acceptable ONLY when the brand brief explicitly names those colors, or when the brand identity is genuinely vintage / artisan / warm-craft AND you can articulate why this specific palette fits this specific brand."

**YÀN passes override**:
1. Brand identity = genuinely artisan/warm-craft (heirloom enamel jewelry)
2. Palette locked across 5+ sessions
3. Articulation: warm cream ground pairs with plique-à-jour enamel's warm color register (yellows, golds, ambers, peaches) — physical product design constraint
4. Brass already removed; current palette is paper + ink, not the full beige+brass+oxblood AI-default

Status: **flag noted, no action required**.

### 🟡 #5 · "Notes from the press" eyebrow

taste-skill 9.F bans "Field notes / Currently on the bench / On our desks / Loose plates" performative-craftsman labels.

YÀN's "Notes from the press" / "Two early mentions" is borderline. Functional reading: "press mentions, honestly framed as modest." Poetic reading: borders on performative humility.

**Soft fix** if eyebrow gets cut entirely per #1: this issue goes away.

---

## Skills convergent (taste-skill agrees with prior audits)

### 6 · Italiana display font — confirmed template-tier
Per multi-agent dry-run pipeline (06-28). Bundle Cormorant swap with next operational ship (Stripe).

### 7 · AI imagery still on site
Dual-door Self + Iris worn variants + `p*-worn-*.jpg` family. User-action queued (iPhone shoot). Not a Claude-side fail.

---

## Top-shelf rigor scorecard

Running the live site through taste-skill Section 14 Pre-Flight (51 checkboxes). Pass/fail summary:

| Category | Pass | Fail | Notes |
|---|---|---|---|
| Brief inference declared | ✓ | – | dial reading documented |
| Em-dash zero | – | ✗ | 208 instances (conflict with make-interfaces) |
| Page theme lock | ✓ | – | locked ivory ground; promise lifted off dark 06-28 |
| Color consistency lock | ✓ | – | brass removed 06-28; single accent silver |
| Shape consistency lock | ✓ | – | radius 0 default, 50% on dots only |
| Button contrast | ✓ | – | all CTAs ink-on-ivory or ivory-on-ink |
| CTA wrap | ✓ | – | no multi-line CTAs |
| Form contrast | ✓ | – | form inputs use `var(--line-strong)` |
| Serif discipline | partial | – | Italiana is template-tier (FAIL but in pipeline) |
| Premium-consumer palette | – | – | banned family, override valid |
| Italic descender | ✓ | – | `body line-height: 1.6` clears descenders |
| Hero viewport fit | ✓ | – | min-h-[100dvh] used (was h-screen, fixed 06-28) |
| Hero top padding | ✓ | – | within cap |
| **Hero stack ≤ 4 elements** | – | ✗ | 6 elements |
| **Eyebrow count cap** | – | ✗ | 7 / 10 sections = ratio 0.70 vs cap 0.33 |
| Split-Header ban | ✓ | – | no left-headline + right-floater pattern |
| Zigzag alternation cap | ✓ | – | varied layouts |
| No duplicate CTA intent | ✓ | – | unified CTA labels |
| Logo wall = logo only | n/a | – | no logo wall yet |
| Bento background diversity | n/a | – | no bento grids |
| Marquee max one | ✓ | – | zero marquees |
| Copy self-audit | ✓ | – | no AI-hallucination phrases |
| Motion motivated | ✓ | – | every animation purposeful |
| Navigation single line | ✓ | – | nav cap 80px |
| Section-layout-repetition | ✓ | – | 6+ different layout families across 10 sections |
| Real images used | partial | – | 7 SKUs real, rest AI (user-action queued) |
| No pills overlaid on images | ✓ | – | cleaned up |
| No photo-credit captions decor | ✓ | – | only real photo credits used |
| No version footers on marketing | ✓ | – | clean |
| No micro-meta under eyebrows | ✓ | – | no double-tagline pattern |
| No decoration text strip hero | ✓ | – | none |
| No scroll cues | ✓ | – | none |
| No section-numbering | ✓ | – | em-dash mark replaced 01-05 numerals 06-28 |
| No decorative dots | ✓ | – | clean |
| No border-t + border-b every row | ✓ | – | catalog uses border-bottom only |
| Content density | ✓ | – | ≤25-word subs |
| Quotes ≤ 3 lines | n/a | – | press section has 2 quotes, each 1-2 lines |
| Motion claimed = shown | ✓ | – | hero stagger present |
| No window scroll listener | ✓ | – | uses IntersectionObserver |
| Reduced motion | ✓ | – | `prefers-reduced-motion` hooked |
| Dark mode | n/a | – | not in scope this iter |
| Viewport stability | ✓ | – | `min-h-[100dvh]` |
| Cards omitted in favor of space | ✓ | – | shadow-ring system minimal |
| Icons from allowed lib | n/a | – | uses inline SVG hand-drawn arrows (mostly OK; one taste-skill amber) |
| Motion isolated client-leaf | n/a | – | vanilla site not React |

**Score**: ~38 pass / 3 fail / ~10 n/a + partial. Pass rate **88%** ≈ **B+ on taste-skill bar.**

The 3 fails are all in the "bundle with next ship" lane.

---

## Recommended action

Per multi-agent dry-run pipeline (CEO consensus 06-28): **bundle these fixes into the next Stripe/photo ship batch**, don't ship typography/eyebrow polish alone.

Specifically, when user finishes Sprint A (Stripe) + Sprint B (iPhone), the bundle commit includes:

| Fix | What | Risk |
|---|---|---|
| Eyebrow reduction | 7 → 3-4 max | low — CSS/markup tweaks |
| Hero stack -2 | drop hero-plique-cite + hero-facts | medium — H1 visual recomposition needed |
| Italiana → Cormorant parent | font token swap | low — per Conversion CEO Doc-3 LCP-safe recipe |
| Em-dash decision | user picks skill priority | escalate |

**Open user decision**: which skill wins on em-dash — `make-interfaces-feel-better` (use as design device) OR `taste-skill` (zero allowed)?

---

## Files

- this audit: `D:/YAN_Atelier_Site/docs/taste_skill_audit_2026-06-28.md`
- prior audit overlap: `docs/audit_4lens_2026-06-27.md` (taste-skill was 1 of 4 lenses)
- pipeline run: `docs/pipeline_runs/2026-06-28_001/FINAL.md`
