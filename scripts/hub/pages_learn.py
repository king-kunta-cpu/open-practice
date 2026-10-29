"""/learn/ hub, beginners, seniors (large print) and kids sections."""
from layout import page, hero, card, grid, faq_html, faq_ld, e, BASE
import pages_tools
from learn import BEGINNERS, SENIORS, SENIOR_TOOLS, KIDS_TOOLS

def lesson_page(l, i, lessons, base, section, big=False):
    url = f'{base}{l["slug"]}/'
    steps = ''.join(f'<li>{e(s)}</li>' for s in l['steps'])
    checks = ''.join(f'<details><summary>{e(q)}</summary><p>{e(a)}</p></details>' for q, a in l['check'])
    label, href = l['try_']
    prev_ = lessons[i - 1] if i > 0 else None
    next_ = lessons[i + 1] if i + 1 < len(lessons) else None
    nav = '<nav class="lesson-nav" aria-label="Lesson navigation">' + (f'<a href="{base}{prev_["slug"]}/">← {e(prev_["title"])}</a>' if prev_ else '<span></span>') + (f'<a href="{base}{next_["slug"]}/">{e(next_["title"])} →</a>' if next_ else f'<a href="{base}">Back to {e(section)} →</a>') + '</nav>'
    body = hero(f'{section.upper()} · LESSON {i + 1} OF {len(lessons)} · {l["minutes"]} MIN', l['title'], l['why'])
    body += f'<section class="hub-section ws-step"><h2>Do it now</h2><ol class="key-steps">{steps}</ol><p><a class="primary" href="{href}">{e(label)} →</a></p></section>'
    body += f'<section class="hub-section hub-faq quiz"><h2>Check yourself</h2><p>Answer in your head first, then open each one.</p>{checks}</section>'
    body += f'<section class="hub-section callout"><h2>Tip</h2><p>{e(l["tip"])}</p><p><button type="button" class="secondary" data-lesson-done="{e(base + l["slug"])}">I did this ✓</button></p></section>' + nav
    if big:
        body = f'<div class="big-print">{body}</div>'
    ld = [{'@context': 'https://schema.org', '@type': 'HowTo', 'name': l['title'], 'description': l['desc'], 'totalTime': f'PT{l["minutes"]}M', 'estimatedCost': {'@type': 'MonetaryAmount', 'currency': 'USD', 'value': '0'}, 'step': [{'@type': 'HowToStep', 'position': n + 1, 'text': s} for n, s in enumerate(l['steps'])]},
          {'@context': 'https://schema.org', '@type': 'LearningResource', 'name': l['title'], 'url': BASE + url, 'learningResourceType': 'Lesson', 'timeRequired': f'PT{l["minutes"]}M', 'isAccessibleForFree': True, 'inLanguage': 'en', 'educationalLevel': 'Beginner'}]
    page(url, l['title'], l['desc'], body, crumbs=[('Learn', '/learn/'), (section, base), (l['title'], None)], ld=ld, scripts=('/learn-progress.js',), active='Learn', priority=0.7)

def lesson_cards(lessons, base):
    return grid([card(f'{base}{l["slug"]}/', f'{n + 1}. {l["title"]}', l['desc'], f'{l["minutes"]} MIN').replace('class="hub-card"', f'class="hub-card" data-lesson="{e(base + l["slug"])}"') for n, l in enumerate(lessons)])

def build(tools, courses, **_):
    # beginners
    for i, l in enumerate(BEGINNERS):
        lesson_page(l, i, BEGINNERS, '/learn/beginners/', 'Start here')
    total = sum(l['minutes'] for l in BEGINNERS)
    body = hero('LEARN · START HERE', 'Learn AI from zero — by doing', f'Ten short lessons, about {total // 60} hours in total. Each one ends with something real: a better prompt, a checked answer, an email sent, a page published.', '<p class="hub-meta"><span id="lessons-done">0</span> of 10 done on this device</p>')
    body += lesson_cards(BEGINNERS, '/learn/beginners/')
    body += '<section class="hub-section callout"><h2>After the ten lessons</h2><p>Pick a <a href="/academy/">project path</a> or try any of the <a href="/free-tools/">39 free tools</a>. Everything follows the same loop: brief → make → check → improve → ship.</p></section>'
    faq = [('I have never used AI. Is this for me?', 'Yes. Lesson one assumes nothing. You only need a phone or computer with a browser.'), ('Do I need to pay for anything?', 'No. Every lesson uses free tools, and most work without any AI account at all.')]
    body += faq_html(faq)
    page('/learn/beginners/', 'Learn AI for beginners: 10 hands-on lessons', 'Learn AI from zero with ten free, hands-on lessons: prompts, checking answers, free keys, email, privacy, automation and your first shipped project.', body, crumbs=[('Learn', '/learn/'), ('Start here', None)], ld=[faq_ld(faq)], scripts=('/learn-progress.js',), active='Learn', priority=0.9)
    # seniors
    for i, l in enumerate(SENIORS):
        lesson_page(l, i, SENIORS, '/learn/seniors/', 'AI for seniors', big=True)
    for t in SENIOR_TOOLS:
        pages_tools.tool_page(t, base='/learn/seniors/tools/', section='Tools for seniors', all_by_slug=tools, courses=None, audience='SENIORS')
    body = hero('LEARN · AI FOR SENIORS', 'AI for seniors — in large print, at your pace', 'Ten calm lessons and six guided helpers. Learn what AI can do, how to stay safe from scams, and how to use it for letters, family messages and appointments.', '<p class="hub-meta"><span id="lessons-done">0</span> of 10 lessons done · <a href="/learn/seniors/tools/">Guided helpers</a></p>')
    body += '<section class="hub-section callout"><h2>The one rule</h2><p>If anyone — even a familiar voice — asks for money or codes urgently, hang up and call them back on a number you already know.</p></section>'
    body += lesson_cards(SENIORS, '/learn/seniors/')
    body += '<section class="hub-section"><h2>Guided helpers</h2>' + grid([card(f'/learn/seniors/tools/{t["slug"]}/', t['name'], t['desc'], 'HELPER', t['emoji']) for t in SENIOR_TOOLS]) + '</section>'
    faq = [('Is AI safe for older adults?', 'Yes, with a few habits: never share codes or passwords, verify urgent requests with a call back, and check health or money advice with a professional.'), ('Can a family member help me?', 'Please involve them. Each lesson takes 10–15 minutes and works well side by side.')]
    body += faq_html(faq)
    page('/learn/seniors/', 'AI for seniors: free large-print lessons', 'Free, large-print AI lessons for older adults: understand AI, spot scams and fake voices, write letters, prepare doctor questions and stay private.', f'<div class="big-print">{body}</div>', crumbs=[('Learn', '/learn/'), ('AI for seniors', None)], ld=[faq_ld(faq)], scripts=('/learn-progress.js',), active='Learn', priority=0.9)
    body = hero('SENIORS · GUIDED HELPERS', 'Guided helpers for everyday tasks', 'Each helper gives you a simple template. Fill in a few details, replace the blanks with your own words, then check and use it. AI is optional.')
    body += grid([card(f'/learn/seniors/tools/{t["slug"]}/', t['name'], t['desc'], 'HELPER', t['emoji']) for t in SENIOR_TOOLS])
    page('/learn/seniors/tools/', 'Guided AI helpers for seniors', 'Six free large-print helpers for older adults: family messages, scam checking, doctor questions, formal letters, recipes and life stories.', f'<div class="big-print">{body}</div>', crumbs=[('Learn', '/learn/'), ('AI for seniors', '/learn/seniors/'), ('Helpers', None)], active='Learn', priority=0.7)
    # kids
    for t in KIDS_TOOLS:
        pages_tools.tool_page(t, base='/learn/kids/', section='AI for kids', all_by_slug=tools, courses=None, audience='KIDS')
    body = hero('LEARN · KIDS + A GROWN-UP', 'Create, imagine and think like a scientist', 'Six make-it-yourself templates for stories, poems, comics, quizzes, science and kindness. No AI, no signup, no ads — just your ideas, with a grown-up nearby.')
    body += '<section class="hub-section callout"><h2>For grown-ups</h2><p>Most AI chat services require users to be 13 or older (some 18). These templates teach the thinking behind good prompts — planning, describing, checking facts — without an AI account. When your child is old enough, the <a href="/learn/beginners/">beginner lessons</a> are the next step.</p></section>'
    body += grid([card(f'/learn/kids/{t["slug"]}/', t['name'], t['desc'], 'MAKE IT', t['emoji']) for t in KIDS_TOOLS])
    faq = [('What age is this for?', 'Roughly 7–12 with a grown-up. Younger children can dictate while an adult types.'), ('Is any data collected?', 'No. Everything stays in your browser. There is nothing to sign up for.')]
    body += faq_html(faq)
    page('/learn/kids/', 'AI for kids: creative thinking templates', 'Free, safe creative templates for kids aged 7–12: stories, poems, comics, quizzes, science journals and kindness notes. No AI account, no signup.', f'<div class="kid-friendly">{body}</div>', crumbs=[('Learn', '/learn/'), ('AI for kids', None)], ld=[faq_ld(faq)], active='Learn', priority=0.85)
    # hub
    body = hero('LEARN', 'Learn AI by doing — whoever you are', 'Short, practical lessons for complete beginners, older adults and kids. Every lesson ends with you making or checking something real.')
    body += grid([card('/learn/beginners/', 'Start here: AI from zero', 'Ten hands-on lessons, from your first prompt to your first shipped project.', 'BEGINNERS', '🌱'),
                  card('/learn/seniors/', 'AI for seniors', 'Large print, calm pace, scam safety and everyday helpers.', 'SENIORS', '🧓'),
                  card('/learn/kids/', 'AI for kids', 'Creative templates for kids with a grown-up. No AI account needed.', 'KIDS', '🧒'),
                  card('/glossary/', 'AI glossary', 'AI words explained in plain language, with a way to try each one.', 'REFERENCE', '📚'),
                  card('/tutorials/', 'Tutorials', 'Step-by-step: use free AI for real tasks.', 'HOW-TO', '🛠️'),
                  card('/use-cases/', 'Use cases', 'What AI can do for your job, shop, farm or studies.', 'IDEAS', '💡')])
    page('/learn/', 'Learn AI: beginners, seniors and kids', 'Free, hands-on AI lessons for complete beginners, older adults and kids — plus a plain-language glossary, tutorials and real use cases.', body, crumbs=[('Learn', None)], active='Learn', priority=0.9)
