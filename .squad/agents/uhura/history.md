# Project Context

- **Owner:** Chris Ayers
- **Project:** "The Well-Architected Architect" — Marp slide deck on Microsoft's Azure Well-Architected Framework.
- **Stack:** Marp markdown, custom-techorama theme, Mermaid, GitHub Pages.
- **Created:** 2026-05-13

## Learnings

<!-- Append new learnings below. -->

- 2026-05-13 (Fix 2 pass): `section { overflow: hidden }` safety-net pattern for Marp decks — Marp's default section overflow is `visible`, meaning content taller than the 720px frame bleeds into the next slide visually on stage. Adding `overflow: hidden` to the base `section { }` rule in the theme CSS silently clips any remaining overflow so it disappears cleanly rather than spilling. This is a zero-risk safety net: it has no visual effect on slides that fit within the frame, and it makes worst-case overflow invisible to the audience. Once this global rule is present, variant-level overrides (e.g. `section.glance { overflow: hidden }`) are redundant and can be skipped.

- 2026-05-13 (Validation pass): Tooling — `npx @marp-team/marp-cli@latest --theme-set slides/themes --html --allow-local-files -o validation/deck.html -- slides/Slides.md` builds cleanly on Windows PowerShell in the repo root (exit 0, no warnings). Output: 250.1 KB, 84 sections. Playwright v1.60.0 installed via `npm install @playwright/test playwright` in `validation/`; Chromium browser already present in `$env:LOCALAPPDATA\ms-playwright\chromium-1223\`. `node validate.mjs` (ESM, `import { chromium } from 'playwright'`) runs headless, 1280×720 viewport, file:// URL. Windows quirk: PowerShell `tail` not available — use `Select-Object -Last N` instead.
- 2026-05-13 (Validation pass): Measurement quirk — `section.clientHeight` = 714px (not 720). Marp sections exclude the 6px footer bar from clientHeight. `![bg fill]` images render to full 720px canvas → reports 6px "overflow" on `<figure>` elements for full-bleed slides (slides 2, 19, 78, 81). Not a real visual issue. Future scripts: filter out pure-image `<figure>` overflow < 8px or compare against 720px, not clientHeight.
- 2026-05-13 (Validation pass): Findings summary — 84 sections, 33 with issues (17 critical / 12 moderate / 4 minor). All overflow is vertical (Y-axis only). Two root causes: (1) All five At-a-Glance cards overflow because the handoff bridge blockquote added in the Flow pass pushes past the frame (109–202px); (2) All five Practices slides overflow because bullet count exceeds frame capacity (136–224px). Security Practices (p32) is the single worst offender at 224px. Architecture Fundamentals section has 4 critical slides from Kirk's Business Alignment + ADR additions. Theme fix available: add `overflow: hidden` to `section` base rule as a safety net (hides overflow from audience without requiring content edits).
- 2026-05-13 (Validation pass): Playwright script pattern that works on Windows for Marp — use `page.goto(DECK_URL + '#' + slideNumber)` for hash navigation between Marp slides; add `waitForTimeout(300)` after navigation before screenshotting; use `fullPage: false` with explicit `clip: { x:0, y:0, width:1280, height:720 }` to capture exactly the slide viewport. Script is at `validation/validate.mjs` and is reusable for future rounds.

- 2026-05-13: Deck uses `theme: custom-techorama`, footer "Chris Ayers | chris-ayers.com | Principal SWE, Microsoft", paginate true. Two-column layout via `<div class="columns"><div>...</div><div>...</div></div>`. Mermaid bootstrapped at end of file. Build: `marp-cli` via docker (marp-pages.yml). Theme files in `slides/themes/`; QR + portrait + architect art in `slides/img/` and `slides/themes/techorama/`.
- 2026-05-13: Layout audit (round 1, 75 slides) — method: walk every H1, count items per slide, check `_class` directive usage, image alt presence, ordered-list scoping across columns. Top patterns observed: (1) **zero** slides invoke the theme's existing `_class` variants (`.title`, `.section`, `.lead`) even though they're fully defined — biggest single visual win available; (2) six slides use `### h3` for slide title instead of `# h1` (all five `At a Glance` cards plus the Continuous Improvement table) — breaks heading hierarchy; (3) three slides ship inline `<style scoped>` table-display hacks; (4) image alt text missing on 5 of 6 images; (5) ordered list `1–3 / 4–7` split across columns will renumber (Marp resets counters per `<div>`); (6) closing frame has no H1; (7) eight slides exceed 7-bullet density rule.
- 2026-05-13: Theme adjustments shipped — baked `display: table/row/cell` into `section table` (obsoletes the scoped style hacks); tightened `.columns` / `.columns3` list spacing + heading margins + `align-items: start`; added `img[alt~="round"]` and `img[alt~="shadow"]` helpers; added four opt-in slide variants (`.dense`, `.glance`, `.outro`, `.resources`) and a `.contact-list` helper. All additions are opt-in so no existing slide changes appearance until owners add the matching `_class` comment. Verified clean build via `npx @marp-team/marp-cli` (75 sections, 248 KB HTML).
- 2026-05-13: Marp directive crib for future rounds — `<!-- _class: foo -->` (underscore = current slide only); `<!-- class: foo -->` (no underscore = applies to all subsequent slides until reset); `<!-- _paginate: false -->` to hide page number on title/full-bleed slides; `<!-- fit -->` inside an H1 enables auto-fit text; `![bg fill]`, `![bg left:40%]`, `![bg right:60% fit]` for backgrounds; alt-token sizing like `w:1000px` and `h:480px` works inside the alt text.
- 2026-05-13 (Round 2): Flow-pass layout audit — deck has grown to 84 slides as pillar owners added content. Patterns audited: variant activation (still zero at start of round — pillar owners didn't opt in), heading hierarchy (all 6 `### h3` slide titles found round 1 were still unfixed), residual scoped table hacks (2 remained in `# Azure WAF Overview` and `# Reliability - Key Metrics`), image alt text (5 images still missing alt), and missing-asset references in CSS theme. Pillar owners had edited intro body text in parallel, which broke a few of my multi-line `old_str` matches — fix: target the H1-line only when injecting `<!-- _class: -->` directives. Build verified clean with marp-cli v4.4.0.
- 2026-05-13 (Round 2): Edits shipped — title slide gets `_paginate: false` + alt on architect.png; bio + WAF + questions + QR images get alt text; 6 pillar/trade-off intros get `_class: lead`; 5 At-a-Glance cards promoted from `### h3` → `# h1` and given `_class: glance`; `### 🔁 Continuous Improvement & Pillar Maturity` promoted to `# h1`; Scenario-Based Trade-Off Discussions divider gets `_class: section` + `_paginate: false`; full-bleed `questions.jpg` gets `_paginate: false`; "Tell Me How I Did" gets `_class: outro`; closing Resources/Contact card gets `_class: resources`; the `# <!-- fit -->` pull-quote gets `_class: lead`. Two `<style scoped>` table-display hacks removed. CSS theme cleanup: dropped non-existent `title-bg.png` from `section.title` background-image (relies on gradient fallback) and replaced non-existent `castle-gate.svg` mask in `section.quest::before` with a soft radial gold glow; refreshed the asset header comment to match actual files in `themes/techorama/`. Net: ~22 of 84 slides now invoke a designed variant, up from 0.
- 2026-05-13 (Round 2): Layout patterns to remember — (1) when pillar owners are editing in parallel, scope multi-line `old_str` blocks to just the H1 line + a single anchor line to avoid match failures from concurrent body edits; (2) `section.title` with `justify-content: flex-end` plus a `<div class="columns">` child keeps the title-text + side-image layout working (no restructure needed) — left it un-applied this round only because the navy bg would change the visual feel of the title and Kirk should call that; (3) the `.lead` variant works well for divider slides that have `H1 + blockquote + paragraph` (text-align center wraps cleanly, vertical centering puts the punchline in the eye-line); (4) the `.section` variant is best for divider-only slides with H1 and **no body** (e.g. "Scenario-Based Trade-Off Discussions") because the 4em centered H1 takes the whole frame; (5) Closing-frame issue (round-1 finding, still open): final slide has no H1. Applying `_class: resources` adds a divider between columns but doesn't add a headline — that's a content decision for Kirk.
- 2026-05-13 (Round 2): Theme observation — `slides/themes/techorama/` contains 17 real assets; the CSS previously referenced 3 that don't exist (`title-bg.png`, `title-graphic.png`, `castle-gate.svg`). Heavy assets to be careful with: `stone-wall-texture-dark.jpg` (6.3MB), `techorama-hero-medieval.png` (4.7MB), `fleur-de-lis-pattern-dark.jpg` (4.3MB). None are used by current slides — pruning before public release would shrink the deployed `build/themes/` payload meaningfully.
- 2026-05-13 (Round 2): Density still high on the five `*-Practices*` slides (Reliability ~12 items, Security/Cost/OpEx/Performance 8-10 each) and on `Well-Architected Workloads Examples` (8 single-column bullets). All flagged in `uhura-flow-assessment.md` as moderate severity for pillar owners. No content edits made — sticking to layout-only ownership.

## Team Update — 2026-05-13

**Round:** Flow + enhancement pass (all seven agents spawned in parallel).

**Participants:** Kirk (overall), Scotty (Reliability), Chekov (Security), Spock (Cost), McCoy (OpEx), Sulu (Performance).

**Cross-pillar handoffs wired this round:**
- **Reliability → Security** — "reliability assumes the system is still yours" (Reliability close) hands off to Security's "Can it be breached — and would we see it?" (Security open).
- **Security → Cost** — "containment isn't free. Security spend is the next cost lever to make legible" (Security close) bridges to Cost's unit-economics framing.
- **Cost → OpEx** — "cost discipline rides on operational discipline — without safe change & feedback loops, savings regress" bridges to OpEx as the "carrier" pillar.
- **OpEx → Performance** — "operating safely is half the story — Performance proves it at P99 under load" (OpEx At-a-Glance) hands off to Perf's tail-latency validation.
- **Performance → Trade-Offs** — "performance never lives alone — every gain costs something elsewhere" (Perf At-a-Glance) introduces Trade-Offs chapter.

**Notes:** Activated 22 theme variants (title, pillar intros, At-a-Glance cards, closing frames). H1/H3 hierarchy fixed. Dead table hacks removed. Alt text added to 5 images. CSS dead asset URLs stripped. Concerns routed to pillar owners: five *-Practices* slides flagged DENSE (>7 bullets); missing-H1 on closing card noted for Kirk decision; optional Mermaid diagrams for Architecture Examples documented as nice-to-have.

---

## Team Update — 2026-05-13 (Round 3 Re-Validation)

**Round:** Post-fix re-validation after parallel Round 3 edits by 6 pillar owners + uhura-2 safety-net commit.

**Participants (Round 3 fixes reviewed):** Kirk, Scotty, Chekov, Spock, McCoy, Sulu + Uhura (theme).

**Deck size confirmed:** 88 sections (was 84; +4 from Scotty/Chekov/McCoy/Sulu splits — all landed cleanly, exit 0).

**Overflow delta:**
- Critical: 17 → 9 (−8)
- Moderate: 12 → 8 (−4)
- Minor: 4 → 7 (+3 — positive: three formerly critical/moderate slides dropped to near-zero)
- Real issues: 29 → 20 (−9)
- False-positive image artifacts: 4 (unchanged — slides 2, 17, 82, 79; 6px fullbleed measurement artifact)

**Best performers:** Sulu (3→1 flagged; Practices+Maturity fully fixed), Scotty (Practices split cleared worst item), McCoy (Practices split 136px→5px).

**Least progress:** Spock — Cost At-a-Glance unchanged at 183px (worst in deck); handoff blockquote was supposed to move to footer but did not land.

**Safety net status:** `section { overflow: hidden }` confirmed active. All 20 remaining real overflows are silently clipped — nothing bleeds visually between slides. Deck is safe to present today.

**Round 4 target (if time permits):** 5 At-a-Glance owners each move handoff blockquote to `<!-- _footer: -->` (2-line change, 6 criticals closed); Kirk trims Supportability+What's New; Chekov cuts 2 bullets from Security Practices. ~30 min parallel pass.

**Report:** `.squad/decisions/inbox/uhura-revalidation-findings.md`

---

## Team Update — 2026-05-13 (Round 4 Final Re-Validation)

**Round:** Post-fix re-validation after parallel Round 4 edits by all 6 pillar owners (Kirk, Scotty, Chekov, Spock, McCoy, Sulu). No theme changes this round.

**Build:** exit 0, 88 sections (unchanged from R3 — no new splits).

**Overflow delta R3 → R4:**
- Critical: 9 → 5 (−4)
- Moderate: 8 → 5 (−3)
- Minor: 7 → 7 (0)
- Real issues: 20 → 13 (−7)
- False-positive image artifacts: 4 (unchanged — slides 2, 19, 82, 85)

**Remaining criticals (5):** What's New 52px (Kirk), Reliability At-a-Glance 77px (Scotty), Security At-a-Glance 56px (Chekov), Cost At-a-Glance 116px (Spock — worst in deck), Perf At-a-Glance 56px (Sulu). All five are persistent At-a-Glance + What's New cards. Pattern: Quick Win `<p>` block and/or remaining column content needs to move to `_footer:` or be cut entirely.

**Verdict:** ⚠️ NO-SHIP (not clean) but SAFE TO PRESENT. `overflow: hidden` safety net clips all 13 remaining real overflows — zero visual bleed on stage.

**Report:** `.squad/decisions/inbox/uhura-revalidation-r4-findings.md`

---

## Team Update — 2026-05-13 (Round 5+R5b Final Validation)

**Round:** Post-fix re-validation after R5 overflow cleanup (all 6 pillar owners) + R5b narrative restructure (Kirk).

**Build:** exit 0, **86 sections** (was 88; −2 from R5b: What's New deleted, Framework Benefits merged into WAF Goals).

> `validate.mjs` was absent from working tree (never committed, lost between sessions). Recreated from documented patterns in this history file.

**Overflow delta R4 → R5+R5b:**
- Critical: 5 → 4 (−1) — What's New deleted (Kirk); Perf At-a-Glance and OpEx At-a-Glance fully resolved
- Moderate: 5 → 1 (−4)
- Minor: 7 → 0 (−7)
- Real issues: 13 → 5 (−8)
- False-positive image artifacts: 4 → 1 (WAF Overview 1px)

**Remaining criticals (4):** Reliability At-a-Glance +50px (Scotty), Security Practices +79px ⚠️ REGRESSION (Chekov), Security At-a-Glance +48px (Chekov), Cost At-a-Glance +100px (Spock). One moderate: Reliability Maturity +13px (Scotty).

**Security Practices regression (+39px R4 → +79px R5):** Chekov's R5 fix only tightened text without removing bullets. Recommend cutting 2+ bullets or investigating rendering delta.

**R5b structural checks (all 4 pass):**
- Slide 3 = Business Impact: Real Numbers ✅
- WAF order: 5-pillar → Goals (merged, 6 bullets) → Overview → Reliability ✅
- What's New absent ✅
- Framework Benefits absent as standalone slide ✅

**Verdict:** ⚠️ SHIP WITH CAVEATS — safe to present (overflow hidden clips all), but 4 criticals remain. One more targeted pass by Chekov + Spock + Scotty needed for SHIP CLEAN.

**Report:** `.squad/decisions/inbox/uhura-final-validation.md`

---

- 2026-05-13 (Bold contrast fix): Added `section.lead strong { color: var(--techo-gold) }` after the `section.lead a` rule in `custom-techorama.css` — fixes navy-on-navy invisible bold text on all 7 lead slides; `li strong` rule omitted (no lead slides use bullet+bold). Deck rebuilt exit 0, rule confirmed in built HTML. Report: `.squad/decisions/inbox/uhura-lead-bold-contrast-fix.md`.
