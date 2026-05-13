---
marp: true
theme: custom-techorama
footer: 'Chris Ayers | chris-ayers.com | Principal SWE, Microsoft'
paginate: true
---

<!-- _paginate: false -->

<div class="columns">

<div>

# The Well-Architected Architect

## Modernizing Cloud Excellence

## Chris Ayers

</div>
<div>

![Architect figure in cape, decorative title artwork](img/architect.png)

</div>
</div>

---

![bg left:40% Portrait of Chris Ayers](./img/portrait.png)

## Chris Ayers

_Principal Software Engineer_
_Azure CXP AzRel_
_Microsoft_

<i class="fa-brands fa-bluesky"></i> BlueSky: [@chris-ayers.com](https://bsky.app/profile/chris-ayers.com)  
<i class="fa-brands fa-linkedin"></i> LinkedIn: - [chris\-l\-ayers](https://linkedin.com/in/chris-l-ayers/)  
<i class="fa fa-window-maximize"></i> Blog: [https://chris-ayers\.com/](https://chris-ayers.com/)  
<i class="fa-brands fa-github"></i> GitHub: [Codebytes](https://github.com/codebytes)  
<i class="fa-brands fa-mastodon"></i> Mastodon: [@Chrisayers@hachyderm.io](https://hachyderm.io/@Chrisayers)
~~<i class="fa-brands fa-twitter"></i> Twitter: [@Chris_L_Ayers](https://twitter.com/Chris_L_Ayers)~~  

---

# Solution Architecture Fundamentals

## 7 Principles for Cloud Excellence

<div class="columns">
<div>

### 🎯 Strategic

1. **Decision Framework**
2. **Design Patterns**
3. **Future Thinking**

> "Architecture is a team sport played with strategic thinking"

</div>
<div>

### 🛠️ Operational

4. **Supportability**
5. **Continuous Learning**

### 🤝 Collaborative

6. **Team Success**
7. **Methodical Approach**

</div>
</div>

---

# Architecture Fundamentals - Core Role Focus

Architecture = an intentional decision system, not a diagram.

**Your 2026 deliverables** (per [WAF architect-role/fundamentals](https://learn.microsoft.com/en-us/azure/well-architected/architect-role/fundamentals)):

- **Business-aligned strategy** → design specification + diagrams
- **ADR log** for every architecturally significant choice (incl. rejected options)
- **DR plan + security/compliance affordances** baked in early, not retrofitted
- **PoCs** that retire your riskiest assumptions before code lands

**Superpower:** Multi-perspective experience (build → run → secure → recover).

> Ongoing decisions, not a static diagram. Reversible first; one-way doors named.

---

# Architecture Fundamentals - Decision Framework

**Architecture = an intentional decision system, not a diagram.**

5-step loop: Identify → Analyze → Decide → Implement → Learn.

## Keys

- Surface decisions **in the backlog**, before code commits
- Classify **one-way doors** (hard to reverse) vs **two-way doors** (easy to undo)
- Capture rationale, alternatives & trade-offs in an **ADR**
- Re-open after incidents, drift, or KPI shifts

<!-- _footer: "Under uncertainty: prefer reversible doors and small bets you can instrument." -->

<!-- Pair with the WAF "Align technical strategy with business requirements" 5-step process on the next slide. The decision framework is HOW; business alignment is WHY. -->


---

# Architecture Fundamentals - Business Alignment

**5-step discovery process** — turn business intent into testable technical requirements.

1. **Listen** — capture stakeholder requests *and* the assumptions baked in
2. **Probe** — keep asking "why?" until the real motivation surfaces
3. **Clarify** — translate motivations into per-flow, measurable requirements
4. **Evaluate** — test feasibility, constraints & cross-pillar trade-offs
5. **Recommend** — propose options w/ rationale; validate with PoCs + KPIs (ADR-ready)

<!-- _footer: "A workload = app code + data + AI models + supporting infra. Re-run the loop on every major pivot." -->

---

# Architecture Fundamentals - Pattern & Forward Thinking

<div class="columns">
<div>

## Patterns

- Lean on proven patterns: circuit breaker, cache-aside, bulkhead, valet key, claim-check
- Use 2026 workload patterns where they fit: **HPC architecture pattern**, AI inference/RAG, event-driven
- Prefer boring over bespoke

</div>
<div>

## Forward Scan

- Scale / data growth thresholds
- Compliance & residency horizon
- Deprecations & preview risk
- AI model lifecycle (retraining, drift)

</div>
</div>

<!-- _footer: "Instrument the seams so you see the cliff while you still have runway." -->

---

# Architecture Fundamentals - Supportability & Collaboration

<div class="columns">
<div>

## Supportability

- Standard telemetry schema
- Golden signals + synthetics
- Correlation IDs & clear errors

</div>
<div>

## Collaboration

- Cross-discipline reviews
- External architecture consults
- Pattern & ADR library upkeep

</div>
</div>

**Growth Loop**: Learn → apply → codify.

> If not operable, it’s not done.

---

# Architecture Fundamentals - Method & Improvement

## Toolkit

- Checklists & maturity baseline (per pillar)
- ADR catalog + pattern library
- Fitness reports (drift, KPI deltas, error budget burn)

## Loop

Assess → Prioritize → Implement → Validate → Instrument → Reassess

<!-- _footer: "Outcome: an intentional, current architecture — not a static diagram archived in 2024." -->

<!-- Bridge into WAF section: the framework operationalises this loop across five pillars. -->


---

# 1. Decision-Making Framework

<div class="columns">
<div>

### **Architecture Decision Records**

```markdown
# ADR-001: Multi-Region Strategy
Status: Accepted
Date: 2026-05-13

## Context
Need 99.99% availability for 
critical healthcare platform

## Decision
Implement active-active across
3 Azure regions

## Consequences
- 3x infrastructure cost
- Complex data sync
```

</div>
<div>

### **Key Elements**

✅ **Early Identification**
Document decisions before they're made

✅ **Risk Assessment**
One-way doors vs. two-way doors

✅ **Clear Rationale**
Why this choice over alternatives

✅ **Learning Loop**
Post-implementation reviews

</div>
</div>

---

# 2. Master Cloud Design Patterns

<div class="columns">
<div>

### **Reliability Patterns**

- 🔄 Circuit Breaker
- 🎯 Bulkhead Isolation
- ♻️ Retry with Backoff

### **Performance Patterns**

- 📦 Cache-Aside
- 🚀 CQRS
- 📊 Event Sourcing

</div>
<div>

### **Security Patterns**

- 🔐 Valet Key
- 🛡️ Gatekeeper
- 🎭 Federated Identity

### **Modern Patterns**

- 📡 Event-Driven
- 🔗 Service Mesh
- 🌐 Edge Computing

</div>
</div>

> 💡 **Pro Tip:** Start with [Azure Architecture Center](https://aka.ms/architecture) pattern catalog

---

# 3. Forward-Thinking Design

<div class="columns">
<div>

### 🔮 **Anticipate Change**

- Workload growth: 10x planning
- Regional expansion readiness
- Compliance evolution tracking

### 🚀 **Embrace Innovation**

- Preview features evaluation matrix
- Gradual rollout strategies
- Fallback mechanisms

</div>
<div>

### 🛡️ **Avoid Design Cliffs**

- No single points of failure
- Vendor lock-in mitigation
- Technology abstraction layers

**Real Example:** Netflix's migration from monolith → microservices → serverless

</div>
</div>

---

# 4. Design for Supportability

<div class="columns">
<div>

## 📊 **Observable by Default**

1. **Instrument** - OpenTelemetry, structured logs, correlation IDs
2. **Collect** - unified pipelines, polyglot stores, tiered retention
3. **Analyze** - hot / warm / cold paths tied to health & KPIs
4. **Visualize** - SLI/SLO dashboards, health models, alerting

</div>
<div>

## 🔧 **Support-Friendly**

- Self-healing (incl. DLQ for poison messages)
- Graceful degradation + clear error contracts
- Runbook automation + ChatOps

</div>
</div>

**Success Metric:** MTTR ↓ ~75% when observability wired in from day one, not retrofitted.

<!-- _footer: "OpEx (next) runs this loop — this slide makes sure the loop exists." -->

---

# 5. Continuous Skill Enhancement

<div class="columns">
<div>

### 📚 **Learning Paths**

- **Certifications:** AZ-305, AI-102
- **Specializations:** FinOps, MLOps
- **Emerging:** Quantum, Edge AI

### 🏗️ **Hands-On Practice**

- Weekly architecture katas
- Open source contributions
- Hackathon participation

</div>
<div>

### 🤖 **AI-Augmented Skills**

- Copilot for architecture
- AI-assisted code reviews
- Automated documentation
- Pattern recognition tools

### 🌐 **Community**

- Local meetups
- Architecture forums
- Conference speaking

</div>
</div>

---

# 6. Collaboration Excellence

## 🤝 **Key Partnerships**

<div class="columns">
<div>

### Internal Teams

- Product owners
- Security champions
- Site reliability engineers
- Data scientists

</div>
<div>

### External Experts

- Cloud solution architects
- Partner technical specialists
- Community MVPs
- Industry consultants

</div>
</div>

<!-- 
### 🎯 **Collaboration Artifacts**

- Architecture review boards
- Design thinking workshops
- Failure scenario planning
- Cost optimization sessions
-  -->

---

# 7. Methodical Design Approach

## Structure Brings Success

### 🛠️ **Essential Tools**

- **Design:** Visio, Draw.io, Lucidchart, C4 Model
- **Documentation:** ADRs, Wiki, Backstage
- **Assessment:** WAF Review, Azure Advisor
- **Validation:** Chaos Engineering, Load Testing

> "A good architecture is not accidental-it's methodical"

---

# Microsoft Azure Well-Architected Framework

![bg right:60% fit Five-pillar diagram of the Azure Well-Architected Framework](img/waf.png)

---

# Microsoft Azure Well-Architected Framework Goals

The Azure Well-Architected Framework drives real world business outcomes by guiding organizations to:

- **Enhance Resilience:** Higher availability and faster recovery  
- **Improve Security:** Proactive protection of critical data  
- **Optimize Costs:** Streamlined resource usage with high ROI  
- **Accelerate Innovation:** Faster feature deployment and agile operations  
- **Boost Operational Excellence:** Robust monitoring and automation  
- **Optimize Performance:** Consistent scalability and right-sized workloads

---

# Business Impact of the WAF

Outcomes from organizations that adopted the framework:

- **304% ROI** within 3 years (Forrester TEI study)
- **40% reduction** in downtime — Global Retailer
- **25% cost savings** — Financial Services
- **75% faster** server updates — Manufacturing
- **93/100** security score — Profisee

<!-- _footer: "Source: Forrester Total Economic Impact™ of Azure WAF (Microsoft-commissioned) / Microsoft WAF customer case studies" -->

---

# Azure Well-Architected Framework Overview

| Pillar | Core Goal | Strike a balance with |
|--------|-----------|------------------------|
| Reliability | Stay available & recover fast | Cost (redundancy spend), Security (surface area) |
| Security | Protect identities, data & workloads | Performance (inspection cost), OpEx (control friction) |
| Cost Optimization | Maximize business value per dollar | Reliability (DR depth), Performance (headroom) |
| Operational Excellence | Efficient operations & rapid improvement | Security (control vs velocity), Cost (tooling spend) |
| Performance Efficiency | Right-size & scale on demand | Cost (over-provision), Reliability (scale during incident) |

> Ongoing fitness regimen, not a one-time audit. Each pillar has a `/tradeoffs` page on learn.microsoft.com.

---

# Reliability Pillar

<!-- _class: lead -->

> "Will it stay up & recover — for the flows that actually matter?"

**Resilient** (withstand faults) + **Recoverable** (restore inside RTO/RPO) + **Available** (promised window, promised quality) — engineered into code, infrastructure, and operations. Target the critical flows, not a blanket "always up."

---

# Reliability - Principles

Reliability = keep the user promise under failure. 
Be **resilient**, **recoverable**, **available** — across code, infra, and ops.

- Set targets **per critical flow**, not a blanket "always up"
- Rate user/system flows; run FMA before any redundancy spend
- SLI/SLO + RTO/RPO per flow — negotiated with the business
- Design for graceful degradation; keep critical paths boring and simple
- Distinguish **failures** (need intervention) from **errors** (expected ops)
- Treat **read and write failures separately** — different blast radius, different fix

> Maxim: Resilience is engineered, not discovered after the fact.

---

# Reliability - Practices (Engineering)

Failure mode first — design the failure path before the happy path.

- Right-sized redundancy: AZs default; multi-region only where Tier-0 RTO/RPO demands it
- Self-healing via **DLQs** (poison messages) + **checkpoints** (long-running transactions) + **PeekLock + duplicate detection** (at-least-once idempotency)
- Handle **read vs write failures** separately — Blob primary→secondary read; graceful degrade when both fail
- Client-side transient-fault handling via SDK retries; check `IsTransient` before retrying
- Isolate **connection pools** so one hot path can't starve another (cascading-failure guard)
- Chaos / fault injection on critical flows — validate graceful degradation, not just uptime

---

# Reliability - Practices (Operations)

If you haven't run the runbook, you don't have a runbook.

- Synthetic user journeys + health probes feeding a flow-level health model
- Tiered backups + **timed** restore drills to an isolated environment (untested = no backup)
- Runbooks executed end-to-end quarterly; **named DR activation criteria** (what counts as a disaster — not "looks bad")
- Automated failover validation in CI; keep failover test green as a gate
- Advisor Score → next concrete action on the reliability backlog
- Scheduled, automated chaos + AI-assisted anomaly detection feeding self-heal loops

---

# Reliability - Key Metrics

| Metric | Target | Lever |
|--------|--------|-------|
| Critical-flow availability | Meets per-flow SLO | Flow-level health model + progressive delivery |
| Request success rate | ≥ 99.9% (or tier-specific) | Health probes + fast rollback |
| Error budget burn | < 20% / cycle | SLO review; harden before adding features |
| MTTR | ↓ trend | Auto diagnostics + automated rollback |
| Restore drill success | ≥ 99% (timed, to isolated env) | Quarterly restore exercise on real data |
| Chaos coverage | All Tier-0 flows hit / quarter | Scheduled fault injection on prod-like envs |

> Untested = unproven. A backup you've never restored, a failover you've never triggered, a runbook you've never run — those are liabilities, not assets.

---

# Reliability - Architecture Example

![Resilient architecture illustration showing redundant regional deployment w:850px center](./img/resilient.png)

Health-routed traffic → AZ-redundant active region → paired-region warm standby → geo-replicated data → DLQs for poison messages. Each layer maps to a tested failure mode, not a hypothetical one.

---

# Reliability - Maturity Progression

| Level | You're Here When... | Next Shift | Accelerator |
|-------|---------------------|-----------|------------|
| 1 Ad Hoc | Manual restarts; backup validity unknown; no defined RTO/RPO | Define & test RTO/RPO for top flow | Scope + first timed restore |
| 2 Baseline | Documented failover path; ad-hoc probes; DR exercise on a wiki page | Health probes + scheduled restore drills | Quarterly restore-drill cadence |
| 3 Structured | Runbooks executed end-to-end; SLOs defined; starter chaos on one critical flow | Error budget governs releases; chaos broadens | Chaos on every Tier-0 flow |
| 4 Proactive | Auto failover + health model; CI failover test green; timed restore KPI tracked monthly | Flow-level dashboards; failure-mode library cross-team | Automated chaos in pipelines |
| 5 Adaptive | Self-heal loops live; scheduled chaos; AI-assisted anomaly triage | Predictive scaling; novel-failure rehearsal; chaos as a release gate | Continuous resilience engineering as team practice |

<!-- _footer: "Trajectory: remove unknowns → speed detection → widen safe automation." -->

<!-- Risks: L1 False recoverability; L2 Late backup corruption detection; L3 Hidden SPOF; L4 Design vs reality drift; L5 Slow novel failure detection. -->

---

# Reliability - At a Glance

<!-- _class: glance -->

<div class="columns">
<div>

**Core Azure Focus**  
🧭 AZ-first; multi-region only for Tier 0  
🛡️ Backup + geo-replication + **tested** restore  
🩺 Flow-level health model + synthetic probes  

**Fast Diagnostic (the Monday question)**  
`When did you last successfully restore from backup — timed, end-to-end?`

</div>
<div>

**Typical Early Gap**  
🚩 Runbooks never executed end-to-end on prod-like data

**Signals to Track**  

- Error budget burn %  
- Critical-flow availability vs SLO  
- RTO / RPO adherence on the last real drill  
- Timed restore drill success  

</div>
</div>

<!-- _footer: "Quick Win: 30-min tabletop on top flow → name one unknown → one restore script by Friday. | Up next: Security." -->

---

# Security Pillar

<!-- _class: lead -->

> "Can it be breached — and would we see it?"

Zero Trust by default. Identity is the perimeter. Threat-model first, assume breach, design for rapid detection and containment.

---

# Security - Principles

- **Zero Trust by default** — *verify explicitly, least privilege, assume breach* on every flow
- **Threat-model first** (STRIDE) — map assets, boundaries & abuse cases *before* controls; each threat gets a control, owner, and timeline
- **Identity is the perimeter** — conditional, auditable verification on every request, human or workload
- **Least privilege as a verb** — PIM + JIT over standing roles; managed identities over secrets
- **Encrypt & segment by default** — data, networks, identities, runtime — sized to data classification

<!-- _footer: Maxim: "Security is an engineering practice, not a gate — if you can't see it, you can't contain it." -->

---

# Security - Practices & Patterns

<div class="columns">
<div>

**Identity & Access**

- MFA + Conditional Access everywhere
- Entra PIM / JIT — zero standing privileged roles

**Network & Data**

- Segmentation, private endpoints, WAF + DDoS
- Encrypt in transit & at rest; CMK for regulated data

**Detection & Response**

- Defender for Cloud + Sentinel; defined remediation SLAs

</div>
<div>

**Exercises**

- Tabletop simulations + **red-/purple-team** drills
- Threat-model reviews at every architecture change

</div>
</div>

---

# Security - Secure Development Lifecycle

<div class="columns">
<div>

**Secure Dev Lifecycle (SE:02)**

- Isolated workspaces: **Dev Box / Codespaces**
- **Golden images** + asset/CVE catalog for prod
- IDE security extensions + credential managers
- SAST + DAST + dependency / supply-chain scans
- Default-deny in code; Microsoft-hosted build agents

</div>
<div>

**Emerging**

- AI workload safeguards: prompt-injection controls, content filters, model-supply-chain integrity
- **Agentic SOC**: Copilot + Sentinel for automated triage & containment

</div>
</div>

---

# Security - Key Metrics

| Metric | Target | Lever |
|--------|--------|-------|
| Secure Score | > 80% | Prioritized remediation backlog |
| MFA Coverage | 100% | Conditional Access policies |
| Standing privileged roles | ~0 | PIM + JIT elevation |
| Mean Time to Detect (MTTD) | < 1 hr | Sentinel analytics + tuned alerts |
| Vuln MTTR (critical) | < 14 days | Patch automation, IaC redeploys |

> Detection-first: dwell time & MTTD are the truth-tellers — Secure Score is hygiene.

---

# Security - Architecture Example

1. **Edge**: Front Door + WAF + DDoS Protection
2. **Ingress**: App Gateway + mTLS; Entra ID + Conditional Access on every flow
3. **Compute**: Segmented app tier, private endpoints, managed identities (no secrets in code)
4. **Data**: Key Vault + CMK encryption; classified & labeled at rest
5. **Detect**: Defender for Cloud → Sentinel SIEM + SOAR playbooks for rapid containment

> Blueprint goal: identity-bound, signal-driven, contained-by-design.

---

# Security Maturity (Progression + Accelerators)

| Level | Posture | Signals You See | Accelerator |
|-------|---------|-----------------|-------------|
| 1 Core | Static hygiene | MFA on, secrets externalized, baseline patching | Enforce MFA + Key Vault migration |
| 2 Expanded | Posture-managed | Secure Score backlog burned down; segmentation in place | Defender for Cloud + private endpoints |
| 3 Threat-Informed | Detection-aware | STRIDE models per workload; central SIEM; IR runbooks rehearsed | Threat models + Sentinel analytics |
| 4 Adaptive | Signal-driven | SOAR auto-contains common patterns; risk-based CA; PIM enforced | SOAR playbooks + risk-based policies |
| 5 Advanced | Continuously validated | Red/purple drills on cadence; AI/agent-assisted containment; zero standing privilege | Continuous purple-team + agentic SOC |

<!-- _footer: "Trajectory: static controls → signal-driven prevention → AI-assisted autonomous containment. Detection capability — not Secure Score — is the leading indicator." -->

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

**Core Azure Focus**  
🆔 Identity-as-perimeter (Entra + PIM/JIT)  
🔐 Secrets in Key Vault; managed identities elsewhere  
🧱 Segmentation + Defender for Cloud + Sentinel

**Fast Diagnostic**  
`Secure Score trend` + open critical vulns + count of permanent privileged roles

</div>
<div>

**Typical Early Gap**  
🚩 Standing Global Admins + secrets in pipelines

**Signals to Track**  

- MFA coverage % + % managed identities  
- MTTD / dwell time  
- Key Vault rotation cadence  
- Vulnerability MTTR  


</div>
</div>

<!-- _footer: "Quick Win: Expire standing roles; enable PIM + JIT on top 3 admin paths this week. | Security spend IS a cost lever — Cost Optimization." -->

---

# Cost Optimization Pillar

<!-- _class: lead -->

> "What is the unit cost — and is it trending down?"

Drives financial accountability, elasticity, and spend-to-value alignment. Security spend, redundancy spend, AI spend — every pillar lands on the bill. Unit economics ties dollars back to the business outcomes set in Step 1 of Business Alignment; tracked per transaction, per user, per request — never just line items.

---

# Cost Optimization - Principles

- Tagging-first ownership; budget guardrails follow
- Engineer elasticity; idle spend is a measurable target
- Tie every dollar to a business KPI — unit cost is the headline
- Treat anomalies as signals, not surprises
- Document cost vs reliability/perf trade-offs — they will be re-litigated

> Maxim: Unmeasured cost is uncontrolled cost. Without ownership tagging, optimization is theatre.

---

# Cost Optimization - Practices & Governance

- Policy-enforced tags (env, owner, costCenter) + budget alerts at 50 / 80 / 100% (CO:04)
- Autoscale on explicit triggers (CPU, queue depth, predictive); scheduled nonprod shutdown (CO:12)
- Rightsize quarterly; commitment portfolio = Reservations + Savings Plans (CO:05)
- Spot for batch & interruptible; storage lifecycle hot → cool → archive (CO:10)
- ML-driven anomaly detection → auto-route runbook on threshold breach (CO:03)

Emerging:

- AI / agent workload cost allocation — high variance, dedicated tags (CO:07)
- Flow-cost optimization (CO:09) + caching on expensive hot paths

---

# Cost Optimization - Key Metrics

| Metric | Target | Lever |
|--------|--------|-------|
| Tag Coverage | > 95% | Azure Policy deny-on-missing tags |
| Idle Spend | < 5% | Decommission, schedules, rightsizing |
| Commitment Coverage | > 70% eligible | Reservations + Savings Plans mix |
| Anomaly MTTR | < 24h | ML detection + runbook routing |
| Unit Cost ($/txn, $/user) | ↓ QoQ | Performance + elasticity + flow trimming |
| Forecast Accuracy | ±10% MoM | Cost model + production feedback |

> The headline is unit cost. Everything else is a lever to move it.

---

# Cost Optimization - Architecture Example

1. Tag policy (deny-on-missing) + budget alerts at 50 / 80 / 100%
2. Autoscale by leading metric + Spot for batch + scheduled nonprod shutdown
3. Storage lifecycle (hot → cool → archive); retention tuned to data class
4. Cache + flow-cost trimming on expensive read paths
5. Cost Management anomaly insights → auto-route runbook + Teams alert
6. Unit-cost dashboard ($/txn, $/user) reviewed at monthly FinOps cadence

> Blueprint Goal: Predictable unit economics with anomaly-driven self-correction.

---

# Cost Optimization Maturity Progression

| Level | Focus | Concrete Signal You've Arrived | Accelerator |
|-------|-------|-------------------------------|-------------|
| 1 Ownership | Tags + DRI assignment | Tag coverage > 80%; every cost center has a named DRI | Azure Policy deny-on-missing tags |
| 2 Visibility | Cost model + alerts | Budget alerts at 50/80/100% live; monthly variance < ±15% | Cost model + chargeback/showback view |
| 3 Signals | Anomaly & flow analysis | Anomaly MTTR < 24h; idle spend < 10%; commitment coverage > 50% | ML anomaly detection + runbook routing |
| 4 Prod Insights | Rightsizing & demand shaping | Idle < 5%; commitment > 70%; autoscale tuned to leading metric | Lifecycle automation + autoscale triggers |
| 5 Optimize @ Scale | Unit economics + forecast | Unit cost ↓ QoQ; forecast accuracy ±10%; DR cost reviewed against tiered criticality (→ Reliability) | Predictive scaling + AI-assisted cost insights |

<!-- _footer: "Trajectory: visibility → signals → automation. Skip a level; the next stalls." -->

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

**Core Azure Focus**  
🏷️ Policy-enforced tagging & ownership  
📉 Elasticity & rightsizing loops  
🗃️ Storage lifecycle + commitment portfolio

**Fast Diagnostic**  
`Idle spend %` + tag coverage heatmap + anomaly MTTR

> Cost fitness = ownership → visibility → signals → automation. Optimize after measuring.

</div>
<div>

**Typical Early Gap**  
🚩 No policy-backed tagging = opaque spend

**Signals to Track**  

- Idle / unattached resources (target < 5%)
- Unit cost ($/txn, $/user) — must trend down

</div>
</div>

<!-- _footer: "Optimization without operational discipline reverts — Operational Excellence." -->

---

# Operational Excellence Pillar

<!-- _class: lead -->

> "Can we change safely - and learn from every change?"

OpEx is the **carrier** for the other four pillars - the practices that turn Reliability, Security, Cost, and Performance gains into changes that actually ship. Disciplined delivery, full-stack observability, and a feedback loop that compounds across releases.

---

# Operational Excellence - Principles

OpEx = the operating system around your workload (OE:01-OE:11 checklist).

- **Shared ownership** - build it, you run it (OE:01); blameless retros, not blame retros
- **Instrument first; scale second** (OE:07) - SLOs + error budgets govern release pace
- **Progressive, reversible deploys** (OE:11) - small batches, health-gated, fast rollback
- **Standardize the routine; automate the frequent** (OE:02, 05, 10) - IaC, runbooks, policy-as-code
- **Structured incident response** (OE:08) - defined roles, rehearsed runbooks, rapid recovery
- **AI is integrated, not bolted on** — threaded across L1–L5

<!-- _footer: "Maxim: Operate to learn; learn to operate better." -->

---

# Operational Excellence - Practices & Automation

- Gated CI/CD + **policy-as-code supply chain** (OE:06) - SBOM, signing, scan, immutable artifacts
- **Progressive delivery** (OE:11): canary / blue-green / deployment stamps, health-gated, with bake time
- **Test strategy + plan per workload** (OE:09): pyramid (unit → integration → E2E) + chaos + load
- Test in production *with safeguards* - feature flags, scoped canary, kill switches
- Unified observability spine (OE:07): instrument → collect → analyze → visualize
- **Structured incident response** (OE:08) + blameless retros → **ADR feedback**

---

# Operational Excellence - AI Integration

AI-integrated (per OpEx maturity model — Feb 2026):

- **Buy**: Copilot for IaC / tests / queries; SRE agents; Sentinel / Defender AI triage
- **Build**: custom GenAI for KPI suggestions, canary tuning, alert dedup, runbook synthesis
- Agentic remediation — **behind governance** (PII masking, security trimming, human-in-loop)

> AI is not bolted on at the end — it threads every maturity level, from task assist to predictive ops.

---

# Operational Excellence - Key Metrics

| Metric | Target | Lever |
|--------|--------|-------|
| Deploy Frequency | Daily+ | Small batches + automation |
| Lead Time for Change | < 1 day | Trunk-based + gated pipelines |
| Change Failure Rate | < 15% | Progressive rollout + test pyramid |
| MTTA / MTTR | < 5 min / < 1h Sev2 | Health model + runbook automation |

DORA is the operating room. Levers: telemetry unification, AI-assisted triage, rollback drills.

---

# Operational Excellence - Architecture Example

1. Gated PR → secure build (SBOM, scan, signed artifacts)
2. Canary + health-gated progressive rings (bake time per wave)
3. Unified telemetry spine - 4-phase pipeline + correlation IDs
4. AI-assisted alert correlation + automated remediation behind approvals
5. Blameless retro → ADR + runbook update (feedback closes the loop)

> Blueprint Goal: High deploy frequency, low MTTR, learning compounds.

---

# Operational Excellence - Maturity Progression

| Level | Focus | Key Shift | AI Integration |
|-------|-------|-----------|----------------|
| 1 DevOps Foundation | Shared ownership + basic CI | Source control norms, IaC adoption | **Task assist** - Copilot scaffolds IaC, docs, unit tests (buy) |
| 2 Process Standardization | Roles, IaC, baseline pipelines | Standardized tooling & on-call | **Recommendations** - AI code review, test generation, KPI suggestions (buy) |
| 3 Release Readiness | Gated pipelines + health model | Incident taxonomy + SLOs govern releases | **Artifact generation** - risk scoring at gates, runbook & test synthesis |
| 4 Change Management | SLO dashboards + progressive delivery | Runbook automation, retros → ADRs | **Policy validation** - canary tuning, alert dedup, auto-remediation (build) |
| 5 Future Adaptability | Continuous modernization, self-service envs | Friction audits, pervasive automation | **Optimization actions** - multi-agent SRE, predictive scale, anomaly detection (build) |

<!-- _footer: "Trajectory: culture → standardization → automation → modernization. AI threads L1–L5 — buy early, build where ROI justifies it." -->

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

**Core Azure Focus**  
🚀 Gated CI/CD + progressive delivery  
📊 Unified observability (4-phase)  
🛠️ Runbook automation + AI-assisted triage

**Fast Diagnostic**  
`DORA snapshot` - Deploy Freq, Lead Time, CFR, MTTR/MTTA

</div>
<div>

**Typical Early Gap**  
🚩 Telemetry exists but no actionable SLOs or error budget

**Signals to Track**  

- Change failure rate (%)  
- MTTR / MTTA trend  
- Auto-remediation success count  
- Retro → ADR cycle time


</div>
</div>

<!-- _footer: "OpEx instruments; Performance measures the result — Performance Efficiency." -->

---

# Performance Efficiency Pillar

<!-- _class: lead -->

> "Will it hold its SLOs under load — at P99, not on average?"

OpEx instrumented the system. Performance proves it under load — at the tail, not on the average. Verify scale promises continuously.

---

# Performance Efficiency - Principles

- Negotiate business SLOs (latency / throughput) per critical flow (PE:01, PE:09)
- Just-in-time elastic scaling — capacity follows demand at runtime, with planning ahead of known peaks (PE:02)
- Partition & cache the hot path; profile the long tail (PE:05, PE:08)
- Baseline → measure → tune on evidence, never on guesswork (PE:04)

> Maxim: Performance is a promise you must continuously verify.

---

# Performance Efficiency - Practices & Patterns

- Production-like load & capacity tests pre-peak (PE:06)
- Autoscale on **meaningful** signals (queue depth, RPS, latency — not CPU alone)
- Layered caching: Front Door / CDN at the edge → Redis Enterprise on the hot path
- Partition / shard early; tune indexes for the real query; align scale units to the real bottleneck (PE:05, PE:08)
- Profile tail latency (P95 / P99) on critical flows (PE:09)
- Perf gates in CI/CD — block regressions before prod (PE:06, PE:12)

---

# Performance Efficiency - Emerging Practices

- **Predictive autoscale** — ML-forecasted demand, provision before the spike, guardrail min/max
- **Adaptive concurrency** — KEDA, Functions / App Service Premium throttle on real pressure
- **AI workload perf** — token/sec SLOs, PTU sizing, prompt-cache reuse, prompt-length budgets
- **HPC workloads** — coupled compute, low-latency interconnect, placement-aware scale units

> Establish a repeatable baseline before reaching for predictive or adaptive controls.

---

# Performance Efficiency - Key Metrics

| Metric | Target | Lever |
|--------|--------|-------|
| P95 / P99 Latency (critical flow) | SLO met; P99 ≤ 3× P50 | Profiling + caching + async |
| Cache Hit Ratio (hot path) | > 85% | Key design + TTL + eviction |
| Autoscale Reaction | < 5 min reactive · pre-spike (predictive) | Signal-driven rules |
| Tokens / sec (AI flows) | Per-deployment SLO met | PTU sizing + prompt budget |
| Perf-Gate Pass Rate | 100% on critical flows | CI/CD load + regression checks |

Levers: async patterns, layered caching, partitioning, predictive scale, adaptive concurrency.

---

# Performance Efficiency - Architecture Example

1. Front Door edge cache + object chunking for large payloads
2. Stateless autoscaling API on signal-driven rules (queue / latency)
3. Async queue offload with adaptive concurrency on workers
4. Redis Enterprise hot path + partitioned data stores
5. Predictive autoscale + perf gates in CI/CD

> Blueprint Goal: Linear scale within the P95 SLO; no surprises at P99.

---

# Performance Efficiency Maturity Progression

| Level | Focus | Concrete Signal | Accelerator |
|-------|-------|-----------------|-------------|
| 1 Targets | Negotiated SLOs per critical flow | P95 SLO drafted + rough capacity model exists | SLO worksheet + capacity estimate |
| 2 Baseline Metrics | Instrumented & repeatable measurement | P50 / P95 / P99 baselines + hot-path map captured | Load-test rig + profiling spans |
| 3 Signal Driven | Real user + synthetic + autoscale on real signals | Scale fires on queue / latency, not CPU alone | RUM + custom autoscale metrics |
| 4 Gated Optimization | Perf gates block regressions; data tier tuned | CI/CD perf gate green; PACELC choices documented | Perf gates + indexing / partitioning review |
| 5 Continuous Tuning | Hypothesis-driven, predictive & adaptive | Predictive autoscale + adaptive concurrency in prod | Experiments + model-drift watch |

<!-- _footer: "Trajectory: targets → baseline → signal-driven → gated optimization → predictive & adaptive" -->

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

**Core Azure Focus**  
⚖️ Signal-driven autoscale (predictive once proven)  
🧠 Layered caching (Front Door → Redis) + partitioning  
🧪 Tail-latency profiling on critical flows

**Fast Diagnostic**  
`P95 / P99 vs SLO delta` (gap, trend, regression count)

</div>
<div>

**Typical Early Gap**  
🚩 No repeatable load / capacity baseline; autoscale on CPU alone

**Signals to Track**  

- P95 / P99 latency per critical flow  
- Cache hit ratio (edge + Redis)  
- Autoscale reaction time & accuracy  
- Tokens / sec for AI flows (where applicable)


</div>
</div>

<!-- _footer: "Quick Win: run a 1-hr load test → record P95/P99 baseline + name top slow span. | Performance is a promise you continuously verify — Trade-Offs next." -->

---

# Trade-Offs

<!-- _class: lead -->

> Every pillar pulls. Architecture is choosing **which way to lean**, on purpose.

The next slides surface the shared levers, the recurring tensions, and four scenarios where the "right" answer depends on context, not the framework.

---

# Cross-Pillar Shared Levers

| Lever | Primary Pillars Impacted | Core Benefit |
|-------|--------------------------|--------------|
| Global edge + health routing | Reliability, Performance | Faster failover & lower latency at scale |
| Strong identity + least privilege | Security, Operational Excellence | Reduced blast radius & clearer access governance |
| Observability spine (logs, metrics, traces) | All Pillars | Unified signals accelerate detection, tuning, and learning |
| Autoscale + lightweight architecture | Performance, Cost, Reliability | Elastic capacity without chronic overprovisioning |
| Policy & automation guardrails | Security, Cost, Operational Excellence | Consistent compliance & reduced manual toil |

<!-- _footer: "One leveraged investment should advance at least two pillars — use this list to frame improvement proposals." -->

<!-- Previous bullet list version retained for reference:
Global edge + health routing; Strong identity + least privilege; Observability spine (logs, metrics, traces); Autoscale + lightweight architecture; Policy & automation as guardrails. Guiding Principle: One design decision, multi-pillar benefit. -->

---

<!-- Original trade-offs block preserved for rollback:
# Trade-Offs (empty slide)
# Key Well-Architected Framework Trade-Offs (two-column layout: Performance vs Security, Reliability vs Cost)
-- End original block -->

# Trade-Offs Overview

| Tension Pair | Competing Forces | Friction Signal | First-Move Lens |
|--------------|------------------|-----------------|-----------------|
| Performance vs Security | Latency vs inspection depth | Rising auth / inspection latency | Edge offload + scoped deep inspection |
| Reliability vs Cost | Redundancy vs spend efficiency | Escalating standby cost | Tiered criticality + right-sized DR |
| Velocity vs Stability | Change frequency vs failure risk | Spike in change failure rate | Progressive delivery + automated rollback |
| Cost vs Performance | Budget guardrails vs headroom | Reactive scaling / throttling | Autoscale + load test baselines |
| Security vs Operability | Tight control vs engineer throughput | Privilege escalation toil | JIT least privilege + workflow automation |

<!-- _footer: "Loop: Surface → ADR → Measure → Recalibrate. Hidden trade-offs become accidental architecture." -->

---

# <!-- fit --> Unstated trade-offs become accidental architecture

<!-- _class: lead -->

---

# Trade-Off Matrix

| Optimize For | Potential Impact On | Example Tension | Mitigation Strategy |
|--------------|---------------------|-----------------|---------------------|
| Extreme Reliability | Cost Optimization | Active-active multi-region cost ↑ | Tiered criticality; pilot light for non-critical |
| Strict Security Controls | Performance Efficiency | Added latency from deep inspection | Offload with Azure Front Door WAF / caching |
| Lowest Possible Cost | Reliability / Performance | Under-provisioned resources | Autoscale + performance SLO guardrails |
| Max Performance | Cost Optimization | Over-provisioning high SKU | Right-size via load test baselines + scheduled reviews |
| Rapid Deployment Velocity | Security / Stability | Increased change failure risk | Shift-left scans + progressive delivery |

<!-- _footer: "Drill in: learn.microsoft.com/azure/well-architected/[pillar]/tradeoffs — pair with ADR when tensions get contentious." -->

---

# Pillar Interactions & Decision Anchors

<div class="columns">
<div>

## Operational Excellence is the Carrier

- Safe-deploy practices unlock Security & Reliability gains
- Unified observability feeds Cost & Performance decisions
- Automation guardrails turn policy into lived behavior
- Without OpEx, the other pillars stall at "documented"

</div>
<div>

## Decision Anchors

- Start from explicit business outcomes + candidate SLOs
- Declare the **non-negotiable** pillar(s) per workload tier
- Record decisions + linked metrics in ADRs

> Clear anchors + observable metrics turn pillar tension into a continuous improvement loop - not a yearly fight.

</div>
</div>

---

# 🔁 Continuous Improvement & Pillar Maturity

| Level | Trait | Focus |
|-------|-------|-------|
| 1 Ad Hoc | Reactive, inconsistent | Baseline inventory & metrics |
| 2 Emerging | Initial standards appear | Define SLOs & security baselines |
| 3 Defined | Repeatable + dashboards | Tighten feedback loops |
| 4 Managed | Data-driven & proactive | Optimize cost & performance SLIs |
| 5 Optimizing | Resilience engineering | Predictive automation |

Monthly drift scan → Quarterly deep review → Annual strategic recalibration.

---

# Scenario-Based Trade-Off Discussions

<!-- _class: section -->
<!-- _paginate: false -->

---

# Scenario 1: Healthcare PHI

| Context | Drivers | Constraints |
|---------|---------|-------------|
| New patient records platform handling PHI | Compliance, confidentiality, clinician availability | Must satisfy regulatory & audit controls early |

**Question:** Best first-year pillar priority?

| Opt | Ordering | Rationale (1-line) |
|-----|----------|--------------------|
| A | Cost → Performance → Security → Reliability | Security debt & compliance risk early |
| B | Security → Reliability → Performance → Cost | Protect data & uptime; optimize later |
| C | Performance → Reliability → Security → Cost | Perf before protection = exposure window |
| D | Reliability → Cost → Performance → Security | Security controls arrive too late |

<!-- Answer: B. Notes: Establish identity hardening, encryption, audit logging before tuning performance / cost. Original verbose table preserved in VCS history. -->

---

# Scenario 2: Retail 10x Peak (Black Friday)

| Context | Drivers | Constraints |
|---------|---------|-------------|
| E-commerce rebuild expecting 10x traffic surge | Scale readiness, low latency, checkout continuity | Limited rehearsal windows pre-event |

**Question:** Which architecture approach best balances readiness & cost risk?

| Option | Approach | Assessment |
|--------|----------|------------|
| A | Single region + basic monitoring | High outage blast radius; no failover |
| B | Active-passive + autoscale | Balanced resilience + cost; warm standby |
| C | Active-active + predictive scale | Highest cost / complexity; may be overkill initially |
| D | Pure serverless minimal planning | Cold start & latency variability under sustained load |

<!-- > Aim for right-sized resilience with rehearsal capability (Answer: B; C may be evolution path if sustained global demand proves out). -->

<!-- Facilitator Notes: Highlight rehearsal (chaos / load) and autoscale thresholds; discuss progression B → C if error budgets stress. -->

---

# Scenario 3: Legacy Batch Modernization

| Context | Drivers | Constraints |
|---------|---------|-------------|
| Nightly monolithic batch system | Need faster cycles, partial near-real-time flows | Limited refactor budget this quarter |

**Question:** Which modernization path optimizes learning velocity without over-investing early?

| Option | Path | Assessment |
|--------|------|-----------|
| A | Lift-and-shift VMs | Preserves toil; no structural gains |
| B | Full microservices + events | Premature fragmentation risk |
| C | Replatform to managed services | Gains ops + scalability; incremental evolution |
| D | Full rebuild w/ AI/ML | High risk + delayed value |

<!-- > Prioritize platform leverage + incremental decomposition (Answer: C). -->

<!-- Facilitator Notes: Map quick wins: managed DB, queue, scheduler; carve out hotspots post replatform KPI baseline. -->

---

# Scenario 4: Early-Stage Social App

| Context | Drivers | Constraints |
|---------|---------|-------------|
| Seed-stage app seeking product-market fit | Speed of iteration, cost discipline | Uncertain growth trajectory |

**Question:** Which approach best balances runway conservation with adaptability?

| Option | Strategy | Assessment |
|--------|----------|-----------|
| A | Heavy upfront security/compliance | Slows learning; misaligned with current risk profile |
| B | MVP + incremental hardening | Fast feedback, layered maturity |
| C | Immediate multi-region deployment | Cost burn + operational overhead |
| D | Heavy early ops automation | Automates unknowns; wasted effort |

<!-- > Optimize for validated learning; mature controls as risk & scale increase (Answer: B). -->

<!-- Facilitator Notes: Introduce maturity runway: baseline hygiene → observability → scaling → advanced security & multi-region. -->

---

# Well-Architected Framework Service Guides

**A decision-making tool, not a configuration manual.**

- Pick & configure Azure components through the lens of all five pillars
- Highlight the features that actually move pillar outcomes - skip the rest
- Use as the first stop when a service lands on your architecture
- Pair with Advisor Score + WAF Review for an evidence-backed shortlist

> Refreshed March 2026: **SQL MI, MySQL flexible server, Container Apps, Event Grid, Event Hubs, Service Bus, Blob, Databricks, Virtual WAN** - all now span all five pillars.

---

# Well-Architected Workloads

A **workload** = app code + data + **AI models** + supporting infra, working together to deliver a business outcome.

- Align workload decisions to business outcomes, not service catalogs
- Balance functional requirements with non-functional trade-offs
- Integrate fundamentals, trade-offs, and ops best practices into one system
- Keep a **living workload dossier**: scope, personas (human + agentic), dependencies, tech-debt register, budget envelope, KPIs, maturity scores
- Workload team **+** centralized teams: who owns which guardrail?

---

# Well-Architected Workloads Examples

- AI
- Azure Virtual Desktop  
- Azure VMware Solution  
- High Performance Computing (HPC)
- Mission-critical applications  
- Oracle
- SaaS Solutions
- SAP

---

# What To Do Monday

One concrete action per pillar — pick **one row**, land it this week, bring back evidence.

| Pillar | This week's move |
|--------|------------------|
| Reliability | Run a **timed** restore drill on your #1 critical flow |
| Security | Expire one standing privileged role; enable PIM + JIT on top 3 admin paths |
| Cost Optimization | Turn on policy-enforced tags (env, owner, costCenter) + a weekly idle report |
| Operational Excellence | Define one SLO + error budget; wire its alert into ChatOps |
| Performance Efficiency | Capture a P95 / P99 baseline on the hottest flow; name the worst span |

> Modernizing cloud excellence isn't an event - it's a habit. One ADR, one drill, one baseline at a time.

---

<!-- _paginate: false -->

![bg fill Audience Q&A backdrop with question marks](./img/questions.jpg)

---

# Tell Me How I Did

<!-- _class: outro -->

- **What landed?**
- **Where go deeper?**
- **What to trim?**

![bg right QR code linking to feedback form for this talk](./themes/techorama/well-architected-architect-qr-code.png)

<!-- Your feedback shapes the next iteration of this deck. Scan the QR code to share what worked, what didn't, and where you'd like me to focus next time. -->

---

<!-- _class: resources -->

<div class="columns">
<div>

## Resources

- [Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/)
- [What's new in the WAF](https://learn.microsoft.com/en-us/azure/well-architected/whats-new)
- [Microsoft Learn: Build great solutions with the Microsoft Azure Well-Architected Framework](https://learn.microsoft.com/en-us/training/paths/azure-well-architected-framework/)
- [Azure Advisor](https://learn.microsoft.com/en-us/azure/advisor/advisor-overview)  
- [Azure Architecture Center](https://learn.microsoft.com/en-us/azure/architecture/browse/)
- [Well-Architected Review Assessment Tool](https://aka.ms/waf-assessment)
- [Azure Cost Management + Billing](https://learn.microsoft.com/en-us/azure/cost-management-billing/)
- [Advisor Score (Preview)](https://learn.microsoft.com/en-us/azure/advisor/advisor-score)

</div>
<div>

## Chris Ayers

_Principal Software Engineer_
_Azure CXP AzRel_
_Microsoft_

<i class="fa-brands fa-bluesky"></i> BlueSky: [@chris-ayers.com](https://bsky.app/profile/chris-ayers.com)  
<i class="fa-brands fa-linkedin"></i> LinkedIn: - [chris\-l\-ayers](https://linkedin.com/in/chris-l-ayers/)  
<i class="fa fa-window-maximize"></i> Blog: [https://chris-ayers\.com/](https://chris-ayers.com/)  
<i class="fa-brands fa-github"></i> GitHub: [Codebytes](https://github.com/codebytes)  
<i class="fa-brands fa-mastodon"></i> Mastodon: [@Chrisayers@hachyderm.io](https://hachyderm.io/@Chrisayers)
~~<i class="fa-brands fa-twitter"></i> Twitter: [@Chris_L_Ayers](https://twitter.com/Chris_L_Ayers)~~  

</div>
</div>

<!-- Needed for mermaid -->
<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
  mermaid.initialize({ startOnLoad: true });
</script>