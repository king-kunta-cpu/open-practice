# Activity artwork refresh — batches 1–4

Forty original AI-generated editorial illustrations now replace activity covers 01–40. Every scene is specific to its activity, with vivid colour, dimensional lighting, shading and material texture. These are conceptual illustrations, not provider screenshots. The corresponding forty workflow guides have illustrated headers, colour-coded stages, shaded process diagrams and readable vector text. Guides and covers embed their artwork, retaining standalone/offline behavior.

Files `*-guide.webp` are smaller thumbnails of the corresponding original. Source artwork here is consumed by `scripts/activity-art.py` through the deterministic activity builder; it is not loaded from a third-party image host. The activity catalogue, collection selectors, dashboard, tools directory and downloadable packs reuse the refreshed SVGs.

**10 covers/guides remain pending: activities 41–50.** The image generator permits ten new images in each turn. No claim that all fifty have been replaced is made.

Original Open Practice materials: CC BY 4.0. Retouch/crop/compression is performed before deterministic builds. Production now uses Cloudflare's native ASSETS binding on the same Worker, preserving artwork quality without another hosting service or provider. The larger generated static module remains only as a portable integration-test fixture; it is deliberately excluded from the deployed Worker module graph.
