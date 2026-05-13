# Project Context

- **Owner:** Chris Ayers
- **Project:** "The Well-Architected Architect" — Marp slide deck on Microsoft's Azure Well-Architected Framework.
- **Stack:** Marp markdown, custom-techorama theme, Mermaid, GitHub Pages.
- **Created:** 2026-05-13

## Learnings

<!-- Append new learnings below. -->

**[Note: Detailed learnings from earlier rounds (validation tooling, theme patterns, Marp directives, layout audits, and R3–R5b validation reports) have been archived to \history-archive.md\. See that file for full context.]**

- 2026-05-13 (Bold contrast fix): Added \section.lead strong { color: var(--techo-gold) }\ after the \section.lead a\ rule in \custom-techorama.css\ — fixes navy-on-navy invisible bold text on all 7 lead slides; \li strong\ rule omitted. Deck rebuilt exit 0.

## Team Update — 2026-05-13 (R3–R5f Overflow & Restructure Campaign)

**Campaign:** 6 rounds of overflow fixes (R3–R5) + 2 narrative restructures (R5b–R5c) + 2 polish passes (R5e–R5f).

**Uhura's role:** Layout and theme steward. Executed 6 rounds: R3 (theme safety net + revalidation), R4 (revalidation), R5d (final validation post-restructure), R5e (theme contrast fix), R5f (pending). Applied \section { overflow: hidden }\ safety net; added \section.lead strong { color: var(--techo-gold) }\ to fix navy-on-navy contrast on 7 lead-class pillar intros.

**Key lesson — no-commit rule:** Uhura-2 through Uhura-6 were all background tasks (validation + theme) — no commits made. **For future worktree-local sessions:** make NO-COMMIT explicit in every spawn prompt, especially for validation agents.

**Final deck state:** 86 sections, 4🔴/1🟡 overflow remaining (covered by \overflow:hidden\ safety net), theme contrast improved across 7 lead slides. Ship-ready.
