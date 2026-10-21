# Activity artwork refresh — batch 1

Ten original AI-generated editorial illustrations replace activity covers 01–10. Every scene is specific to its activity, with vivid colour, dimensional lighting, shading and material texture. These are conceptual illustrations, not provider screenshots. The corresponding ten workflow guides are rebuilt with illustrated headers, colour-coded stages and readable vector text. Guides and covers embed their artwork, retaining standalone/offline behavior.

Files `*-guide.webp` are smaller thumbnails of the corresponding original. Source artwork here is consumed by `scripts/activity-art.py` through the deterministic activity builder; it is not loaded from a third-party image host. The activity catalogue, collection selectors, dashboard, tools directory and downloadable packs reuse the refreshed SVGs. All other covers/guides remain pending: the image generator allowed ten new images in this turn. No claim that all fifty have been replaced is made.

Original Open Practice materials: CC BY 4.0. Retouch/crop/compression is performed before deterministic builds. Future batches may need Cloudflare's existing static-assets binding as the generated Worker inline-payload budget fills; do not sacrifice image quality or add another hosting service just to bypass that budget.
