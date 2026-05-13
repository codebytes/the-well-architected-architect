# Project Context

- **Owner:** Chris Ayers
- **Project:** "The Well-Architected Architect" — Marp slide deck on Microsoft's Azure Well-Architected Framework.
- **Stack:** Marp markdown, custom-techorama theme, Mermaid, GitHub Pages.
- **Created:** 2026-05-13

## Learnings

<!-- Append new learnings below. -->

- 2026-05-13: Security slides now include secure dev lifecycle (Dev Box / Codespaces / golden images / IDE extensions) and security exercises (tabletop, red-/purple-teaming) in Practices & Patterns. Maturity goes Core → Expanded → Threat-Informed → Adaptive → Advanced; quick win recorded as expiring unused privileged roles + enabling PIM.
- 2026-05-13: Full pass on Security slides (Slides.md lines ~655-806). Sources reviewed: WAF Security landing, SE:02 secure development lifecycle, SE:10 monitor-threats, SE:11 test, full SE:01-SE:12 checklist, WAF What's New March 2026 (SDL consolidation, IDE extensions, Codespaces/Dev Box, golden images, tabletop/red-team). Decisions:
  - Reframed Pillar tagline from "Can it be breached or abused?" to "Can it be breached — and would we see it?" to lock detection-first framing.
  - Principles rewritten around threat-model-first (STRIDE), assume-breach, identity-as-perimeter, PIM/JIT as a verb, encrypt+segment by default.
  - Practices & Patterns converted to two-column layout (Identity/Network+Data/Detection on left; Secure Dev Lifecycle / Exercises / Emerging AI safeguards on right) to absorb 2026 SDL guidance without overflow.
  - Key Metrics: added Standing privileged roles target ~0 and MTTD < 1 hr; demoted Secure Score with caption "Secure Score is hygiene".
  - Architecture Example reorganized as Edge → Ingress → Compute → Data → Detect with explicit managed-identity / CMK / SOAR callouts.
  - Maturity rubric rebuilt with "Signals You See" column per level (concrete evidence vs vague focus), trajectory: static controls → signal-driven prevention → autonomous containment.
  - At-a-Glance Quick Win tightened to "expire unused privileged roles, enable PIM+JIT, onboard top 3 admin paths to CA this week".
  - Did not edit "What's New" slide — existing security bullet (Dev Box / Codespaces / golden images / red-teaming) already matches 2026 guidance.
  - Verified build with marp-cli — no errors.
- 2026-05-13 (flow + enhancement pass): Reviewed Security block (L676-829) against Reliability close + Cost open, Trade-Offs (L1202-1287), and PHI Scenario (L1309). Refreshed against learn.microsoft.com Security principles (Zero Trust triad / CIA), SE:02 SDL (March 2026 consolidation — IDE extensions, credential managers, Codespaces/Dev Box, golden images, tabletop/red-teaming, default-deny, Microsoft-hosted build agents, supply-chain), SE:02 Threat Model (STRIDE, control+owner+timeline), and WAF What's New (March 2026). Surgical edits:
  - Pillar open: anchored "Zero Trust by default" up front so the term lands in the first sentence.
  - Principles: restructured #1 around the explicit Zero Trust triad (verify explicitly / least privilege / assume breach); added "owners" + "control, owner, timeline" to the threat-model principle (per 2026 SE:02); added CIA triad + data-classification framing to encrypt-and-segment.
  - Practices SDL block: added asset/CVE catalog, default-deny in code, Microsoft-hosted build agents, supply-chain scans. Emerging block: model-supply-chain + "Agentic SOC: Copilot + Sentinel for triage & auto-containment."
  - Maturity L5: sharpened to "AI/agent-assisted containment" with "agentic SOC" accelerator. Trajectory: "static controls → signal-driven prevention → AI-assisted autonomous containment."
  - At-a-Glance close: added Cost-handoff bridge — "containment isn't free. Security spend — controls, detection, response — is the next cost lever to make legible."
  - What's New (L512): added "IDE extensions" to the secure-dev-lifecycle bullet so it matches the March 2026 consolidated SE:02 list.
  - Drafted PHI scenario rewrite for Kirk's inbox: tighter answer-key comment that pulls threat-model → classify → encrypt+segment → audit-grade signal vocabulary directly from the pillar; preserved comment-only convention.
  - No layout / Marp directive / column-structure changes. Reliability→Security and Security→Cost transitions both now mirror the same "Up next: …" handoff pattern.

## Team Update — 2026-05-13

**Round:** Flow + enhancement pass (all seven agents spawned in parallel).

**Participants:** Kirk (overall), Scotty (Reliability), Spock (Cost), McCoy (OpEx), Sulu (Performance), Uhura (Layout).

**Cross-pillar handoffs wired this round:**
- **Reliability → Security** — "reliability assumes the system is still yours" (Reliability close) hands off to Security's "Can it be breached — and would we see it?" (Security open).
- **Security → Cost** — "containment isn't free. Security spend is the next cost lever to make legible" (Security close) bridges to Cost's unit-economics framing.
- **Cost → OpEx** — "cost discipline rides on operational discipline — without safe change & feedback loops, savings regress" bridges to OpEx as the "carrier" pillar.
- **OpEx → Performance** — "operating safely is half the story — Performance proves it at P99 under load" (OpEx At-a-Glance) hands off to Perf's tail-latency validation.
- **Performance → Trade-Offs** — "performance never lives alone — every gain costs something elsewhere" (Perf At-a-Glance) introduces Trade-Offs chapter.

**Notes:** Drafted Healthcare PHI scenario rewrite (threat-model-first anchor: SE:03 data classification → CMK + Key Vault → PIM/JIT → Defender/Sentinel audit-grade ingestion → tune perf/cost after controls are in place). Submitted to Kirk for integration. Decision proposal on maturity indicator: lead metric is MTTD/dwell time, not Secure Score (supports Kirk's trade-off framing that security is a detection-and-containment cost, not a checklist cost). Detection-first maturity trajectory now resonates across Reliability (signal-driven) and OpEx (agentic) pillars.
