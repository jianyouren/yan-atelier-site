# 5-Persona Convergence · 2026-06-28

Panel: 🇺🇸 Lauren (Brooklyn editor) · 🇬🇧 Sophie (London art consultant) · 🇫🇷 Camille (Paris gallery curator) · 🇦🇺 Megan (Sydney art teacher) · 🇮🇹 Giulia (Milan PR director). Each landed cold on `yan-atelier-site.pages.dev` (live = `dcebfc8`) in EN/Global market, walked Hero → dual-door → maker → atelier → plique → promise → FAQ → footer, scored 5 dimensions 1–10.

## Scores

| Dim | 🇺🇸 Lauren | 🇬🇧 Sophie | 🇫🇷 Camille | 🇦🇺 Megan | 🇮🇹 Giulia | **avg** |
|---|---|---|---|---|---|---|
| Aesthetic register | 6 | 6.5 | 4 | 5 | 5.5 | **5.4** |
| Commerce trust | 4 | 5 | — | 6.5 | 6 | **5.4** |
| Craft credibility | 7 | 8 | 8 | 8.5 | 8 | **7.9** ⭐ |
| Price clarity | 6 | 4 | 2 | 4 | 4 | **4.0** ⚠ |
| Next-step clarity | 6 | 6.5 | — | 6 | 7 | **6.4** |
| **Overall** | **5.8** | **6.0** | **5.0** | **6.0** | **6.1** | **5.78** |

Below 6 avg ≈ "not yet conversion-ready for cold indie-luxury buyers." 4-of-5 personas would bounce at checkout step.

## Convergent strength (5/5 unanimous)

⭐ **Craft history page = 7.9/10 (the panel's highest score across all dims)** — Mérode Cup / Cellini / Lalique / Feuillâtre / Thesmar citations + the **honest "no historical Chinese plique-à-jour tradition, returned via Yunnan workshop in 20c"** framing earns trust across all 5 markets. FR explicitly: this is exactly the framing French buyers want. AU explicitly: "no-appropriation-flag" reading. **Don't touch this page.**

## Convergent deal-breakers (4-5/5)

### 1. ⛔ Mailto Reserve flow disguised as checkout (5/5 implicit, 4/5 explicit)
- 🇺🇸 "the Reserve flow is a mailto pretending to be a checkout" — explicit deal-breaker
- 🇬🇧 "Craft page museum-grade, checkout Substack-grade" — explicit deal-breaker
- 🇫🇷 "Stripe cart" listed in close-the-sale fixes
- 🇦🇺 "email-only Reserve" listed as top blocker
- 🇮🇹 Trust score 6.0 ← checkout cited

**Fix**: Wire SHOPIFY_VARIANTS scaffold to real Stripe / Shopify checkout. Existing scaffold per `[[project-shopify-roadmap-2026-06-24]]`.

### 2. 💱 USD-only display, no local currency / VAT-IVA-SEPA (5/5)
- Avg price-clarity score = **4.0/10** — the weakest dimension across all personas
- 🇫🇷 Camille at 2/10 (lowest single score on the panel)
- 🇬🇧 GBP + VAT/customs surface missing
- 🇦🇺 AUD or conversion needed; **DDP duties-paid is the single best AU signal but buried in Terms**
- 🇮🇹 EUR/IVA/SEPA missing
- 🇺🇸 USD shows but $369-729 sticker shock without clear "+0 duties on EU/UK/AU" near price

**Fix**: Currency switcher (USD/GBP/EUR/AUD) on PDP + Hero. DDP duties-paid promoted to PDP-visible trust strip (not buried in Terms).

### 3. 📷 Real photography missing (4/5)
- 🇫🇷 **"AI assisted render" badge on dual-door = explicit deal-breaker** for a curator
- 🇺🇸 Hero + dual-door AI tells = #2 close-the-sale fix
- 🇮🇹 Hu Yan bench portrait missing above-fold
- 🇦🇺 photography credibility cited
- 🇬🇧 not explicit but implied via overall 6.0

**Fix**: Real iPhone-grade bench portrait + 3-5 piece-in-hand photos. Kill the AI badge by replacing the image. This is the user-action backlog already noted in [[project-session-state-2026-06-28]] and earlier session states.

## Market-specific finds (1-2 personas only)

| Find | Markets | Severity |
|---|---|---|
| Hero H1 too "Net-a-Porter polite" — wants Pomellato/Vhernier confidence | 🇮🇹 only | Low — 4/5 disagree, US said hero works |
| Italiana display reads template / Anglo-DTC, not Chesnais/SBB | 🇫🇷 + 🇺🇸 lukewarm | Medium — user declined paid font swap in earlier audit; revisit post-photography |
| Translated-memoir Maker voice ("My mother, Hu Yan…") wants third-person editorial | 🇺🇸 only | Low — single market signal |
| Atelier voice too Anglo-restrained for the Milano bar | 🇮🇹 only | Low — register intentional per BRAND.md voice rules |
| Ethics specifics missing (recycled silver scraps etc.) | 🇦🇺 only | Medium — easy add but no factual ammo yet from user |

## Don't-touch / strengths to defend

- Craft history page rigor (7.9/10 unanimous)
- "Plique-à-jour as European technique fired in Yunnan" framing (AU + FR explicit praise; UK implicit)
- Hu Yan-as-Founder framing (no persona flagged this as problematic)
- Promise list (lifted off dark + em-dash mark — none of 5 panelists criticized)
- Dual-door asymmetric register (none flagged the recent asymmetric ship)
- Lifetime Promise + DDP claims (IT explicitly cited as strengths)

## Ship priority

| Priority | Item | Effort | Reach |
|---|---|---|---|
| **P0** | Stripe/Shopify checkout (kill mailto Reserve) | 1-2 weeks user-side decision + integration | 5/5 markets |
| **P0** | Multi-currency switcher (USD/GBP/EUR/AUD) + DDP surface on PDP | 1 day Claude edits if rates are static; longer if dynamic | 5/5 markets |
| **P0** | Real photography: Hu Yan bench + 3-5 piece-in-hand; replace AI-render imgs on dual-door | User-action (iPhone shoot acceptable per Megan) | 4/5 markets |
| **P1** | Italiana display swap (PP Editorial / GT Sectra / Migra) | 1 day Claude + ~$200-500/yr font hosting | 2/5 markets |
| **P2** | Ethics specifics (recycled silver, fair wage, etc.) — when user has facts | 1 day Claude | 1/5 (AU) |
| **DEFER** | Hero H1 register (IT vs US contested), atelier voice (IT-only), maker voice (US-only) | — | Contested |

## Bottom line

Panel verdict: **5.78/10 average ≈ "Strong craft, weak commerce."** The single biggest unlock — mailto Reserve → real checkout — is mostly a user-decision/integration task that compounds with the photography backlog. Once both ship: panel projects 6.8–7.2 trajectory (UK/IT to 7+; FR likely stays 6 until Italiana swap; AU to 7+; US to 7).

**The brand has a "Stripe-engineering-blog craftsmanship at the Craft page, Substack-amateur at the checkout" gap.** Closing that gap is the entire next move.
