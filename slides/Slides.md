---
marp: true
lang: en
theme: architect
title: The Well-Architected Architect
description: Make intentional cloud architecture decisions and validate their tradeoffs across the five Azure Well-Architected pillars.
author: Chris Ayers
footer: 'Chris Ayers | chris-ayers.com'
paginate: true
transition: fade 250ms
---

<link rel="stylesheet" href="motion.css">
<script src="assets/motion.js" defer></script>

<!-- _paginate: false -->
<!-- _class: title field-cover -->
<!-- _footer: "" -->

<style scoped>
section {
  background:
    linear-gradient(#11161099, #111610cc),
    url('./themes/techorama/stone-wall-texture-dark.jpg') center / cover;
}
section::before {
  border-color: #e5c35a66;
}
section h1 {
  font-family: 'DS Wallau', 'Segoe UI', sans-serif;
  font-size: 72px;
  font-weight: 400;
  color: #eadfce;
}
section .eyebrow {
  color: #e5c35a;
}
</style>

<div class="columns">
<div>

<p class="eyebrow">Techorama 2026 / Medieval Edition</p>

# The Well-Architected Architect

<p class="cover-promise">Building secure, reliable, and<br>cost-efficient solutions on Azure.</p>

<p class="cover-byline">Chris Ayers · Microsoft</p>

</div>
<div>

![Techorama 2026 Medieval Edition](./themes/techorama/techorama-logo-2026-medieval.png)

</div>
</div>

<!-- Conference opener. The original blueprint title slide follows unchanged. -->

---

<!-- _paginate: false -->
<!-- _class: title field-cover -->
<!-- _footer: "" -->

<img class="event-mark" src="./themes/techorama/techorama-logo-2026-medieval.png" alt="Techorama 2026 Medieval Edition">

<div class="columns">
<div>

<p class="eyebrow">An architect's field guide</p>

# The Well-Architected Architect

<p class="cover-promise">Make the tradeoff.<br>Keep the promise.<br>Bring the evidence.</p>

<p class="cover-byline">Chris Ayers · Microsoft<br>Principal Software Engineer / Azure EngOps AzRel</p>

</div>
<div>

![Rolled architectural blueprints, decorative title artwork](img/architect.png)

<p class="cover-caption">Modernizing cloud excellence</p>

</div>
</div>

<!--
The five pillars are lenses for decisions, not five independent scores to maximize.
This first refresh introduces a retail checkout workload in the WAF section and
uses it again for the reliability sequence and the retail discussion.
-->

---

![bg left:40% Portrait of Chris Ayers](./img/portrait.png)

## Chris Ayers

_Principal Software Engineer_
_Azure EngOps AzRel_
_Microsoft_

<i class="fa-brands fa-bluesky"></i> BlueSky: [@chris-ayers.com](https://bsky.app/profile/chris-ayers.com)  
<i class="fa-brands fa-linkedin"></i> LinkedIn: [chris\-l\-ayers](https://linkedin.com/in/chris-l-ayers/)<br>
<i class="fa fa-window-maximize"></i> Blog: [https://chris-ayers\.com/](https://chris-ayers.com/)  
<i class="fa-brands fa-github"></i> GitHub: [Codebytes](https://github.com/codebytes)  
<i class="fa-brands fa-mastodon"></i> Mastodon: [@Chrisayers@hachyderm.io](https://hachyderm.io/@Chrisayers)

<!-- Legacy contact: Twitter https://twitter.com/Chris_L_Ayers.
Keep the retired, struck-through link off the projected slide. -->

---

<!-- header: 'Part 1 / Architecture fundamentals' -->

<!-- _class: lead pillar-entry part-entry -->
<!-- _header: "" -->

# Architecture fundamentals

<div class="pillar-path" aria-label="Current part: Architecture fundamentals"><b>Part 1 / Architecture fundamentals</b><span>Part 2 / Azure Well-Architected Framework</span></div>

> How do we turn a business need into a defensible decision?

**Strategic:** choose deliberately.<br>**Operational:** make it supportable.<br>**Collaborative:** help the team succeed.

<!-- Introduce the architect's toolkit before applying WAF. The following
roadmap names the habits; the supporting slides follow those same three groups. -->

---

# Solution Architecture Fundamentals

## How we make and validate decisions

<div class="fundamentals-map">
<div>

### Strategic

Start with business needs.<br>Make deliberate decisions.<br>Reuse patterns. Anticipate change.

</div>
<div>

### Operational

Design for support.<br>Keep learning.

</div>
<div>

### Collaborative

Help the team succeed.<br>Use a repeatable method.

</div>
</div>

<!--
Start with business requirements, then apply a decision framework, design patterns,
forward thinking, supportability, continuous learning, collaboration, and a
methodical approach. These are grouped here as strategic, operational, and
collaborative habits rather than a numbered checklist.
Architecture is a team sport played with strategic thinking.
-->

---

# Architecture is a decision system

<!-- header: 'Part 1 / Architecture fundamentals / Strategic' -->

A **workload** is the application, data, and supporting services that deliver a business outcome.

- **Architecture Decision Record (ADR):** the choice, alternatives, and why.
- **Proof of concept:** a small experiment to test a risky assumption.
- **Design specification:** how the workload meets the business need.

<!--
Source: https://learn.microsoft.com/en-us/azure/well-architected/architect-role/fundamentals
Include recovery, security, and compliance in the design rather than retrofitting.
A workload can include AI models. Bring build, run, secure, and recover perspectives.
Maintain an ADR log for architecturally significant choices, including rejected
options. A proof of concept is often abbreviated PoC; a key performance indicator
(KPI) is a measure of progress toward a business objective.
-->

---

# Start with business needs

**Listen → probe → clarify → evaluate → recommend.**

- Ask why the outcome matters.
- Turn assumptions into measurable requirements.
- Compare options, then test the riskiest one.

<!--
Capture stakeholder requests and their assumptions; probe the real motivation.
Clarify requirements per flow. Evaluate feasibility, constraints, and cross-pillar
tradeoffs. Recommend with rationale, proof-of-concept results, and business
measures ready for an ADR. Repeat discovery after a major change in direction.
The next two slides make requirements concrete with service and recovery targets.
-->

---

# Define the promise before the design

<!-- _class: field -->

<div class="decision-record">
<div><span>SLI / indicator</span><p>Service-level indicator: what we measure.<br>Example: the share of successful checkouts.</p></div>
<div><span>SLO / objective</span><p>Service-level objective: the target.<br>Example: 99.9% successful checkouts over 30 days.</p></div>
<div><span>Error budget</span><p>The permitted shortfall from that target.<br>Here: 0.1% of eligible checkouts may fail.</p></div>
</div>

<p class="takeaway">Agree the flow, measurement window, and what counts as success.</p>

<!--
These numbers are illustrative, not WAF defaults. A request-based availability
budget counts failed eligible requests; do not convert it directly into downtime.
An SLO is an internal target, not automatically a contractual service-level agreement.
Source: https://learn.microsoft.com/en-us/azure/well-architected/reliability/metrics
-->

---

# Define the recovery limits

<!-- _class: field -->

<div class="native-visual" data-waf-motion="recovery" role="group" aria-label="Recovery timeline with one-shot emphasis on slide entry">
<svg viewBox="0 0 1120 310" role="img" aria-labelledby="recovery-title recovery-desc">
<title id="recovery-title">Recovery looks backward for data and forward for service</title>
<desc id="recovery-desc">From the outage, RPO bounds the acceptable data-loss window back to recoverable data. RTO bounds the time forward to restored service. Five and thirty minutes are independent illustrative limits.</desc>
<path class="visual-rail" d="M80 140 H1040"/>
<path class="visual-guide" d="M144 78 V120 M560 78 V120 M560 190 V245 M976 190 V245"/>
<path class="visual-rail" d="M560 80 H144 M560 230 H976"/>
<path class="visual-ink" pathLength="1" data-motion-ink="draw" data-motion-order="0" d="M560 80 H144"/>
<path class="visual-ink" pathLength="1" data-motion-ink="draw" data-motion-order="2" d="M560 230 H976"/>
<path class="visual-point" d="M144 80 l14 -7 v14 Z M976 230 l-14 -7 v14 Z"/>
<circle class="visual-point" cx="144" cy="140" r="7"/>
<circle class="visual-warning" cx="560" cy="140" r="10"/>
<circle class="visual-success" cx="976" cy="140" r="7"/>
<text class="visual-label" x="352" y="40" text-anchor="middle">RPO / at most 5 minutes</text>
<text x="144" y="180" text-anchor="middle">Recoverable point</text>
<text x="560" y="180" text-anchor="middle">Outage</text>
<text x="976" y="180" text-anchor="middle">Flow restored</text>
<text class="visual-label" x="768" y="280" text-anchor="middle">RTO / at most 30 minutes</text>
</svg>
<span class="motion-error" data-motion-status role="status" aria-live="polite" hidden></span>
</div>

<div class="diagram-key">
<p><strong>Recovery point objective (RPO):</strong><br>Maximum acceptable data-loss window.</p>
<p><strong>Recovery time objective (RTO):</strong><br>Maximum acceptable time to restore the flow.</p>
</div>

<p class="source-note">Illustrative limits, not to scale—not WAF defaults. Drills test the business targets.</p>

<!--
Examples are hypothetical and separate: a 30-minute RTO does not imply a
5-minute RPO, and neither follows from the 99.9% SLO on the preceding slide.
Disaster recovery (DR) restores service after a major disruption.
Source: https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery
The native SVG uses blueprint dimension lines. Entering the slide traces the
backward data-loss bound, then the forward recovery bound; the full timeline is
always visible. Revisit the slide to replay. Presenter previews remain static.
-->

---

# Make decisions deliberately

<!-- _class: field diagram -->

<div class="diagram-asset">

![Identify, analyze, decide, implement, and learn; new evidence feeds the next decision.](img/diagrams/decision-loop.drawio.svg)

</div>

<div class="diagram-key">
<p><strong>Two-way door:</strong> easy to reverse.<br>Start with a small experiment.</p>
<p><strong>One-way door:</strong> costly to reverse.<br>Review the consequences early.</p>
</div>

<!-- The decision framework is HOW; business alignment is WHY. Apply the
requirements established earlier, then capture the chosen tradeoff in an ADR.
Record the decision and alternatives; revisit the ADR when evidence changes. -->

---

# Reuse patterns. Anticipate change.

<div class="columns">
<div>

## Patterns

**Circuit breaker:** stop calling a failing dependency temporarily.

Choose a pattern because it solves a known problem.

</div>
<div>

## Forward Scan

Watch for growth, regulatory changes, and retiring dependencies.

Prefer a design the team can explain and operate.

</div>
</div>

<!--
Other patterns: cache-aside, bulkhead, valet key, claim-check, event-driven designs.
Specialist workloads may need high-performance computing or AI inference with
retrieval-augmented generation (RAG: retrieve relevant content before generation).
Watch data residency, preview risk, model retraining, and model drift.
Source: https://learn.microsoft.com/en-us/azure/architecture/patterns/
-->

---

# Define the failure boundary

<!-- _class: field diagram -->

<div class="diagram-asset">

![Region A contains three separate zones; a failed zone is not the same as a failed region. A separate region still needs a tested recovery design.](img/diagrams/failure-boundary.drawio.svg)

</div>

<div class="diagram-key">
<p><strong>Region:</strong> a geographic deployment area containing datacenters.</p>
<p><strong>Availability zone:</strong> a separate datacenter group with independent power, cooling, and networking.</p>
</div>

<p class="takeaway">Zone resilience is not regional disaster recovery.</p>

<!--
Azure services differ in regional and zonal support. Zones contain one or more
datacenters and are physically separated within a region. A region's zones are
not separate regions; regional outages and dependency failures need their own
recovery analysis. Do not assume a paired region implies automatic recovery.
Source: https://learn.microsoft.com/en-us/azure/reliability/regions-overview
Source: https://learn.microsoft.com/en-us/azure/reliability/availability-zones-overview
-->

---

# Record the tradeoff before the incident

<!-- _class: field -->

<p class="eyebrow">Decision record / illustrative checkout workload</p>

<div class="decision-record">
<div><span>Context</span><p>Checkout must survive a zone loss at the agreed peak.</p></div>
<div><span>Decision</span><p>Spread capacity across zones; test capacity after failure.</p></div>
<div><span>Tradeoff</span><p>Extra capacity costs money before it serves traffic.</p></div>
<div><span>Evidence</span><p>A zone-loss drill meets the checkout SLO without new allocation.</p></div>
</div>

<p class="takeaway">Name the assumption. Name the owner. Name the test.</p>

<!--
Consolidates the second pass through the fundamentals; the first pass stays
in the preceding slides. An ADR also records status, alternatives, rejected options,
reversibility, ownership, and when to revisit the choice. Capture it before code,
assess one-way versus two-way doors, and review it after implementation.
The previous healthcare ADR assumed 99.99% availability implied active-active
across three regions and a 3x infrastructure bill. Neither follows universally;
the replacement is an explicit, testable example rather than a default topology.

Supporting pattern catalog: circuit breaker, bulkhead, retry with backoff,
cache-aside, CQRS, event sourcing, valet key, gatekeeper, federated identity,
event-driven systems, service mesh, and edge computing. These solve different
problems; select against requirements rather than adopting a catalog.
Source: https://learn.microsoft.com/en-us/azure/architecture/patterns/

Forward scan: growth thresholds, regional expansion, compliance, preview risk,
fallbacks, single points of failure, coupling, and deprecations. The previous
Netflix migration claim was unsourced and is not retained as a factual example.
-->

---

<!-- header: 'Part 1 / Architecture fundamentals / Operational' -->
<!-- _class: field diagram -->

# Design for support. Keep learning.

<div class="diagram-asset">

![A request produces correlated telemetry, a runbook guides response, and the evidence updates the ADR and next rehearsal.](img/diagrams/operational-learning.drawio.svg)

</div>

<p class="diagram-caption"><strong>Telemetry</strong> shows system behavior. A <strong>runbook</strong> gives tested operational steps.</p>
<p class="takeaway">Review with the owner. Change the design, not just the dashboard.</p>

<!--
This supports both Operational roadmap bullets: design for support and keep learning.
The former growth loop was Learn → apply → codify.
Golden signals track latency, traffic, errors, and saturation. Synthetic tests
simulate user journeys. Use consistent telemetry schemas and clear error contracts.
External specialists can expose assumptions the workload team has missed.
Instrument the checkout SLO, run a timed recovery drill, and compare the result
with RTO and RPO. Use a proof of concept for uncertain behavior before adoption.
Telemetry comprises logs, metrics, and traces. A correlation ID is a shared
identifier linking events for one request. A runbook provides tested steps for
an operational task or incident. Test risky assumptions, review incidents with
the owner, share the results, and update the ADR and runbook.
-->

---

<!-- header: 'Part 1 / Architecture fundamentals / Collaborative' -->

# Help the team succeed

<!-- _class: field -->

<div class="columns">
<div>

## Review together

Product, engineering, security, operations, and data share the decision.

## Make ownership clear

Name who decides, who operates it, and who reviews the evidence.

</div>
<div>

## Share the evidence

Bring experiment and drill results—not just a preferred diagram.

## Codify what worked

Update the ADR, runbook, and shared patterns.

</div>
</div>

<p class="takeaway">Leave the team able to explain, operate, and revisit the decision.</p>

<!--
The shared learning loop is Learn → apply → measure → share.
Supporting detail from the consolidated fundamentals:
Instrument, collect, analyze, visualize. Use structured logs and tiered retention;
connect hot/warm/cold analysis to health and business KPIs. DLQs, graceful
degradation, clear error contracts, runbook automation, and ChatOps support recovery.
Measure MTTR against your own baseline; the former ~75% improvement claim had no
specific supporting source and is not presented as an expected outcome.

Continuous development: role-relevant Microsoft Learn paths, FinOps/MLOps,
architecture katas, open source, hackathons, AI-assisted reviews/documentation,
meetups, architecture forums, and conference participation. Choose current
certification paths rather than treating a dated exam list as enduring guidance.
External collaborators include cloud solution architects, partner specialists,
and community experts. Useful shared artifacts: design reviews, failure scenarios,
cost workshops, and a pattern/ADR library.
Tools can include Visio/draw.io/Lucidchart/C4, wiki/Backstage, WAF Review/Advisor,
and chaos/load testing. The method and evidence matter more than the tool brand.
-->

---

# Use a repeatable method

<!-- _class: field -->

## Shared toolkit

- Agreed requirements, an owner, and an acceptance test
- ADR catalog and pattern library
- Evidence of change: target breaches, cost shifts, and configuration drift

## Working loop

Clarify → compare → decide → test → review.

<p class="takeaway">Next: apply this method with the Azure Well-Architected Framework.</p>

<!--
This supports the second Collaborative roadmap bullet: use a repeatable method.
Each step leaves an artifact another team member can inspect: requirements,
alternatives, an ADR, test results, and the next review trigger.
The former improvement loop was Assess → Prioritize → Implement → Validate →
Instrument → Reassess. Preserve measurement throughout, not only after validation.
Pillar-specific checklists and maturity baselines belong to the WAF application
that follows. This working loop is the talk's method, not an official WAF sequence.
-->

---

<!-- header: 'Part 2 / Azure Well-Architected Framework' -->

# Azure Well-Architected Framework

<!-- _class: lead pillar-entry part-entry -->
<!-- _header: "" -->

<div class="pillar-path" aria-label="Current part: Azure Well-Architected Framework"><span>Part 1 / Architecture fundamentals</span><b>Part 2 / Azure Well-Architected Framework</b></div>

> Does the workload keep its promise across all five pillars?

Apply the fundamentals.<br>Evaluate the tradeoffs.<br>Bring the evidence.

<!-- This is the boundary between the architect's general toolkit and its
application through Azure WAF. The five-pillar map follows on the next slide. -->

---

# Five pillars. One workload.

<!-- _class: field pillar-map -->

<p class="eyebrow">Apply the architect's toolkit</p>

<div class="native-visual" data-waf-motion="pillars" role="group" aria-label="Five lenses on the same checkout workload">
<svg viewBox="0 0 1120 340" role="img" aria-labelledby="lenses-title lenses-desc">
<title id="lenses-title">Five pillars examine one workload</title>
<desc id="lenses-desc">Reliability, Security, Cost Optimization, Operational Excellence, and Performance Efficiency are connected to the same checkout workload. The spokes are evaluation lenses, not dependencies or rankings.</desc>
<path class="visual-rail" d="M500 115 L335 70 H200 M620 115 L785 70 H920 M494 175 L340 240 H170 M626 175 L780 240 H950 M560 223 V285"/>
<path class="visual-ink" pathLength="1" data-motion-ink="draw" data-motion-order="0" d="M500 115 L335 70 H200"/>
<path class="visual-ink" pathLength="1" data-motion-ink="draw" data-motion-order="1" d="M620 115 L785 70 H920"/>
<path class="visual-ink" pathLength="1" data-motion-ink="draw" data-motion-order="2" d="M494 175 L340 240 H170"/>
<path class="visual-ink" pathLength="1" data-motion-ink="draw" data-motion-order="3" d="M560 223 V285"/>
<path class="visual-ink" pathLength="1" data-motion-ink="draw" data-motion-order="4" d="M626 175 L780 240 H950"/>
<circle class="visual-node" cx="560" cy="155" r="70"/>
<circle class="visual-guide" cx="560" cy="155" r="82"/>
<text class="visual-label" x="560" y="150" text-anchor="middle">Checkout</text>
<text class="visual-detail" x="560" y="181" text-anchor="middle">One workload</text>
<circle class="visual-point" cx="200" cy="70" r="5"/><circle class="visual-point" cx="920" cy="70" r="5"/>
<circle class="visual-point" cx="170" cy="240" r="5"/><circle class="visual-point" cx="950" cy="240" r="5"/><circle class="visual-point" cx="560" cy="285" r="5"/>
<text class="visual-label" x="200" y="42" text-anchor="middle">Reliability</text>
<text class="visual-label" x="920" y="42" text-anchor="middle">Security</text>
<text class="visual-label" x="170" y="284" text-anchor="middle">Cost Optimization</text>
<text class="visual-label" x="560" y="326" text-anchor="middle">Operational Excellence</text>
<text class="visual-label" x="950" y="284" text-anchor="middle">Performance</text>
<text class="visual-label" x="950" y="318" text-anchor="middle">Efficiency</text>
</svg>
<span class="motion-error" data-motion-status role="status" aria-live="polite" hidden></span>
</div>

<p class="takeaway">Not five scores to maximize. Five lenses for the same decision.</p>

<!--
Sources: https://learn.microsoft.com/en-us/azure/well-architected/
https://learn.microsoft.com/en-us/azure/well-architected/what-is-well-architected-framework
The original five-pillar illustration remains at img/waf.png as a reference asset.
The pillar names are the framework's; the following intent summaries are this talk's.
Reliability: stay available and recover within targets. Security: verify access
and limit the impact of a breach. Cost: know unit cost and spend intentionally.
Operations: observe, automate, learn. Performance: test the slowest requests and scale.
The native hub makes the shared workload explicit. Slide entry traces the five
lenses once, without hiding labels or implying that one pillar is optional.
-->

---

# Start with the checkout promise.

<!-- _class: field -->

<div class="native-visual" data-waf-motion="checkout" role="group" aria-label="Trace a checkout request once">
<svg viewBox="0 0 1120 360" role="img" aria-labelledby="checkout-title checkout-desc">
<title id="checkout-title">Follow the request; keep the order durable</title>
<desc id="checkout-desc">A customer reaches the edge and checkout service. Persist required order state before acknowledgement. Deferred work is relayed to a queue after the durable write; the relay and duplicate handling need a tested consistency mechanism.</desc>
<path class="visual-rail" d="M142 180 H260 M350 180 H440 M650 180 H735 Q750 180 750 165 V85 Q750 70 765 70 H825"/>
<path class="visual-guide" d="M915 115 V260"/>
<path class="visual-ink" pathLength="1" data-motion-ink="draw" data-motion-order="0" d="M142 180 H260"/>
<path class="visual-ink" pathLength="1" data-motion-ink="draw" data-motion-order="1" d="M350 180 H440"/>
<path class="visual-ink" pathLength="1" data-motion-ink="draw" data-motion-order="2" d="M650 180 H735 Q750 180 750 165 V85 Q750 70 765 70 H825"/>
<path class="visual-ink" pathLength="1" data-motion-ink="draw" data-motion-order="3" d="M915 115 V260"/>
<circle class="visual-node" cx="100" cy="180" r="42"/>
<circle class="visual-rail" cx="100" cy="167" r="11"/>
<path class="visual-rail" d="M78 200 Q78 182 100 182 Q122 182 122 200"/>
<circle class="visual-node" cx="305" cy="180" r="45"/>
<path class="visual-rail" d="M280 180 H330 M305 155 V205 M280 180 l8 -6 M280 180 l8 6 M330 180 l-8 -6 M330 180 l-8 6"/>
<rect class="visual-node" x="440" y="140" width="210" height="80" rx="4"/>
<text class="visual-label" x="545" y="173" text-anchor="middle">Checkout</text>
<text class="visual-detail" x="545" y="203" text-anchor="middle">Accept the order</text>
<path class="visual-node" d="M825 42 C825 20 1005 20 1005 42 V98 C1005 120 825 120 825 98 Z"/>
<path class="visual-rail" d="M825 42 C825 64 1005 64 1005 42"/>
<text x="915" y="82" text-anchor="middle">Order data</text>
<text class="visual-detail" x="915" y="106" text-anchor="middle">Persist first</text>
<rect class="visual-node" x="825" y="260" width="180" height="74" rx="4"/>
<text x="915" y="289" text-anchor="middle">Queue</text>
<text class="visual-detail" x="915" y="319" text-anchor="middle">Process later</text>
<text class="visual-label" x="100" y="266" text-anchor="middle">Customers</text>
<text class="visual-label" x="305" y="266" text-anchor="middle">Edge router</text>
</svg>
<span class="motion-error" data-motion-status role="status" aria-live="polite" hidden></span>
</div>

<p class="takeaway">Complete checkout at the agreed peak—even through a tested failure.</p>
<p class="source-note">Conceptual workload. Agree success rate, recovery targets, and cost per completed order.</p>
<!--
This is a conceptual workload, not a deployable Azure reference architecture.
The queue represents asynchronous post-order processing, not permission to
acknowledge an order before its required durable state exists.
Define duplicate handling, payment consistency, dependency behavior, security,
data protection, and business SLOs before selecting services or a DR topology.
Later slides isolate compute capacity; a healthy API does not prove healthy data.
API means application programming interface: how software calls another service.
The edge router directs incoming requests; the queue holds work for later processing.
Measure tail latency (the slower requests), not just the average.
Slide entry draws the request path, persistence, and deferred-work relationship
in order. This is attention guidance, not a measured latency simulation.
The database-to-queue line abstracts a relay of durable work intent; it is not
a claim that writing to two services is atomic. See the later checkout redesign.
-->

---

# Use WAF to evaluate the workload

The **Azure Well-Architected Framework (WAF)** guides decisions across the five pillars.

- Start with business outcomes.
- Expose tradeoffs before choosing services.
- Test whether the workload delivers the promise.

<!--
Framework goals include resilience, proactive security, cost efficiency,
innovation, operational excellence, and predictable performance.
The framework guides decisions; using it does not guarantee an outcome.
-->

---

# Measure outcomes, not adoption.

<!-- _class: field -->

<div class="decision-record">
<div><span>Reliability</span><p>Can customers complete checkout through a tested failure?</p></div>
<div><span>Value</span><p>What did the cost per completed order do after the change?</p></div>
<div><span>Delivery</span><p>Can we release and recover without breaking the promise?</p></div>
</div>

<p class="takeaway">Baseline → change → measure. Use your workload's evidence.</p>

<!--
The former slide listed 304% ROI (Forrester TEI, Microsoft-commissioned),
40% less downtime (Global Retailer), 25% cost savings (Financial Services),
75% faster server updates (Manufacturing), and a 93/100 security score (Profisee).
It did not identify the study URL, case-study URLs, dates, populations, or
measurement methods. These figures are retained here for source follow-up, not
presented as verified outcomes or promises for the audience's workload.
-->

---

# WAF: weigh the pillar tradeoffs

| Pillar | Example tension |
|--------|-----------------|
| Reliability | Recovery readiness costs money |
| Security | Inspection adds processing time |
| Cost Optimization | Less spare capacity can weaken recovery |
| Operational Excellence | Approval controls can slow delivery |
| Performance Efficiency | Faster responses can require more resources |

<!--
Each pillar has a tradeoffs page on Microsoft Learn. Evaluate the same workload
across all five; reliability can expand attack surface, security affects
operability, and tooling has a cost. Assessment is ongoing, not a one-time audit.
-->

---

# Reliability Pillar

<!-- _class: lead pillar-entry -->

<div class="pillar-path" aria-label="Current pillar: Reliability"><b>Reliability</b><span>Security</span><span>Cost Optimization</span><span>Operational Excellence</span><span>Performance Efficiency</span></div>

> "Will it stay up & recover — for the flows that actually matter?"

**Resilient:** withstand faults.<br>**Recoverable:** restore within RTO and RPO.<br>**Available:** deliver the promised service.

---

# Reliability - Principles

- Set SLO, RTO, and RPO for each critical flow.
- **Failure mode analysis:** identify how the flow can fail and what happens next.
- **Graceful degradation:** keep essential functions when optional ones fail.

<!--
Assess user and system flows before redundancy spending. Failure mode analysis
is abbreviated FMA. Distinguish failures requiring intervention from expected
errors. Analyze read and write failures separately: their impacts and recovery
paths differ. Engineer reliability across code, infrastructure, and operations.
-->

---

# Reliability - Practices (Engineering)

<!-- _class: field diagram -->

<div class="diagram-asset">

![Retry temporary failures with limits and delays, reuse an operation key to avoid repeating effects, and investigate unprocessable messages in a dead-letter queue.](img/diagrams/retry-and-idempotency.drawio.svg)

</div>

<p class="diagram-caption"><strong>Idempotency:</strong> repeating an operation does not repeat its effect.</p>
<p class="takeaway">Design and test the failure path—not just the happy path.</p>

<!--
Choose zonal or regional redundancy against failure modes and recovery targets,
not as an automatic tier rule. Long-running work can need checkpoints.
Service Bus PeekLock and duplicate detection support message handling, but do
not alone guarantee end-to-end idempotency. Separate read/write recovery;
secondary Blob reads are not write failover. Use supported client-library
transient-fault handling, and isolate connection pools to prevent cascading failures.
Fault injection tests graceful degradation as well as availability.
Bounded retries have limits and delays. A dead-letter queue holds unprocessable
messages for investigation; it is not automatic recovery. Isolate dependencies
and test their failures. A stable key alone does not provide idempotency:
atomically enforce it with the effect, and handle duplicates at every boundary.
-->

---

# Reliability - Practices (Operations)

If you haven't run the runbook, you haven't proved it.

- **Synthetic test:** simulate a real checkout journey.
- Time a backup restore in an isolated environment.
- Rehearse **failover:** switch traffic to a healthy recovery target.
- Name the person and conditions that activate recovery.

<!--
Feed probes and synthetic journeys into a flow-level health model. Schedule
end-to-end runbook and restore exercises at a risk-appropriate cadence; quarterly
was the original example, not a universal requirement. Automate failover validation
in delivery pipelines. Turn Azure Advisor findings into owned backlog actions.
Scheduled fault injection and anomaly detection can inform bounded recovery automation.
-->

---

# Reliability - Key Metrics

| Measure | What it tells us |
|---------|------------------|
| Successful checkouts vs SLO | Are we keeping the promise? |
| Error budget consumed | How much failure can we still tolerate? |
| Recovery time and data loss | Did the drill meet RTO and RPO? |

**Use agreed workload targets, not generic percentages.**

<!--
Track detection/recovery trends, timed restore success, and failure-exercise coverage.
The former 99.9% success, 20% budget burn, 99% drill success, and quarterly Tier-0
coverage figures were example targets, not Microsoft-prescribed thresholds.
MTTR is ambiguous across teams (repair, recovery, or resolution); state the exact
start/end events rather than using it without a definition.
-->

---

# Three zones. Is that enough?

<!-- _class: field capacity-story -->
<!-- _transition: fade 650ms -->

<p class="eyebrow">Checkout / healthy compute</p>

<div class="capacity-board" data-state="healthy" role="group" aria-label="Healthy compute: three identical zones each need 70 percent of their capacity.">
<div class="flow-node" data-morph="edge"><span>Edge router</span><strong>Checkout traffic</strong><small>Health-based routing</small></div>
<div class="zone-group">
<div class="zone-card" data-morph="zone-a"><span>Zone A</span><strong>70%</strong><small>required capacity</small><div class="capacity-bar" aria-hidden="true"><i></i></div><b>Serving</b></div>
<div class="zone-card" data-morph="zone-b"><span>Zone B</span><strong>70%</strong><small>required capacity</small><div class="capacity-bar" aria-hidden="true"><i></i></div><b>Serving</b></div>
<div class="zone-card" data-morph="zone-c"><span>Zone C</span><strong>70%</strong><small>required capacity</small><div class="capacity-bar" aria-hidden="true"><i></i></div><b>Serving</b></div>
</div>
<div class="flow-node" data-morph="data"><span>Data + queue</span><strong>Separate failure modes</strong><small>Not proved by compute health</small></div>
</div>

<div class="capacity-equation"><span>Before failure</span><strong>70% per zone</strong><p>What happens to the same demand when one zone disappears?</p></div>
<p class="source-note">Illustrative model: equal zones, unchanged demand, linear sharing; compute only.</p>

<!--
Advance once after asking the room to predict the surviving load.
Each slide is a complete state. Stable view-transition names let Marp morph
the same cards without a custom runtime, timers, or hidden essential content.
Three zones each have capacity C; total demand is 3 x 0.70C = 2.10C.
This isolates stateless compute with evenly distributed, linearly scalable work.
It does not model data replication, queue semantics, retries, routing delay,
payment consistency, or other dependencies; those require their own tests.
The former architecture image remains at img/resilient.png. Its regional standby,
geo-replicated data, and DLQ ideas apply only to the failure modes they address;
a paired region or redundant compute alone is not a complete recovery design.
Source: https://learn.microsoft.com/en-us/azure/well-architected/design-guides/capacity-resilience
-->

---

# Redundancy is not surviving capacity.

<!-- _class: field capacity-story -->
<!-- _transition: fade 650ms -->

<p class="eyebrow">Checkout / one zone lost</p>

<div class="capacity-board" data-state="loss" role="group" aria-label="Zone C is unavailable. Each surviving zone needs 105 percent of its capacity, exceeding the available capacity.">
<div class="flow-node" data-morph="edge"><span>Edge router</span><strong>Same demand</strong><small>Two surviving targets</small></div>
<div class="zone-group">
<div class="zone-card" data-morph="zone-a"><span>Zone A</span><strong>105%</strong><small>required capacity</small><div class="capacity-bar" aria-hidden="true"><i></i></div><b>Over capacity</b></div>
<div class="zone-card" data-morph="zone-b"><span>Zone B</span><strong>105%</strong><small>required capacity</small><div class="capacity-bar" aria-hidden="true"><i></i></div><b>Over capacity</b></div>
<div class="zone-card unavailable" data-morph="zone-c"><span>Zone C</span><strong>Offline</strong><small>No serving capacity</small><div class="capacity-bar" aria-hidden="true"><i></i></div><b>Unavailable</b></div>
</div>
<div class="flow-node" data-morph="data"><span>Data + queue</span><strong>Separate failure modes</strong><small>Not proved by compute health</small></div>
</div>

<div class="capacity-equation"><span>After failure</span><strong>70% × 3 / 2 = 105%</strong><p>Required load exceeds each survivor's capacity by 5 percentage points.</p></div>
<p class="source-note">Demand beyond capacity, not measured processor usage above 100%. No new allocation.</p>

<!--
Demand remains 2.10C. Two survivors have 2C total capacity, so each would need
1.05C. Required utilization above 100% describes unmet demand, not a measured
CPU value above its physical limit. Routing away from the failed zone does not
create capacity; retries may make the problem worse and are excluded here.
Ask: can we allocate more during an incident? Quota is necessary but not a
guarantee of physical capacity. Do not make recovery depend on an untested scale-out.
Source: https://learn.microsoft.com/en-us/azure/well-architected/design-guides/capacity-resilience
-->

---

# Provision the headroom before the failure.

<!-- _class: field capacity-story -->
<!-- _transition: fade 650ms -->

<p class="eyebrow">Checkout / redesign, then repeat the drill</p>

<div class="capacity-board" data-state="prepared" role="group" aria-label="Alternative design, provisioned before failure: normal required load is 60 percent per larger zone. With Zone C unavailable, each survivor needs 90 percent.">
<div class="flow-node" data-morph="edge"><span>Edge router</span><strong>Same demand</strong><small>More capacity per zone</small></div>
<div class="zone-group">
<div class="zone-card" data-morph="zone-a"><span>Zone A</span><strong>90%</strong><small>required capacity</small><div class="capacity-bar" aria-hidden="true"><i></i></div><b>Within capacity</b></div>
<div class="zone-card" data-morph="zone-b"><span>Zone B</span><strong>90%</strong><small>required capacity</small><div class="capacity-bar" aria-hidden="true"><i></i></div><b>Within capacity</b></div>
<div class="zone-card unavailable" data-morph="zone-c"><span>Zone C</span><strong>Offline</strong><small>No serving capacity</small><div class="capacity-bar" aria-hidden="true"><i></i></div><b>Unavailable</b></div>
</div>
<div class="flow-node" data-morph="data"><span>Data + queue</span><strong>Separate failure modes</strong><small>Still needs recovery tests</small></div>
</div>

<div class="capacity-equation"><span>New baseline</span><strong>60% × 3 / 2 = 90%</strong><p>Headroom is spare capacity. Pay for it before failure; test the SLO.</p></div>
<p class="source-note">Alternative design, not an instantaneous recovery. 60% is illustrative, not a WAF target.</p>

<!--
This is a redesign and a new experiment, not the next instant of the incident.
Business demand is unchanged. Increase capacity in every zone from C to 7C/6
(about 16.7% more) BEFORE the failure, so 2.10C / (3 x 7C/6) = 60% normally
and 2.10C / (2 x 7C/6) = 90% after one zone fails.
The percentages use the new, larger per-zone capacity as the denominator.
This does not imply a proportional Azure bill or guarantee an SLO: latency,
throughput, data behavior, dependency quotas, routing, and cost must be measured.
Alternatives include bounded admission, degradation of noncritical flows, and
other deployment shapes; none removes the need to define the business promise.
Rewind to compare the designs. PDF, reduced-motion, and no-JS views retain all
labels, equations, and outcomes without relying on the transition.
Source: https://learn.microsoft.com/en-us/azure/well-architected/design-guides/capacity-resilience
-->

---

# Quota is permission. Capacity is supply.

<!-- _class: field -->

<p class="eyebrow">Capacity resilience / plan for the allocation, not just the limit</p>

<div class="columns decision-panels">
<div>

## Quota

How much your subscription is allowed to request.

**An approved limit is not reserved hardware.**

</div>
<div>

## Capacity

What can actually be allocated for that configuration and location.

**Scale-out can fail even with enough quota.**

</div>
</div>

<p class="takeaway">Forecast early. Validate alternatives. Plan recovery capacity.</p>
<p class="source-note"><a href="https://learn.microsoft.com/en-us/azure/well-architected/design-guides/capacity-resilience">Microsoft Learn / Capacity resilience design guide</a></p>

<!--
The September 2026 design guide distinguishes quota from physical supply.
Allocation constraints can be regional, zonal, SKU/family-specific, or related
to cluster placement and managed-service dependencies. Consider compatible
deployment shapes, zone/region options subject to residency and latency, and
capacity reservations where supported and justified. Reservations are not the
same as pricing commitments. Capacity planning is ongoing operational work.
-->

---

# Reliability - Maturity Progression

<!-- _class: field -->

<ol class="evidence-path">
<li><strong>Define</strong><span>Owned recovery targets</span></li>
<li><strong>Rehearse</strong><span>A timed restore meets them</span></li>
<li><strong>Repeat</strong><span>Regular failure exercises</span></li>
<li><strong>Automate</strong><span>Proven, monitored recovery</span></li>
<li><strong>Adapt</strong><span>New failures change the design</span></li>
</ol>

<p class="source-note">A discussion ladder—not official WAF scoring.</p>

<!--
This talk's discussion ladder, not a certification scale. Original progression:
ad hoc manual recovery; baseline failover documentation and probes; structured
runbooks/SLOs/fault injection; proactive automated failover and shared failure
libraries; adaptive self-healing and novel-failure rehearsal. Automated pipeline
tests, restore cadence, dashboards, and anomaly triage are possible accelerators.
Remove unknowns, speed detection, then widen safe automation.
-->

<!-- Risks: L1 False recoverability; L2 Late backup corruption detection; L3 Hidden SPOF; L4 Design vs reality drift; L5 Slow novel failure detection. -->

---

# Reliability - At a Glance

<!-- _class: glance -->

<div class="columns">
<div>

## Ask

When did we last restore checkout, timed end-to-end?

</div>
<div>

## Act

Run one restore drill.<br>Compare the result with RTO and RPO.

</div>
</div>

<!--
Supporting signals: critical-flow availability, error budget use, restore success.
Use health models, synthetic probes, replication, and backups where justified.
A tabletop can identify an unknown, but is not a substitute for a real restore.
-->

---

# Security Pillar

<!-- _class: lead pillar-entry -->

<div class="pillar-path" aria-label="Current pillar: Security"><span>Reliability</span><b>Security</b><span>Cost Optimization</span><span>Operational Excellence</span><span>Performance Efficiency</span></div>

> "Can it be breached — and would we see it?"

**Zero Trust:** verify explicitly, grant least privilege, and assume breach.

---

# Security - Principles

- **Threat model:** map what could be attacked and how.
- **Least privilege:** grant only the access needed, for only as long as needed.
- **Segmentation:** separate trust boundaries to limit a breach's impact.

<!--
Verify human and workload identities; encrypt data in transit and at rest according
to classification. STRIDE is one threat-model method: spoofing, tampering,
repudiation, information disclosure, denial of service, elevation of privilege.
Assign each threat a control, owner, and timeline. Prefer managed identities and
time-limited elevation over embedded secrets and permanent administrator roles.
-->

---

# Security - Practices & Patterns

**Make identity controls concrete.**

- **MFA / multifactor authentication:** verify with more than one factor.
- **PIM / Privileged Identity Management:** govern privileged access.
- **JIT / just-in-time access:** activate privilege only when needed.

Rehearse detection and containment, not just prevention.

<!--
Use Conditional Access where applicable, managed identities, network segmentation,
private endpoints, web application firewalls, and denial-of-service protection.
WAF also abbreviates web application firewall; spell it out to avoid confusion
with the Well-Architected Framework. CMK means customer-managed key; choose
key ownership against explicit requirements rather than all regulated data by default.
Defender for Cloud and Sentinel support detection and response. Rehearse tabletop,
red-team (simulated attackers), and purple-team (joint attack/defense learning) drills.
-->

---

# Security - Secure Development Lifecycle

<div class="columns">
<div>

## Before release

- Scan code and dependencies.
- Keep credentials out of source and build output.

</div>
<div>

## After release

- Patch from a maintained asset inventory.
- Test that controls detect realistic abuse.

</div>
</div>

<!--
SE:02: isolated workspaces (Dev Box/Codespaces), maintained base images, security
editor tooling, credential managers, and default-deny code. SAST is static
application security testing; DAST tests a running application. Scan supply chains.
CVE means Common Vulnerabilities and Exposures, identifiers for known vulnerabilities.
For AI, address prompt injection, content safety, and model supply-chain integrity.
AI-assisted security operations need governed permissions and containment approvals.
-->

---

# Security - Key Metrics

| Measure | Question |
|---------|----------|
| Permanent privileged access | Who can still bypass normal controls? |
| Time to detect and contain | How long can an attacker operate? |
| Critical vulnerability age | Are urgent fixes arriving in time? |

**A posture score does not prove breach detection.**

<!--
Also track MFA coverage and Secure Score findings. Former >80% score, <1-hour
detection, and <14-day critical-fix thresholds were illustrative, not WAF targets.
Define detection and containment timestamps consistently. Dwell time is how long
an attacker remains present before detection/removal; specify which end event is used.
-->

---

# Security - Architecture Example

<!-- _class: field diagram -->

<div class="diagram-asset">

![The checkout flow with caller verification, a workload trust boundary, restricted data access, and signals connected to response.](img/diagrams/checkout-security.drawio.svg)

</div>

<p class="diagram-caption"><strong>Managed identity:</strong> the service authenticates without a stored credential.</p>
<p class="takeaway">Verify each crossing. Limit access. Rehearse detection and containment.</p>

<!--
Possible services: Front Door with a web application firewall, Application Gateway,
Entra ID, private endpoints, Key Vault, Defender for Cloud, Sentinel.
Mutual TLS authenticates both ends of a connection; apply it where required.
SIEM means security information and event management; SOAR means security
orchestration, automation, and response. Select controls for each actual flow;
do not stack products or assume Conditional Access supports every workload call.
-->

---

# Security - Maturity Progression

<!-- _class: field -->

<ol class="evidence-path">
<li><strong>Protect</strong><span>Identity, secrets, and patching baselines</span></li>
<li><strong>See</strong><span>Exposure and control gaps</span></li>
<li><strong>Rehearse</strong><span>Tested threats and response</span></li>
<li><strong>Contain</strong><span>Bounded attack response</span></li>
<li><strong>Validate</strong><span>Exercises expose new gaps</span></li>
</ol>

<p class="source-note">A discussion ladder—not official WAF scoring.</p>

<!--
This is a discussion ladder, not a certification scale. Original accelerators:
MFA/Key Vault; Defender/private endpoints; threat models/Sentinel analytics;
automated response/risk-based access/PIM; continuous attack-defense exercises.
Detection capability matters more than a posture score alone. AI assistance
requires bounded permissions and validation, not assumed autonomous safety.
-->

<!-- 
Outcome: lower dwell time & blast radius with reduced analyst toil.
Risks if Ignored (by Level):
1: Credential stuffing / leaked keys / flat trust zones
2: Posture drift; Secure Score backlog rots
3: Slow breach containment, no IR muscle memory
4: Analyst fatigue / alert backlog / inconsistent response
5: Control regressions undetected; over-trust in aging controls
-->

---

# Security - At a Glance

<!-- _class: glance -->

<div class="columns">
<div>

## Ask

Which identities have permanent privileged access?

</div>
<div>

## Act

Replace one unnecessary permanent role with governed, time-limited access.

</div>
</div>

<!--
Other checks: secrets in pipelines, MFA and managed-identity coverage, critical
vulnerability age, detection time, key rotation. Preserve emergency access and
validate recovery before changing administrator roles.
-->

---

# Cost Optimization Pillar

<!-- _class: lead pillar-entry -->

<div class="pillar-path" aria-label="Current pillar: Cost Optimization"><span>Reliability</span><span>Security</span><b>Cost Optimization</b><span>Operational Excellence</span><span>Performance Efficiency</span></div>

> "What is the unit cost — and is it trending down?"

**Unit cost:** the cost of one business outcome.<br>For checkout: total workload cost per completed order.

<!-- Security, redundancy, and AI costs all belong in the workload cost model.
Track spend against delivered value, not just individual resource line items. -->

---

# Cost Optimization - Principles

- Assign an owner to the spend.
- **Elasticity:** adjust resources as demand changes.
- Remove waste without breaking the checkout promise.
- Record the cost of recovery readiness in the ADR.

<!-- Use ownership tags, budgets, business measures, and anomaly reviews.
Unmeasured cost is uncontrolled cost; optimization needs an accountable owner. -->

---

# Cost Optimization - Practices & Governance

- **Rightsizing:** match resource size to measured demand.
- Schedule idle development environments to stop.
- Review storage retention and unused resources.
- Use pricing commitments only for suitable, predictable demand.

<!--
CO:04 tags/budget alerts; CO:12 scaling and schedules; CO:05 reservations/savings
plans; CO:10 interruptible Spot work and storage lifecycle; CO:03 anomaly detection;
CO:07 AI allocation; CO:09 flow-cost analysis and caching.
Original 50/80/100% alerts and quarterly rightsizing were examples. Tags such as
environment, owner, and cost center support accountability. Not all resources
support tags; apply enforcement with supported scopes and exceptions.
-->

---

# Cost Optimization - Key Metrics

<!-- _class: field -->

<div class="unit-cost" aria-label="Cost per completed order equals full workload cost divided by completed orders.">
<strong>Cost per order</strong><span>=</span>
<div class="fraction"><span>Full workload cost</span><span>Completed orders</span></div>
</div>

<div class="diagram-key">
<p><strong>Idle spend:</strong> paying for unused resources.</p>
<p><strong>Forecast vs actual:</strong> which assumption changed?</p>
</div>

<p class="takeaway">Compare equivalent demand and service quality.</p>

<!--
Also track ownership-tag coverage, suitable commitment coverage, and anomaly
response time. Former 95%, 5%, 70%, 24-hour, and ±10% targets were illustrative.
Quarter-over-quarter unit cost can rise legitimately for improved resilience,
security, or changed demand; lower is not always better.
-->

---

# Cost Optimization - Architecture Example

<!-- _class: field diagram -->

<div class="diagram-asset">

![Attribute edge requests, compute, recovery headroom, order data, and deferred work to the full checkout cost.](img/diagrams/checkout-cost.drawio.svg)

</div>

<p class="takeaway">Tested recovery headroom is not automatically waste.</p>
<p class="source-note">Compare the full bill with completed orders. Review anomalies and unused resources together.</p>

<!--
FinOps (financial operations) brings engineering, finance, and business together
to manage technology value. Possible levers: tag policy, budget alerts, autoscale,
Spot for interruptible work, storage lifecycle, read caching, Cost Management
anomaly insights, and a monthly unit-cost review. Recovery headroom is not
automatically waste. Budget alerts do not themselves cap spending.
-->

---

# Cost Optimization Maturity Progression

<!-- _class: field -->

<ol class="evidence-path">
<li><strong>Own</strong><span>An owner for every spend area</span></li>
<li><strong>See</strong><span>Forecast and actual cost</span></li>
<li><strong>Explain</strong><span>Causes of waste and anomalies</span></li>
<li><strong>Improve</strong><span>Size against measured demand</span></li>
<li><strong>Sustain</strong><span>Review unit cost and quality</span></li>
</ol>

<p class="source-note">A discussion ladder—not official WAF scoring.</p>

<!--
Discussion ladder, not official scoring. Original accelerators: tagging policy,
cost models and cost allocation, anomaly routing, lifecycle automation, autoscale,
forecasting, AI-assisted insights. DRI means directly responsible individual.
Former numeric thresholds were examples, not requirements for reaching a level.
-->

<!-- 

Treat cost like a performance metric: observable, owned, iterated
Cost Risks if Ignored (by Level):
1: Unattributed spend growth
2: Surprise overruns / reactive cuts
3: Persistent waste in idle flows
4: Scaling costs outpace revenue
5: Overpaying for unused resilience
Aim for unit economics clarity before advanced forecasting automation.
-->

---

# Cost Optimization - At a Glance

<!-- _class: glance -->

<div class="columns">
<div>

## Ask

What does one completed order cost, including recovery readiness?

</div>
<div>

## Act

Build one unit-cost baseline.<br>Name the owner and one avoidable cost.

</div>
</div>

<!-- Review idle resources, tag coverage, and anomaly response. Storage lifecycle
and pricing commitments are levers, not a substitute for measuring delivered value. -->

---

# Operational Excellence Pillar

<!-- _class: lead pillar-entry -->

<div class="pillar-path" aria-label="Current pillar: Operational Excellence"><span>Reliability</span><span>Security</span><span>Cost Optimization</span><b>Operational Excellence</b><span>Performance Efficiency</span></div>

> "Can we change safely - and learn from every change?"

**Operational Excellence (OpEx):** the practices that keep delivery and operations safe, observable, and repeatable.

---

# Operational Excellence - Principles

- Share responsibility for building and running the workload.
- **Observability:** use telemetry to understand internal behavior.
- **Progressive delivery:** release to small groups, expand only while healthy.
- Learn from incidents without blame.

<!--
OE:01 shared ownership; OE:07 health models/SLOs/error budgets; OE:11 reversible
delivery; OE:02/05/10 standardization and automation; OE:08 structured response.
Infrastructure as code (IaC) declares infrastructure in version-controlled files.
Policy as code encodes enforceable rules. AI can assist routine work at any stage
but is not a mandatory maturity prerequisite.
-->

---

# Operational Excellence - Practices & Automation

<!-- _class: field diagram -->

<div class="diagram-asset">

![The checkout master with current and canary builds, compatible data changes, and an SLO observation gate.](img/diagrams/checkout-operations.drawio.svg)

</div>

<div class="diagram-key">
<p><strong>CI/CD:</strong> continuous integration and continuous delivery.</p>
<p><strong>Canary release:</strong> send a small share of traffic to the new version first.</p>
</div>

<!--
OE:06 secure supply chains: software bill of materials (SBOM), signing, scans,
immutable artifacts. OE:09 workload-specific test plans cover unit, integration,
end-to-end, load, and failure tests. OE:11 also includes blue-green releases
(switch between old/new environments) and deployment stamps (repeatable independent
deployment units), with observation time per wave. Production tests need feature
flags, scope limits, and kill switches. OE:07 instrument/collect/analyze/visualize;
OE:08 incident roles and blameless reviews close the ADR feedback loop.
-->

---

# Operational Excellence - AI Integration

**AI / artificial intelligence** can assist operational work.

Use AI to reduce toil, not bypass accountability.

- Draft tests and runbooks.
- Summarize related alerts for an operator.
- Keep remediation behind bounded permissions and approval.

<!--
The February 2026 OpEx maturity discussion includes AI assistance throughout.
Buy established assistance first; build custom generative AI only for justified
needs such as alert deduplication or risk suggestions. SRE means site reliability
engineering. Protect personally identifiable information, restrict accessible
data, and keep a human in the loop for consequential remediation.
-->

---

# Operational Excellence - Key Metrics

<!-- _class: field diagram -->

<div class="diagram-asset">

![Change lead time runs from commit to production. If a change fails, recovery time runs from that failure to restored service.](img/diagrams/delivery-measures.drawio.svg)

</div>

<div class="diagram-key">
<p><strong>Deployment frequency:</strong> how often changes reach production.</p>
<p><strong>Change failure rate:</strong> the share needing intervention.</p>
</div>

<p class="source-note">Measure speed and safety against your own baseline. Not every deployment fails.</p>

<!--
DORA means DevOps Research and Assessment, a delivery-performance research program.
This is a selected measurement set, not a complete current DORA taxonomy.
Former daily+, one-day, 15%, and severity-specific recovery targets were examples.
Define intervention and recovery boundaries consistently; distinguish time to
acknowledge an incident from time to restore service.
-->

---

# Release to a small cohort first.

<!-- _class: field release-story -->
<!-- _transition: fade 550ms -->

<div class="release-board" data-state="observe" role="group" aria-label="The edge routes most requests to the current version and a small cohort to the canary. Observe the checkout SLO before expanding.">
<div class="release-router"><span>Edge router</span><strong>Limit exposure</strong><small>Reversible routing</small></div>
<div class="release-current"><span>Current version</span><strong>Most requests</strong><small>Known serving path</small></div>
<div class="release-canary"><span>Canary version</span><strong>Small cohort</strong><small>New behavior under observation</small></div>
<div class="release-gate"><span>Health gate</span><strong>Observe the SLO</strong><small>Expand only while healthy</small></div>
</div>

<p class="takeaway">What should happen when the checkout health gate fails?</p>
<p class="source-note">Define observation time, rollback conditions, and the owner before release.</p>

<!--
Secure builds can include dependency scans, a software bill of materials, and
signed artifacts. Progressive rings need observation time per wave. Correlation
IDs connect the telemetry pipeline. AI-assisted alert grouping and remediation
must remain governed. PR means pull request: a proposed change reviewed before merge.
The decision is Review -> build and test -> canary -> observe -> expand only
while healthy. Advance after asking the audience what to do when health worsens.
These are complete presenter-controlled states, not timed automation.
No cohort percentage is a universal recommendation.
-->

---

# Stop expansion. Restore the known path.

<!-- _class: field release-story -->
<!-- _transition: fade 550ms -->

<div class="release-board" data-state="rollback" role="group" aria-label="The checkout health gate failed. Stop new canary traffic, restore the current version's serving path, and verify recovery.">
<div class="release-router"><span>Edge router</span><strong>Stop expansion</strong><small>Restore the known route</small></div>
<div class="release-current"><span>Current version</span><strong>Serving path</strong><small>Verify recovery under load</small></div>
<div class="release-canary"><span>Canary version</span><strong>No new traffic</strong><small>Investigate the failed change</small></div>
<div class="release-gate"><span>Health gate failed</span><strong>Recheck the SLO</strong><small>Recovery is not assumed</small></div>
</div>

<p class="takeaway">Rehearse rollback—including data compatibility—before the release.</p>
<p class="source-note">Carry the incident evidence into tests, the runbook, and the ADR.</p>

<!--
Rollback is conditional on compatible data, side effects, dependencies, and
capacity. Draining traffic does not undo already accepted work or database changes.
Keep durable order state and queued processing correct. Recover first, then
investigate; a fixed change needs a fresh test and canary, not automatic promotion.
The board's stable objects morph on presenter navigation; reduced motion and
PDF retain both complete states.
Source: https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/safe-deployments
-->

---

# Operational Excellence - Maturity Progression

<!-- _class: field -->

<ol class="evidence-path">
<li><strong>Foundation</strong><span>Ownership and version control</span></li>
<li><strong>Standardize</strong><span>Repeatable builds and roles</span></li>
<li><strong>Prepare</strong><span>Health and recovery gates</span></li>
<li><strong>Manage</strong><span>Safe releases and incident learning</span></li>
<li><strong>Adapt</strong><span>Automate and review routine work</span></li>
</ol>

<p class="source-note">Short labels for the WAF Operational Excellence maturity model.</p>

<!--
Short labels summarize the WAF OpEx model: DevOps Foundation, Process
Standardization, Release Readiness, Change Management, Future Adaptability.
Original AI examples progress through task assistance, recommendations, artifact
generation, policy validation, and optimization. These are optional aids to
tested practices, not proof of maturity or a requirement to build autonomous agents.
-->

<!-- Operational Excellence Risks if Ignored (by Level):
1: Tribal ops knowledge silos
2: Inconsistent release quality
3: Alert noise & unclear severity
4: Repeating incidents / slow MTTR gains
5: Innovation slowdown / shadow ops
Reliability & velocity converge when feedback loops are automated and trusted.
Level names align with WAF OpEx maturity model (Feb 2026 update).
-->

---

# Operational Excellence - At a Glance

<!-- _class: glance -->

<div class="columns">
<div>

## Ask

Can we detect and reverse a bad checkout release?

</div>
<div>

## Act

Rehearse one rollback.<br>Verify the health signal and the owner.

</div>
</div>

<!-- Track deployment frequency, change lead time, change failure rate, recovery,
automation success, and incident-to-ADR feedback. Telemetry without actionable
health targets cannot safely gate a release. -->

---

# Performance Efficiency Pillar

<!-- _class: lead pillar-entry -->

<div class="pillar-path" aria-label="Current pillar: Performance Efficiency"><span>Reliability</span><span>Security</span><span>Cost Optimization</span><span>Operational Excellence</span><b>Performance Efficiency</b></div>

> "Will checkout stay fast when demand rises?"

**P99 latency:** 99% of measured requests finish within this time.<br>The slowest 1% take longer.

<!-- P50 is the median; P95 covers 95% of measured requests. Tail latency describes
the slower end of the distribution. State the flow, sample, and measurement window.
An average can conceal slow requests. -->

---

# Performance Efficiency - Principles

- Agree response-time and **throughput** targets: completed work per second.
- Test scale before the peak; quota is not capacity.
- Measure the slowest requests, not just the average.
- Change one bottleneck, then repeat the measurement.

<!-- PE:01/09 per-flow targets; PE:02 validated capacity; PE:05/08 partitioning,
caching and profiling; PE:04 baseline-driven improvement. A hot path is a
frequently executed or performance-critical path. -->

---

# Performance Efficiency - Practices & Patterns

- Test with realistic checkout demand and data.
- **Cache:** reuse a stored result instead of recalculating it.
- **Partition:** split data or work into independently handled groups.
- Block measured performance regressions before release.

<!--
PE:06 load/capacity tests; PE:05/08 data tuning; PE:09 tail latency; PE:12 gates.
Scale on queue depth, requests per second, and latency as appropriate, not CPU
alone. Possible cache layers: Front Door/content delivery network and Redis.
Choose partitioning, indexes, and scale units against the actual bottleneck;
do not partition early merely because it appears in a pattern catalog.
-->

---

# Performance Efficiency - Emerging Practices

- **Predictive scaling:** forecast demand and provision before it arrives.
- **Adaptive concurrency:** adjust how much work runs at once under pressure.
- **Throttling:** limit admitted requests to protect the service.

**First establish a repeatable baseline.**

<!--
Evaluate controls against real behavior and bounded minimum/maximum capacity.
KEDA scales on events; scaling is not itself adaptive concurrency or throttling.
AI workloads need token throughput, prompt budgets, cache behavior, and provisioned
throughput sizing. HPC needs placement-aware compute and low-latency interconnects.
Source: https://learn.microsoft.com/en-us/azure/well-architected/design-guides/throttling
-->

---

# Performance Efficiency - Key Metrics

<!-- _class: field -->

<div class="native-visual" data-waf-motion="latency" role="group" aria-label="Latency distribution with percentile emphasis on slide entry">
<svg viewBox="0 0 1120 330" role="img" aria-labelledby="latency-title latency-desc">
<title id="latency-title">The slowest requests disappear inside an average</title>
<desc id="latency-desc">Synthetic sample: 60 requests at 100 milliseconds, 25 at 200, 10 at 300, 4 at 600, and 1 at 1200. P95 is 300 milliseconds and P99 is 600 milliseconds. The slowest one percent takes 1200 milliseconds. These are not measurements or targets.</desc>
<path class="visual-rail" d="M30 240 H1050"/>
<rect class="visual-tail" x="645" y="175" width="390" height="150" rx="4" data-motion-ink="emphasis" data-motion-order="2"/>
<rect class="visual-bar" x="70" y="60" width="120" height="180"/>
<rect class="visual-bar" x="270" y="165" width="120" height="75"/>
<rect class="visual-bar" x="470" y="210" width="120" height="30"/>
<rect class="visual-bar" x="670" y="228" width="120" height="12"/>
<rect class="visual-warning" x="870" y="237" width="120" height="3"/>
<text x="130" y="45" text-anchor="middle">60 requests</text>
<text x="330" y="150" text-anchor="middle">25</text>
<text x="530" y="195" text-anchor="middle">10</text>
<text x="730" y="213" text-anchor="middle">4</text>
<text x="930" y="222" text-anchor="middle">1</text>
<text x="130" y="285" text-anchor="middle">100 ms</text>
<text x="330" y="285" text-anchor="middle">200 ms</text>
<text x="530" y="285" text-anchor="middle">300 ms</text>
<text x="730" y="285" text-anchor="middle">600 ms</text>
<text x="930" y="285" text-anchor="middle">1200 ms</text>
<text class="visual-label" x="530" y="320" text-anchor="middle">P95</text>
<text class="visual-label" x="730" y="320" text-anchor="middle">P99</text>
<text class="visual-detail" x="930" y="315" text-anchor="middle">Slowest 1%</text>
<path class="visual-ink" pathLength="1" data-motion-ink="draw" data-motion-order="0" d="M470 294 H590"/>
<path class="visual-ink" pathLength="1" data-motion-ink="draw" data-motion-order="1" d="M670 294 H790"/>
</svg>
<span class="motion-error" data-motion-status role="status" aria-live="polite" hidden></span>
</div>

<p class="takeaway">P95 and P99 expose the slower requests an average can hide.</p>
<p class="source-note">100 synthetic requests—not measurements or WAF targets. Bars show counts at each exact latency.</p>

<!--
Former P99 ≤3×P50, >85% cache hits, and <5-minute scaling thresholds were examples,
not WAF requirements. Track performance-test results for critical flows and
AI token throughput where applicable. TTL is time to live: how long a cached
entry remains valid. Provisioned throughput units (PTUs) are a service-specific
capacity measure, not a universal AI performance target.
Other measures remain necessary: checkout throughput is completed orders per
second; cache hit ratio is the share of lookups served from the cache; scaling
response time runs from demand signal to usable capacity.
The diagram's synthetic sample contains 60 requests at 100 ms, 25 at 200 ms,
10 at 300 ms, 4 at 600 ms, and 1 at 1200 ms. Counts sum to 100.
Nearest-rank P95 is the 95th sorted request (300 ms); P99 is the 99th (600 ms).
The bars are exact categories, not equal-width numeric latency bins. Compare
real performance against the agreed load and SLO, not these illustrative values.
The native chart keeps all values visible. Slide entry underlines P95,
then P99, and brings attention to the tail; it does not animate or invent data.
-->

---

# What is checkout waiting for?

<!-- _class: field diagram performance-story -->
<!-- _transition: fade 550ms -->

<div class="diagram-asset">

![Baseline design: the order is durable, but checkout still waits synchronously for a receipt email before acknowledging.](img/diagrams/checkout-waiting.drawio.svg)

</div>

<p class="takeaway">Should a receipt email delay acknowledgement of a durable order?</p>
<p class="source-note">Illustrative critical path: work that must finish before the response.</p>

<!-- Pause before changing the design. This illustrative baseline makes receipt
email a synchronous dependency even though the business can accept later delivery.
Agree that requirement first; do not defer work that must precede acknowledgement.
-->

---

# Move noncritical work off the path.

<!-- _class: field diagram performance-story -->
<!-- _transition: fade 550ms -->

<div class="diagram-asset">

![Alternative design: persist required order state and durable intent for deferred work before acknowledging; process receipt email later through the queue.](img/diagrams/checkout-performance.drawio.svg)

</div>

<p class="takeaway">Persist required state first. Defer the email. Repeat the same load test.</p>
<p class="source-note">A design hypothesis—not a measured speedup. Test peak load and zone loss together.</p>

<!--
Cache safe reusable reads, move noncritical work to the queue, tune the measured
data bottleneck, and test peak load and zone loss together.
Possible implementation: Front Door edge cache, stateless application workers,
bounded background processing, Redis, partitioned data, and performance gates.
Do not cache sensitive or changing results without correct isolation/invalidation.
Queue offload is asynchronous (work completes later); required durable order
state still precedes acknowledgement. Predictive scaling is optional and needs evidence.
Persist the intent to send the email with the order, then relay it to the queue,
or use another validated consistency mechanism. A database write followed by an
uncoordinated send can lose work. Consumers need idempotency, retries, and a
recovery path. The diagram does not claim that a queue creates atomicity.
Source: https://learn.microsoft.com/en-us/azure/architecture/patterns/async-request-reply
-->

---

# Performance Efficiency Maturity Progression

<!-- _class: field -->

<ol class="evidence-path">
<li><strong>Target</strong><span>Agreed limits for each flow</span></li>
<li><strong>Baseline</strong><span>Repeatable load measurements</span></li>
<li><strong>Respond</strong><span>Scale on relevant demand signals</span></li>
<li><strong>Gate</strong><span>Block known regressions</span></li>
<li><strong>Tune</strong><span>Test the next bottleneck</span></li>
</ol>

<p class="source-note">A discussion ladder—not official WAF scoring.</p>

<!--
Discussion ladder, not certification scoring. Original accelerators: target
worksheet, profiling, real user monitoring (RUM), load-test gates, data tuning,
predictive/adaptive controls and model-drift review.
PACELC describes distributed-data tradeoffs: during a partition, availability
versus consistency; otherwise, latency versus consistency. Keep this specialist
detail in notes unless the audience needs that specific design decision.
-->

<!-- 
Outcome: Sustained latency control & scalable performance via automated, hypothesis-driven tuning loops.
Performance Efficiency Risks if Ignored (by Level):
1: Over/under provision early tiers
2: Blind to regressions / tail spikes
3: Chasing symptoms not causes
4: Latency creep enters production
5: Plateau after easy wins
-->

---

# Performance Efficiency - At a Glance

<!-- _class: glance -->

<div class="columns">
<div>

## Ask

What is checkout's P99 response time at the agreed peak?

</div>
<div>

## Act

Run one repeatable load test.<br>Name the slowest part of the flow.

</div>
</div>

<!-- Supporting measures: percentile response times, cache hits, scale reaction,
and AI throughput where relevant. A profiling span represents one operation
within a trace. Repeat the same load before comparing changes. -->

---

# Trade-Offs

<!-- _class: lead -->

> Every pillar pulls. Architecture is choosing **which way to lean**, on purpose.

The next slides surface the shared levers, the recurring tensions, and four scenarios where the "right" answer depends on context, not the framework.

---

# Cross-Pillar Shared Levers

| Investment | Shared benefit |
|------------|----------------|
| Health-based routing | Faster recovery and better response times |
| Least privilege | Safer access and clearer operations |
| Observability | Evidence for recovery, performance, and cost |
| Tested automation | Consistent controls and less manual work |

<!-- Autoscale and simpler architecture can help cost, performance, and reliability
when usable capacity is validated. Seek multi-pillar benefit, but do not require
every investment to advance two pillars: necessary controls may have real costs. -->

<!-- Previous bullet list version retained for reference:
Global edge + health routing; Strong identity + least privilege; Observability spine (logs, metrics, traces); Autoscale + lightweight architecture; Policy & automation as guardrails. Guiding Principle: One design decision, multi-pillar benefit. -->

---

<!-- Original trade-offs block preserved for rollback:
# Trade-Offs (empty slide)
# Key Well-Architected Framework Trade-Offs (two-column layout: Performance vs Security, Reliability vs Cost)
-- End original block -->

# Trade-Offs Overview

| Tension | Question to resolve |
|---------|---------------------|
| Reliability vs cost | What recovery readiness can we justify? |
| Security vs performance | How do required controls affect response time? |
| Delivery speed vs stability | How do we release safely and reverse failure? |
| Cost vs performance | What headroom does the tested peak need? |

<!-- Original friction signals: standby cost, inspection latency, change failures,
reactive scaling/throttling, and privilege-elevation toil. Possible responses:
criticality-based recovery, measured inspection, progressive delivery, tested
scaling, and governed just-in-time access. Surface, record, measure, recalibrate. -->

---

# <!-- fit --> Unstated trade-offs become accidental architecture

<!-- _class: lead -->

---

# Make the tradeoff testable

**Checkout example: add recovery headroom.**

| Benefit | Cost | Evidence |
|---------|------|----------|
| Survive a zone loss at peak | More provisioned capacity | A zone-loss drill meets the SLO |

What would make this decision worth revisiting?

<!--
Other original examples: regional redundancy versus cost; deeper security
inspection versus latency; underprovisioning versus reliability/performance;
oversized resources versus cost; rapid delivery versus failure risk.
Mitigations include criticality-based recovery, measured inspection, load-tested
capacity, rightsizing, secure builds, and progressive delivery.
Source: https://learn.microsoft.com/en-us/azure/well-architected/reliability/tradeoffs
-->

---

# Pillar Interactions & Decision Anchors

<div class="columns">
<div>

## Operational Excellence is the Carrier

Safe releases put improvements into production.

Observability shows whether they worked.

</div>
<div>

## Decision Anchors

Name the non-negotiable requirement.

Link the ADR to a measurable outcome.

</div>
</div>

<!-- Operational automation turns policy into repeatable behavior. Begin with
business outcomes and critical-flow SLOs; avoid treating entire pillars as
optional when prioritizing one requirement. Review decisions as evidence changes. -->

---

# Continuous Improvement & Pillar Maturity

| Level | Trait | Focus |
|-------|-------|-------|
| 1 Ad Hoc | Reactive, inconsistent | Baseline inventory & metrics |
| 2 Emerging | Initial standards | Define targets and controls |
| 3 Defined | Repeatable practice | Close feedback loops |
| 4 Managed | Measured improvement | Tune cost and performance |
| 5 Optimizing | Continuous learning | Test new assumptions |

Monthly drift scan → Quarterly deep review → Annual strategic recalibration.

<!-- A discussion cadence and ladder, not official WAF scoring or mandatory
review intervals. Adapt cadence to workload change and risk. -->

---

# Scenario-Based Trade-Off Discussions

<!-- _class: lead pillar-entry -->
<!-- _paginate: false -->

> Choose a candidate. Name the compromise. Ask what is missing.

One scenario at a time.<br>Consequences follow your choice—not an answer key.

---

# Scenario 1: Protect patient records

<!-- _class: field scenario -->

<p class="eyebrow">Scenario 1 / choose an option</p>

Protect patient data. Keep essential care working during outages.

<div class="choice-grid">
<div><span>A / Online only</span><h2>One live record</h2><p>Require connectivity for reads and updates.</p></div>
<div><span>B / Read-only copy</span><h2>Keep reading</h2><p>Protect local copies; pause offline updates.</p></div>
<div><span>C / Offline updates</span><h2>Keep working</h2><p>Save changes locally; reconcile after reconnecting.</p></div>
<div><span>D / Limited fallback</span><h2>Essential care only</h2><p>Use approved downtime steps; reconcile later.</p></div>
</div>

<p class="takeaway">What must stay available? How stale can data be?</p>

<!--
PHI is a legal term in the US HIPAA context; use jurisdiction-specific definitions
and requirements for an actual deployment. Original audience options ranked the
pillars, preferring security/reliability before performance/cost. Replace a
universal ordering with explicit confidentiality, access, audit, retention, and
clinical availability requirements. Establish baseline controls early; no pillar
is optional. Discuss identity, encryption, logging, and recovery before tuning.
PHI means protected health information: identifiable health data subject to
applicable privacy rules. Use "patient data" on screen to avoid specialist jargon.
Pause for A/B/C/D and a reason before revealing consequences. These are access
patterns, not complete architectures; combine them only with explicit boundaries.
All options require appropriate identity, authorization, encryption, audit,
retention, and jurisdiction-specific controls. A local copy is not a backup.
The fallback must be approved by clinical and privacy stakeholders, not an
improvised bypass of access controls. Establish clinical safety and recovery
requirements before choosing a pattern.
-->

---

# Patient records: consequences

<!-- _class: field scenario -->

<p class="eyebrow">Scenario 1 / reveal the consequences</p>

<div class="decision-record">
<div><span>A / Online only</span><p>Fewer copies to govern. Connectivity loss can block care workflows.</p></div>
<div><span>B / Read-only copy</span><p>Reads can continue. Copies become stale and need protection and expiry.</p></div>
<div><span>C / Offline updates</span><p>Work can continue. Conflicting edits and lost devices become design risks.</p></div>
<div><span>D / Limited fallback</span><p>Less offline software to build. Manual handoffs can delay or lose information.</p></div>
</div>

<p class="takeaway">Rehearse safe care, access controls, and record reconciliation—not just uptime.</p>

<!--
These are conditional tradeoffs, not a clinical recommendation. Validate what
data each role needs, acceptable staleness, copy revocation/expiry, audit capture,
device management, and conflict resolution. A downtime workflow may be paper
or a separately approved system; it still needs controlled access, secure handling,
training, and later reconciliation. Do not equate application availability with
clinical safety. Test the chosen pattern with authorized clinical stakeholders.
-->

---

# Scenario 2: Handle a retail peak

<!-- _class: field diagram scenario -->

<div class="diagram-asset">

![Four equally weighted choices: one zonal region, warm standby, active-active regions, or a pilot light with only essentials running.](img/diagrams/retail-topologies.drawio.svg)

</div>

<p class="takeaway">Choose a candidate—or name the missing requirement first.</p>
<p class="source-note">10x demand forecast; limited rehearsal. Pilot light activates the rest during recovery.</p>

<!--
Pause here. Ask the audience to choose A/B/C/D or explain what is missing.
Do not advance until they have offered a reason. The following slides contain
consequences and additional assumptions, so the reveal follows presenter navigation.
10x is an illustrative business forecast, not a measured load-test result.
Missing requirements include per-flow SLOs, RTO/RPO, data consistency, dependency
recovery, traffic geography, capacity readiness, and the team's operating capacity.
The earlier version preselected B and conflated serverless with no planning.
Serverless is a compute model, not a regional recovery topology; any option can
use it where appropriate. A 10x forecast alone cannot select a DR architecture.
Warm standby keeps a secondary ready to take over; active-active serves live
traffic in both regions. Pilot light runs essentials and activates the rest during
recovery. Lines are conceptual relationships, not a complete replication design.
Checkout continuity and cost both matter; neither dictates a topology alone.
-->

---

# Retail peak: consequences

<!-- _class: field scenario -->

<p class="eyebrow">Scenario 2 / reveal the consequences</p>

<div class="decision-record">
<div><span>A / One region</span><p>Less regional coordination. A regional outage still needs an acceptable recovery path.</p></div>
<div><span>B / Warm standby</span><p>Maintain recovery readiness. Prove data recovery, routing, and surviving capacity.</p></div>
<div><span>C / Active-active</span><p>Both regions serve. Handle consistency, dependency failures, and operational complexity.</p></div>
<div><span>D / Pilot light</span><p>Less running standby compute. Recovery may depend on allocation and longer activation.</p></div>
</div>

<p class="takeaway">Which compromise can the business actually accept?</p>

<!--
These are qualitative tradeoffs, not cost rankings or guarantees.
Warm standby, active-active, and pilot light have different readiness and recovery
assumptions. A running secondary region does not prove failover works, and its
capacity must support the required recovery load. Active-active does not remove
the need for fault isolation, data recovery, or tests. Pilot light may need new
compute allocation during recovery, linking back to quota versus capacity.
Source: https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery
-->

---

# Warm standby is a candidate, not an answer key.

<!-- _class: field scenario -->

<p class="eyebrow">Retail decision / add the assumptions, then validate</p>

<div class="columns decision-panels">
<div>

## Suppose we agree

- A bounded regional recovery window is acceptable.
- The team can fund and operate a standby.

</div>
<div>

## Before accepting B

- Test RTO/RPO, data, and routing.
- Prove 10x peak and recovery capacity.

</div>
</div>

<p class="takeaway">Record the tradeoff in an ADR. Change the choice if the evidence fails.</p>

<!--
These are new hypothetical constraints for the discussion, not facts about a
customer deployment or an official WAF recommendation for all retail systems.
Suppose one primary market serves most traffic; validate dependencies as well
as data and routing during the drill.
B is a candidate under these assumptions, not automatically the lowest-cost or
best design. Start by agreeing numerical targets with stakeholders, then rehearse
the failure and recovery. A region, SKU, or data-store dependency can invalidate
the proposal. A and D remain candidates if their recovery behavior meets the
business requirements; C may fit global serving or stricter recovery needs if
the team can justify and operate its added complexity.
Load/chaos rehearsal, autoscale thresholds, error budgets, and cost evidence
inform the decision. Do not deploy predictive controls merely because demand
is forecast to increase; establish a repeatable baseline first.
-->

---

# Scenario 3: Modernize a nightly batch

<!-- _class: field scenario -->

<p class="eyebrow">Scenario 3 / choose an option</p>

The nightly job needs faster results. This quarter's refactor budget is limited.

<div class="choice-grid">
<div><span>A / Move unchanged</span><h2>Change the location</h2><p>Run the same application on cloud machines.</p></div>
<div><span>B / Replatform</span><h2>Change the hosting</h2><p>Keep the application; adopt managed services.</p></div>
<div><span>C / Targeted refactor</span><h2>Change the bottleneck</h2><p>Rewrite only the slowest measured stage.</p></div>
<div><span>D / Rebuild</span><h2>Change the design</h2><p>Replace the batch application end to end.</p></div>
</div>

<p class="takeaway">Which change can meet the deadline within the available budget?</p>

<!--
Original choices: lift-and-shift virtual machines; full microservices/events;
managed-service replatforming; full rebuild with AI/machine learning.
Replatforming is a candidate when compatible and measurable, not an automatic
answer. Moving unchanged may meet immediate needs; rebuilding may be justified
by actual constraints. Assess the bottleneck, managed database/queue/scheduler
fit, migration risk, and a baseline before decomposing hotspots.
Pause for a choice before revealing consequences. Establish the completion
deadline, input size, current duration, cost per run, and recovery behavior.
Managed services reduce selected operating tasks, not all operational ownership.
-->

<!-- Facilitator Notes: Map quick wins: managed DB, queue, scheduler; carve out hotspots post replatform KPI baseline. -->

---

# Nightly batch: consequences

<!-- _class: field scenario -->

<p class="eyebrow">Scenario 3 / reveal the consequences</p>

<div class="decision-record">
<div><span>A / Move unchanged</span><p>Less code change. The same bottleneck may remain—and cost more to run.</p></div>
<div><span>B / Replatform</span><p>Less infrastructure upkeep. Service limits and compatibility may require changes.</p></div>
<div><span>C / Targeted refactor</span><p>Focused effort. A wrong diagnosis buys little; integration still needs testing.</p></div>
<div><span>D / Rebuild</span><p>Freedom to redesign. More delivery risk and parallel running before replacement.</p></div>
</div>

<p class="takeaway">Compare completion time, cost per run, and recovery using the same input.</p>

<!--
No option guarantees a faster batch or a lower bill. Profile CPU, storage,
network, locking, and dependency waits before committing. A cloud move may be
sufficient if measured capacity meets the deadline within budget.
For managed services, test quotas, scheduling, data movement, and supported APIs.
For a refactor or rebuild, compare output correctness as well as elapsed time;
rehearse restart, duplicate processing, partial failures, rollback, and cutover.
Replatforming is a candidate when evidence supports it, not an answer key.
-->

---

# Scenario 4: Early-Stage Social App

<!-- _class: field scenario -->

<p class="eyebrow">Scenario 4 / choose an option</p>

A young product needs feedback, limited spend, and essential protections.

<div class="choice-grid">
<div><span>A / Invite-only pilot</span><h2>Start small</h2><p>Limit users and features; use managed hosting.</p></div>
<div><span>B / Public, one region</span><h2>Test wider demand</h2><p>Open sign-ups; use managed hosting and usage limits.</p></div>
<div><span>C / Own the platform</span><h2>Build custom operations</h2><p>Run the infrastructure yourselves.</p></div>
<div><span>D / Multiple regions</span><h2>Serve globally now</h2><p>Distribute application and data from launch.</p></div>
</div>

<p class="takeaway">What is the smallest secure launch that tests demand?</p>

<!-- Optimize for validated learning with baseline identity, data protection,
dependency hygiene, and observability in place. Incremental hardening does not
mean delaying essential security. B is a candidate if it meets those requirements. -->

<!-- Original options contrasted broad up-front controls, secure MVP, immediate
multi-region, and heavy automation. Choose proportionate controls based on data,
users, and obligations. Do not treat compliance or essential security as optional
because the company is early-stage. -->

<!-- Facilitator Notes: Introduce maturity runway: baseline hygiene → observability → scaling → advanced security & multi-region. -->

<!-- MVP means minimum viable product: the smallest product that tests a useful
business hypothesis. The expanded question avoids needing the acronym on screen.
Pause for a choice before revealing consequences. All options require baseline
identity, data protection, abuse prevention, dependency hygiene, and observability.
An invite-only pilot limits exposure; it does not waive security or privacy duties.
Decide audience geography, data handling, spend limits, and operating ownership.
-->

---

# Social app: consequences

<!-- _class: field scenario -->

<p class="eyebrow">Scenario 4 / reveal the consequences</p>

<div class="decision-record">
<div><span>A / Invite-only pilot</span><p>Smaller exposure and spend. Feedback may not represent the wider market.</p></div>
<div><span>B / Public, one region</span><p>Broader learning. Abuse and spend can grow; a regional outage affects everyone.</p></div>
<div><span>C / Own the platform</span><p>More infrastructure control. Patching and on-call work compete with product learning.</p></div>
<div><span>D / Multiple regions</span><p>Potentially better reach and resilience. Data coordination and operating costs grow.</p></div>
</div>

<p class="takeaway">Expand when demand, geography, or recovery needs justify the added complexity.</p>

<!--
These choices describe launch scope and operating models, not mutually exclusive
features forever. Managed hosting still needs application security, monitoring,
incident ownership, and cost controls. Multiple regions do not automatically
provide working failover; test routing, data recovery, and dependency behavior.
Choose measurable learning goals and a reassessment trigger before launch.
Retain proportionate, required controls whichever scope is chosen.
-->

---

# Well-Architected Framework Service Guides

**A decision-making tool, not a configuration manual.**

- Review a candidate service across all five pillars.
- Identify the features that affect the workload's requirements.
- Test the assumptions before adopting the service.

<!--
Pair service guides with Azure Advisor findings and a Well-Architected Review.
March 2026 examples included SQL Managed Instance, MySQL flexible server,
Container Apps, Event Grid, Event Hubs, Service Bus, Blob, Databricks, Virtual WAN.
Consult the current guide for each service rather than treating a dated list as
an exhaustive or permanently current feature guarantee.
-->

---

# Well-Architected Workloads

A workload is bigger than its application code.

- Map data, dependencies, and supporting services.
- Name owners for the flow and shared controls.
- Keep requirements, budget, and ADRs current.

<!-- The workload record can include user/agent personas, technical debt, business
indicators, and assessment results. Balance functional behavior with quality
requirements; include AI models when they participate in the business outcome.
Clarify responsibilities between workload teams and centralized platform teams. -->

---

# Well-Architected Workloads Examples

<!-- _class: field -->

<div class="columns">
<div>

## Match the workload

AI, analytics, and mission-critical systems have specialist guidance.

**SaaS:** software as a service.<br>**HPC:** high-performance computing.

</div>
<div>

## Apply a cross-cutting lens

Sustainability guidance works through the five pillars—not as a sixth pillar.

</div>
</div>

<!--
Examples highlighted on the current WAF hub:
https://learn.microsoft.com/en-us/azure/well-architected/
https://learn.microsoft.com/en-us/azure/well-architected/sustainability/
The preceding list also included Azure Virtual Desktop, Azure VMware Solution,
Oracle, and SAP; consult the workload index for guidance relevant to the actual
scenario rather than treating the hub's featured cards as an exhaustive catalog.
-->

---

# What To Do Monday

One concrete action per pillar — pick **one row**, land it this week, bring back evidence.

| Pillar | This week's move |
|--------|------------------|
| Reliability | Run a **timed** restore drill on your #1 critical flow |
| Security | Review one permanent privileged role |
| Cost Optimization | Baseline cost per completed order |
| Operational Excellence | Rehearse one health-gated rollback |
| Performance Efficiency | Measure checkout P99 at peak |

<!-- Supporting actions: governed PIM/JIT elevation; supported ownership tags and
idle reports; SLO/error-budget alerts delivered to the operational team;
profiling the slowest request. Protect emergency access when changing roles.
One ADR, one drill, one baseline at a time. -->

---

<!-- _paginate: false -->
<!-- _class: lead -->

# Questions & tradeoffs

Which assumption would you test first in your workload?

<!-- The original Q&A backdrop (./img/questions.jpg) is retained as an asset.
Use the shared blueprint theme here so the closing discussion stays consistent. -->

---

<!-- _class: resources -->

<div class="columns">
<div>

## Resources

- [Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/)
- [What's new in the WAF](https://learn.microsoft.com/en-us/azure/well-architected/whats-new)
- [Azure Advisor](https://learn.microsoft.com/en-us/azure/advisor/advisor-overview)  
- [Azure Architecture Center](https://learn.microsoft.com/en-us/azure/architecture/browse/)
- [Well-Architected Review Assessment Tool](https://aka.ms/waf-assessment)
- [Capacity resilience design guide](https://learn.microsoft.com/en-us/azure/well-architected/design-guides/capacity-resilience)

</div>
<div>

## Chris Ayers

Microsoft

[chris-ayers.com](https://chris-ayers.com/)

[GitHub / Codebytes](https://github.com/codebytes)

[Bluesky / @chris-ayers.com](https://bsky.app/profile/chris-ayers.com)

</div>
</div>

<!--
Additional resources:
Full contact details are on the opening bio slide and in README.md.
Legacy contact: Twitter https://twitter.com/Chris_L_Ayers.
https://learn.microsoft.com/en-us/training/paths/azure-well-architected-framework/
https://learn.microsoft.com/en-us/azure/cost-management-billing/
https://learn.microsoft.com/en-us/azure/advisor/advisor-score
https://learn.microsoft.com/en-us/azure/well-architected/design-guides/throttling
https://learn.microsoft.com/en-us/azure/well-architected/design-guides/testing
https://learn.microsoft.com/en-us/azure/well-architected/design
All new visuals are authored slide states; no runtime diagram CDN is required.
-->

---

<!-- _class: lead -->
<!-- _paginate: false -->
<!-- _footer: "" -->
<!-- _header: "" -->

![height:540px](./img/session-review-qr.png "SpreaView: scan the QR code to review this session")

<!-- Invite the audience to scan the supplied SpreaView QR code and review
The Well-Architected Architect. Leave this slide visible during final feedback. -->