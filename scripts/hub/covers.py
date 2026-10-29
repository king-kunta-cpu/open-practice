"""Unique cover art for every free tool and every library item (0.11.1). Standard-library build only.

Raster originals are compressed WebP under branding/tool-art/<slug>.webp and branding/library-art/<id>.webp
(prepared once by scripts/prepare-cover-art.py, which needs Pillow and is not part of the build). This module
wraps each one in a self-contained SVG with authored typography, the same art direction as the course and
activity covers, so pages, ZIP downloads and offline copies need no network:

  apps/web/public/brand/tools/<slug>.svg         card + hero cover
  apps/web/public/brand/library/<id>.svg         library card cover
  apps/web/public/brand/social/tools/<slug>.jpg  1200x630 share image (written by prepare-cover-art.py)

A tool without art keeps its emoji card until its art lands; no tool ever borrows another's image.
"""
import base64, html, textwrap
from pathlib import Path

R = Path(__file__).resolve().parents[2]
PUB = R / 'apps/web/public'
VER = 'v=cover-20261029'


def _art(kind, key):
    p = R / 'branding' / f'{kind}-art' / f'{key}.webp'
    return p if p.exists() else None


def _text(x, y, s, size, color='#fff', family='Georgia,serif', extra=''):
    return f'<text x="{x}" y="{y}" fill="{color}" font-family="{family}" font-size="{size}" {extra}>{html.escape(s)}</text>'


def _wrap(art, title, eyebrow, footer, label):
    lines = textwrap.wrap(title, 22)[:3]
    y = 640 - 46 * (len(lines) - 1)
    uri = 'data:image/webp;base64,' + base64.b64encode(art.read_bytes()).decode()
    out = (f'<svg xmlns="http://www.w3.org/2000/svg" width="600" height="720" viewBox="0 0 600 720" role="img" aria-label="{html.escape(label)}">'
           '<defs><linearGradient id="shade" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#33241a" stop-opacity="0"/>'
           '<stop offset=".45" stop-color="#33241a" stop-opacity=".88"/><stop offset="1" stop-color="#43180f"/></linearGradient></defs>'
           f'<rect width="600" height="720" fill="#7c1f16"/><image width="600" height="720" preserveAspectRatio="xMidYMid slice" href="{uri}"/>'
           f'<rect y="{y - 120}" width="600" height="{840 - y}" fill="url(#shade)"/>'
           '<rect x="22" y="22" width="190" height="34" rx="17" fill="#fff8ef" fill-opacity=".92"/>'
           + _text(117, 45, eyebrow, 13, '#7c1f16', 'Arial,sans-serif', 'text-anchor="middle" font-weight="bold" letter-spacing="1.6"')
           + _text(578, 45, 'OPEN PRACTICE', 13, '#fff', 'Arial,sans-serif', 'text-anchor="end" letter-spacing="2"'))
    for i, line in enumerate(lines):
        out += _text(32, y + i * 46, line, 40, extra='font-weight="bold"')
    out += _text(33, 694, footer.upper(), 12, '#ffcf91', 'Arial,sans-serif', 'letter-spacing="1.3"') + '</svg>'
    return out


def tool_cover(slug):
    """Public URL of a tool's cover, or None while its art is still missing."""
    return f'/brand/tools/{slug}.svg?{VER}' if _art('tool', slug) else None


def tool_og(slug):
    return f'/brand/social/tools/{slug}.jpg' if (PUB / 'brand/social/tools' / f'{slug}.jpg').exists() else None


def library_cover(item_id):
    return f'/brand/library/{item_id}.svg?{VER}' if _art('library', item_id) else None


def write_tool_covers(tools, cat_name):
    out = PUB / 'brand/tools'
    out.mkdir(parents=True, exist_ok=True)
    n = 0
    for t in tools:
        art = _art('tool', t['slug'])
        if not art:
            continue
        kind = 'BUILD APP' if t.get('builder') else 'IN-BROWSER' if t.get('util') else 'FREE TOOL'
        svg = _wrap(art, t['name'], kind, f'{cat_name.get(t["cat"], t["cat"])} · learn by doing',
                    f'{t["name"]}: original illustrated cover for this Open Practice tool')
        (out / f'{t["slug"]}.svg').write_text(svg, encoding='utf-8')
        n += 1
    return n


def write_library_covers(items):
    out = PUB / 'brand/library'
    out.mkdir(parents=True, exist_ok=True)
    n = 0
    for it in items:
        art = _art('library', it['id'])
        if not art:
            continue
        svg = _wrap(art, it['title'], it['kind'].upper()[:16], 'Free library · learn by doing',
                    f'{it["title"]}: original illustrated cover for this library item')
        (out / f'{it["id"]}.svg').write_text(svg, encoding='utf-8')
        n += 1
    return n
