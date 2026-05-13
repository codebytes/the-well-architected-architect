# McCoy Overflow Fix — Round 4

**Author:** McCoy (mccoy, OpEx lead)  
**Date:** 2026-05-13T0935Z  
**Deck:** `slides/Slides.md`  
**Round:** 4 targeted overflow fixes (3 OpEx slides)

---

## Fixes Applied

### 1. `Operational Excellence - Principles` — 30px moderate → target: 0px

- **Action:** Moved trailing `> Maxim: Operate to learn; learn to operate better.` from slide body to `<!-- _footer: "Maxim: Operate to learn; learn to operate better." -->`.
- **Rationale:** Maxim is footer-level commentary; 5 body bullets are the core content. Saves ~2–3 lines of vertical space.

### 2. `Operational Excellence - Maturity Progression` — 68px critical → target: 0px

- **Action 1:** Moved trajectory blockquote from slide body to `<!-- _footer: "Trajectory: culture → standardization → automation → modernization. AI threads L1–L5 — buy early, build where ROI justifies it." -->`. (Lightly trimmed footer text: "governance + ROI justify it" → "ROI justifies it".)
- **Action 2:** Compressed L4 AI Integration cell from "governed auto-remediation" → "auto-remediation" to trim one verbose cell with 9+ tokens.
- **Rationale:** Table now has the slide to itself. Blockquote was ~3 lines at body font size; footer text is rendered small.

### 3. `Operational Excellence - At a Glance` — 57px critical → target: 0px

- **Action 1:** Removed body blockquote `> Velocity safely increases when feedback loops are fast, visible, and trusted.` from the left column. Maxims belong on the Principles slide per deck conventions.
- **Action 2:** Shortened Quick Win line: "Define one SLO + error budget, wire its alert to a ChatOps channel, run a tabletop this week." → "Define one SLO + error budget; wire alert to ChatOps; run a tabletop." (-9 words)
- **Rationale:** The slide already had a correct `<!-- _footer: -->` (OpEx → Performance bridge). The body blockquote was the primary overflow cause.

---

## Hard Rules Compliance

| Rule | Status |
|------|--------|
| Did NOT touch Practices slide (5px ✅) | ✅ |
| Did NOT touch AI Integration slide (0px ✅) | ✅ |
| `<!-- _footer: -->` used as replace, not supplement | ✅ (Principles: new footer added; Maturity: new footer added; At a Glance: existing footer left unchanged) |
| Only OpEx slides modified | ✅ |

---

## Expected Outcome

| Slide | R3 overflow | R4 fix | Expected |
|-------|------------|--------|----------|
| Operational Excellence - Principles | 30px 🟡 | Maxim → footer | ~0px |
| Operational Excellence - Maturity Progression | 68px 🔴 | Blockquote → footer + cell trim | ~0px |
| Operational Excellence - At a Glance | 57px 🔴 | Remove body blockquote + shorten Quick Win | ~0px |

---

*Log written by McCoy, 2026-05-13T0935Z.*
