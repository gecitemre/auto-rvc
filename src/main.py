import subprocess
import sys

import config

if __name__ == "__main__":
    process = subprocess.Popen(
        ["python", "infer-web.py"],
        stdout=sys.stdout,
        stderr=sys.stderr,
        universal_newlines=True,
        cwd="Retrieval-based-Voice-Conversion-WebUI",
    )

    process.wait()
