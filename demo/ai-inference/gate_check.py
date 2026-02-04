import json
import sys

def gate_check(ipr_path):
    with open(ipr_path, "r") as f:
        ipr = json.load(f)

    required = ["ipr_id", "subject_id", "action_id", "hashes", "policy"]

    for r in required:
        if r not in ipr:
            return False, "DENIED_MISSING_FIELD"

    if ipr["policy"].get("fail_closed") is not True:
        return False, "DENIED_POLICY_FAIL"

    return True, "PASS"

if __name__ == "__main__":
    ok, reason = gate_check("ipr-example.json")
    print(ok, reason)
    sys.exit(0 if ok else 1)
