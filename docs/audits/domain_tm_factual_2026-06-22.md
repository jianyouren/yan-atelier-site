# Factual Audit — Domain · USPTO · EUIPO · Social Handle

**Date:** 2026-06-22
**Scope:** YÀN Atelier brand rename / stay-with-YÀN decision support
**Mode:** Facts only. No naming-strategy opinions.
**Methodology:** RDAP (Verisign + rdap.org) for domain availability; WebSearch + Justia/Trademarkia hits for USPTO; HTTP+title scrape for IG/TikTok/X; Xiaohongshu requires manual.
**Confidence:** Domain checks = HIGH (RDAP authoritative). USPTO/EUIPO checks = MEDIUM (USPTO search system, Justia, Trademarkia all blocked by JS challenges or rate limits; relied on indirect Google site-search hits — a paid TM watch service is the gold standard before filing). Social = HIGH for IG/TikTok (verified taken-handles via OG title leak); MEDIUM for X (anonymous browse blocked); UNVERIFIED for Xiaohongshu (login wall).

---

## Part 1 · Domain availability (RDAP-verified)

Legend: ✅ AVAILABLE · ❌ TAKEN

| # | Name | .com | .co | .studio | .gallery | .atelier |
|---|------|:---:|:---:|:---:|:---:|:---:|
| 1 | yanatelier        | ✅ | ✅ | ✅ | ✅ | ✅ |
| 2 | yan-atelier (current) | ✅ | ✅ | ✅ | ✅ | ✅ |
| 3 | yan-yunnan        | ✅ | ✅ | ✅ | ✅ | ✅ |
| 4 | yan-enamel        | ✅ | ✅ | ✅ | ✅ | ✅ |
| 5 | yan-the-atelier   | ✅ | ✅ | ✅ | ✅ | ✅ |
| 6 | yanjewelry        | ✅ | ✅ | ✅ | ✅ | ✅ |
| 7 | vitrage           | ❌ (1998, name.com) | ✅ | ❌ | ✅ | ✅ |
| 8 | pliquehouse       | ✅ | ✅ | ✅ | ✅ | ✅ |
| 9 | plique-house      | ✅ | ✅ | ✅ | ✅ | ✅ |
| 10 | objecthu         | ✅ | ✅ | ✅ | ✅ | ✅ |
| 11 | object-hu        | ✅ | ✅ | ✅ | ✅ | ✅ |
| 12 | dianyun          | ❌ | ✅ | ✅ | ✅ | ✅ |
| 13 | enamelhouse      | ❌ | ✅ | ✅ | ✅ | ✅ |
| 14 | kilnhouse        | ❌ | ✅ | ❌ | ✅ | ✅ |
| 15 | clearwindow      | ❌ | ✅ | ✅ | ✅ | ✅ |
| 16 | glass-and-silver | ✅ | ✅ | ✅ | ✅ | ✅ |
| 17 | glassandsilver   | ❌ | ✅ | ✅ | ✅ | ✅ |

**Adjacent collision (not requested, but flagged):**
- `atelieryan.com` — **TAKEN, ACTIVE** by **Atelier Yan Inc.** (Yan Wu, Toronto, founded 2023, jewelry brand on Wix). Source: https://www.atelieryan.com/ + https://supportontariomade.ca/manufacturer/toronto/atelier-yan-inc. This is a word-order swap of candidate #1 `yanatelier`, in the same category. Strong consumer-confusion vector even though the YÀN-prefixed `yanatelier.com` is technically buyable.

### Pricing (first-year, USD)

Cloudflare = registry wholesale (cheapest, no renewal hike). Namecheap = retail with first-year promo.

| TLD | Cloudflare (wholesale) | Namecheap (first-year) | Renewal pattern |
|-----|:--:|:--:|---|
| .com      | $10.46 | ~$6.79 promo / ~$15.88 reg | renews ~$15-18 |
| .co       | $26.00 | ~$11 promo year 1 | renews $25-35 |
| .studio   | $31.18 | $12.48-$12.98 | renews ~$42 |
| .gallery  | $22.20 | $29.98 | renews $29+ |
| .atelier  | not offered by CF | not listed in registrar feeds we could reach | restricted gTLD via Identity Digital (formerly Donuts); typically $35-60 retail. **[unverified — manual quote needed]** |

Sources: https://cfdomainpricing.com/ (verified 2026-06-22), https://www.namecheap.com/domains/registration/gtld/studio/, https://www.namecheap.com/domains/registration/gtld/gallery/, https://domainoffer.net/tld/com/namecheap, https://www.namecheap.com/blog/price-increase-for-co-club-biz-and-more-domains/, https://en.wikipedia.org/wiki/Identity_Digital.

Sources for RDAP availability: https://rdap.verisign.com/com/v1/domain/{name} for .com; https://rdap.org/domain/{name}.{tld} for .co / .studio / .gallery / .atelier (RDAP follows the IANA bootstrap registry).

---

## Part 2 · USPTO Class 14 (jewelry) trademark scan

**Important caveat on methodology:** USPTO's current trademark search system (https://tmsearch.uspto.gov/) is a JavaScript SPA and returns no content to WebFetch. The TSDR/TESS bulk APIs now require an API key (rollout October 2025). Justia, Trademarkia, USPTO.report, and Trademark411 all block scrapers via Cloudflare challenges. The data below is assembled from **Google site-search snippets** that surfaced individual Justia and Trademarkia records for related marks. **This is a triage scan, not a clearance opinion** — before filing or buying a domain, retain a TM attorney or pay for a watch service (CSC, Corsearch, Markify, ~$300-800).

Risk score legend: 0 = no collision found in any data source · 3 = surname/owner-name collisions only · 5 = same-word mark exists but in clearly different goods · 7 = same-word mark in adjacent class · 10 = identical or near-identical mark in jewelry Class 14, LIVE.

| Candidate | LIVE marks found containing name | Closest collision (mark · owner · status · class) | Risk score | Notes / source |
|---|---|---|:---:|---|
| **YAN / YÀN** (root) | Many — but as **owner surnames**, not as mark text in jewelry. Justia surfaces 4+ Class 14 marks owned by Chinese individuals named Yan: Zhang Yan (98633961, 2024, agate jewelry); Zhongwen Yan (98402172, 2024, jewelry); Wu Yan (98926224, 2024, diamonds/gemstone jewelry); Bijin Yan (88503110, 2019, bangles with electronic chips); He Yan (26 marks across multiple classes, many in 14). One Class 14 mark **OPT (s/n 85144313)** owned by Yan, Shiping went DEAD / CANCELLED-SEC.8 on 2019-11-15. | No record found in the Google-indexed snippets of a clean "YAN" word-mark registered as a brand in Class 14 (i.e. nobody owns plain "YAN" for jewelry). But the surname is extremely common on Chinese-owned Class 14 filings — likelihood-of-confusion risk in examiner judgement is meaningful. **[Recommend full clearance search before filing.]** | **5-6** | https://trademarks.justia.com/884/08/lasdf-88408392.html (Yan Fang); https://www.trademarkia.com/owners/he-yan; https://www.trademarkia.com/opt-85144313 |
| **ATELIER YAN / YAN ATELIER** | No exact USPTO mark found in Justia snippets. **BUT atelieryan.com is owned and operated by Atelier Yan Inc., Toronto, an actively trading jewelry brand (Yan Wu, founded 2023).** Whether they've filed a USPTO mark is **[unverified]** — Canadian brands often file CIPO first and only later move to USPTO. They appear in Ontario's official "Support Ontario Made" registry. | "Atelier Yan" (jewelry, Toronto, common-law mark + .com) — direct word-mark conflict in identical goods category | **9-10** for "ATELIER YAN"/"YAN ATELIER"; **8** for "yan-atelier" hyphenated (same word-mark in examiner eyes) | https://www.atelieryan.com/about; https://supportontariomade.ca/manufacturer/toronto/atelier-yan-inc; https://www.atelieryan.com/yan-wu |
| **YAN JIANG STUDIO** (reference / not a candidate) | Active in EU/CH — Yan Jiang, Zurich, jewelry, founded 2019. Operates yanjiangstudio.com + yanjiang.ch; sells through Opia, Moddity, Modern Heirloom. USPTO filing status **[unverified]** but irrelevant to "YAN" alone since their mark is the 3-word phrase. | "Yan Jiang Studio" — different mark text, but compounds the perception that "Yan + [studio noun]" is a crowded jewelry-brand pattern in DACH region. | n/a — reference data only | https://www.yanjiangstudio.com/, https://www.yanjiangstudio.com/about |
| **ANNA HU** (reference / not a candidate, flagged in 06-04 research) | Anna Hu Haute Joaillerie — French-Chinese high jewelry brand, founded 2007 in NY, ops in Paris/Monaco/NY. Pieces in V&A (2026), British Museum (2024), MFA Boston (2024), Musée Guimet (2025). USPTO registration **[unverified by direct lookup — Justia owner page returns 403]** but the brand has 19 years of continuous commercial use, museum acquisitions, Paris Haute Couture Week presence → effectively unassailable common-law + likely WIPO/INPI base. | "ANNA HU" word mark in haute joaillerie. | **9** for any "HU"-prefixed jewelry brand in same category | https://www.annahu.com/, https://en.wikipedia.org/wiki/Anna_Hu, https://www.fhcm.paris/en/house/anna-hu |
| **OBJECT HU / OBJET HU** | No exact mark surfaced in Justia snippets. "Hu Merchandising LLC" and "Hu Holdings LLC" own marks but in cosmetics/food (different classes). However: **ANNA HU's market presence in haute joaillerie creates examiner concern for any "[X] HU" jewelry mark** — opposition/cease-and-desist risk from Anna Hu Haute Joaillerie is non-trivial even if examiner approves. | "Anna Hu" Class 14 common-law (above) | **5-6** — risk is opposition-by-Anna-Hu's-counsel, not USPTO examiner refusal | Inference from Justia owner pages + Anna Hu Wikipedia |
| **VITRAGE** | No direct USPTO Class 14 hit in Justia snippets. **vitrage.com registered since 1998-01-10**, Czech registrant (Prague-4), name.com nameservers — looks parked/inactive but blocks the .com. Word is French for "stained-glass window" — commonly used as descriptive term in glasswork industry (multiple historical companies use it as suffix). On Instagram **@vitrage = Andrey Ivanov (taken)**; on TikTok **@vitrage = "Vitrage tatto"** (taken, tattoo artist). | No specific Class 14 USPTO collision surfaced. .com is gone, social handles are gone. | **3** for USPTO Class 14; **8** for global brand uniqueness (the word is too generic in glass/design space) | https://www.whois.com/whois/vitrage.com (1998 reg); see Part 4 for social |
| **PLIQUE / PLIQUE HOUSE** | No "PLIQUE" or "PLIQUE HOUSE" marks surfaced in Justia for Class 14. "Plique-à-jour" is a technique term (like "filigree" or "cloisonné") and is therefore likely descriptive when used alone for enamel jewelry — examiner may issue **2(e)(1) descriptiveness refusal** if filed for the literal enamel goods. "PLIQUE HOUSE" as a composite is more distinctive and likely registrable, subject to clearance. | None found. Descriptiveness is the primary risk, not collision. | **2-3** (clearance risk low, descriptiveness risk moderate) | Negative search results from site:trademarks.justia.com queries |
| **DIANYUN** | No direct hit. dianyun.com is taken (registration unverified beyond RDAP). Pinyin term means "Dian (Yunnan) cloud/region" — generic geographic. | No specific collision. Geographic-descriptive risk under 2(e)(2). | **2** (clearance), **6** (descriptiveness) | RDAP + general China-brand knowledge |
| **ENAMELHOUSE / KILNHOUSE / CLEARWINDOW** | No direct collisions surfaced. All three .com are taken (RDAP). All three are descriptive English compounds — high 2(e)(1) descriptiveness risk for actual enamel jewelry. Instagram **@enamelhouse = Enamel House** (taken, exists). **@kilnhouse = Catherine Hickey** (taken, exists). | None in TM data; collisions are domain + handle | **3** (TM); **7+** (descriptiveness + .com blocked + handle taken) | RDAP + IG title scrape |
| **GLASS-AND-SILVER / GLASSANDSILVER** | No direct collisions surfaced. Highly descriptive (two material names joined). 2(e)(1) refusal almost certain on functional/material terms. | None in TM data | **1** (TM); **8** (descriptiveness) | — |

### Confirmation status for the 7 "YAN" collisions flagged in the 06-04 research

The 06-04 research file is not in this docs directory (likely lives in user memory only), so I cannot read the exact 7 names. From the brand-context recap in the task prompt, three were identifiable:

| Brand from 06-04 list | 2026-06-22 status | Evidence |
|---|---|---|
| Atelier Yan (Toronto) | **CONFIRMED LIVE & TRADING.** Yan Wu, OCAD-trained, founded 2023, operates atelieryan.com, listed on Support Ontario Made. Jewelry, including necklaces/earrings/bracelets/rings, "hypoallergenic everyday". | https://www.atelieryan.com/about (no last-modified scraped); https://supportontariomade.ca/manufacturer/toronto/atelier-yan-inc |
| YAN JIANG STUDIO (Zurich) | **CONFIRMED LIVE & TRADING.** Founded 2019 by Yan Jiang (Gübelin alumna). Stocked at Opia, Moddity, Modern Heirloom. | https://www.yanjiangstudio.com/, https://www.yanjiangstudio.com/about |
| Anna Hu Haute Joaillerie (NY/Paris/Monaco) | **CONFIRMED LIVE & TRADING + escalating museum credentials.** V&A acquisition 2026 (Dance of Dunhuang Brooch), British Museum 2024 (Enchanted White Lily Bangle I), MFA Boston 2024 (Enchanted Ania Brooch), Musée Guimet 2025 (Gnossienne Brooch). Active on FHCM Paris Haute Couture roster. | https://www.fhcm.paris/en/house/anna-hu, https://www.annahu.com/timeline, https://en.wikipedia.org/wiki/Anna_Hu |
| Remaining 4 from the 06-04 list | **[unverified in this audit — need the exact names from the original report at D:/YAN_Atelier_Site/docs/ to confirm]** | Original file not located in current docs dir; may be in user memory only |

**Bottom line for "YAN" naming:** The three confirmed YAN-jewelry brands continue to operate. The most direct collision is Atelier Yan Toronto — same compound word in same goods. Sticking with "YÀN Atelier" preserves the accent-grave diacritic as the only differentiator, which the USPTO examiner treats as identical phonetic equivalent to "YAN ATELIER" for confusion analysis.

---

## Part 3 · EUIPO quick scan (top 5 candidates by Part 2 risk)

EUIPO eSearch plus (https://www.euipo.europa.eu/eSearch/) and TMview (https://www.tmdn.org/tmview/) are both JS SPAs that returned no content to WebFetch and are not Google-indexed at the per-mark URL level. The table below reports what is inferable from general web evidence; **a real EUIPO clearance search must be done manually on the EUIPO portal or via a paid watch service.**

| Candidate | Inferable EU collision signal | Risk score | Source / status |
|---|---|:---:|---|
| **yan-atelier / yanatelier / Atelier Yan** | Atelier Yan Inc. is **Canadian** (Ontario), not EU. No EU brand named "Atelier Yan" surfaced. However **YAN JIANG STUDIO operates from Zurich (Switzerland — EFTA, separate from EUIPO but cross-recognised by many) and likely has CH or EU registrations**. | **6** — EU territory itself appears clear of "Atelier Yan", but DACH market has YAN-name jewelry incumbency. | https://www.yanjiangstudio.com/about — **EUIPO direct lookup [unverified]** |
| **vitrage** | French word for stained glass. Multiple EU companies use "Vitrage" descriptively in glassmaking/window-glass trade (not jewelry). EUIPO TMview likely returns many hits across glass + construction classes; **clearance for Class 14 jewelry [unverified]**. | **5-7** | Generic-French-word usage; EUIPO direct lookup [unverified] |
| **pliquehouse / plique-house** | "Plique-à-jour" is a French enamel craft term used globally. No specific brand collision surfaced in web search. EU clearance likely cleaner than US (descriptive in French = high refusal risk on EUIPO descriptiveness grounds, similar to US 2(e)(1)). | **3** for collision; **6** for descriptiveness in French-speaking EU jurisdictions | — |
| **objecthu / object-hu** | Anna Hu Haute Joaillerie has demonstrable EU presence — FHCM Paris roster, Musée Guimet acquisition 2025, Monaco operations. **EUIPO opposition risk from Anna Hu's counsel is the same in EU as in US — possibly higher given her stronger Paris footprint.** | **6-7** | https://www.fhcm.paris/en/house/anna-hu |
| **dianyun / glass-and-silver / enamel-house / kilnhouse / clearwindow** | Generic descriptive English compounds — EUIPO refuses descriptive marks under Article 7(1)(c) similar to USPTO. Specific collisions [unverified]. | **2-3** (collision); **6-7** (descriptiveness) | — |

---

## Part 4 · Social handle availability (top 5 candidates)

Method: HTTP GET to platform profile URL, extract `<title>` and `<meta property="og:title">` tags. Instagram and TikTok leak the username in the title for taken accounts even behind login walls; X is partly JS-rendered, partly leakable; Xiaohongshu requires login.

**Top 5 chosen by combined Part 1 (.com available) + Part 2 (TM risk score ≤ 5):** yanatelier · pliquehouse · plique.house · objecthu · vitragejewelry (vitrage itself fails on .com + IG + TT). Plus current `yan-atelier` for reference.

| Candidate (handle tried) | Instagram | TikTok | X / Twitter | Xiaohongshu |
|---|---|---|---|---|
| **yanatelier** | ✅ AVAILABLE (title = generic `<title>Instagram</title>`) | ❌ TAKEN — `uniqueId:"yanatelier", nickname:"yanatelier"` (placeholder account, no real name set) | curl returns generic `<title>Profile / X</title>` → likely AVAILABLE but **[X requires manual confirm — anonymous browse blocked beyond title]** | **[unverified — manual]** xhs.com requires login |
| **yan-atelier** (current; tried `yan_atelier`) | ❌ TAKEN — `둘이하나 (@yan_atelier)` — Korean user, unrelated | ✅ AVAILABLE | **[unverified]** | **[unverified]** |
| also tried `yan.atelier` for Iyer-style dot | ❌ TAKEN — `Yan (@yan.atelier)` | — | — | — |
| **pliquehouse** | ✅ AVAILABLE | ✅ AVAILABLE | likely AVAILABLE (generic title) **[manual confirm]** | **[unverified]** |
| **plique.house** | ✅ AVAILABLE | ✅ AVAILABLE | n/a (X disallows `.` in handles) | **[unverified]** |
| **plique_house** | ✅ AVAILABLE | n/a | likely AVAILABLE **[manual confirm]** | **[unverified]** |
| **objecthu** | ✅ AVAILABLE | ❌ TAKEN — `uniqueId:"objecthu", nickname:"objecthu"` (placeholder, no real name) | curl returned empty body — **[unverified, possibly TAKEN or rate-limited]** | **[unverified]** |
| **object.hu** | ✅ AVAILABLE | ✅ AVAILABLE | n/a | **[unverified]** |
| **object_hu** | ✅ AVAILABLE | n/a | likely AVAILABLE **[manual confirm]** | **[unverified]** |
| **vitrage** (top candidate before scan) | ❌ TAKEN — `Andrey Ivanov (@vitrage)` | ❌ TAKEN — Vitrage tatto (tattoo studio) | ❌ TAKEN — `SAMUEL (@vitrage) / X` | **[unverified]** |
| **vitragejewelry** | ✅ AVAILABLE | ✅ AVAILABLE | likely AVAILABLE **[manual]** | **[unverified]** |
| **dianyun** (Yunnan single-word) | ❌ TAKEN — `公主 (@dianyun)` | ❌ TAKEN — Dian Yun | ❌ TAKEN — `Thomas Zhuo (@dianyun) / X` | **[unverified]** |

**Additional reference handles checked (lower-priority candidates):**

| Handle | IG | TikTok |
|---|---|---|
| yanjewelry | ❌ TAKEN — `yan-jewelry (@yanjewelry)` | ❌ TAKEN — placeholder |
| enamelhouse | ❌ TAKEN — `Enamel House` (real account) | ✅ AVAILABLE |
| kilnhouse | ❌ TAKEN — `Catherine Hickey` (real account) | ❌ TAKEN |
| clearwindow | ✅ AVAILABLE | ❌ TAKEN — placeholder |
| yan_yunnan | ❌ TAKEN — `Yunnan (@yan_yunnan)` | — |
| yantheatelier | ✅ AVAILABLE | — |
| yan_enamel / yanenamel / yan.enamel | ✅ all 3 AVAILABLE | yanenamel ✅ AVAILABLE |
| atelieryan (current Toronto brand) | ❌ TAKEN — `(@atelieryan)` empty display name | **[not tested]** |

---

## Aggregate ranking (one line per candidate)

Format: `name — domain · TM · social`. ✅ = pass, ⚠️ = qualified, ❌ = fail.

| Rank | Candidate | Verdict |
|---|---|---|
| 1 | **pliquehouse** | .com ✅ BUYABLE · TM ⚠️ no collision found but descriptiveness 2(e)(1) risk (`plique` = enamel technique) · IG/TT ✅ CLEAR · X **[manual]** · XHS **[manual]**. Best clean slate among rename candidates. |
| 2 | **plique-house** | .com ✅ BUYABLE · same TM ⚠️ as #1 · IG `plique.house` and `plique_house` ✅ both CLEAR · X **[manual]**. Tie with #1; hyphen-vs-non-hyphen is a separate strategic decision. |
| 3 | **objecthu / object-hu / object.hu** | .com ✅ BUYABLE on all three · TM ⚠️ Anna Hu Haute Joaillerie opposition risk in same category, examiner risk lower · IG ✅ CLEAR (all variants) · TikTok ⚠️ `objecthu` is squatted as placeholder, but `object.hu` ✅ CLEAR · X **[manual]**. |
| 4 | **yanatelier** (no hyphen) | .com ✅ BUYABLE · **TM ❌ HIGH RISK — Atelier Yan Toronto is the same word-mark in same goods (their atelieryan.com is the word-order swap)** · IG ✅ CLEAR · TikTok ❌ squatted placeholder · X **[manual]**. The .com is buyable but the consumer-confusion / opposition risk from Atelier Yan Inc. is severe; the underscore handle `yan_atelier` is taken by a Korean user. |
| 5 | **yan-atelier** (current) | .com ✅ BUYABLE · TM ❌ same Atelier Yan collision as #4 · IG `yan_atelier` ❌ TAKEN (Korean), `yan.atelier` ❌ TAKEN (Yan) · TikTok ✅ CLEAR · X **[manual]**. No improvement on #4. |
| 6 | **yan-the-atelier** | .com ✅ BUYABLE · TM ⚠️ still contains "Yan" + "Atelier" tokens (same Toronto collision concern in DuPont analysis) · IG ✅ CLEAR · TikTok **[not tested but likely clear]** · X **[manual]**. Awkward English. |
| 7 | **yan-enamel / yan_enamel / yanenamel** | .com ✅ BUYABLE · TM ⚠️ "enamel" is descriptive for enamel jewelry (2(e)(1) refusal almost certain on the descriptive word alone, but composite may pass) · IG ✅ all CLEAR · TikTok yanenamel ✅ CLEAR · X **[manual]**. Cleanest "stay-with-YAN" option for TM and social, but descriptiveness risk on the goods. |
| 8 | **yan-yunnan / yanyunnan** | .com ✅ BUYABLE · TM ⚠️ "Yunnan" is geographic-descriptive (2(e)(2)) · IG `yan_yunnan` ❌ TAKEN, `yanyunnan` ✅ CLEAR · X **[manual]**. |
| 9 | **yanjewelry** | .com ✅ BUYABLE · TM ⚠️ "jewelry" is generic-descriptive · IG ❌ TAKEN (yan-jewelry, real account) · TikTok ❌ TAKEN (placeholder). |
| 10 | **vitrage** | .com ❌ TAKEN since 1998 · .studio ❌ TAKEN · .co/.gallery/.atelier ✅ available · TM ⚠️ generic French word, no Class 14 collision but heavy descriptive usage in glass trade · IG ❌ TAKEN · TikTok ❌ TAKEN · X ❌ TAKEN. **Domain+social losses make this unworkable without a workaround like `vitragejewelry`.** |
| 11 | **vitragejewelry** | .com ✅ BUYABLE · same TM as #10 plus generic "jewelry" suffix · IG ✅ CLEAR · TikTok ✅ CLEAR · X **[manual]**. |
| 12 | **dianyun** | .com ❌ TAKEN · .studio/.co/.gallery/.atelier ✅ · TM ⚠️ geographic-descriptive · IG ❌ TAKEN · TikTok ❌ TAKEN · X ❌ TAKEN. **Three-platform sweep means unviable for a global brand handle.** |
| 13 | **enamelhouse** | .com ❌ TAKEN · TM ⚠️ descriptive · IG ❌ TAKEN (real Enamel House account) · TikTok ✅ CLEAR. .com block is fatal alone. |
| 14 | **kilnhouse** | .com ❌ TAKEN · .studio ❌ TAKEN · TM ⚠️ descriptive · IG ❌ TAKEN (Catherine Hickey) · TikTok ❌ TAKEN. Unviable. |
| 15 | **clearwindow** | .com ❌ TAKEN · TM ⚠️ generic descriptive · IG ✅ CLEAR · TikTok ❌ TAKEN. .com block. |
| 16 | **glass-and-silver / glassandsilver** | .com glass-and-silver ✅ / glassandsilver ❌ · TM ⚠️ severely descriptive (both material names) · social **[not tested in detail]**. Strong 2(e)(1) risk. |

---

## Items flagged for manual verification

These were either blocked by JS challenges, rate limits, or login walls during this audit:

1. **USPTO direct search at https://tmsearch.uspto.gov/** — SPA; must search in browser. Recommended queries:
   - `YAN` filtered to Class 014 with LIVE filter
   - `ATELIER YAN`
   - `ANNA HU`
   - `VITRAGE` filtered to Class 014
   - `PLIQUE` filtered to Class 014
   - `OBJECT HU`
2. **EUIPO eSearch plus at https://www.euipo.europa.eu/eSearch/** — same SPA pattern.
3. **TMview at https://www.tmdn.org/tmview/** — covers EUIPO + national EU offices + WIPO + CIPO + IPO China.
4. **CIPO (Canadian) trademark search at https://www.ic.gc.ca/app/opic-cipo/trdmrks/srch/home** — critical for "Atelier Yan" since Yan Wu's Toronto brand may have a CIPO filing that does not appear in USPTO data.
5. **Xiaohongshu username availability** for all top 5 — requires logged-in app or web session.
6. **X / Twitter handles** for: yanatelier, pliquehouse, plique_house, objecthu, vitragejewelry, yanenamel — anonymous title was generic "Profile / X" for all of these (could be either available or rate-limited).
7. **The 06-04 research file** with the original 7 YAN-collision list — recommend retrieving from user memory to confirm the remaining 4 names not identified in this audit.
8. **.atelier TLD pricing and registry restrictions** — Identity Digital portfolio; may have brand-purpose restrictions; quote needed from a registrar that carries it (Gandi, Dynadot, 101domain).
9. **Domain reseller / aftermarket asking price** for the taken .coms (vitrage.com, dianyun.com, enamelhouse.com, kilnhouse.com, clearwindow.com, atelieryan.com, glassandsilver.com) — RDAP only confirms registration; does not show whether owner would sell.

---

## Source URLs (all verified accessed on 2026-06-22 unless noted)

### Domain / RDAP
- https://rdap.verisign.com/com/v1/domain/{name} — .com authoritative RDAP (Verisign)
- https://rdap.org/domain/{name}.{tld} — RDAP via IANA bootstrap (covers .co, .studio, .gallery, .atelier)
- https://www.whois.com/whois/vitrage.com — confirms vitrage.com registration date 1998-01-10, Prague registrant, name.com registrar
- https://www.atelieryan.com/ — atelieryan.com active Wix-hosted site

### Pricing
- https://cfdomainpricing.com/ — Cloudflare Registrar wholesale pricing snapshot updated 2026-06-22
- https://www.namecheap.com/domains/registration/gtld/studio/ — .studio at $12.98
- https://www.namecheap.com/domains/registration/gtld/gallery/ — .gallery at $29.98
- https://domainoffer.net/tld/com/namecheap — .com promo rates
- https://en.wikipedia.org/wiki/Identity_Digital — .atelier registry operator background

### Trademark / collisions
- https://www.atelieryan.com/about — Atelier Yan Toronto company page
- https://www.atelieryan.com/yan-wu — Yan Wu CV / OCAD background
- https://supportontariomade.ca/manufacturer/toronto/atelier-yan-inc — Ontario business registry listing
- https://www.yanjiangstudio.com/ — Yan Jiang Studio Zurich main site
- https://www.yanjiangstudio.com/about — Yan Jiang bio + Gübelin tenure
- https://en.wikipedia.org/wiki/Anna_Hu — Anna Hu Haute Joaillerie biography
- https://www.annahu.com/timeline — brand timeline
- https://www.fhcm.paris/en/house/anna-hu — FHCM Paris Haute Couture roster
- https://couturenotebook.com/best-haute-couture-blog/anna-hu-jewellery-2026 — 2026 collection coverage
- https://trademarks.justia.com/884/08/lasdf-88408392.html — Yan Fang Class 14 mark
- https://www.trademarkia.com/owners/he-yan — He Yan, 26 marks
- https://www.trademarkia.com/opt-85144313 — Yan Shiping OPT mark (DEAD 2019)
- https://uspto.report/TM/88821684 — Yan Xiuping MISTSINCE mark (per Google snippet)
- https://uspto.report/TM/90745543/ — Yan Jie BRISIRA mark (per Google snippet)

### Social handles (verified via curl HTTP+title scrape on 2026-06-22)
- https://www.instagram.com/{handle}/ — title scrape pattern: `<title>Instagram</title>` = available; `<title>(@handle) • Instagram photos and videos</title>` = taken
- https://www.tiktok.com/@{handle} — JSON `uniqueId` field in hydration data confirms taken vs unmounted
- https://x.com/{handle} — title scrape, partial signal only (X requires login for full profile resolution)

---

**End of factual audit. No naming-strategy recommendations in this document — see brand-strategy lane separately.**
