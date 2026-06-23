# Naming clearance — AJOUR (factual scan)

**Date:** 2026-06-22
**Candidate:** Ajour (extracted from `plique-à-jour`, French jewelry-craft term ≈ "openwork")
**Method:** Fast 5-layer clearance — RDAP/WHOIS, USPTO TESS, EUIPO/DDG/Bing SERP, social handle HTTP probes, dictionary lookups. Manual deep TM search not performed (Knockout only).

---

## Layer 1 · Domain availability

| Domain | Status | Registrant / Site title | Source |
|---|---|---|---|
| `ajour.com` | **TAKEN** (registered 2000-02-11, expires 2027-02-11, registrar PDR Ltd. / publicdomainregistry.com, NS R53.COM.UA — Ukraine) — homepage title: **"High Quality Online Lingerie Shop, Online Shop for Lingerie Ajour, USA"** | rdap.verisign.com/com/v1/domain/ajour.com; ajour.com |
| `ajour.co` | **TAKEN** (RDAP query 200 but no JSON body; .co RDAP behaved non-200; whois.com page rendered through Jina — domain present in registry, not for sale via Namecheap; treat as **likely TAKEN** — `[unverified — manual whois.com or registrar lookup recommended]`) | whois.com/whois/ajour.co |
| `ajour.studio` | **AVAILABLE** (RDAP 404 "Object not found") | rdap.identitydigital.services/rdap/domain/ajour.studio |
| `ajour.gallery` | **AVAILABLE** (RDAP 404) | rdap.identitydigital.services/rdap/domain/ajour.gallery |
| `ajour.atelier` | **N/A** — `.atelier` is not an active gTLD (delegated to LLC but not in general availability). `[unverified — registrar check]` | iana.org root zone |
| `ajour-atelier.com` | **AVAILABLE** (RDAP 404) | rdap.verisign.com/com/v1/domain/ajour-atelier.com |
| `ajourhouse.com` | **AVAILABLE** (RDAP 404) | rdap.verisign.com/com/v1/domain/ajourhouse.com |
| `ajourjewelry.com` | **TAKEN** (registered 1998-01-28, Network Solutions) — **"A Jour Jewelry, Bristol RI 325 Metacom Ave — bespoke jeweler, award-winning craftsmanship"** — direct jewelry competitor explicitly explaining "à jour" as a fine-jewelry technique | rdap.verisign.com/com/v1/domain/ajourjewelry.com; ajourjewelry.com |
| `houseofajour.com` | **AVAILABLE** (RDAP 404) | rdap.verisign.com/com/v1/domain/houseofajour.com |

**First-year price (approximate, Namecheap public rate cards):** `.studio` ≈ $29–35/yr, `.gallery` ≈ $23–32/yr, `.com` ≈ $9–13/yr. `[unverified — confirm at checkout]`

**Killer finding for Layer 1:** **`ajour.com` is held by an established international lingerie brand**, and **`ajourjewelry.com` is held by a US bespoke jeweler that actively educates customers on the term "à jour" as a jewelry technique**. Two of the three most natural URLs are gone, and at least one is in the exact category.

---

## Layer 2 · USPTO Class 14 / coordinated classes

USPTO TESS (`tmsearch.uspto.gov/search/search-results`) returned **0 results** for every variant tried, with no class filter (i.e. all classes including 14 / 25 / 35):

| Query | LIVE | DEAD | Closest collision |
|---|---|---|---|
| `AJOUR` (all classes) | 0 | 0 | none in US federal register |
| `AJOUR` (class 14 filter) | 0 | 0 | none |
| `AJOUR JEWELRY` (all classes) | 0 | 0 | none |
| `AJOUR ATELIER` (all classes) | 0 | 0 | none |
| `A JOUR` (all classes) | 0 | 0 | none |

Source: `tmsearch.uspto.gov/search/search-results?searchText=AJOUR&searchType=phrase&fieldType=mark` (and variants).

**Note:** "À JOUR" with accent could not be entered through the TESS URL parameter in the time budget — `[unverified — re-run inside TESS UI with diacritic]`. Given AJOUR plain is clean, the À JOUR query is unlikely to flip the result, but should be confirmed.

**Interpretation:** No prior US federal TM. This means the existing Ukrainian/US/Egyptian/Japanese "ajour" jewelry operators have **never registered in the US** — leaving Class 14 paper-clean for a US filing. BUT common-law rights from the Bristol RI bespoke jeweler (`ajourjewelry.com`, in business at a physical RI address) may still create senior-user rights in New England.

---

## Layer 3 · EUIPO / INPI / CNIPA / WIPO

| Office | Result | Source |
|---|---|---|
| EUIPO TMview | `[unverified — tmdn.org TimeoutError, page.goto failed twice]`. Recommend manual run at https://www.tmdn.org/tmview/ | tmdn.org/tmview |
| WIPO Global Brand Database | `[unverified — branddb.wipo.int requires CAPTCHA, Jina blocked]` | branddb.wipo.int |
| INPI France | `[unverified — no Knockout result via DDG]`. In France, **"ajour" is a generic French word** ("openwork; up to date"), so INPI likely refuses or grants only to graphical/composite marks under Art. L711-2 distinctiveness rule. Strong descriptiveness barrier in France. | inpi.fr (general policy) |
| CNIPA China | `[unverified]` for "AJOUR" / "阿茹" / "雅茹" in class 14. 阿茹 / 雅茹 are common given-name characters in Mongolian/Chinese — likely several individual-name TM filings, low conflict for jewelry brand mark but **possible coincidental homophone collision**. Manual cnipa search needed before CN filing. | wsgsj.cnipa.gov.cn |

**The structural EU problem:** AJOUR is a dictionary word in French + German + Norwegian + Danish + Swedish (`Stoltzenberg 1992; Trésor de la langue française; Langenscheidt`). EUIPO and national offices in France/Germany frequently refuse or narrow word marks that are descriptive of the goods. "AJOUR" applied to jewelry = literally describing a jewelry technique = **high refusal risk on absolute grounds (descriptiveness, Art 7(1)(c) EUTMR)**. A composite/figurative mark or a 2-word combination ("HOUSE OF AJOUR", "AJOUR ATELIER") may be needed to clear.

---

## Layer 4 · Social handles

All Instagram URLs returned HTTP 200 (Instagram returns 200 for both real profiles and login walls; the bare title "Instagram" is the login-wall fingerprint, so content existence had to be confirmed via search-engine snippets).

| Handle | Status | Evidence |
|---|---|---|
| IG `/ajour/` | **likely TAKEN** (HTTP 200; standard Instagram parking pattern; `[unverified — login required]`) | instagram.com/ajour/ |
| IG `/ajour.atelier/` | HTTP 200, content unverifiable anonymously, **probable AVAILABLE** (no SERP hits) | instagram.com/ajour.atelier/ |
| IG `/ajourhouse/` | HTTP 200, no SERP hits, **probable AVAILABLE** | instagram.com/ajourhouse/ |
| IG `/ajourjewellery/` | **TAKEN — 5,136 followers, 3,347 posts**, listed as "ajour jewellry" | DDG + Bing SERP snippet |
| IG `/ajourofficial_usa/` | **TAKEN — 1,601 followers** (AJOUR lingerie US arm) | DDG + Bing SERP snippet |
| TikTok `@ajour` | HTTP 200, generic title; `[unverified — likely TAKEN]` | tiktok.com/@ajour |
| TikTok `@ajour.atelier` | HTTP 200, generic title; **probable AVAILABLE** | tiktok.com/@ajour.atelier |
| X `@ajour` | HTTP 200 binary; `[unverified]` | x.com/ajour |
| Pinterest `/ajour/` | **TAKEN** — profile "A. (ajour)" exists | pinterest.com/ajour/ |
| 小红书 `ajour` / `阿茹珠宝` | search renders only footer ICP info; no embedded results scrapable anonymously; `[unverified — manual XHS search needed]` | xiaohongshu.com/search_result?keyword=ajour |
| Facebook | **TAKEN** — "Ajour Jewellary" 9,314 likes (Cairo, Egypt) + "Ajour usa" page | facebook.com/AjourJewellary/; facebook.com/ajour.usa/ |

**Bare `ajour` handles are gone on every major platform.** Available paths are only compound (`.atelier`, `house`, etc.).

---

## Layer 5 · Google SEO landscape

DDG + Bing return the same picture (Google itself triggered CAPTCHA for the headless fetch):

Top 10 results for `"ajour" jewelry brand` are dominated by **at least four distinct jewelry/fashion businesses already using "ajour":**

1. **AJOUR Lingerie** (ajour.com / shop.ajour.com) — Ukraine, founded 2004, sells in US ("Inspired by French lightness… jewelry-detailed bras and lingerie pieces"). Listed on Chicmi and Poshmark as a fashion brand.
2. **AJOUR Jewellery** (IG @ajourjewellery, 5.1k followers) — separate jewelry operator.
3. **A Jour Jewelry** (ajourstore.com) — "Swiss-trained Klaus the Jeweler", high-end handmade jewelry studio.
4. **A jour Jewelry** (ajourjewelry.com) — Bristol RI bespoke jeweler, owns the .com that explains "à jour" as a fine-jewelry technique.
5. **BOLOU "Ajour Collection"** (bolou.dk/en/collections/ajour) — Danish 18kt-gold + diamonds collection range.
6. **Ajour Jewellary** Facebook — Cairo, Egypt jeweler with 9.3k likes.
7. **ajour.jp** — 59-year-old Japanese jewelry-reform & repair brand, 500k+ jobs, featured in SPUR magazine (Feb 2025).
8. **ajour.tokyo** — Tokyo semi-custom clothing brand using Paris fabrics.

No editorial coverage in vogue.com / wmagazine.com SERPs for "ajour"-as-brand (so the name has not been claimed by a Vogue-tier indie). But the term is **so widely used as a jewelry / fashion brand-fragment** that any new "Ajour" brand will land mid-page and have to fight ~5–7 incumbents for SEO authority on its own brand name — the **opposite** of the Alighieri-owns-Dante pattern.

---

## Cross-language gotcha

- **French (native):** `ajour` = openwork; decorative opening that lets light through. `à jour` (two words) = "up to date" / "current" / "openwork". Reverso/Wordreference/Wiktionary/Trésor de la langue française all confirm. No vulgar or political meaning. But **fully descriptive in French for the jewelry category** — INPI/EUIPO distinctiveness barrier is real.
- **German (native):** `ajour` is a borrowing meaning "openwork (lace, embroidery)" and informally "up to date" — listed in Langenscheidt and Duden. Neutral, descriptive, no negative meaning.
- **Norwegian / Danish / Swedish:** `à jour` is everyday business jargon for "up to date" (Holde seg à jour = "keep up to date"). Neutral.
- **Japanese:** `アジュール (ajūru)` is already used by at least 3 active brands (ajour.jp jewelry-reform, ajour.tokyo clothing, AJOUR wedding rings on Weddingpark). Crowded.
- **Chinese homophones:** 阿茹/雅茹/啊汝 read as common feminine given names (with positive flowers/grass radical). 阿乳 (literally "milk") would be embarrassing/childish if used by mistake — but no one phonetically transcribes "ajour" that way; default would be 雅茹 (elegant + lush), which is fine. No political contamination. Could collide with personal-name CN trademarks; cnipa check needed.

---

## Bottom line

**KILL.** Confidence: **HIGH**.

Why: (1) `ajour.com` is the established AJOUR Lingerie brand. (2) `ajourjewelry.com` is a live US bespoke-jewelry competitor that explicitly markets the "à jour" technique — this is a direct namespace and category collision creating both customer confusion and likely common-law senior-user TM rights in the US. (3) IG `@ajourjewellery` already has 5k followers. (4) At minimum 4 distinct jewelry/fashion businesses worldwide already operate as some form of "Ajour" (Ukraine lingerie / Bristol RI bespoke / Swiss studio / Denmark BOLOU collection / Egypt / Japan repair). (5) In French + German + Norwegian + Danish + Swedish the word is **descriptive of the jewelry technique itself** — EUIPO/INPI distinctiveness refusal risk is high without a composite. (6) The Alighieri-owns-Dante analogy fails because Dante is a proper noun owned by no living producer, whereas "ajour" is currently owned and operated by ~5–8 producers, several of them in jewelry.

The only honestly clean USPTO outcome (0/0) is not strong enough to overcome a category that is already saturated by unregistered prior users.

If the user wants to salvage this direction, the only defensible play is a **2-word composite** like **HOUSE OF AJOUR** (.com available, no IG hits, USPTO clean) — but it inherits the descriptiveness, Nordic-everyday-word, and lingerie-brand-shadow problems and still buries the SEO behind ajour.com. Recommend returning to the naming generator and excluding the Ajour family.
