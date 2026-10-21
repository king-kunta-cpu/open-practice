# 13. Translation without false confidence

Open Practice / Verify before you trust

Estimated time: 35 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Use independent checks to identify meaning changes and unresolved ambiguity.

## Why this matters

Back-translation can expose problems, but two fluent translations can share the same error. Choose a non-sensitive text with numbers, negation, dates and an idiom. A bilingual human or authoritative glossary remains necessary for high-stakes use. Do not approve a translation solely because it comes back sounding plausible.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Original: “Please do not ship before 6 November. Send 12 blue mugs, not 21. ‘Break a leg’ in the final line is a friendly wish, not an injury instruction.”

```

## Copy-and-adapt prompt

```text

Translate the supplied message into a language you can responsibly review. Preserve the date, quantity, negation and colour. Explain the idiom separately. In a fresh chat, translate the result back to English and list any ambiguous phrases. Do not certify the translation.

```

## Worked reference

Check ledger: no shipment before 6 November; quantity 12; blue; exclusion of 21; idiom means good luck. If the return translation says “ship by 6 November,” it has reversed an operational constraint despite fluent wording.

## Guided activity

1. **Mark invariants.** Write a checklist of date, quantity, negation, colour and idiom before translating.

2. **Create a translation.** Keep the source and target text unchanged for comparison.

3. **Use a fresh check.** Back-translate in a separate context; if possible use an independent service rather than the same model.

4. **Inspect each invariant.** Record pass, fail or unresolved. Consult a bilingual reader or authoritative glossary for disputed language.

5. **Prepare a safe handoff.** Mark unresolved wording and state “not approved for contractual or safety-critical use.”

## Test your result

- [ ] All five meaning constraints are checked individually rather than judged on fluency.

- [ ] A changed before/by instruction is flagged as a material failure.

- [ ] The report states the limits of back-translation and names unresolved review needs.

## Common mistakes

- Assuming two AI systems are independent evidence of correctness.

- Using an unfamiliar language without a competent human review route.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. All five meaning constraints are checked individually rather than judged on fluency.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. A changed before/by instruction is flagged as a material failure.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Assuming two AI systems are independent evidence of correctness.

## No-account / offline route

Use two English paraphrases and inspect whether they preserve the same constraints. Label this a meaning-preservation exercise, not a translation test.

## Reflection

What important error could a fluent back-translation still miss?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.
