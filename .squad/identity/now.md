---
updated_at: 2026-05-13T09:12:14Z
focus_area: Full validation pass. Uhura builds the deck with marp-cli, then runs a Playwright-driven overflow/clipping audit across every section at 1280×720. Findings drive follow-up content edits by pillar owners.
active_issues: []
---

# What We're Focused On

The WAF Marp deck for Techorama and conference talks. Slides live in `slides/Slides.md`. Theme is `custom-techorama`. Build runs in `marp-pages.yml`.

**Active round (2026-05-13, second pass):** Validation pass — build + Playwright audit. Uhura:
1. Builds `slides/Slides.md` to HTML with `marp-cli` (or marp docker), using `slides/themes`.
2. Drives Playwright (chromium) over the rendered HTML at 1280×720.
3. Measures each `<section>` for scrollHeight/scrollWidth overflow vs the slide viewport, plus child elements that exceed bounds.
4. Screenshots offenders; produces a slide-by-slide report.

Pillar owners stand by — content fixes route to them once findings are scoped.

## Prior round

Flow + enhancement pass (2026-05-13 morning): all seven members ran a parallel flow assessment with surgical content edits across pillars + theme variant activation. 18 inbox files merged; commit d80f30a.

Latest content additions reflect Azure WAF "What's New" through March 2026 (HPC workload, AI in OpEx, 4-phase monitoring, business alignment, secure dev lifecycle, self-healing DLQ, refreshed service guides).
