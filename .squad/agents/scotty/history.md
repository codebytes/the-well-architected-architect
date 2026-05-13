# Project Context

- **Owner:** Chris Ayers
- **Project:** "The Well-Architected Architect" — Marp slide deck on Microsoft's Azure Well-Architected Framework.
- **Stack:** Marp markdown, custom-techorama theme, Mermaid, GitHub Pages.
- **Created:** 2026-05-13

## Learnings

<!-- Append new learnings below. -->

- 2026-05-13: Reliability slides now include DLQ-based self-healing, failures-vs-errors distinction in Principles, and separate read/write failure handling in Practices. Maturity table runs Ad Hoc → Baseline → Structured → Proactive → Adaptive; trajectory is "remove unknowns → speed detection → widen safe automation."
- 2026-05-13: Refreshed all "# Reliability - *" slides (lines ~535-650) plus the Reliability bullet in "What's New in the WAF" (line ~502). Sources used: WAF reliability landing, checklist (RE:01-10), principles, self-preservation (incl. DLQ + checkpoint guidance), testing-strategy (chaos + restore drills), and What's New entries for Jan-Mar 2026 (self-preservation expansion, Service Bus PeekLock/IsTransient/duplicate detection, Blob SDK transient handling + secondary-read graceful degradation, SQL DB connection-pool isolation, FMA failures-vs-errors + read/write separation, SQL MI rewrite).
- 2026-05-13: Reframed the Pillar opening around the resilient/recoverable/available triad and "the flows that actually matter" — moves the deck away from blanket-uptime language and lines up with the 2026 principles guidance. Added a closing line to At-a-Glance that hands off to Security ("reliability assumes the system is still yours").
- 2026-05-13: Strengthened Maturity Progression by renaming the "Current" column to "You're Here When..." and giving each level a concrete diagnostic signal (e.g., L2 "DR exercise lives on a wiki page", L4 "timed restore KPI tracked monthly", L5 "self-heal loops live; chaos as a release gate"). Same five-level rubric, sharper signals.
- 2026-05-13: Added two Monday-actionable pieces: a new "Critical-flow availability" metric row, and a Quick Win that names a deliverable by Friday (tabletop → unknown → one script). Practices now reflects 2026 service-guide patterns: PeekLock + duplicate detection, IsTransient retry check, Blob primary→secondary read with graceful degradation, connection-pool isolation as cascading-failure guard.
- 2026-05-13: How this deck handles reliability framing — Reliability sits right after the WAF Overview table (no transition slide between), so the Pillar slide does double duty as a section opener and a stance statement. Trade-offs treats Reliability mostly through the Reliability-vs-Cost lens (tiered criticality, active-active cost). The deck previously leaned generic-uptime; now it leads with flow-level outcomes, which aligns with how Kirk frames trade-off scenarios.
- 2026-05-13 (flow + enhancement pass): Surgical adds to Reliability - Practices: (1) named DR activation criteria on the runbook/failover bullet, sourced from 2026 disaster-recovery guidance (RE:09); (2) checkpoints for long-running transactions on the self-healing bullet, sourced from 2026 self-preservation expansion (RE:07). No structural changes to Pillar, Principles, Metrics, Architecture Example, Maturity, or At-a-Glance — they were already 2026-aligned from the earlier pass.
- 2026-05-13 (flow assessment): Reliability is the right opener — every downstream pillar (OpEx, Perf, Security) and the trade-off matrix lean on vocabulary first planted here (SLI/SLO, RTO/RPO, critical-flow framing, failures-vs-errors, DLQs, restore drills, error budget). Hand-off to Security via "reliability assumes the system is still yours / Security is what keeps it that way" is clean and intentional. No redundancy with other pillars detected.
- 2026-05-13 (Kirk-bound trade-off update): Filed `scotty-tradeoff-update.md` recommending the Trade-Off Matrix "Extreme Reliability" mitigation swap "pilot light" (AWS-flavored) for "warm standby for Tier-0, cold standby below" (2026 Azure WAF DR vocabulary). Optional secondary tweak: "RTO/RPO-driven DR" in the Trade-Offs Overview row.
- 2026-05-13 (2026 sources reviewed):
  - https://learn.microsoft.com/en-us/azure/well-architected/reliability/ (landing)
  - https://learn.microsoft.com/en-us/azure/well-architected/reliability/principles (Mar 2026 — zone redundancy terminology consistency; resilient/recoverable/available triad)
  - https://learn.microsoft.com/en-us/azure/well-architected/reliability/checklist (RE:01-10)
  - https://learn.microsoft.com/en-us/azure/well-architected/reliability/self-preservation (Jan 2026 expansion — DLQ for corrupt messages, checkpoints, automated self-heal patterns)
  - https://learn.microsoft.com/en-us/azure/well-architected/reliability/testing-strategy (chaos engineering + timed restore-drill cadence)
  - https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery (RE:09 — defines active-passive cold standby vs warm standby; DR activation criteria; criticality tiers)
  - https://learn.microsoft.com/en-us/azure/well-architected/reliability/failure-mode-analysis (Jan 2026 — failures-vs-errors + read/write separation)
  - https://learn.microsoft.com/en-us/azure/well-architected/whats-new (Jan/Feb/Mar 2026 entries — Service Bus PeekLock/IsTransient/duplicate-detection, Blob SDK transient + secondary-read graceful degrade, SQL DB connection-pool isolation, FMA failures-vs-errors, SQL MI rewrite, Container Apps refresh, Event Grid unified service guide with chaos engineering, observability article reorganized around health-model alignment)
- 2026-05-13 (overflow fix pass): Handoff footer pattern — use `<!-- _footer: "Up next: …" -->` scoped to the At-a-Glance slide rather than a blockquote below the columns. Blockquotes after a `.glance` two-column layout push 200px+ past the frame. Footer directive renders in the footer bar with zero vertical cost to main content.
- 2026-05-13 (overflow fix pass): Practices slide density target — ≤6 bullets per slide for the Reliability pillar. When content exceeds this, split by audience/concern (Engineering vs Operations) rather than cutting. Both halves keep their framing lead sentence so each slide stands alone.
- 2026-05-13 (R4 overflow fix): At-a-Glance: removed duplicate body blockquote (maxim already on Principles) and trimmed Quick Win ~50%. Principles: saved 4 words across two bullets. Maturity: removed L5 parenthetical detail + tightened L4/L5 cells. Footer handoffs retained throughout.

## Team Update — 2026-05-13 R5

**Round:** 5 — final cleanup pass (LAST overflow round).

**Slides fixed:**
- `Reliability - At a Glance` (77px CRITICAL → ~0): dropped `🩹 DLQs/retries/idempotency` bullet (Core Azure 4→3); removed Quick Win block from columns; folded Quick Win + handoff into single footer: `"Quick Win: 30-min tabletop on top flow → name one unknown → one restore script by Friday. | Up next: Security."`
- `Reliability - Principles` (11px MODERATE → ~0): trimmed SLI/SLO bullet by 4 words (", not assumed" removed).
- `Reliability - Maturity Progression` (26px MODERATE → ~0): trimmed L1 "You're Here When" (−6 words: removed `; "we'll know if it breaks"`); trimmed L2 "You're Here When" (−1 word: `lives`).

**Hard rules respected:** No git mutations; only Reliability slides touched; footer pattern used for overflow.

## Team Update — 2026-05-13 R4

**Round:** 4 — targeted overflow reduction (Scotty scope only).

**Slides fixed:**
- `Reliability - At a Glance` (156px → targeting ≤720px): dropped duplicate blockquote + trimmed Quick Win line.
- `Reliability - Principles` (11px → ~0): 4-word trim across two bullets.
- `Reliability - Maturity Progression` (26px → ~0): L4/L5 table cell tightening, parenthetical removed.

**Hard rules respected:** Engineering/Operations split untouched; footer handoff pattern preserved.

## Team Update — 2026-05-13

**Round:** Flow + enhancement pass (all seven agents spawned in parallel).

**Participants:** Kirk (overall), Chekov (Security), Spock (Cost), McCoy (OpEx), Sulu (Performance), Uhura (Layout).

**Cross-pillar handoffs wired this round:**
- **Reliability → Security** — "reliability assumes the system is still yours" hands off to Security's detection-first framing.
- **Security → Cost** — "containment isn't free" frames security spend as a cost lever.
- **Cost → OpEx** — cost discipline depends on operational discipline (OpEx as carrier).
- **OpEx → Performance** — "operating safely is half the story — Performance proves it at P99."
- **Performance → Trade-Offs** — every performance gain costs something elsewhere.

**Notes:** Proposed Trade-Off Matrix terminology swap (pilot light → active-passive cold/warm standby per 2026 Azure WAF disaster-recovery vocabulary) submitted to Kirk. Optional secondary: "RTO/RPO-driven DR" in Trade-Offs Overview row.
