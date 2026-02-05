# Security Policy — HERMETICUM

> EU-aligned security posture  
> Audit-first · Fail-closed · Hash-only · No data custody  
> Status: Public

---

## 1. Scope

This document describes the **security posture**, **disclosure process**, and **operational boundaries**
of the HERMETICUM platform and its EU pilots.

HERMETICUM is an **infrastructure layer** for attribution, responsibility, and traceability.
It is **not** an identity provider, data custodian, or surveillance system.

---

## 2. In-Scope Components

The following components are in scope for security review and disclosure:

- Public verification logic (pass/fail)
- Receipt and manifest formats
- Deterministic verification behavior
- Audit-first output formats
- Public-facing pilot interfaces

---

## 3. Out-of-Scope Components

The following are explicitly **out of scope**:

- Custody of personal data
- Centralized identity databases
- Behavioral profiling or scoring
- Automated decision-making systems
- Enforcement or sanction mechanisms

---

## 4. Security Principles

HERMETICUM follows these non-negotiable principles:

- **Fail-Closed**  
  If verification cannot be completed, the result is invalid.

- **No Data Custody**  
  No mandatory central storage of personal data.

- **Hash-Only Verification**  
  Verification relies on cryptographic hashes and signatures, not raw data.

- **Audit-First Design**  
  Every output is designed to be inspectable, repeatable, and comparable.

---

## 5. Threat Model (High-Level)

Considered threat classes:

- Record manipulation
- Ambiguous responsibility attribution
- Non-repeatable verification
- Excessive data exposure

Mitigations:

- Append-only trace design
- Deterministic verification
- Minimal data surface
- Explicit scope boundaries

---

## 6. Vulnerability Disclosure

### Responsible disclosure

Security researchers and institutional reviewers are encouraged to report vulnerabilities responsibly.

Please include:
- Clear description of the issue
- Affected component or file
- Steps to reproduce (if applicable)
- Expected vs actual behavior

### Contact (placeholder)

A formal disclosure channel will be provided for pilot and production phases.

Current status:
- Disclosure channel: **TO BE DEFINED**
- Recommended method: secure email / institutional contact

---

## 7. Pilot vs Production

### Demo / Pilot
- Illustrative implementations
- Reduced threat surface
- No production guarantees

### Production (future)
- Hardened cryptography
- Formal key management
- Documented governance procedures
- Institutional compliance review

---

## 8. No Warranty Statement

This software and documentation are provided **as-is** for evaluation purposes.

No guarantees are made regarding:
- Fitness for a particular purpose
- Legal validity
- Operational continuity

---

## 9. Updates

This security policy may be updated as the system evolves.
Changes will be documented via version control.

---

### Declaration

This document describes a **technical security posture**.  
It does not imply legal authority, custodial responsibility, or enforcement power.

Audit-first. Fail-closed. Hash-only. No data custody.
