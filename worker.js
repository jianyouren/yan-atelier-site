/**
 * YÀN Gift Finder · Cloudflare Worker backend
 * --------------------------------------------
 * Accepts POST { answers, market } from gift-finder-ai.html
 * Calls Anthropic Claude API with the AI Knowledge Base as system context
 * Returns parsed JSON: { intro, picks: [{id, name, form, priceCN, reasoning}], next_step }
 *
 * Deploy:
 *   1. Save this as worker.js
 *   2. Save the wrangler.toml (sibling file)
 *   3. Get an Anthropic API key from console.anthropic.com
 *   4. Run: npx wrangler secret put ANTHROPIC_API_KEY
 *      (paste your key when prompted)
 *   5. Run: npx wrangler deploy
 *   6. Copy the deployed URL into gift-finder-ai.html's GIFT_FINDER_ENDPOINT constant
 */

// ============================================================
// PRODUCT CATALOG — keep in sync with index.html PRODUCTS + ai-knowledge-base.md § 5
// ============================================================
const PRODUCT_CATALOG = [
  { id: 'YA-2026-0001', name_cn: '绿野雏菊', name_en: 'Daisy of the Meadow', series: 'bloom', form_cn: '胸针', form_en: 'Brooch', priceCN: 1280, status: 'available', desc: 'Sixteen-petal daisy, plique-à-jour enamel shading green to soft yellow, freshwater pearl center.' },
  { id: 'YA-2026-0002', name_cn: '青空之蝶', name_en: 'Butterfly in Azure', series: 'butterfly', form_cn: '胸针', form_en: 'Brooch', priceCN: 3780, status: 'sold', desc: 'Plique-à-jour butterfly wings in azure blue, no metal backing, openwork silver body.' },
  { id: 'YA-2026-0003', name_cn: '银杏环', name_en: 'Ginkgo Wreath', series: 'bloom', form_cn: '胸针·可作衣饰', form_en: 'Brooch · also worn as ornament', priceCN: 1380, status: 'available', desc: 'Six ginkgo leaves in a circle, wire-inlay green enamel shading from tip to stem.' },
  { id: 'YA-2026-0004', name_cn: '银杏簪 · 双钗', name_en: 'Ginkgo Hairpin · A Pair', series: 'hairpin', form_cn: '簪钗·一对', form_en: 'Hairpin · pair', priceCN: 4180, status: 'sold', desc: 'A pair of hairpins (one blue, one green) with red agate, yellow amber, pearl tassels.' },
  { id: 'YA-2026-0005', name_cn: '紫兰格窗', name_en: 'Iris Lattice', series: 'season', form_cn: '手镯', form_en: 'Bracelet', priceCN: 5180, status: 'available', desc: 'Six openwork silver windows, wire-inlay iris enamel, garnet flower clasps, carnelian teardrop.' },
  { id: 'YA-2026-0006', name_cn: '青兰格窗', name_en: 'Iris Lattice in Cyan', series: 'season', form_cn: '手镯', form_en: 'Bracelet', priceCN: 5180, status: 'available', desc: 'Sister of Iris Lattice in blue, with an openwork lotus clasp signature.' },
  { id: 'YA-2026-0007', name_cn: '幽兰格窗', name_en: 'Iris Lattice at Dusk', series: 'season', form_cn: '手镯', form_en: 'Bracelet', priceCN: 5180, status: 'reserved', desc: 'Twilight version of Iris Lattice, deeper purple enamel.' },
  { id: 'YA-2026-0008', name_cn: '鱼戏莲叶 · 长命锁', name_en: 'Koi & Lotus Long-Life Lock', series: 'heirloom', form_cn: '长命锁·项链', form_en: 'Long-life lock · pendant', priceCN: 3180, status: 'available', desc: 'Traditional Chinese long-life lock form, koi-among-lotus motif, hand-braided silk cord.' },
  { id: 'YA-2026-0009', name_cn: '福纹祥云 · 镯', name_en: 'Fortune & Auspicious Cloud', series: 'heirloom', form_cn: '手镯', form_en: 'Bangle', priceCN: 4180, status: 'sold', desc: 'Dense openwork silver bangle with sapphire-blue cloud motifs and central fú character.' },
  { id: 'YA-2026-0010', name_cn: '靛蓝之蝶 · 流苏项链', name_en: 'Indigo Butterfly with Tassels', series: 'butterfly', form_cn: '项链·锁骨链', form_en: 'Necklace · collarbone chain', priceCN: 2380, status: 'available', desc: 'Indigo enamel butterfly wings with openwork veins, two silver tassels behind.' },
  { id: 'YA-2026-0011', name_cn: '云水祥纹 · 镯', name_en: 'Cloud & Water', series: 'heirloom', form_cn: '手镯', form_en: 'Bangle', priceCN: 3780, status: 'sold', desc: 'Plain version of Fortune cloud bangle, no character, only cloud motif.' },
  { id: 'YA-2026-0012', name_cn: '青莲编织 · 手链', name_en: 'Narcissus on a Cord', series: 'bloom', form_cn: '手链·可调节', form_en: 'Bracelet · adjustable', priceCN: 1280, status: 'available', desc: 'Blue enamel tube with two narcissi, braided silk ends, adjustable for any wrist size.' }
];

// ============================================================
// SYSTEM PROMPT — embeds atelier voice + escalation rules from KB
// (For production, consider fetching the full ai-knowledge-base.md from R2 or KV.)
// ============================================================
function buildSystemPrompt(market) {
  const isCn = market === 'cn';
  const onlyAvailable = PRODUCT_CATALOG.filter(p => p.status === 'available');
  const catalogText = onlyAvailable.map(p =>
    isCn
      ? `- ${p.id} · ${p.name_cn} (${p.form_cn}) · ¥${p.priceCN} · 系列: ${p.series} · ${p.desc}`
      : `- ${p.id} · ${p.name_en} (${p.form_en}) · ¥${p.priceCN} (~$${Math.ceil((p.priceCN * 2 / 7) / 10) * 10 - 1}) · series: ${p.series} · ${p.desc}`
  ).join('\n');

  return `You are the YÀN Atelier Gift Finder — an AI assistant from the YÀN · Yunnan Studio enamel workshop. Hu Yan is the founder and master enameller. You help customers find the right piece from the current catalog.

# Hard rules

1. Recommend ONLY from the AVAILABLE catalog below. Never invent a piece, never recommend sold/reserved ones.
2. Recommend EXACTLY 3 pieces.
3. Each reasoning is 40-60 words, ${isCn ? '中文 atelier voice' : 'English atelier voice'} — restrained, specific, no marketing-speak, no emojis, no boast.
4. Atelier voice rules:
   - Use "工坊" / "the atelier" subject. Never "Hu Yan will personally pick for you" (she doesn't see every case).
   - Specific over vague. ¥ + ID + form + reasoning.
   - No "rare!" "exclusive!" "one-of-a-kind!" register.
   - ${isCn ? 'EN 不是 CN 翻译' : 'EN is not a translation of CN — draft natively'}.
5. Plique-à-jour (空窗珐琅) is a technique, not a motif. Mineral enamel (矿石珐琅) is the pigment family. 800°C high-fire.
6. ${isCn ? '不要列纹样含义或解释字眼,克制。' : 'Do not list motif meanings or explain symbolism. Be restrained.'}

# Available catalog

${catalogText}

# Output format

Return ONLY valid JSON in this exact shape (no markdown fence, no commentary outside JSON):

{
  "intro": "${isCn ? '1 句开篇 · 反映对客户场景的理解(20-40 字)' : '1-sentence opening reflecting the customer scenario (20-40 words)'}",
  "picks": [
    {
      "id": "YA-2026-XXXX",
      "name": "${isCn ? '中文名' : 'English name'}",
      "form": "${isCn ? '形制' : 'form'}",
      "priceCN": <number>,
      "reasoning": "${isCn ? '40-60 字 · atelier 口吻 · 解释为什么这一件适合这个具体收礼人和场景' : '40-60 words · atelier voice · why this piece fits THIS recipient and occasion'}"
    },
    { ... },
    { ... }
  ],
  "next_step": "${isCn ? '1 句下一步建议(直接看作品页或私约工坊)' : '1-sentence next step (open the piece page or write to the atelier)'}"
}`;
}

// ============================================================
// MAIN HANDLER
// ============================================================
export default {
  async fetch(request, env) {
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    let body;
    try { body = await request.json(); }
    catch { return jsonError('Invalid JSON', 400); }

    const { answers, market } = body;
    if (!answers || !market) return jsonError('Missing answers or market', 400);

    const systemPrompt = buildSystemPrompt(market);
    const userMessage = formatUserMessage(answers, market);

    try {
      const r = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1500,
          system: systemPrompt,
          messages: [{ role: 'user', content: userMessage }]
        })
      });

      if (!r.ok) {
        const errText = await r.text();
        return jsonError(`Anthropic API error: ${r.status} ${errText}`, 502);
      }

      const data = await r.json();
      const text = (data.content && data.content[0] && data.content[0].text) || '';

      // Extract first valid JSON object from the response
      const match = text.match(/\{[\s\S]*\}/);
      if (!match) return jsonError('LLM returned no JSON', 502);

      let parsed;
      try { parsed = JSON.parse(match[0]); }
      catch { return jsonError('Failed to parse LLM JSON', 502); }

      return new Response(JSON.stringify(parsed), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-store'
        }
      });
    } catch (e) {
      return jsonError(`Worker exception: ${e.message}`, 500);
    }
  }
};

function jsonError(message, status) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}

function formatUserMessage(a, market) {
  const isCn = market === 'cn';
  const recipientLabel = isCn
    ? { mother: '母亲 / 长辈', partner: '爱人 / 伴侣', friend: '亲密好友', self: '自己', other: '其他重要的人' }
    : { mother: 'mother or elder', partner: 'partner or beloved', friend: 'close friend', self: 'self', other: 'someone else important' };
  const occasionLabel = isCn
    ? { birthday: '生日 / 重要的年纪', anniversary: '周年 / 长情纪念', milestone: '人生 milestone', healing: '陪她走过一段时光', justbecause: '没有理由 · 就是想送', 'self-celebrate': '犒劳自己' }
    : { birthday: 'meaningful birthday', anniversary: 'anniversary / long bond', milestone: 'life milestone', healing: 'walking her through a passage', justbecause: 'just because', 'self-celebrate': 'marking my own moment' };
  const styleLabel = isCn
    ? { subtle: '内敛安静', classical: '古典端庄', modern: '现代简约', bold: '有态度 · 有声音', mixed: '什么都戴' }
    : { subtle: 'quiet and considered', classical: 'classical heirloom-leaning', modern: 'modern minimal', bold: 'speaks with presence', mixed: 'wears it all' };
  const budgetLabel = isCn
    ? { low: '¥1,200-2,000', mid: '¥2,000-3,500', high: '¥3,500-5,500', flex: '弹性预算' }
    : { low: '$369-579', mid: '$579-999', high: '$999-1,479', flex: 'flexible' };

  return isCn
    ? `客户填写的信息:
- 收礼人: ${recipientLabel[a.recipient] || a.recipient}
- 场合: ${occasionLabel[a.occasion] || a.occasion}
- 她的风格: ${styleLabel[a.style] || a.style}
- 预算: ${budgetLabel[a.budget] || a.budget}
- 关于她: ${a.aboutHer || '(未填写)'}

请按上面 JSON 格式输出 3 件方向。仅返回 JSON,不要额外说明。`
    : `Customer information:
- Recipient: ${recipientLabel[a.recipient] || a.recipient}
- Occasion: ${occasionLabel[a.occasion] || a.occasion}
- Her style: ${styleLabel[a.style] || a.style}
- Budget: ${budgetLabel[a.budget] || a.budget}
- About her: ${a.aboutHer || '(not provided)'}

Output 3 recommendations in the JSON format above. Return ONLY JSON, no other commentary.`;
}
