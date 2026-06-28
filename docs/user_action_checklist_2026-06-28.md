# User Action Sprint · 2026-06-28

Two parallel 30-min sprints. After both done, ping Claude — 1 hour of integration brings panel score from ~7.0 → ~8.0.

---

## Sprint A · Stripe Payment Links (30 min) — kills mailto Reserve

### Step 1 · Account (5 min, skip if you already have Stripe)
1. Go to https://dashboard.stripe.com/register
2. Sign up with `huhao2402177362@gmail.com`
3. Business type: **Individual** (or LLC if you've registered one)
4. Country: **Hong Kong** (preferred for cross-border) OR **Singapore** OR **United States** if you have an EIN
5. Skip "complete verification" for now — Payment Links work in test mode immediately
6. **Verify if user goes Airwallex Global instead**: same flow at https://www.airwallex.com — but Stripe is faster to ship

### Step 2 · Create products (15 min)
For each of the **top 5 SKUs**, create a Payment Link. Top 5 priority order:

| # | SKU ID | Display name | Price (USD) | Image filename to upload |
|---|---|---|---|---|
| 1 | YA-2026-0005 | Iris Bracelet · Iris | $1,479 | p05-bracelet-purple.jpg |
| 2 | YA-2026-0002 | Butterfly Brooch · Plique-à-jour | $1,799 | p02-butterfly-blue.jpg |
| 3 | YA-2026-0042 | Plique Butterfly Necklace · Green | $1,799 | p42-pliqueajour-butterfly-necklace-green.png |
| 4 | YA-2026-0069 | Plique Butterfly Pendant · Blue | $1,799 | p69-pliqueajour-butterfly-pendant-blue.jpg |
| 5 | YA-2026-0074 | Plique Wing Pendant · Blue-Green | $1,599 | p74-wing-bluegreen.jpg |

For each:
1. Dashboard → **Products** → **Add product**
2. Name: as above (English)
3. Description: paste the `global.desc` from the PRODUCTS array (or use 1-line "Made by hand at YÀN · Yunnan Studio. Plique-à-jour enamel, 5–10 firings at 800°C.")
4. Image: upload from `D:/YAN_Atelier_Site/images/`
5. Pricing: **One-time** · USD · enter the price above
6. Save product → click **Create payment link**
7. Payment Link settings:
   - Confirm message: "Thank you. We'll email you within 24h with a shipment timeline + tracking once your piece ships."
   - Redirect: leave as default
   - Allow promotion codes: **off**
   - Limit quantity: **1 per checkout** (no bulk for now)
   - **Shipping**: enable, set free worldwide
8. Copy the resulting URL (looks like `https://buy.stripe.com/abc123xyz`)

### Step 3 · Paste URLs back (5 min)
Open `D:/YAN_Atelier_Site/index.html`. Find this block (around line 8318):

```js
const PAYMENT_LINKS = {
  // 'YA-2026-0001': 'https://...', // Daisy Brooch — ¥1,280
  // 'YA-2026-0005': 'https://...', // Iris Bracelet · Iris — ¥5,180
  ...
};
```

Replace with your real URLs. Format:

```js
const PAYMENT_LINKS = {
  'YA-2026-0005': 'https://buy.stripe.com/<your-link>',
  'YA-2026-0002': 'https://buy.stripe.com/<your-link>',
  'YA-2026-0042': 'https://buy.stripe.com/<your-link>',
  'YA-2026-0069': 'https://buy.stripe.com/<your-link>',
  'YA-2026-0074': 'https://buy.stripe.com/<your-link>',
};
```

### Step 4 · Tell Claude (1 min)
Message: "Stripe 5 个链接填好了" — Claude will:
- Verify the dict parses + the keys match real SKU IDs
- Test one link manually
- Surface the "Buy" button on each of the 5 SKU's PDP (currently labeled "Reserve" mailto)
- Update the home buy CTA to go direct
- Ship in 1 commit

After: 5 hottest SKUs have real Stripe checkout. The remaining ~70 SKUs stay on Reserve mailto until you create more links (do in batches).

---

## Sprint B · iPhone Photography (30 min) — kills AI tells

### Setup (5 min)

**Light:** stand near a north-facing window between 10am and 3pm. Avoid direct sun.

**Background:** clean off-white wall, raw linen cloth, OR a sheet of warm grey craft paper (¥10 from any stationery shop). Avoid patterned fabric.

**Phone settings:**
- Open Camera. Tap to focus on the piece.
- Drag the sun-icon slider DOWN until the highlights aren't blown out (-0.3 EV usually right)
- Turn OFF Live Photo
- HDR: **Auto** is fine
- Portrait mode: only for portrait of Hu Yan (not for products)

**Hold:** brace elbows against your body or rest phone on a stack of books for steadiness. Square crop in Photos app after.

### Shot list

#### Shot 1-2 · Hu Yan portrait at bench (2 frames, 5 min)
- **Frame 1**: 3/4 angle from her side, hands working a piece on the bench. Don't pose her — let her actually work for 30 seconds, you shoot.
  - Filename target: `images/maker-huyan-bench-2026-06.jpg`
- **Frame 2**: tighter — just her hands holding a tool (tweezers / brush / file) over a piece. No face. 16:9 crop.
  - Filename target: `images/maker-huyan-hands.jpg`

#### Shot 3 · Workshop scene (1 frame, 3 min)
- The bench from a 45° angle. Visible: tools (~5-8), enamel powders in their jars, an unfinished piece. Slightly messy is good.
  - Filename target: `images/atelier-bench-2026-06.jpg`

#### Shot 4-6 · Piece-in-hand (3 frames, 12 min)
Pick **3 of these 5 SKUs** that you have physical pieces of:
- 0005 Iris Bracelet · Iris (priority — this is the keystone)
- 0002 Butterfly Brooch · Plique
- 0042 Butterfly Necklace · Green Plique
- 0069 Butterfly Pendant · Blue Plique
- 0074 Wing Pendant · Blue-Green

For each:
- Lay flat on a palm, slight tilt (not flat-flat). Top-down. Show the piece + part of the hand for scale.
- Soft window light from the LEFT (gives subtle shadow on the right side of the piece — that's what gives 3D feel)
- Filename target:
  - 0005 → `images/p05-real-hand.jpg`
  - 0002 → `images/p02-real-hand.jpg`
  - 0042 → `images/p42-real-hand.jpg`
  - 0069 → `images/p69-real-hand.jpg`
  - 0074 → `images/p74-real-hand.jpg`

#### Shot 7 (BONUS) · Plique butterfly held to backlight (3 min)
- Hold the plique butterfly (0002 or 0042) up against the window, light streaming through the enamel cells. This shot demonstrates the "stained-glass" property that distinguishes plique-à-jour. **This single shot is the most defensible craft image you can take.**
  - Filename target: `images/plique-butterfly-backlit-2026-06.jpg`

### Step C · Send to PC (2 min)
Three options:
1. **WeChat 文件传输助手**: send all 7 frames as files (not images — preserves resolution)
2. **AirDrop** if Mac
3. **Email to yourself** with full-size attached

Save under `D:/YAN_Atelier_Site/images/` with the **exact filenames above**.

### Step D · Tell Claude (1 min)
Message: "拍好了" + list of shot numbers you got — Claude will:
- Diff against the existing `p*-worn-*.jpg` AI images
- Replace src= on 5 SKU PDPs + dual-door Self + Iris worn-variants
- Update About maker section
- Update plique-section hero
- Update Hu Yan portrait in About + Maker home
- Ship in 1 commit

After: 80% of the visible AI imagery is gone. Camille's deal-breaker disappears.

---

## Expected outcome (panel-projected)

| Persona | Pre-sprint | Post-sprint |
|---|---|---|
| 🇺🇸 Lauren | 6.5 | **7.4** (real photos + Stripe checkout) |
| 🇬🇧 Sophie | 7.2 | **7.9** (Stripe = museum-grade checkout closes the "Substack" gap) |
| 🇫🇷 Camille | 6.6 | **7.5** (AI badge gone + real photos = deal-breaker resolved) |
| 🇦🇺 Megan | 7.4 | **7.9** (Hu Yan real photo + real DDP checkout) |
| 🇮🇹 Giulia | 7.0 | **7.6** (Hu Yan portrait above-fold) |
| **avg** | **6.94** | **~7.7** |

To break **8.0+** still requires:
- Real press credentials (Wallpaper / Apollo / Le Figaro Madame pitches — weeks)
- 5+ real customer reviews / UGC
- Hu Yan biographical depth from family interview (training lineage, exhibition history)
- Continuous photography iteration

---

## File map

- This file: `D:/YAN_Atelier_Site/docs/user_action_checklist_2026-06-28.md`
- Pricing research: `D:/YAN_Atelier_Site/docs/pricing_research_2026-06-28/CONVERGENCE.md`
- 5-persona panel report: `D:/YAN_Atelier_Site/docs/persona_panel_2026-06-28/CONVERGENCE.md`
