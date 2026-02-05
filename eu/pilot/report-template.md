# HERMETICUM — EU Pilot Report Template
## Identity Responsibility Infrastructure (IPR)

> Pilot evaluation report — audit-first, fail-closed, hash-only  
> Version: v1.0  
> Scope: EU Pilot  
> Status: Template (public)

---

## 1. Pilot Identification

- Pilot ID:
- Title:
- Domain (e.g. Supply Chain / AI / Infrastructure):
- Duration:
- Participating actors (roles, not identities):
- Reporting date:

---

## 2. Problem Statement (Baseline)

Describe the initial situation **before** the pilot.

- Governance issue addressed:
- Source of cost / risk:
- Existing controls (if any):
- Known limitations:

### Baseline metrics
- Average audit time per event:
- Average dispute resolution time:
- Manual steps required:
- Data exposure surface:

---

## 3. Pilot Scope & Constraints

Clearly define what **is** and **is not** included.

### In scope
- Type of events covered:
- Artifacts generated:
- Verification method:

### Out of scope
- Personal data custody
- Identity scoring
- Surveillance
- Decision automation beyond attribution

---

## 4. Technical Implementation

### Architecture summary
- Identity anchor type:
- Responsibility attribution mechanism:
- Trace format (append-only):
- Verification type (hash-only / signature):

### Tooling
- Manifest format:
- Receipt format:
- Verifier type (deterministic / pass-fail):

---

## 5. Verification & Audit Process

Describe how verification was performed.

- Who can verify:
- Required inputs:
- Reproducibility:
- Fail-closed behavior observed:

### Evidence
- Hash references:
- Signed manifests:
- Verification logs:

---

## 6. Results (After Pilot)

### Quantitative results
- Audit time per event (after):
- Dispute resolution time (after):
- Manual steps reduced:
- Error / ambiguity reduction:

### Qualitative observations
- Governance clarity:
- Accountability improvements:
- Operational friction:

---

## 7. Delta Analysis (Before vs After)

| Metric                     | Baseline | After Pilot | Delta |
|---------------------------|----------|-------------|-------|
| Audit time                |          |             |       |
| Dispute resolution time   |          |             |       |
| Manual operations         |          |             |       |
| Data exposure surface     |          |             |       |

---

## 8. Risk & Compliance Assessment

- New risks introduced:
- Risks reduced:
- Compliance alignment (GDPR, auditability):
- Residual concerns:

---

## 9. Conclusions

- Pilot success criteria met: YES / NO / PARTIAL
- Conditions for scale-up:
- Required changes before production:
- Recommendation:

---

## 10. Appendices

- Evidence pack references
- Verifier configuration
- Additional notes

---

### Declaration

This report evaluates a **technical pilot**.  
It does not establish legal obligations, identity claims, or custodial responsibilities.

Audit-first. Fail-closed. Hash-only. No data custody.
