# Uhura History Archive

**Archived:** 2026-05-13  
**Archived entries:** Early learnings, validation tooling notes, layout audit findings, and R3–R5b validation reports.

---

## Learnings (Archived)

- **Overflow safety net pattern:** `section { overflow: hidden }` in base CSS silently clips remaining overflow so it doesn't bleed between slides visually. Zero-risk, zero-visual-impact when slides fit within frame.
- **Validation tooling:** `npx @marp-team/marp-cli@latest --theme-set slides/themes --html --allow-local-files -o validation/deck.html -- slides/Slides.md` + Playwright for automated overflow measurement. Windows-specific: use `Select-Object -Last N` instead of `tail`.
- **Measurement quirk:** `section.clientHeight` = 714px (excludes 6px footer), not 720px. Full-bleed images report false-positive 6px overflow on `<figure>` elements.
- **Validation pattern:** Marp slides navigate via hash (#slideNumber); add 300ms timeout before screenshot; use `clip: { x:0, y:0, width:1280, height:720 }` for exact viewport capture.
- **Theme asset cleanup:** Removed non-existent `title-bg.png`, `title-graphic.png`, `castle-gate.svg` from CSS (use gradient fallback + radial glow instead).
- **Marp directives:** `<!-- _class: foo -->` (current slide only), `<!-- class: foo -->` (global), `<!-- _paginate: false -->`, `<!-- fit -->`, `![bg fill]`, `![bg left:40%]`, alt-token sizing.
- **Variant activation pattern:** Theme defines `.dense`, `.glance`, `.outro`, `.resources` variants; pillar owners activate by adding `<!-- _class: X -->` directives.

## Validation Reports Summary

**Round 3 (R3) Re-Validation:** 84→88 sections (no new splits). Critical overflows 17→9 (−8). Safety net `overflow:hidden` confirmed active.

**Round 4 (R4) Re-Validation:** 88 sections (unchanged). Critical overflows 9→5 (−4). Remaining criticals all At-a-Glance + What's New cards; Quick Win blocks need footer migration or deletion.

**Round 5b (R5+R5b) Final Validation:** 88→86 sections (What's New deleted, Framework Benefits merged). Critical overflows 5→4 (−1). Reliability/Security/Cost/OpEx At-a-Glance cards still carrying residual overflows despite deletions.

**R5e Bold Contrast Fix:** Added `section.lead strong { color: var(--techo-gold) }` to fix navy-on-navy invisible bold text on 7 lead-class pillar intro slides. Deck rebuilt clean.

---

**Archive complete. See `history.md` for current state and R5f+ updates.**
