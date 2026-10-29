import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const pub = (p) => readFileSync(new URL('../apps/web/public/' + p, import.meta.url), 'utf8');
const links = JSON.parse(readFileSync(new URL('../curriculum/social-links.json', import.meta.url), 'utf8'));

test('community page is split in two: current content left, four community buttons right', () => {
  const html = pub('community/index.html');
  assert.match(html, /class="community-split"><div class="community-main">/);
  const panel = html.split('class="community-join"')[1] ?? '';
  for (const id of ['Whop', 'Discord', 'Telegram', 'Facebook']) assert.ok(panel.includes(`<b>${id}</b>`), id);
  assert.equal((panel.match(/class="cbtn[ "]/g) || []).length, 4);
  for (const name of ['Starter challenge', 'Facilitator kit', 'Improve the lessons', 'Ship something this week', 'Community guidelines'])
    assert.ok(html.split('class="community-join"')[0].includes(name), name);
});

test('a platform is a real https link or a non-clickable "Opening soon" — never a dead link', () => {
  const html = pub('community/index.html') + pub('contact.html');
  assert.doesNotMatch(html, /class="(cbtn|sicon)"[^>]*href="(#|)"/);
  for (const p of links.platforms) {
    if (p.url) {
      assert.match(p.url, /^https:\/\//, p.id);
      assert.ok(html.includes(`href="${p.url}"`), `${p.id} link rendered`);
    } else assert.ok(html.includes(`${p.name}: opening soon`), `${p.id} shown as opening soon`);
  }
});

test('contact page has a clickable icon (or opening-soon icon) for every social platform', () => {
  const html = pub('contact.html');
  assert.equal((html.match(/class="sicon[ "]/g) || []).length, links.platforms.length);
  assert.match(html, /<a class="sicon" href="https:\/\/github\.com\/king-kunta-cpu\/open-practice"/);
});
