from pathlib import Path
import json
PROFILES=json.loads(Path(__file__).with_name("profiles.json").read_text())
