# 19. Debug a tiny page with evidence

Open Practice / Verify before you trust

Estimated time: 35 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Ask for a minimal repair, then compare actual browser rendering.

## Why this matters

Browsers often repair broken HTML, so “it looks fine” is not proof that markup is correct. Do not run unfamiliar scripts. This exercise uses a harmless text-formatting fragment and a sandboxed preview with scripting disabled. Keep the fix small enough to explain each tag.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Broken fragment: <p>Welcome <strong>builder</p><p>Try one small experiment.</p>
Desired: only the word “builder” is strongly emphasized; the second paragraph should not inherit emphasis.

```

## Copy-and-adapt prompt

```text

Find the unmatched formatting element in this HTML fragment. Return a minimal corrected fragment and a short explanation of the repair. Do not add JavaScript, external links, libraries or unrelated styling. Explain why browser error recovery can make the broken result appear inconsistent.

```

## Worked reference

Corrected: <p>Welcome <strong>builder</strong></p><p>Try one small experiment.</p>. The closing strong tag belongs before the first paragraph closes. Browser recovery is not a reliable substitute for a valid structure.

## Guided activity

1. **Write the expected appearance.** Specify exactly which word should be emphasized before viewing the model’s answer.

2. **Ask for a minimal patch.** Compare the returned fragment with the original; reject unrelated additions.

3. **Preview safely.** Use the activity’s script-disabled preview or a plain local HTML file containing only this fragment.

4. **Check a second case.** Replace strong with em and repeat the missing-close test. Explain the same structural issue.

5. **Teach back the fix.** Annotate opening/closing pairs and describe why a browser might hide the original mistake.

## Test your result

- [ ] The corrected fragment closes the intended element at the correct point.

- [ ] No script, library or external resource is introduced by the repair.

- [ ] You compare actual rendering and can explain the matched tag pair.

## Common mistakes

- Running arbitrary generated code because it is labelled a fix.

- Accepting a large rewrite that hides the original issue.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. The corrected fragment closes the intended element at the correct point.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. No script, library or external resource is introduced by the repair.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Running arbitrary generated code because it is labelled a fix.

## No-account / offline route

Print the snippet and draw lines between opening and closing tags, then sketch the expected rendering.

## Reflection

Why can a browser display something useful even when the HTML is malformed?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.
