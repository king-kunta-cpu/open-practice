"""Prepare raw cover illustrations for the build (needs Pillow; run by hand, not in CI).

  python scripts/prepare-cover-art.py <raw-dir>

<raw-dir>/tools/<slug>.jpg     -> branding/tool-art/<slug>.webp  + apps/web/public/brand/social/tools/<slug>.jpg
<raw-dir>/library/<id>.jpg     -> branding/library-art/<id>.webp
<raw-dir>/pages/<name>.jpg     -> apps/web/public/brand/pages/<name>.webp

Refuses an image that is pixel-identical (perceptual hash) to one already prepared, so no two tools,
courses or library items can end up sharing artwork.
"""
import sys
from pathlib import Path
from PIL import Image

R = Path(__file__).resolve().parent.parent
PUB = R / 'apps/web/public'


def ahash(im):
    g = im.convert('L').resize((16, 16))
    px = list(g.getdata()); avg = sum(px) / len(px)
    return ''.join('1' if p > avg else '0' for p in px)


def portrait(im, w=600, h=720):
    im = im.convert('RGB'); s = max(w / im.width, h / im.height)
    im = im.resize((round(im.width * s), round(im.height * s)), Image.LANCZOS)
    l, t = (im.width - w) // 2, (im.height - h) // 2
    return im.crop((l, t, l + w, t + h))


def social(im, w=1200, h=630):
    im = im.convert('RGB'); s = w / im.width
    im = im.resize((w, round(im.height * s)), Image.LANCZOS)
    t = max(0, round((im.height - h) * 0.3))
    return im.crop((0, t, w, t + h))


def main(raw):
    raw = Path(raw); seen = {}
    for d in ('tool-art', 'library-art'):
        for p in (R / 'branding' / d).glob('*.webp'):
            seen[ahash(Image.open(p))] = p.name
    plan = [('tools', R / 'branding/tool-art', True), ('library', R / 'branding/library-art', False), ('pages', PUB / 'brand/pages', False)]
    for sub, out, og in plan:
        out.mkdir(parents=True, exist_ok=True)
        for src in sorted((raw / sub).glob('*.jpg')):
            im = Image.open(src); h = ahash(im); dest = out / (src.stem + '.webp')
            if h in seen and seen[h] != dest.name:
                sys.exit(f'{src} duplicates {seen[h]}: generate a different illustration')
            seen[h] = dest.name
            size = (600, 720) if sub != 'pages' else (720, 864)
            portrait(im, *size).save(dest, 'WEBP', quality=72, method=6)
            if og:
                so = PUB / 'brand/social/tools'; so.mkdir(parents=True, exist_ok=True)
                social(im).save(so / (src.stem + '.jpg'), 'JPEG', quality=80, optimize=True, progressive=True)
            print('ok', sub, src.stem)


if __name__ == '__main__':
    main(sys.argv[1] if len(sys.argv) > 1 else '.')
