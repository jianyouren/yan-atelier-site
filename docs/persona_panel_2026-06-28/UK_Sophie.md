# Sophie · London · 38 · UK

*Cold-visit walkthrough of the live site at https://yan-atelier-site.pages.dev/ in `market="global"` mode, 2026-06-28. Reviewer = Sophie, 38, Hackney art consultant; reads Wallpaper*/Apollo; wears Alighieri, Pippa Small, Completedworks, Anissa Kermiche.*

---

## First fold (3-second parse)

Overline: **"Translucent enamel jewellery · fired in Yunnan"** — fine, factual, sets register. No exclamation, no "discover", no founder selfie. Good.

H1: **"Wear it. People will ask where you found it."** — clever, but reads more *Mejuri ad copy* than Apollo. It's an *engagement promise*, not an *object promise*. Alighieri would have written "A piece of medieval Italy, cast in 14k" — i.e. tells me what the *thing* is. This tells me what social effect it'll have. That's the Mejuri tic I dislike.

H2 sub: *"Five to ten firings, every one slightly different — no one else will be wearing the same piece."* — better. "Five to ten firings" is the kind of process granular fact I trust. The "no one else will be wearing" tag is unnecessary; it's already implied.

CTAs: "View the Collection" / "Find a Gift". Standard. "Find a Gift" is more Etsy than Apollo. I would've called the second one *Bespoke* or *At Your Service* like Pippa Small does.

Hero image: a model wearing a butterfly-wing piece. **No AI-render disclosure on the hero**, so I assume it's real. Hand and skin look real enough at thumb-zoom. Good editorial framing.

What's missing from first fold: **a price anchor, a maker name, an "as seen in".** Three seconds in, I can't tell if this is £180 or £1,800.

---

## Scores

| Dimension | Score | Why |
| --- | --- | --- |
| **Aesthetic register fit** | 6.5/10 | Editorial typography, restrained palette, no gradients, no DTC cream-and-sage. Genuinely close to Alighieri's typographic discipline. **Loses points for:** Mejuri-style "people will ask where you found it" hook; an em-dash inside the H2 sub looks like an *en-dash* rendered without breathing space; CTA copy ("Find a Gift") leans gifting-marketplace not art-object. |
| **Commerce trust** | 5/10 | Prices in **$USD** with no £ conversion or currency switcher visible. **No mention of UK delivery, customs, VAT, or post-Brexit DDP terms anywhere I can see on the homepage.** Reserve flow is *"opens your email client"* — for a £400 object, that reads like a Substack writer's checkout, not a fine-jewellery transaction. No Stripe checkout button. No payment-method icons visible above the fold. The Promise list ("Lifetime polish · Chain repair · Enamel warranty · Workshop restoration · Heritage re-registration") is the strongest trust signal on the page. |
| **Craft credibility** | 8/10 | This is the strongest dimension. The plique-à-jour section names the **Mérode Cup (V&A, c.1400), Cellini's 1568 Treatise on Goldsmithing, Lalique, Feuillâtre, Thesmar** — with footnote markers. The Craft page (which I'd click into) carries a 10-citation reference list including the Met, V&A, Walters, National Palace Museum Taipei. **This is the level Apollo readers expect.** The atelier section's "Colour fired at 800°C. It does not fade" is the kind of *technical claim with a number* that scans as workshop voice, not marketing. Loses some points only because: (a) the *one* piece of press is a regional Chinese cultural fair in Sanya 2023 — not Apollo, not 1stDibs, not Wallpaper; (b) the maker bio still slips into "her teachers were the firings that failed" — that's *brand fairy-tale* writing, not CV writing. |
| **Price clarity** | 4/10 | Prices are in USD (`$369–599 / $600–999 / $1,000+`) with no £ option, no GBP equivalent in tooltip, no FX disclosure. **For a UK buyer this is a friction point — Brexit means VAT and customs handling are the buyer's first question.** The Terms page does say "shipping is free worldwide, customs duties covered (DDP)" — but this is buried in legal, not surfaced at PDP or hero. I had to search to find it. Hero promo strip mentions "From $369 · 7 in stock this batch · 14-day return" — that's good, but the currency mismatch with my mental £ register is constant cognitive load. |
| **Next-step clarity** | 6.5/10 | The dual-door (Ready to Wear / Make it Yours) is a clean fork — I like it conceptually, both Pippa Small and Alighieri do versions of this. **But:** clicking "Get this piece" on a PDP leads to a 4-step *reservation flow* that ultimately *opens my mail client* with a pre-filled email I'm asked to "press send" on. **For a £400 piece, I want Stripe. I want a card field. I want an order confirmation in 30 seconds, not "we'll reply within 24 hours".** The mailto flow signals a brand that doesn't yet have payment infrastructure — which is fine for a £6,000 bespoke commission (that's how Anna Hu Haute Joaillerie operates), but it's wrong for the £200-£600 in-stock band. |

**Overall: 6.0/10**

---

## What works for the UK market

- **Plique-à-jour credentials with Western lineage anchors.** Naming the Mérode Cup at the V&A — *which Sophie can walk to in 35 minutes* — and citing Cellini's 1568 treatise is exactly the move that earns Apollo-reader trust. It places the workshop inside an Anglophone art-historical canon, not adjacent to it. This is the single best decision on the site.
- **Founder framing as *Founder*, not *heir*.** Hu Yan is called Founder · Enameller, not "5th generation" or "lineage holder". UK indie-fine buyers are allergic to invented heritage claims; framing her as a self-taught working maker who picked up silver wire in her twenties reads honest, not performative.
- **Lifetime promise as five concrete numbered items.** Not "we care forever" but "01 Lifetime polish & refinish · 02 Chain repair & re-clasping · 03 Enamel warranty · 04 Workshop restoration · 05 Heritage re-registration". Pippa Small's site does something similar; it reads as a real service contract, not a vibe.
- **DDP shipping worldwide, customs covered.** This is the right post-Brexit answer. It's just buried.
- **Typography discipline at the system level.** Serif body, tight letter-spacing, no decorative caps, no swashes, no Italiana display. Reads like Wallpaper*'s "Salone preview" page, not a Shopify theme.
- **Press section is hidden until real coverage exists.** Most DTCs would fake "As seen in" badges. The fact that this is hidden tells me the team has self-discipline about evidence.

---

## What feels off / wrong-register for the UK market

- **Hero H1 is buyer-engagement copy, not object copy.** "People will ask where you found it" is what Mejuri's IG ads say. Alighieri/Pippa Small/Completedworks all lead with what the *object* is, where it's from, what it carries. The H1 should be naming the craft or the place. Currently the H2 does that work and the H1 is wasted real estate.
- **Currency mismatch for a UK visitor.** Showing only `$369` when my browser language and IP are clearly UK is a missed signal. Even a small "≈ £290" hint, or a £ switch in the top-right where the market dropdown lives, would close this gap in one line of code. As-is, I have to do arithmetic at every product card.
- **Mailto-based checkout signals "not ready for transaction".** The Reserve flow's step 4 — *"please press send"* on an email — is fine for the £6,300 Bespoke route. For the £200-£600 In-Stock band it reads as a brand that hasn't paid for Stripe yet. UK buyers who came through a Substack mention will close the tab when "Get this piece" leads to a mailto.
- **One regional Chinese cultural fair as the only "press" credit.** *"2023 · 8th Hainan International Cultural Industry Fair · Sanya"* is the only entry under "Press & Exhibitions". For an Apollo-reader, this is not a credential — it reads as *no UK/EU press yet*. Better to remove the line entirely and let the craft page citations carry the legitimacy alone, until there's a Wallpaper*/FT How To Spend It/1stDibs mention.
- **The maker bio slips registers between CV and fairy-tale.** *"She had no teacher. Her teachers were the firings that failed, and the late hours at her bench."* — that's the second sentence of the maker block. A UK indie-fine buyer wants the **next** sentence to be "Twenty years of cloisonné. Three years to fire her first surviving plique-à-jour piece (2016). Exhibited at..." with at least one verifiable institution name, ideally European. Currently the bio is poetic where it needs to be résumé.
- **The atelier video loops continuously above the fold of that section.** That's fine in 2022. In 2026 the editorial-luxury default is *one still frame, click to play*. Continuous loops on landing pages are a Shopify-theme tell. Susan Caplan and Completedworks both use stills as defaults.

---

## The ONE deal-breaker

**The Reserve / "Get this piece" flow ends in a mailto, not a Stripe checkout.** For the £200-£600 in-stock band — which is the band Apollo-readers actually transact in — this single fact moves the brand from "credible indie atelier I might buy from" to "interesting bookmark, come back in 6 months". The craft page is a museum-grade essay; the checkout is a Substack reply button. The gap between those two registers is the brand's biggest commerce wound.

## What would close the sale

Ship a real Stripe checkout on the in-stock band (keep mailto for ≥£900 bespoke, that's actually correct for commission work), and surface "DDP — UK customs and VAT included, no charge on receipt" as a chip directly under every PDP price. Those two changes alone move me from "interesting" to "I'll order the Daisy Brooch tonight for my sister's 40th."
