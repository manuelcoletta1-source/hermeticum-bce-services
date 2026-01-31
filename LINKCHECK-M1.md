# LINKCHECK-M1 — Navigation Checklist (click-by-click)
Status: ACTIVE_CHECK
Policy: UE-first · GDPR-min · HASH-only · AUDIT · FAIL-CLOSED
Baseline: PLATFORM-M1 (append-only)

This checklist is deterministic: each step must be reachable in ≤2 clicks from the canonical entrypoints.
If a step is not reachable, the system is considered INVALID for M1 navigation (fail-closed).

---

## 0) Canonical Rules (M1)
- Canonical operational entrypoint: `/onboarding/`
- Public verification entrypoint: `/verify/`
- Information corridors must not create alternate operational flows.
- If a page provides a “Create” action, it must still point to canonical onboarding unless explicitly guarded and documented.
- Fail-closed: broken or ambiguous links invalidate the navigation check.

---

## 1) Home (root) — `/`
### Expected
- Header and footer render (partials injected).
- Primary CTA: `Onboarding`
- Secondary CTA: `Verify`
- Optional CTA: `Catalog`
- “Status: IDLE” is explained as prudential state (not “offline”).

### Clicks
1. From Home click `Onboarding` → must open `/onboarding/`
2. From Home click `Verify` → must open `/verify/`
3. From Home click `Catalog` → must open `/catalog/`
4. From Home footer click `Privacy` → must open `/privacy/`
5. From Home footer click `Terms` → must open `/terms/`
6. From Home footer click `Status` → must open `/status/`
7. From Home footer click `Manifest` → must open `/manifest/`
8. From Home header click `Governance` → must open `/governance/`
9. From Home header click `Tech` → must open `/tech/`
10. From Home header click `Map` → must open `/map/`

Pass criteria: all links above resolve to an existing page with coherent UX.

---

## 2) Canonical Onboarding — `/onboarding/`
### Expected
- Clearly marked as official router (no duplicate flows).
- Provides route to:
  - `/register/` (territory + light/strong)
  - `/create/` (guarded creation)
  - `/verify/` (verification)
- No alternative “hidden” entrypoints.

### Clicks
1. From `/onboarding/` click `Register` (or equivalent) → `/register/`
2. From `/onboarding/` click `Create` (guarded) → `/create/`
3. From `/onboarding/` click `Verify` → `/verify/`

Pass criteria: all three exist and are reachable without dead ends.

---

## 3) Register — `/register/`
### Expected
- Territory path: Country → Region → City → District (Quartiere)
- Light/Strong selection is explained.
- No personal data custody claims (GDPR-min, hash-only).
- Provides forward CTA:
  - to `/create/` (after selection)
  - to `/onboarding/` (back)
  - to `/verify/` (for validation concept)

### Clicks
1. From `/register/` click `Create` → `/create/`
2. From `/register/` click `Back to Onboarding` → `/onboarding/`
3. From `/register/` click `Verify` → `/verify/`

Pass criteria: navigation works and the page does not present itself as an ID provider.

---

## 4) Create — `/create/`
### Expected
- Guarded creation: explicit fail-closed conditions.
- Outputs are hash-only (no hidden custody).
- Links to:
  - `/schemas/` (receipt/IPR schema references)
  - `/anchor/` (optional manual anchor pack builder)
  - `/verify/` (verify after create)
  - `/tech/` (audit checklists)

### Clicks
1. From `/create/` click `Verify` → `/verify/`
2. From `/create/` click `Schemas` → `/schemas/`
3. From `/create/` click `Anchor` → `/anchor/`
4. From `/create/` click `Tech` → `/tech/`

Pass criteria: all links resolve and the page states fail-closed behavior.

---

## 5) Verify — `/verify/`
### Expected
- Deterministic verification messaging (state-only).
- Explains fail-closed: “if cannot verify → invalid”.
- Links to:
  - `ed25519_pub.pem` (public key reference)
  - `/tech/` (checklist)
  - `/evidence-pack/` (adoption context) or `/evidence/` demo

### Clicks
1. From `/verify/` click public key reference → `/ed25519_pub.pem`
2. From `/verify/` click `Tech` → `/tech/`
3. From `/verify/` click `Evidence Pack` → `/evidence-pack/` (or `/evidence/`)

Pass criteria: all targets open; verification page stays coherent if inputs are missing.

---

## 6) Corridors must route to Onboarding (no alternate flows)
Corridors:
- `/citizen/`
- `/professional/`
- `/institution/`
- `/cta/`
- `/phase-1/`

### Expected
- Each corridor must include:
  - Primary CTA: `/onboarding/`
  - Secondary CTA: `/verify/`
  - Optional: `/catalog/`, `/tech/`, `/evidence-pack/`

### Clicks (repeat for each corridor)
1. Click primary CTA → `/onboarding/`
2. Click verify CTA → `/verify/`

Pass criteria: corridors never create a parallel “register/create” flow that bypasses onboarding.

---

## 7) Information / Governance / Compliance pages
Pages:
- `/about/`
- `/ai/`
- `/governance/`
- `/privacy/`
- `/terms/`
- `/manifest/`
- `/normative/`
- `/research/`
- `/catalog/`
- `/evidence-pack/`
- `/map/`
- `/modules/`
- `/tech/`

### Expected
- Header/footer present.
- Links do not break.
- Any “operate now” CTA routes to `/onboarding/` and/or `/verify/` first.

### Clicks (minimum)
1. From each page click `Onboarding` in header → `/onboarding/`
2. From each page click `Verify` in header → `/verify/`

Pass criteria: consistent navigation and no dead ends.

---

## 8) 404 behavior
Page:
- `/404.html`

### Expected
- Fail-closed messaging: unknown routes are not trusted.
- Provides safe recovery:
  - `/` home
  - `/verify/`
  - `/onboarding/`

### Clicks
1. From `/404.html` click `Onboarding` → `/onboarding/`
2. From `/404.html` click `Verify` → `/verify/`
3. From `/404.html` click `Home` → `/`

Pass criteria: recovery links always work.

---

## Result Recording (M1)
When running LINKCHECK-M1:
- Record date/time (local)
- Record any broken link
- If any broken link exists → FAIL (fail-closed)
- Fix requires new commit(s) + rerun checklist

End.
