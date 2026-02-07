# IPR — Identity Primary Record
## European Technical Minimum Standard v1.0

Status: ACTIVE  
Mode: Public verifiable  
Policy: Hash-only · Fail-closed · No custody  

---

## 1. Purpose

Define a minimal technical reference for verifiable attribution of responsibility
without centralized identity storage.

This standard does not create legal identity.
It creates a verifiable responsibility anchor.

---

## 2. Core Components

A valid IPR implementation requires:

1. Identity payload (local, private)
2. Deterministic hash of payload
3. Receipt binding payload hash
4. Public verification mechanism
5. Append-only trace capability

If any component is missing → invalid.

---

## 3. Payload Rules

Payload must include minimum:

- name (private)
- surname (private)
- geopolitical reference (nation/region/city)
- timestamp
- optional public nickname

Payload is never required to be public.

Only its hash is used.

---

## 4. Receipt Rules

A valid receipt must contain:

- payload_sha256
- receipt_sha256
- issued_at
- public nickname (optional)
- issuer seal

Receipt must be:

deterministic  
recomputable  
verifiable without contacting issuer  

If hash mismatch occurs → fail-closed.

---

## 5. Verification Model

Verification must be:

local  
deterministic  
reproducible  
server-independent  

Result must be binary:

AUTHORIZED  
DENIED  

No partial states.

---

## 6. Registry Model

Public registry may include:

- nickname
- payload hash
- timestamp

No personal identity required.

Registry must be append-only.

---

## 7. Independence Principle

Any entity may implement this standard.

No central authority required.  
No permission required.  
No ownership enforcement.

Multiple compatible implementations allowed.

---

## 8. Versioning

v1.0 — Initial European minimal technical standard  
Append-only evolution only  
No retroactive modification
