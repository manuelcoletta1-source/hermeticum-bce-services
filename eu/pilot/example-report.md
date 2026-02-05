# HERMETICUM — EU Pilot Report (Example)
## Identity Responsibility Infrastructure (IPR)

> Pilot evaluation report — audit-first, fail-closed, hash-only  
> Version: v1.0  
> Scope: EU Pilot (Supply Chain Attribution)  
> Status: Example (public, demo)

---

## 1. Pilot Identification

- Pilot ID: EU-PILOT-SC-001
- Title: Supply Chain Responsibility Attribution (IPR)
- Domain: B2B Supply Chain
- Duration: 6 weeks
- Participating actors (roles):
  - Producer
  - Transporter
  - Warehouse
  - Buyer
  - External Auditor
- Reporting date: 2026-02-05

---

## 2. Problem Statement (Baseline)

Before the pilot, responsibility attribution across the supply chain relied on
fragmented logs, manual reconciliation and mutable records.

- Governance issue addressed:
  - Unclear attribution of actions (who decided / who modified / when).
- Source of cost / risk:
  - High audit overhead.
  - Long dispute resolution times.
  - Exposure to record manipulation.
- Existing controls:
  - Internal logs per actor.
  - Periodic manual audits.
- Known limitations:
  - Logs not interoperable.
  - No append-only guarantee.
  - Verification not repeatable by third parties.

### Baseline metrics
- Average audit time per event: ~45 minutes
- Average dispute resolution time: 7–14 days
- Manual steps required: 6–8
- Data exposure surface: medium (shared documents, emails, exports)

---

## 3. Pilot Scope & Constraints

### In scope
- Shipment events (creation, handover, reception).
- Generation of signed manifests (demo format).
- Hash-only receipts for each event.
- Public pass/fail verification.

### Out of scope
- Personal data custody.
- Identity scoring.
- Surveillance or profiling.
- Automated decision-making beyond attribution.

---

## 4. Technical Implementation

### Architecture summary
- Identity anchor type: external / role-based (pilot abstraction).
- Responsibility attribution: explicit actor-role binding per event.
- Trace format: append-only receipts (hash references).
- Verification type: hash-only, deterministic pass/fail.

### Tooling
- Manifest format: structured text (demo).
- Receipt format: SHA-256 hash reference.
- Verifier type: deterministic, fail-closed.

---

## 5. Verification & Audit Process

- Who can verify:
  - Any third party with access to receipts and verifier.
- Required inputs:
  - Receipt hash.
  - Optional manifest excerpt.
- Reproducibility:
  - Verification produces identical output for identical inputs.
- Fail-closed behavior observed:
  - Missing or malformed inputs result in explicit FAIL.

### Evidence
- Hash references: recorded per event.
- Signed manifests: demo-level signatures.
- Verification logs: deterministic output stored.

---

## 6. Results (After Pilot)

### Quantitative results
- Audit time per event (after): ~10 minutes
- Dispute resolution time (after): 1–2 days
- Manual steps reduced: from 6–8 to 2–3
- Error / ambiguity reduction: significant

### Qualitative observations
- Governance clarity improved: responsibilities explicit per event.
- Accountability improvements: disputes focus on facts, not narratives.
- Operational friction: reduced, especially during audits.

---

## 7. Delta Analysis (Before vs After)

| Metric                   | Baseline        | After Pilot     | Delta            |
|--------------------------|-----------------|------------------|------------------|
| Audit time               | ~45 min         | ~10 min          | −78%             |
| Dispute resolution time  | 7–14 days       | 1–2 days         | −70–85%          |
| Manual operations        | 6–8             | 2–3              | −60%             |
| Data exposure surface    | Medium          | Low              | Reduced          |

---

## 8. Risk & Compliance Assessment

- New risks introduced:
  - Dependency on correct receipt generation.
- Risks reduced:
  - Record manipulation.
  - Ambiguous responsibility chains.
- Compliance alignment:
  - GDPR: no personal data custody.
  - Auditability: improved through repeatable verification.
- Residual concerns:
  - Signature robustness to be hardened for production.

---

## 9. Conclusions

- Pilot success criteria met: **YES**
- Conditions for scale-up:
  - Production-grade signatures.
  - Formal governance processes.
- Required changes before production:
  - Security hardening.
  - Formal compliance documentation.
- Recommendation:
  - Proceed to extended pilot with additional actors.

---

## 10. Appendices

- Evidence pack references: demo receipts and logs.
- Verifier configuration: deterministic hash-only.
- Additional notes: none.

---

### Declaration

This report evaluates a **technical pilot** only.  
It does not establish legal obligations, identity claims, or custodial responsibilities.

Audit-first. Fail-closed. Hash-only. No data custody.
