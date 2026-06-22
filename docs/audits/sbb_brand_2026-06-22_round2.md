# Peer Audit Round 2 — YÀN Atelier vs Quiet-Luxury Indie Fine Register

**Reviewer:** Brand Director, Sophie Bille Brahe (Copenhagen)
**Subject:** https://yan-atelier-site.pages.dev (commit `477c853`)
**Date:** 2026-06-22 (re-audit, +2h after R1)
**Prior score:** 6.8/10
**Lens:** Same. SBB / WWAKE / Pippa Small / Alighieri register.

---

## Score: **7.4 / 10** (+0.6)

The two loudest v3.2 register-breakers are gone. The page reads quieter above the PDP fold than it has in any prior build. Not yet WWAKE (8.0+), but the Stone & Strand drift line has been re-drawn in the correct direction. A six-tenths move in two hours is real, not cosmetic.

---

## What got fixed — does it earn its place?

**1. Klarna pink banner — gone. Earns it.**
The `#FFB3C7` pill was the single loudest pixel on any PDP. Killing it globally (not just market-gated) is the correct read. The page no longer asks a $400 buyer to think in four-payment chunks. SBB-grade restraint restored. Good.

**2. Payment Icons strip — gone. Earns it.**
The Visa/MC/Amex/AP/PayPal row was the Shopify tell. Self-contradiction with the line-1675 CSS comment is resolved. The PDP fold now reads: photo · title · price · stock badge · CTA. That is the four-element grammar SBB, WWAKE, Pippa Small, and Alighieri all use. You are finally in their grammar.

**3. The pair removed together, not one-at-a-time.**
This matters more than either fix individually. Two hours is a serious-team response time. The R1 critique landed, was triaged correctly, and shipped without negotiation. That is a brand-discipline signal in itself.

---

## What's still broken

**Carried over from R1 — not yet touched:**

- **Series taxonomy still in the data layer** (`PRODUCTS[].series`: 蝶谱 / 花信 / 信物 / 四季 / 发饰). Hidden from view ≠ deleted. Will leak via category filters, breadcrumbs, or any future faceted-search build. Rename to `brooch / bracelet / pendant / hairpin` or drop the field. Same rule as R1.

- **Testimonials still read as the hero line bounced back.** "The moment I held it to the light…I understood why this takes months to make." This is *your* plique-à-jour copy in customer voice. "My mother asked where I found it…she wanted one too." is the hero line ("People will ask where you found it") paraphrased. Real customers do not write your headline back at you. Trim or replace with a flatter, less quotable line. R1 verdict stands.

- **Green stock-dot still on the DTC border.** `#4c8c4a` against cream remains the closest the page comes to a Mejuri convention. Demote to `--hush-soft` grey when you next touch the file. Low priority, but it is the next millimetre of drift.

**New things I now see (the pink was hiding them):**

- **Hero photo on the homepage now carries the whole brand load.** With the pink banner removed, the eye has nowhere else to land on the PDP fold above CTA. This is correct, but it raises the photography bar. The current butterfly hero holds. Several other SKU photos do not yet hold at this exposure level. Photography is now load-bearing in a way it wasn't when Klarna pink was sucking attention.

- **"Verified buyer" star widget on testimonials is a Trustpilot-grade tell.** Five-star ratings + initials (Lisa M., Sophie W., Jennifer K.) is a DTC-review convention. SBB shows no stars, no initials, no ratings — just press quotes and editorial. With Klarna gone, this is now the loudest DTC-template signal on the site. Flag for round 3.

---

## The AI-disclosure badge — discreet enough or noisy?

**Verdict: discreet. Earns its place. Prominence ≈ 3/10, which is correct.**

Small monospace, bottom-right, semi-transparent dark bg, "AI 辅助" — this is the right register for the disclosure. It reads as a footnote, not a feature. The monospace choice is good (signals system/meta-text, not product copy), and bottom-right corner is the right placement (out of the buying flow, in the reading-the-fine-print zone).

**One concern:** "AI 辅助" alone is ambiguous — assisted *what*? The photo? The copy? Render? On a page that sells handmade craft, a vague AI badge is a small trust knife. Specify: "AI 辅助渲染" / "AI-assisted render" or "示意图 · AI 渲染" / "Visualization · AI-assisted". The label should disclose exactly what was machined, so the bench claim stays clean.

Not urgent. Not a register-breaker. But finish the sentence.

---

## Verdict line

> The pink is dead and the page can breathe again — now the photography has to actually be as good as the bench claims it is.

— SBB
