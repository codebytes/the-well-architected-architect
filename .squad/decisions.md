# Squad Decisions

## Kirk — 2026-05-13

### Business Alignment: 5-step process canonicalized
- Shifted from non-official verbs to **Listen → Probe → Clarify → Evaluate → Recommend** (per WAF `/architect-role/design-business-requirements`, Dec 2025).
- Status: Applied to Core Role Focus slide.

### Core Role Focus: 2026 architect deliverables
- Reframed around tangible 2026 outputs: design spec, ADR log, DR plan, PoCs — not generic "role" language.
- Sourced from `/architect-role/fundamentals` deliverable checklist.
- Status: Applied.

### WAF Overview matrix: "Strike a balance with" column added
- Previews trade-off thinking in the intro section (was: pure features list).
- Maps each pillar to its primary tension.
- Status: Applied.

### Trade-Off Matrix: Pillar-specific `/tradeoffs` citations
- Footer now points to WAF `/tradeoffs` landing for each pillar so readers can go deeper.
- Status: Applied.

### Architecture Fundamentals duplication: Decision held pending consensus
- **Problem:** Both condensed (6 slides) and verbose (7 slides) fundamentals sections exist; deck repeats material.
- **Recommendation:** Option C — keep condensed spine, lift ADR markdown example + patterns quadrant into it.
- **Status:** Proposed. Awaiting Uhura + McCoy signoff before next round.

### "What To Do Monday" closing CTA slide: New
- Placed between Workloads Examples and feedback page to close the "Modernizing Cloud Excellence" arc.
- Status: Applied.

---

## Chekov — 2026-05-13

### Security maturity indicator: Detection first, not Secure Score
- Lead metric is **detection capability + dwell time** (MTTD), not Secure Score alone.
- Maturity trajectory: **static controls → signal-driven prevention → autonomous containment**.
- Tagline: "Can it be breached — and would we see it?"
- Status: Applied to Security pillar slides.

### Zero Trust anchor: Explicit in pillar opener
- Previously implicit; now explicit with identity-as-perimeter framing.
- Status: Applied.

### Healthcare PHI scenario: Threat-model-first framing (draft for Kirk)
- Proposed rewrite anchoring on threat-model + owner + timeline, SE:03 data classification, PIM/JIT.
- Status: Draft submitted to Kirk.

### Security spend bridge to Cost: Added explicit handoff
- Closes Security with: "Up next: containment isn't free. Security spend is the next cost lever to make legible."
- Status: Applied.

---

## Scotty — 2026-05-13

### Reliability headline: Flow-level outcomes, not blanket uptime
- Lead with **resilient / recoverable / available per critical flow**, not generic "always-up" language.
- Matches Jan 2026 FMA update (failures-vs-errors, read-vs-write separation).
- Status: Applied.

### DR activation criteria: Added to Practices
- Added to Practices line item (plus long-running transaction checkpoints from RE:07).
- Status: Applied.

### Trade-Off Matrix: Terminology refresh (pilot light → active-passive) (draft for Kirk)
- Proposed swap "pilot light" for "warm standby for Tier-0, cold standby below" to match Azure vocabulary.
- Status: Draft submitted to Kirk.

---

## Spock — 2026-05-13

### Cost pillar: Unit cost as headline metric
- Framed across five slides: Pillar opener, Key Metrics, Architecture Example, Maturity L5, At a Glance.
- "Unit cost trending down QoQ" is the arrival signal for L5.
- Status: Applied.

### Security spend + Business Alignment bridge: Added
- Cost opener now explicitly ties dollars back to Business Alignment step 1 ("outcomes & success measures").
- Status: Applied.

### CO:## checklist anchors: Inlined
- Practices & Governance slide anchors to CO:03, 04, 05, 07, 09, 10, 12 for traceability.
- Status: Applied.

### Cost → OpEx handoff: Added explicit bridge
- At-a-Glance closer: "Next: cost discipline rides on operational discipline — without safe change & feedback loops, savings regress."
- Status: Applied.

### Unit cost in Trade-Offs: Gap identified (draft for Kirk)
- Three draft updates submitted to Kirk for cross-pillar Trade-Offs review.
- Status: Drafted.

---

## McCoy — 2026-05-13

### AI-integrated OpEx maturity: Headline architecture, not footer
- AI is integrated through every maturity level 1–5, not bolted on at L5.
- Five functional patterns threaded: Task Assist → Recommendations → Artifact generation → Policy validation → Optimization actions.
- Each level tagged **buy vs build** per Feb 2026 guidance.
- Status: Applied.

### OpEx as "carrier" pillar: Explicit framing
- Added to Pillar opener: "OpEx is the carrier for the other four pillars — the practices that turn gains into changes that actually ship."
- Status: Applied.

### OpEx maturity level names: Aligned to Microsoft canon
- Renamed to Feb 2026 official names: DevOps foundation → Process Standardization → Release Readiness → Change Management → Future Adaptability.
- Status: Applied.

### Design for Supportability foreshadow: Added bridge
- Fundamentals Supportability slide added: "OpEx (later) runs this loop. This slide makes sure the loop exists."
- Status: Applied.

### OpEx → Perf outbound handoff: Added
- At-a-Glance: "Next: operating safely is half the story — Performance asks whether the system holds its promise at P99 under load."
- Status: Applied.

### OE checklist codes: Inlined (OE:01 – OE:11)
- Every principle + practice tagged to checklist items for traceability.
- OE:08 (incident response) promoted from implicit to explicit.
- Status: Applied.

### Scenario 3 (Legacy Batch): Baseline DORA before decomposing (draft for Kirk)
- Proposed facilitator note to emphasize maturity-level jump; baseline DORA before carving hotspots.
- Status: Drafted.

---

## Sulu — 2026-05-13

### OpEx → Perf bridge: Explicit handoff added
- Perf opener: "OpEx instrumented the system. Performance proves it under load — at the tail, not on the average."
- Status: Applied.

### PE checklist anchors: Inlined (PE:01 – PE:12)
- All principles + practices tagged to WAF checklist for traceability.
- Status: Applied.

### Baseline-before-tune: Established as gate
- Principle 4: "Baseline → measure → tune on evidence, never on guesswork."
- Maturity L2 gate: "P50 / P95 / P99 baselines + hot-path map captured."
- Status: Applied.

### Predictive autoscale: Framed as L5 destination, not L1 starting point
- Emerging (2026) section, Key Metrics, Maturity L5, At-a-Glance all reinforce this.
- Status: Applied.

### Perf → Trade-Offs handoff: Explicit
- At-a-Glance: "Next: performance never lives alone — every gain costs something elsewhere."
- Status: Applied.

### HPC article relevance: Surfaced in What's New
- Added "coupled compute + low-latency interconnect" to make HPC signal visible.
- Status: Applied.

### Scenario anchors (draft for Kirk)
- Two draft scenario tweaks to reference Perf pillar's P95/P99 baselines more concretely.
- Status: Drafted.

---

## Uhura — 2026-05-13

### Theme variant activation: 22+ slides
- Title slide + pillar intros (5) + fit pull-quote + section divider + closing two frames + At-a-Glance cards (5).
- Status: Applied.

### H1 vs H3 hierarchy: Promoted At-a-Glance + Continuous Improvement titles
- Five At-a-Glance cards: `### h3` → `# h1` + `_class: glance`.
- Continuous Improvement maturity: `### h3` → `# h1`.
- Status: Applied.

### Dead `<style scoped>` table hacks: Removed
- Two slides previously shipped inline table-display fixes; theme now handles globally.
- Status: Applied.

### Image alt text: Added to 5 images
- architect.png, portrait.png, waf.png, questions.jpg, QR code.
- Status: Applied.

### Custom CSS dead asset URLs: Stripped
- Removed `title-bg.png` (404 bound) and `castle-gate.svg` mask; added radial-gradient corner glow.
- Status: Applied.

### Paginate directives: Added
- Title slide, questions.jpg full-bleed → `_paginate: false`.
- Status: Applied.

### Layout concerns: Routed to pillar owners
- Five *-Practices* slides flagged as DENSE (>7 bullets).
- Missing-H1 on bio/closing frames noted for speaker bio / Kirk decision.
- Status: Documented; no content edits made.

---

## Active Decisions

No decisions recorded yet.

## Governance

- All meaningful changes require team consensus
- Document architectural decisions here
- Keep history focused on work, decisions focused on direction
