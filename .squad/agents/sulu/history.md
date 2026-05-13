# Project Context

- **Owner:** Chris Ayers
- **Project:** "The Well-Architected Architect" — Marp slide deck on Microsoft's Azure Well-Architected Framework.
- **Stack:** Marp markdown, custom-techorama theme, Mermaid, GitHub Pages.
- **Created:** 2026-05-13

## Learnings

<!-- Append new learnings below. -->

- 2026-05-13: Perf slides target P95 latency SLO met, cache hit ratio > 85%, autoscale reaction < 5 min. Maturity: Targets → Baseline Metrics → Signal Driven → Prod Optimization → Continuous Tuning. Quick win recorded as a 1-hour load test to capture baseline P95 + identify top slow span.
- 2026-05-13: Refreshed all Performance Efficiency slides (Pillar, Principles, Practices, Key Metrics, Architecture Example, Maturity, At a Glance — Slides.md ~1077-1175 after parallel edits shifted line numbers).
  - **Voice fix**: Pillar opener now uses tail-latency truth framing — `"Will it hold its SLOs under load — at P99, not on average?"` + "The average lies; tail latency is the truth." Replaced generic "Ensures responsive scaling..." line.
  - **PE checklist anchors**: Tagged principles & practices with PE:01, PE:04, PE:05, PE:06, PE:09, PE:12 references for traceability to Microsoft's 2026 WAF checklist.
  - **2026 emerging block**: Predictive autoscale (ML forecasting + min/max guardrails), adaptive concurrency (KEDA, Functions/App Service Premium), AI workload perf (token/sec SLOs, PTU sizing, prompt budgets), and HPC workloads (new March 2026 article set).
  - **Metrics table**: Added P99 ≤ 3× P50 ratio target, tokens/sec SLO, perf-gate pass rate. Distinguished reactive < 5 min vs predictive pre-spike autoscale.
  - **Maturity rubric**: Each level now carries a **concrete signal** column (e.g., L3 = "scale fires on queue/latency, not CPU alone"; L5 = "predictive + adaptive in prod"). Trajectory closes with predictive & adaptive instead of stopping at gated optimization.
  - **Handoff**: Added single-line transition at end of At a Glance — "performance never lives alone — every gain costs something elsewhere. Into Trade-Offs." Avoids cold cut into Trade-Offs slide.
  - **Build**: `npx @marp-team/marp-cli` build green; HTML output produced cleanly.
- Research sources consulted: learn.microsoft.com `/well-architected/performance-efficiency/` (overview, checklist PE:01-PE:12, principles, scale-partition PE:05, optimize-data-performance PE:08); `/well-architected/whats-new` (March 2026 — HPC workloads new article set, Container Apps & SQL MI service guide refreshes touching Perf Efficiency); web search confirming predictive-autoscale + adaptive-concurrency 2026 framing and AI/LLM token-per-second SLO conventions.
- Decision noted (no separate inbox entry needed — purely a content/voice refinement, not a team-blocking direction change).
- 2026-05-13 (flow + enhancement pass): Surgical follow-up after the morning refresh. Five edits only — kept the previously refreshed metrics / maturity / At-a-Glance intact since they were already good.
  - **OpEx → Perf bridge** (line 1086): Replaced generic `Verify scale promises continuously. The average lies; tail latency is the truth.` with `OpEx instrumented the system. Performance proves it under load — at the tail, not on the average. Verify scale promises continuously.` Makes the division of labor explicit (OpEx measures, Perf validates).
  - **PE:02 added** (Principles, line 1093): Capacity-planning principle now reads `Just-in-time elastic scaling — capacity follows demand at runtime, with planning ahead of known peaks (PE:02)`. Reconciles "elastic at runtime" with "plan before predicted peaks" without contradicting either.
  - **PE:05 + PE:08 added** (Principles, line 1094): Partition/cache principle now tags both scale-partition (PE:05) and data-store optimization (PE:08). PE:08 was previously unrepresented anywhere in the Perf block.
  - **PE:05 + PE:08 added** (Practices, line 1106): Partition practice expanded to `tune indexes for the real query`; carries PE:05 + PE:08 anchors. Indexing-for-actual-queries is a 2026 service-guide-driven theme (SQL MI Query Store rewrite, MySQL refresh).
  - **What's New (line 503)**: HPC bullet now reads `coupled compute + low-latency interconnect` so the Perf relevance of the new March-2026 HPC article set is visible at first read.
  - **Build**: `npx @marp-team/marp-cli@latest slides/Slides.md` — green, exit 0.
  - **Inbox writes**:
    - `.squad/decisions/inbox/sulu-flow-assessment.md` — full assessment of OpEx → Perf → Trade-Offs arc, predictive-autoscale framing, baseline-before-tune, and Scenario anchor coverage. Verdict: arc is now load-bearing; predictive autoscale is correctly framed as L5 destination, not L1 starting point.
    - `.squad/decisions/inbox/sulu-tradeoff-update.md` — three optional draft enhancements for Kirk: (1) Scenario 2 Retail 10x Peak Option B → add `P95 SLO rehearsed at 1× / 3× / 10×`; (2) Scenario 4 Early-Stage Social Option B → add `capture P95 baseline early, defer optimization until traction signals it`; (3) Trade-Off Matrix Sec vs Perf row → add `measure P95 delta pre/post inspection`. Did not edit those slides directly — they're Kirk's territory.
  - Sources re-verified today: `/performance-efficiency/principles`, `/performance-efficiency/checklist` (PE:01-PE:12 confirmed), `/performance-efficiency/scale-partition`, `/performance-efficiency/optimize-code-infrastructure` (PE:07), `/whats-new` (Feb–Mar 2026 — HPC new article set, SQL MI / MySQL / Container Apps service guides refreshed with Perf content).

## Team Update — 2026-05-13

**Round:** Flow + enhancement pass (all seven agents spawned in parallel).

**Participants:** Kirk (overall), Scotty (Reliability), Chekov (Security), Spock (Cost), McCoy (OpEx), Uhura (Layout).

**Cross-pillar handoffs wired this round:**
- **Reliability → Security** — "reliability assumes the system is still yours" (Reliability close) hands off to Security's "Can it be breached — and would we see it?" (Security open).
- **Security → Cost** — "containment isn't free. Security spend is the next cost lever to make legible" (Security close) bridges to Cost's unit-economics framing.
- **Cost → OpEx** — "cost discipline rides on operational discipline — without safe change & feedback loops, savings regress" bridges to OpEx as the "carrier" pillar.
- **OpEx → Performance** — "operating safely is half the story — Performance proves it at P99 under load" (OpEx At-a-Glance) hands off to Perf's tail-latency validation.
- **Performance → Trade-Offs** — "performance never lives alone — every gain costs something elsewhere" (Perf At-a-Glance) introduces Trade-Offs chapter.

**Notes:** Proposed three optional Trade-Offs draft tweaks (Scenario 2 P95 rehearsal multiples, Scenario 4 P95 baseline early, Trade-Off Matrix P95 delta verification). Submitted to Kirk; recommendation: take #1 + #2, defer #3.
