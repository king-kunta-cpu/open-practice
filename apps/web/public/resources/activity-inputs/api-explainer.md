# Original fictional input / Explain an API with success and failure paths

Fictional contract: GET /playlists/p01 with a valid authorized token returns {"id":"p01","tracks":["t01","t02"]}. Missing/invalid token → 401. Valid token without access → 403. Missing playlist → 404. Too many requests → 429 with a retry hint. No real service or credential is involved.

No private data or credentials are required. CC BY 4.0.
