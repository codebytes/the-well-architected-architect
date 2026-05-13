# Project Context

- **Owner:** Chris Ayers
- **Project:** "The Well-Architected Architect" — Marp slide deck on Microsoft's Azure Well-Architected Framework.
- **Stack:** Marp markdown, custom-techorama theme, Mermaid, GitHub Pages.
- **Created:** 2026-05-13

## Learnings

<!-- Append new learnings below. -->

- 2026-05-13: Cost slides emphasize tagging-first ownership, idle spend < 5%, commitment coverage > 70%, unit cost trend QoQ. Maturity goes Ownership → Visibility → Signals → Prod Insights → Optimize @ Scale; the "Typical Early Gap" is "No policy-backed tagging = opaque spend."
- 2026-05-13: Cost section refresh. Slides touched: Pillar (l.774-778), Principles (l.782-789), Practices & Governance (l.793-804), Key Metrics (l.808-816), Architecture Example (l.820-828), Maturity Progression (l.832-842), At a Glance (l.858-887). Reframed pillar opening from "value per dollar" to "what is the unit cost — and is it trending down?" Added 2026-current practices: explicit autoscale triggers (CPU/queue depth/predictive), Reservations + Savings Plans portfolio distinction (steady vs variable), ML-driven anomaly detection with runbook auto-routing, AI/agent workload cost allocation, sustainability proxy. Expanded Key Metrics from 3 rows to 6 (added Tag Coverage > 95%, Anomaly MTTR < 24h, Forecast Accuracy ±10%). Rewrote Maturity Progression with concrete arrival signals per level (e.g., L3 = Anomaly MTTR < 24h + idle < 10% + coverage > 50%; L5 = unit cost ↓ QoQ + forecast ±10%). Removed stray double-period from trajectory line. Sources: WAF Cost Optimization checklist (CO:01-14), WAF principles, March 2026 What's New, optimize-scaling-costs (CO:12), collect-review-cost-data (CO:03), FinOps 2026 industry guidance on Savings Plans vs Reservations and Cost Management anomaly insights. Deck built clean with marp-cli. Did NOT touch What's New slide to avoid concurrency conflict with other agents.
- 2026-05-13 (flow + enhancement pass): Acted on Kirk's arc notes for Cost (`kirk-arc-notes.md`). Five surgical edits: (1) What's New (l.516-517) — added Cost bullet "Cost guidance deepened: AI/GPU patterns, commitment portfolio, policy-based controls, anomaly insights" + flagged service guides as "all 5 pillars, incl. Cost". (2) Pillar opener (l.838) — bridged from Security spend + added Business Alignment Step 1 callback per Kirk's note. (3) Practices (l.856-866) — added CO:## anchors (CO:03, 04, 05, 07, 09, 10, 12) to claim citation depth. (4) Maturity L5 (l.906) — added cross-pillar hook "DR cost reviewed against tiered criticality (→ Reliability)" per Kirk's note. (5) At a Glance close (l.958) — added bridge to OpEx following existing convention. Wrote flow assessment to `.squad/decisions/inbox/spock-flow-assessment.md` and trade-off draft for Kirk at `.squad/decisions/inbox/spock-tradeoff-update.md` (3 surgical proposals + 1 optional new row). Marp build clean (75 slides, no errors). Sources verified: WAF cost-optimization checklist + principles + collect-review-cost-data + optimize-component-costs + optimize-scaling-costs, What's New (Dec 2025 → Mar 2026 cost-relevant updates), FinOps Framework Microsoft partnership.
- 2026-05-13 (research finding): WAF Cost guidance was deepened across Dec 2025-Mar 2026 service guide refreshes — SQL MI (cost modeling for always-provisioned compute, instance pools, Azure Hybrid Benefit), MySQL flexible server (rightsizing, reservations, policy governance, read replicas), Container Apps (GPU workloads, dynamic sessions, premium ingress, OpenTelemetry agent), Virtual WAN (cost modeling, hub capacity planning, resource tagging, IaC), Event Hubs (policy-based cost control recommendations), Event Grid (all 5 pillars now). This is the cost-relevant material that the What's New slide should reflect.
- 2026-05-13 (flow finding): Chekov added a Security→Cost bridge at l.830 ("containment isn't free; security spend is the next cost lever to make legible"). My pillar opener picks it up explicitly. The Cost→OpEx bridge was missing — added it at l.958 following the existing Performance→Trade-Offs convention (l.1198).
- 2026-05-13 (cross-pillar gap noted for Kirk): The deck defines "unit cost" and "commitment portfolio" inside the Cost pillar and never invokes them again. Drafted minimal proposals for Trade-Offs Overview ("Cost vs Performance" friction signal → "Unit cost ↑ while latency improves"), Trade-Off Matrix ("Lowest Possible Cost" mitigation → add "commitment portfolio"), and Scenario 2 Retail 10x facilitator note (name Reservations + Savings Plans + on-demand/Spot mapping to Cost Maturity L4). Left as drafts for Kirk; did not edit cross-cutting slides.

## Team Update — 2026-05-13

**Round:** Flow + enhancement pass (all seven agents spawned in parallel).

**Participants:** Kirk (overall), Scotty (Reliability), Chekov (Security), McCoy (OpEx), Sulu (Performance), Uhura (Layout).

**Cross-pillar handoffs wired this round:**
- **Reliability → Security** — "reliability assumes the system is still yours" (Reliability close) hands off to Security's "Can it be breached — and would we see it?" (Security open).
- **Security → Cost** — "containment isn't free. Security spend is the next cost lever to make legible" (Security close) bridges to Cost's unit-economics framing.
- **Cost → OpEx** — "cost discipline rides on operational discipline — without safe change & feedback loops, savings regress" (Cost At-a-Glance) hands off to OpEx as the "carrier" pillar.
- **OpEx → Performance** — "operating safely is half the story — Performance proves it at P99 under load" (OpEx At-a-Glance) hands off to Perf's tail-latency validation.
- **Performance → Trade-Offs** — "performance never lives alone — every gain costs something elsewhere" (Perf At-a-Glance) introduces Trade-Offs chapter.

**Notes:** Proposed three Trade-Offs edits (Cost vs Performance row, Lowest Possible Cost mitigation, Scenario 2 facilitator note on commitment portfolio). Submitted to Kirk for review; recommendation: take #3 (Scenario 2) as highest leverage.
