# Project Context

- **Owner:** Chris Ayers
- **Project:** "The Well-Architected Architect" — Marp slide deck on Microsoft's Azure Well-Architected Framework. Lives at chris-ayers.com/the-well-architected-architect/.
- **Stack:** Marp markdown, custom-techorama theme, Mermaid diagrams, GitHub Pages (marp-pages.yml).
- **Created:** 2026-05-13

## Learnings

<!-- Append new learnings below. Each entry is something lasting about the project. -->

- 2026-05-13: Deck recently incorporated 2025-2026 WAF updates — new "What's New in the WAF" overview slide, business alignment slide (5-step process), HPC added to workloads, refreshed service guides callout, monitoring 4-phase, self-healing DLQ, secure dev lifecycle, AI-in-OpEx maturity. Trade-off matrix and scenario slides remain my primary surface for cross-pillar discussion.
- 2026-05-13: Lead arc pass. Research sources: WAF What's New (March 2026 — HPC overview/pattern/methodology/principles, monitoring system, testing strategies, SQL MI rewrite, secure dev lifecycle, Container Apps); /azure/well-architected/ index ("decision making tool for architects"); /pillars matrix (now exposes pillar-specific trade-off pages with "Strike a balance" framing); /workloads (formal definition: app + data + AI models + supporting infra; workload team vs centralized teams distinction). Touched these slides in `slides/Slides.md`: Decision Framework (lines ~95-112), Business Alignment (~114-126), Pattern & Forward Thinking (~128-152), Method & Improvement (~184-200), verbose Decision-Making Framework ADR date refreshed to 2026-05-13, Trade-Offs opener (real setup slide, not empty header), Trade-Offs Overview (rephrased lens column + loop closer), Pillar Interactions ("Operational Excellence is the Carrier" framing), Service Guides (decision-tool framing), Well-Architected Workloads (2026 definition). Cross-pillar feedback written to `.squad/decisions/inbox/kirk-arc-notes.md`. Proposed deck-wide dedup of the duplicate Fundamentals section in `.squad/decisions/inbox/kirk-fundamentals-dedup.md` (recommended Option C — keep condensed 6 + lift ADR codeblock + patterns quadrant from verbose set). Deck builds clean via `npx @marp-team/marp-cli` with custom-techorama theme.
- 2026-05-13: Round-2 flow + enhancement pass. Sources verified: `/architect-role/design-business-requirements` (Dec 2025 — canonical Listen→Probe→Clarify→Evaluate→Recommend 5-step process); `/architect-role/fundamentals` (10-item architect deliverable checklist — design spec, ADR log, DR plan, PoCs, optimization recs, audit support); `/architect-role/architecture-decision-record` (ADR as append-only log w/ supersession); `/pillars` (each pillar now has dedicated `/tradeoffs` page); `/reliability/tradeoffs` sampled (surface-area + redundancy + old-software tensions confirm our matrix framing); `/workloads` (app code + custom code + AI models + data + supporting infra; workload team vs centralized teams). Edits made: (1) **Core Role Focus** (line 80) — rewrote bullets as the 2026 architect-role deliverable list (design spec + ADR log + DR plan + PoCs), cited `/architect-role/fundamentals`. (2) **Business Alignment** (line 118) — switched verbs to official Listen/Probe/Clarify/Evaluate/Recommend with `/design-business-requirements` citation. (3) **WAF Overview matrix** (line 528) — added third "Strike a balance with" column previewing each pillar's primary tensions; sets up Trade-Offs section. (4) **Trade-Off Matrix** (line 1252) — added footer citing pillar-specific `/tradeoffs` pages on learn.microsoft.com. (5) **Continuous Improvement & Pillar Maturity** (line 1297) — fixed "Optimize cost & performance  SLIs" double-space typo. (6) **New "What To Do Monday" slide** between Workloads Examples and feedback page — one row per pillar, ties closing back to opener's "Modernizing Cloud Excellence" promise. Flow assessment written to `.squad/decisions/inbox/kirk-flow-assessment.md`. Fundamentals duplication still open (Option C pending). Build verified clean via `npx @marp-team/marp-cli`.

## Team Update — 2026-05-13

**Round:** Flow + enhancement pass (all seven agents spawned in parallel).

**Participants:** Scotty (Reliability), Chekov (Security), Spock (Cost), McCoy (OpEx), Sulu (Performance), Uhura (Layout).

**Cross-pillar handoffs wired this round:**
- **Reliability → Security** — "reliability assumes the system is still yours" (line 672) hands off to Security's "Can it be breached — and would we see it?" (line 676).
- **Security → Cost** — "containment isn't free. Security spend is the next cost lever to make legible" (line 829) hands off to Cost's unit-economics framing.
- **Cost → OpEx** — "cost discipline rides on operational discipline — without safe change & feedback loops, savings regress" (At-a-Glance closer) hands off to OpEx as the "carrier" pillar.
- **OpEx → Performance** — "operating safely is half the story — Performance proves it under load at P99" (OpEx At-a-Glance) hands off to Perf's tail-latency framing.
- **Performance → Trade-Offs** — "performance never lives alone — every gain costs something elsewhere" (Perf At-a-Glance) introduces the Trade-Offs chapter.

**Notes:** Fundamentals duplication decision held pending consensus on Option C (keep condensed 6, lift ADR + patterns quadrant). Five draft Trade-Offs edits submitted from Scotty/Chekov/Spock/McCoy/Sulu for Kirk's review.
