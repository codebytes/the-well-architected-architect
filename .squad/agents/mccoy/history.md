# Project Context

- **Owner:** Chris Ayers
- **Project:** "The Well-Architected Architect" — Marp slide deck on Microsoft's Azure Well-Architected Framework.
- **Stack:** Marp markdown, custom-techorama theme, Mermaid, GitHub Pages.
- **Created:** 2026-05-13

## Learnings

<!-- Append new learnings below. -->

- 2026-05-13: **Overflow fix pass (Uhura validation findings).** Four OpEx slides repaired: (1) Principles — tightened two bullets ~30px; (2) Practices & Automation — split into "Practices & Automation" (6 bullets) + new "AI Integration" slide (3 bullets + blockquote), Option A chosen because AI buy/build framing earns its own frame next to Practices, not buried beneath them; (3) Maturity Progression — compressed 3-sentence trajectory blockquote to 1 sentence (~40–50px saved), full L1–L5 detail remains in the table; (4) At a Glance — handoff bridge moved from blockquote to `<!-- _footer: "OpEx instruments; Performance measures the result — Performance Efficiency." -->`. Deck grew by 1 slide (9 OpEx slides total). Downstream page numbers shift +1 from page 47 — flag to Uhura for re-audit. Kirk's Supportability slide (page 13) was not touched.

- 2026-05-13: OpEx slides now thread AI across the maturity model (task → workflow → predictive), include lifecycle test strategy (unit → integration → load → chaos → security), and reference the 4-phase monitoring system design (instrument → collect → analyze → visualize). DORA snapshot is the fast diagnostic. The Design for Supportability slide in Fundamentals also uses the 4-phase model.
- 2026-05-13: Second pass refresh after re-reading WAF March 2026 updates. Sources: OE landing page, OE checklist (OE:01-OE:11), Observability (OE:07), Testing (OE:09), Safe Deployments (OE:11), DevOps Culture (OE:01), Build a monitoring system design guide, WAF What's New. Key change: Microsoft now embeds "AI opportunity" callouts inside every OE chapter, which validates my voice - **AI is integrated, not bolted on**. I converted the Maturity Progression's "Accelerator" column into an explicit **AI Integration** column with concrete per-level moves (task assist → task assist+ → workflow → workflow+ → predictive ops). I added the **test pyramid** + **test in production with safeguards** to Practices, added **Lead Time** and **MTTA** to Key Metrics, and added **OpenTelemetry / correlation IDs / hot-warm-cold analysis** to the Supportability slide. Slide ranges touched: Supportability ~318-348; OpEx Pillar ~891-895; OpEx Principles ~899-907; OpEx Practices & Automation ~911-925; OpEx Key Metrics ~927-936; OpEx Architecture Example ~939-947; OpEx Maturity Progression ~951-970; OpEx At a Glance ~974-1006. Verified build with marp-cli (exit 0).
- 2026-05-13: Flow + enhancement pass. Re-pulled WAF guidance (OE pages, OE:07 observability, OE:09 testing, OE:11 safe-deployments, **new OpEx maturity-model page**, design-guides/monitoring, whats-new). Big find: Feb 2026 update formally locates **AI integration inside the OpEx maturity model** with five named functional patterns - **Summarization → Recommendations → Artifact generation → Policy validation → Optimization actions** - and a buy-vs-build framing. I rewrote the Maturity Progression AI column to thread those five patterns across L1-L5 (replacing the earlier task→workflow→predictive labels) and tagged each level **(buy)** or **(build)**. Renamed the 5 maturity levels to Microsoft's canonical names: **1 DevOps Foundation, 2 Process Standardization, 3 Release Readiness, 4 Change Management, 5 Future Adaptability** - removes credibility tax in Q&A vs the framework. Added the **carrier metaphor** to the OpEx Pillar opener (matches Kirk's existing "OpEx is the carrier" framing in the Trade-Offs deck). Added inbound and outbound handoffs: Cost → OpEx (carrier), OpEx → Perf ("operating safely is half the story; Perf asks whether it holds at P99"). Inlined explicit OE codes in Principles + Practices (OE:01, 02, 05, 06, 07, 08, 09, 10, 11) - matches the citation pattern Reliability already uses. Added **OE:08 structured incident response** as a first-class principle (was implicit). Added **buy/build** split to Practices AI section with explicit safeguards (PII masking, security trimming, human-in-loop). Strengthened Supportability slide's foreshadow line. Marp build passes (exit 0). Drafted a small inbox suggestion for Kirk on Scenario 3 Legacy Batch (DORA baseline before decomposition).
- 2026-05-13: **Process learning.** Microsoft's OpEx pillar in 2026 is now *organized around the maturity model*, not the checklist. The checklist (OE:01-OE:11) still defines the *what*; the maturity model defines the *when and how much*, and AI guidance lives inside the maturity model rather than as a sidebar. Future updates should track maturity-model revisions first - the checklist changes more slowly. Also: "Build a monitoring system" is the **implementation companion** to OE:07; cite it as a design guide, not a pillar article.

## Team Update — 2026-05-13

**Round:** Flow + enhancement pass (all seven agents spawned in parallel).

**Participants:** Kirk (overall), Scotty (Reliability), Chekov (Security), Spock (Cost), Sulu (Performance), Uhura (Layout).

**Cross-pillar handoffs wired this round:**
- **Reliability → Security** — "reliability assumes the system is still yours" (Reliability close) hands off to Security's "Can it be breached — and would we see it?" (Security open).
- **Security → Cost** — "containment isn't free. Security spend is the next cost lever to make legible" (Security close) bridges to Cost's unit-economics framing.
- **Cost → OpEx** — "cost discipline rides on operational discipline — without safe change & feedback loops, savings regress" bridges to OpEx as the "carrier" pillar.
- **OpEx → Performance** — "operating safely is half the story — Performance proves it at P99 under load" (OpEx At-a-Glance) hands off to Perf's tail-latency validation.
- **Performance → Trade-Offs** — "performance never lives alone — every gain costs something elsewhere" (Perf At-a-Glance) introduces Trade-Offs chapter.

**Notes:** Reframed OpEx Pillar opener to explicitly claim "carrier" role (matches Kirk's existing framing in Trade-Offs). AI-integrated maturity now threads five functional patterns (Task Assist → Recommendations → Artifact generation → Policy validation → Optimization actions) with buy/build tags. Level names aligned to Feb 2026 Microsoft canon. OE:01-OE:11 codes inlined throughout. Proposed Scenario 3 (Legacy Batch) facilitator note on baseline DORA before decomposing hotspots. Submitted draft to Kirk.

## Team Update — 2026-05-13T0955Z (R5 — final cleanup)

**Round:** R5 — last overflow residuals.

**Slides fixed:**
1. **Operational Excellence - At a Glance** (36px → 0): Deleted `**Quick Win**` block (2 lines + blank). Pattern matches other cleaned At-a-Glance cards.
2. **Operational Excellence - Practices & Automation** (5px → 0): Removed `+ security` from test-strategy bullet (longest line trimmed by 2 words).

**No git mutations.** Chris Ayers commits.

---

## Team Update — 2026-05-13T0935Z

**Round:** R4 overflow fixes (McCoy scope only — 3 OpEx slides).

**Slides fixed:**
1. **Operational Excellence - Principles** (30px → 0px target): Moved `> Maxim: Operate to learn; learn to operate better.` from slide body to `<!-- _footer: -->`. Five body bullets are clean.
2. **Operational Excellence - Maturity Progression** (68px → 0px target): Moved trajectory blockquote to `<!-- _footer: -->` so table has the slide to itself; compressed L4 AI Integration cell ("governed auto-remediation" → "auto-remediation").
3. **Operational Excellence - At a Glance** (57px → 0px target): Removed body blockquote `> Velocity safely increases…` (maxim content belongs on Principles); shortened Quick Win from 23 words to 13. Existing footer (OpEx → Performance bridge) preserved.

**Untouched (per hard rules):** Practices & Automation (5px ✅), AI Integration (0px ✅).
