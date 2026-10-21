# 05. Build an honest fruit-classifier test

Open Practice / Vision & image editing

Estimated time: 60 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Design balanced training and held-out sets and identify background leakage.

## Why this matters

A classifier may learn the plate or background instead of the fruit. Use your own apple and orange photographs with varied backgrounds. A cloud vision prompt is not custom training; only use that label if an actual supported hosted training service was run. No retired desktop tool or local model download is required.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Dataset plan: 20 apple images and 20 orange images for training, plus 5 fresh images of each fruit for a held-out test. Vary background, distance and lighting in both labels. Keep all photos from one burst on the same side of the split.

```

## Copy-and-adapt prompt

```text

For the classification-only route: Label this image Apple, Orange or Unclear based on the fruit, not background colour. Give one visible reason and do not guess when the object is hidden. I will score the result against a separate label sheet.

```

## Worked reference

Reference score example: apples 4/5 correct, oranges 3/5 correct, total 7/10 = 70% on this tiny test only. If all orange images use a blue plate, a blue empty plate is a useful leakage test—not proof the model understands oranges.

## Guided activity

1. **Plan before uploading.** Write the two labels, unclear rule and ten held-out filenames before any model run.

2. **Capture varied images.** Use original object photos; do not reuse nearly identical burst frames across training and testing.

3. **Run the chosen route.** Use a supported hosted trainer if available, or pretrained cloud classification; state which happened and check charges first.

4. **Score held-out cases.** Make a two-by-two actual/predicted table and list unclear cases separately. Never discard failures to improve the score.

5. **Break the shortcut.** Try a different plate and an empty familiar background. Explain whether the results suggest leakage.

## Test your result

- [ ] Ten unseen test files and their outcomes are retained without overlap with training examples.

- [ ] Correct predictions divided by all ten test cases matches the reported percentage.

- [ ] The report distinguishes pretrained classification from custom training and mentions the small sample.

## Common mistakes

- Reporting training-set accuracy as future performance.

- Letting background or near-duplicate photos reveal the label.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. Ten unseen test files and their outcomes are retained without overlap with training examples.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. Correct predictions divided by all ten test cases matches the reported percentage.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Reporting training-set accuracy as future performance.

## No-account / offline route

Sort filename cards into balanced train/test sets and calculate scores from the worked example. Report a test-design exercise, not a trained model.

## Reflection

Would the score mean the same thing if every apple used a red plate?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.
