"""API Keys hub, provider guides and the key settings page."""
from layout import page, hero, card, grid, faq_html, faq_ld, e, BASE
import sys
sys.path.insert(0, str(__import__('pathlib').Path(__file__).resolve().parents[2] / 'content/hub'))
from keys import GUIDES, DIRECTORY, CATS, KINDS, CHECKED

SAFETY = ['Treat a key like a password: never post it in chats, screenshots, GitHub or website code.', 'Create one key per project so you can delete just that one if it leaks.', 'If a key leaks, delete it in the provider console immediately and create a new one.', 'Prefer free-only keys (for example, OpenRouter with a $0 credit limit) so a leak cannot cost money.', 'On a shared or public computer, do not tick “remember on this device”, and press “Forget all keys” when you finish.']
KEY_FAQ = [('What is an API key?', 'A long secret code that identifies you to an AI provider, like a password for programs. Tools use it to send your request to the provider’s models on your behalf.'),
           ('Which free AI key should I get first?', 'Groq: email signup, no card, fast, and every Open Practice tool supports it. Add Google Gemini second for long documents, and OpenRouter as a backup.'),
           ('Is it safe to paste my key into Open Practice?', 'Your key is kept in your browser (this tab only, unless you choose to remember it) and is sent only to the provider you selected, straight from your browser. Open Practice servers never receive it. Still, only use keys on devices you trust.'),
           ('Why is the AI not available in my country?', 'Some providers restrict countries for legal or business reasons. Each guide lists region notes; Groq and OpenRouter work in most countries. Never use VPNs or false details to get around restrictions — choose a provider that serves you.'),
           ('Can I use these tools with no key at all?', 'Yes. Every free tool has a guided template route that needs no AI. You learn the same skill; the key only adds AI drafting.')]

def guide_page(g, others):
    url = f'/api-keys/{g["slug"]}/'
    steps = ''.join(f'<li>{e(s)}</li>' for s in g['steps'])
    errs = ''.join(f'<tr><th scope="row">{e(a)}</th><td>{e(b)}</td></tr>' for a, b in g['errors'])
    facts = f'<dl class="key-facts"><div><dt>You need</dt><dd>{e(g["needs"])}</dd></div><div><dt>Free allowance</dt><dd>{e(g["free"])}</dd></div><div><dt>Best for</dt><dd>{e(g["best"])}</dd></div><div><dt>Region notes</dt><dd>{e(g["region"])}</dd></div>' + (f'<div><dt>Key looks like</dt><dd><code>{e(g["prefix"])}…</code></dd></div>' if g['prefix'] else '') + '</dl>'
    use = ('<section class="hub-section callout"><h2>Use it on Open Practice</h2><p>Paste the key into <a href="/settings/">Key settings</a> and press <b>Test key</b>. Then open any <a href="/free-tools/">free tool</a> and choose “Draft with my AI key”. The key stays in your browser.</p></section>'
           if g['runtime'] else '<section class="hub-section callout"><h2>Where you will use it</h2><p>This provider is for your own projects — for example the Telegram, Discord and chat-widget projects in <a href="/free-tools/#build">Build apps</a>. It is not used inside Open Practice tools.</p></section>')
    links = f'<p class="key-links"><a class="key-signup" href="{e(g["console"])}" rel="noopener" target="_blank" aria-label="Sign up for {e(g["name"])} and open its console (opens in a new tab)">Sign up ↗</a> <a href="{e(g["docs"])}" rel="noopener" target="_blank">Official quickstart ↗</a> <a href="{e(g["limits"])}" rel="noopener" target="_blank">Live limits / pricing ↗</a></p>'
    body = hero(f'API KEYS · GUIDE {g["rank"]} OF {len(GUIDES)}', f'How to get a free {g["name"]} API key', g['tagline'], f'<p class="hub-meta">Checked {CHECKED}. Free tiers change — confirm the live numbers in the console.</p>' + links)
    body += facts + f'<section class="hub-section"><h2>Step by step</h2><ol class="key-steps">{steps}</ol></section>' + use
    body += f'<section class="hub-section"><h2>If something goes wrong</h2><table class="hub-table"><tbody>{errs}</tbody></table></section>'
    body += '<section class="hub-section"><h2>Keep your key safe</h2><ul class="hub-list">' + ''.join(f'<li>{e(s)}</li>' for s in SAFETY) + '</ul></section>'
    body += '<section class="hub-section"><h2>Other free keys</h2>' + grid([card(f'/api-keys/{o["slug"]}/', o['name'], o['tagline'], 'GUIDE') for o in others if o is not g]) + '</section>'
    faq = [(f'Is {g["name"]} free?', g['free']), (f'Do I need a credit card for {g["name"]}?', g['needs']), (f'Is {g["name"]} available in my country?', g['region'])]
    body += faq_html(faq)
    ld = [{'@context': 'https://schema.org', '@type': 'HowTo', 'name': f'How to get a free {g["name"]} API key', 'totalTime': 'PT5M', 'estimatedCost': {'@type': 'MonetaryAmount', 'currency': 'USD', 'value': '0'}, 'step': [{'@type': 'HowToStep', 'position': i + 1, 'text': s} for i, s in enumerate(g['steps'])]}, faq_ld(faq)]
    page(url, f'Free {g["name"]} API key: step-by-step guide', f'How to get a free {g["name"]} API key in minutes: what you need, the free limits ({CHECKED}), region notes, errors and safety tips.', body, crumbs=[('API keys', '/api-keys/'), (g['name'], None)], ld=ld, active='API Keys ✦', priority=0.85)

def hub_page():
    rows = ''.join(f'<tr data-cat="{c}" data-kind="{k}"><td><label class="key-have"><input type="checkbox" data-api="{e(n)}" aria-label="I have a {e(n)} key"></label></td><th scope="row">' + (f'<a href="{local}">{e(n)}</a>' if local else e(n)) + f'</th><td>{e(CATS[c])}</td><td><span class="pill pill-{k}">{e(KINDS[k])}</span></td><td>{e(d)}</td><td><a class="key-signup" href="{e(u)}" rel="noopener nofollow" target="_blank" aria-label="Sign up for {e(n)} (opens in a new tab)">Sign up ↗</a></td></tr>'
                   for c, n, k, d, u, local in DIRECTORY)
    filters = '<div class="key-filters" role="group" aria-label="Filter APIs"><button type="button" class="selected" data-filter="all">All</button>' + ''.join(f'<button type="button" data-filter="cat:{c}">{e(v)}</button>' for c, v in CATS.items()) + '<button type="button" data-filter="kind:nokey">No key needed</button><button type="button" data-filter="mine">My keys</button></div>'
    decision = ('<section class="hub-section"><h2>Which key first? Our recommendation</h2><table class="hub-table"><thead><tr><th>If you…</th><th>Get</th><th>Why</th></tr></thead><tbody>'
                '<tr><td>are new to AI APIs</td><td><a href="/api-keys/groq/">Groq</a></td><td>Email only, no card, fast, works in most countries.</td></tr>'
                '<tr><td>work with long documents or many languages</td><td><a href="/api-keys/google-gemini/">Google Gemini</a></td><td>Free Flash models with a huge context window (region list applies).</td></tr>'
                '<tr><td>want a backup or to try many models</td><td><a href="/api-keys/openrouter/">OpenRouter</a></td><td>One key, many free models (50 requests/day free).</td></tr>'
                '<tr><td>build bots and websites on Cloudflare</td><td><a href="/api-keys/cloudflare-workers-ai/">Cloudflare Workers AI</a></td><td>Free daily allowance in the same account as your Worker.</td></tr>'
                '<tr><td>cannot get any key right now</td><td><a href="/free-tools/">Guided templates</a></td><td>Every tool works without AI. You still learn the skill.</td></tr></tbody></table></section>')
    body = hero('API KEYS ✦ FREE', 'Free AI API keys — where to get them and how', 'Step-by-step guides for the free AI providers that work best for learners, plus a checked directory of free APIs for your own projects. Get a key in five minutes, test it here, then use it in every free tool.',
                f'<p class="hub-meta">Last checked {CHECKED} · <a href="/settings/">Open key settings →</a></p>')
    body += decision + '<section class="hub-section"><h2>Step-by-step key guides</h2>' + grid([card(f'/api-keys/{g["slug"]}/', g['name'], g['tagline'], ('WORKS IN OUR TOOLS' if g['runtime'] else 'FOR YOUR PROJECTS')) for g in GUIDES]) + '</section>'
    body += f'<section class="hub-section" id="directory"><h2>Free API directory <small>{len(DIRECTORY)}</small></h2><p>Tick the APIs you already have — your list stays on this device. Free tiers change often; open the provider page before you build.</p>{filters}<p class="hub-meta" id="key-count"></p><div class="table-wrap"><table class="hub-table key-table"><thead><tr><th>Have</th><th>API</th><th>Category</th><th>Access</th><th>What it does</th><th>Link</th></tr></thead><tbody>{rows}</tbody></table></div></section>'
    body += '<section class="hub-section"><h2>Keep every key safe</h2><ul class="hub-list">' + ''.join(f'<li>{e(s)}</li>' for s in SAFETY) + '</ul></section>' + faq_html(KEY_FAQ)
    page('/api-keys/', 'Free AI API Keys: step-by-step guides + directory', f'Get free AI API keys from Groq, Google Gemini, OpenRouter, Mistral and more: step-by-step guides, region notes and a directory of {len(DIRECTORY)} free APIs.', body, crumbs=[('API keys', None)], ld=[faq_ld(KEY_FAQ)], scripts=('/keys-directory.js',), active='API Keys ✦', priority=0.95)

def settings_page():
    runtime = [g for g in GUIDES if g['runtime']]
    opts = ''.join(f'<option value="{ {"google-gemini": "gemini"}.get(g["slug"], g["slug"]) }">{e(g["name"])}</option>' for g in runtime)
    body = hero('YOUR AI KEYS', 'Key settings', 'Add your own free AI key so the free tools can draft and revise for you. The key stays in this browser and is sent only to the provider you choose — never to Open Practice.')
    body += ('<section class="ws settings" aria-label="Key settings"><form id="key-form" class="ws-form">'
             f'<div class="ws-field"><label for="k-provider">Provider</label><select id="k-provider" name="provider">{opts}</select><small class="ws-help" id="k-guide"></small></div>'
             '<div class="ws-field"><label for="k-key">API key</label><input id="k-key" name="key" type="password" autocomplete="off" spellcheck="false" maxlength="300" placeholder="Paste your key"><label class="inline"><input type="checkbox" id="k-show"> Show key</label></div>'
             '<div class="ws-field"><label for="k-model">Model</label><select id="k-model" name="model"><option value="">Automatic (pick a free model)</option></select><small class="ws-help">Press “Test key” to load the models your key can use.</small></div>'
             '<label class="inline"><input type="checkbox" id="k-remember"> Remember on this device (otherwise forgotten when you close the tab)</label>'
             '<div class="ws-routes"><button type="button" id="k-test" class="secondary">Test key</button><button class="primary">Save</button><button type="button" id="k-clear" class="danger">Forget all keys</button></div>'
             '<p id="k-status" class="ws-status" role="status" aria-live="polite"></p></form>'
             '<div class="ws-step"><h2>Saved providers</h2><ul id="k-saved" class="hub-list"><li>None yet.</li></ul></div>'
             '<div class="ws-step"><h2>Try it</h2><p>Send a tiny test prompt (uses one request from your free allowance).</p><button type="button" id="k-try" class="secondary">Say hello</button><pre id="k-try-out" class="code" hidden></pre></div></section>')
    body += '<section class="hub-section"><h2>Do not have a key?</h2><p>Follow a 5-minute guide: <a href="/api-keys/groq/">Groq</a> (recommended), <a href="/api-keys/google-gemini/">Google Gemini</a>, <a href="/api-keys/openrouter/">OpenRouter</a>, <a href="/api-keys/mistral/">Mistral</a>. Or skip it — every tool has a guided template that works without AI.</p></section>'
    body += '<section class="hub-section"><h2>Safety</h2><ul class="hub-list">' + ''.join(f'<li>{e(s)}</li>' for s in SAFETY) + '</ul></section>'
    page('/settings/', 'AI key settings', 'Add your own free AI key (Groq, Gemini, OpenRouter, Mistral, Cerebras) to power Open Practice tools. Stored only in your browser, never on our servers.', body, crumbs=[('API keys', '/api-keys/'), ('Key settings', None)], scripts=('/settings.js',), active='API Keys ✦', priority=0.4)

def build():
    hub_page()
    for g in GUIDES:
        guide_page(g, GUIDES)
    settings_page()
