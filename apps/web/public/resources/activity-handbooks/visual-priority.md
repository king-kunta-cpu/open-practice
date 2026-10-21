# 27. Test competing visual instructions

Open Practice / Vision & image editing

Estimated time: 45 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Separate wording emphasis from model-specific prompt weighting syntax.

## Why this matters

“Massive” and “tiny” describe relationships, but a generator may interpret them unpredictably. Numerical weighting syntax is provider-specific and may be ignored entirely. Start with plain language and inspect the image; do not claim a model used a weighting mechanism merely because you typed special punctuation.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Scene: a small kitten beside a large fictional dragon in a wide empty courtyard. Both subjects must be fully visible. Compare: dragon twice the kitten’s height; dragon ten times the kitten’s height; kitten larger than dragon.

```

## Copy-and-adapt prompt

```text

Create one original illustration of the specified scene. Keep both subjects fully visible at the same distance from the camera. Change only their relative height: [chosen condition]. No text, logos, recognizable characters or extra animals.

```

## Worked reference

A test sheet measures the approximate visible height ratio and notes perspective or cropping. If the dragon is mostly off-frame, it does not demonstrate a controlled 10:1 size relationship. The result may be a failed condition, not an artistic success.

## Guided activity

1. **Fix scene and framing.** Keep viewpoint, courtyard and subject count constant.

2. **Vary one relationship.** Generate the three plain-language size conditions and record model/settings.

3. **Measure visibly.** Estimate each subject’s height from the image and note perspective/cropping.

4. **Try one supported control.** Only if provider documentation describes weights, test that syntax separately from the language experiment.

5. **Report limits.** Retain failed images and distinguish observed results from assumptions about model internals.

## Test your result

- [ ] Both subjects are visible in each scored result, or cropping is explicitly recorded as a failure.

- [ ] Only the size relationship changes in the primary prompt comparison.

- [ ] Provider-specific weighting is not presented as universal or inferred from appearance alone.

## Common mistakes

- Treating arbitrary punctuation as a cross-provider weighting standard.

- Confusing foreground perspective with actual relative size.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. Both subjects are visible in each scored result, or cropping is explicitly recorded as a failure.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. Only the size relationship changes in the primary prompt comparison.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Treating arbitrary punctuation as a cross-provider weighting standard.

## No-account / offline route

Make three simple silhouette sketches and measure the height ratios manually.

## Reflection

How did perspective make the size comparison harder?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.
