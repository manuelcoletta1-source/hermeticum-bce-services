import hashlib
import subprocess
import sys

# 1. Gate check
result = subprocess.run(
    ["python3", "gate_check.py"],
    capture_output=True,
    text=True
)

if result.returncode != 0:
    print("FAIL-CLOSED:", result.stdout)
    sys.exit(1)

print("PASS: running AI inference")

# 2. Dummy AI inference
input_text = "Hermeticum ex-ante governance"
output_text = "CLASS_A"

# 3. Hash output
output_hash = hashlib.sha256(output_text.encode()).hexdigest()

# 4. Write evidence pack
evidence = {
    "proto": "HBCE-EVIDENCE-PACK-v1",
    "ipr_id": "ipr-demo-001",
    "job_hash": "hash_job_example_123",
    "output_hash": output_hash,
    "result": {
        "status": "AUTHORIZED"
    }
}

with open("evidence-pack.json", "w") as f:
    import json
    json.dump(evidence, f, indent=2)

print("Inference completed. Evidence Pack generated.")
