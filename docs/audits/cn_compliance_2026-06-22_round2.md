# YÀN Atelier · 中国电商合规审计 · Round 2

**审计对象**: https://yan-atelier-site.pages.dev (commit `477c853`, 2026-06-22 部署)
**审计员**: 同 round 1 (CN 跨境电商合规专家)
**取证**: live HTML 476KB 抓取 `_live_snapshot_r2.html` + `catalog.json` HTTP 200 校验 + 行号锚定
**对比基线**: `cn_compliance_2026-06-22.md` (62/100)

---

## 新评分: **70 / 100** (+8)

唯一推动分数上行的是 AI 标识从 0 到 70 分 (半合规);其余 4 项硬伤 / 软伤未动。+8 已是上限,因为本周修复仅触动 1 个维度。

---

## 1. AI 标识披露 — **半合规 (Partial Pass)**

**实装证据**:
- CSS `.ai-disclosure-badge` (line 4162-4178): 绝对定位右下角, `rgba(20,20,20,.65)` 半透黑底 + `font-size: 10px` JetBrains Mono, `bottom/right: 12px`, 移动端降到 9px。
- 首页 dual-door 实例 (line 6121-6122): `<img data-ai-generated="true">` + `<span class="ai-disclosure-badge" aria-label="AI 辅助生成图像">AI 辅助</span>`。
- PDP worn-section 实例 (line 10029-10033): 同结构 + 文件名正则 `/\/p\d{2}-worn-/` 判定是否 AI 图,动态切换 `display`。
- 色变交互 (line 10282-10295): swatch 切换时 `aiBadgeEl.style.display` 同步刷新 — **色切后 badge 状态正确**。
- `catalog.json` HTTP 200 `application/json` ✓ (round 1 解析故障已修)。

**规章原文比对**:

> 《人工智能生成合成内容标识办法》(2026.01 施行) 第 4 条: "生成合成内容的服务提供者应当对生成合成内容添加**显著标识**……标识应当采取文字、声音、图形等方式,**位于内容的合理可识别位置**。"

> 第 6 条: "应当在文件元数据中添加**隐式标识**,包括服务提供者名称、内容编号、生成时间等。"

**判定**:
- 显式标识 — **半通过**。文字"AI 辅助" / "AI assisted" 在图右下角符合"合理可识别位置";但 10px 半透灰底 (移动端 9px) 在 1280px 视口实测占图面 < 0.6%,监管语境下"显著"通常解读为正文字号 (≥ 12px) 或≥ 图面 2%。**建议升 12-14px + 实底**, 否则现场检查易被判"形式标识、未达显著"。
- 隐式标识 — **不通过**。`data-ai-generated="true"` 是 DOM attribute, **不是 HTTP/文件元数据**;原图 JPG 内 EXIF / XMP / C2PA 0 嵌入。第 6 条法定责任未尽。
- 文字侧披露 — **缺失**。Worn section 标题 "How to Wear / 戴法" + caption (line 10037-10038) **0 字提及 AI**。Etsy 2026 + Meta 都要求 listing 描述文字内明确披露 (不能只靠角标)。
- aria-label `AI 辅助生成图像` — 无障碍读屏可命中,**这条做得好**。

**残余风险**: 角标尺寸 + EXIF 缺失 + caption 文字未披露 = 监管口径可主张"标识不充分",处罚区间从"责令改正"升到"警告 + 罚款"。但已脱离 round 1 的"完全无标识 = 直接行政处罚"区间。

---

## 2. 其他 2 HARD FAIL + 3 PARTIAL — **无变化**

| 项目 | round 1 | round 2 | 证据 |
|---|---|---|---|
| Stripe / SAFE 跨境收款披露 | FAIL | **FAIL (无变化)** | grep `SAFE / 外汇 / 国家外汇 / 跨境收款` 全部 0 命中。Stripe 仅作为 Payment Link 跳转工具出现 (line 7971-8001), legalTerms 节零句披露。|
| Newsletter consent checkbox | FAIL (2 入口) | **FAIL (2 入口无变化)** | footer-newsletter form (line 6675) + inline newsletter (line 6804) 仍裸 email input,无 `.reserve-consent` checkbox 复用。仅 `#rv-consent` 在 Reserve 路径生效 (line 6781)。|
| 营业执照仅 CN 市场可见 | PARTIAL | **PARTIAL (无变化)** | `MARKET === 'cn'` 判定散布 13 处 (line 8483 / 8554 / 8642 / 8769 / 8970 等);footer-legal-entity 仍走 CN-only 注入。EN-default 访问者 0 暴露执照。|
| Reserve consent 未具名跨境 | PARTIAL | **PARTIAL (无变化)** | `consentText` (line 6951 / 7494) 文案仍是"已阅读并同意《隐私政策》《服务条款》",未单独点出"包括跨境传输至境外服务器"。|
| WeChat 内 mailto 断裂 | PARTIAL | **PARTIAL (无变化)** | grep `MicroMessenger / wechat-fallback / formspree` 全部 0 命中;`mailto:` 仍占 9 处主入口 (line 6320, 6665, 6898, 6955, 7120, 7123, 7126, 7167, 7190)。WeChat X5 内核仍 100% 拦截。|

---

## 3. 新引入的合规雷 (round 2 自带风险)

1. **`p05-worn-purple.jpg` 在首页与 PDP 两次复用**: 同一张 AI 图作为 dual-door 装饰 + PDP worn 主图。若被举报,等同"重复展示 AI 模特生成图",罚款基数会按"展示次数 × 内容数"叠加。建议至少首页降清晰度或换成实物图。
2. **判定规则硬编码文件名正则** `/\/p\d{2}-worn-/`: 一旦未来上线真人模特图却命名为 `p08-worn-XXX.jpg`,**会错标真人图为 AI**,触发"虚假标识"投诉。应改为白名单 `data-attribute` 显式标注,而非靠路径推断。
3. **aria-label 与可视文字不一致** (`AI 辅助生成图像` vs 可视 `AI 辅助`): 读屏用户与视觉用户披露口径不一,虽不违法但被律师函抓 inconsistency 概率上升。
4. **EXIF / C2PA 隐式标识缺失**: 法第 6 条的硬性要求,未来若四部门联合抽查 (2026 H2 预期),会被定性"应做未做"。3 张图重新跑 ExifTool 写入 `XMP-iptcExt:DigitalSourceType=trainedAlgorithmicMedia` 即可,工作量 < 30 分钟。

---

## 4. 本周必修 (7 日内 deadline)

| # | 项目 | 工作量 | deadline |
|---|---|---|---|
| 1 | AI badge 升 12-14px 实底 + Worn section caption 加一句"模特图为 AI 辅助渲染,首饰为实物 / Worn shot rendered with AI; piece is real" | 30 分钟 | **周三** |
| 2 | 3 张 worn 图 EXIF/XMP 写入 `DigitalSourceType=trainedAlgorithmicMedia` (ExifTool 单命令) | 30 分钟 | **周三** |
| 3 | Stripe / SAFE 收款披露段落: 写入 legalTerms Payment 节,披露"国际订单经 Stripe 结算 USD,工坊以个体工商户身份按外汇申报"。律师 30 分钟可过 | 0.5 天 | **周五** |
| 4 | Newsletter footer + inline 两入口加 `.reserve-consent` checkbox + consentText (复制 Reserve 模式) | 0.5 天 | **周日** |
| 5 | Reserve `consentText` 加一句"包括跨境传输至境外服务器" | 5 分钟 | **周日** |
| 6 | 营业执照 footer 块解除 `MARKET === 'cn'` 判定 (两市场都显示, EN 视为"trading information") | 10 分钟 | **周日** |

WeChat fallback (round 1 #5) 与 ICP 备案不在本周清单 — 14 天 / 域名绑定后再做,保留 round 1 排序。

---

## 5. 法务风险评级: **MEDIUM** (从 round 1 的 HIGH 下调一级)

致 Hu Yan:

477c853 这一推真做了一件正事:把"AI 图 0 标识"这个**最容易被记者一截图就上热搜 + 工信部 12381 投诉直接立案**的硬伤,从 0 抬到了 70 分。值得肯定。

但请别把"加了角标"当成"AI 合规已完成"。规章原文要求"**显著标识**"和"**隐式元数据**"两件事,你现在只做了第一件的一半 (10px 角标不够显著, EXIF 没写)。worn section 的正文文字里 0 字提及 AI,这是 Etsy / Meta 2026 都会要求的另一条独立合规线 — 跨境品牌容易顾此失彼。

剩下 4 项 round 1 硬伤 (Stripe / Newsletter / 营业执照 EN 显示 / WeChat mailto) 完全没动。这意味着**法律风险从 HIGH 降到 MEDIUM 的唯一原因是"最致命那一项被部分解决"**, 而不是"整体大幅好转"。如果本周清单 6 项能在周日前关掉前 5 项,合规分能从当前 70 抬到 82,法务风险才能正式降到 LOW。

不要急着推 KOL 投放,也不要急着开微信公众号引流 — Newsletter checkbox + Stripe 披露这两件没做之前,任何流量增长都会**等比放大被举报的命中率**。先把这一周的清单结掉。

— 合规审计员 · 2026-06-22 round 2

---

*行号全部锚定 `_live_snapshot_r2.html`。catalog.json HTTP 200 / `application/json` 已二次确认。本次审计 0 代码改动。*
