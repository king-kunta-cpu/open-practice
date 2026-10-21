# Vision & image editing

Build datasets and test visual systems honestly.

---

# 04. Test visible-expression labels

Open Practice / Vision & image editing

Estimated time: 45 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Build a labelled image test and distinguish an expression from a person’s emotion or identity.

## Why this matters

A smile is an observable expression, not proof that someone is happy. This activity defaults to a hosted vision model classifying a small test set; that does not train a new model. If you have a supported hosted no-code trainer, record that separate route explicitly. Faces are optional: use simple expression cards instead.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Make six original drawing cards: two with an upward-curved mouth, two with a straight mouth and two ambiguous/partly covered. Use labels Smile visible, Straight mouth visible, and Unclear. Reserve one of each for testing. Do not photograph another person.

```

## Copy-and-adapt prompt

```text

Classify the visible mouth shape in this original card as Smile visible, Straight mouth visible or Unclear. Give one short observation about the visible marks. Do not infer identity, feelings, health, personality or protected characteristics. If hidden or ambiguous, choose Unclear.

```

## Worked reference

An upward curve may support “Smile visible; the mouth curves upward.” A covered mouth should produce Unclear. “This person is happy and trustworthy” fails the task, even if the picture is smiling.

## Guided activity

1. **Build the cards.** Create balanced labels and include ambiguity; keep the held-out cards separate from any examples.

2. **Choose your route.** Use a hosted vision tool with upload permission. If using a hosted trainer, record training settings; otherwise label the run pretrained classification.

3. **Test new views.** Upload held-out cards one at a time. Record expected label, actual label and visible evidence.

4. **Stress the boundary.** Rotate or partly cover a card. Observe whether the tool overclaims or admits uncertainty.

5. **Document limitations.** Report the number correct out of the number tested. Do not generalize a tiny drawing-card test to real people.

## Test your result

- [ ] The run log states whether custom training happened or only pretrained classification.

- [ ] All three held-out labels are recorded, including unclear cases; errors remain visible.

- [ ] No output is accepted as evidence of a person’s emotion, identity or trustworthiness.

## Common mistakes

- Uploading faces without consent or using expression labels for surveillance.

- Calling the result a trained emotion detector.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. The run log states whether custom training happened or only pretrained classification.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. All three held-out labels are recorded, including unclear cases; errors remain visible.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Uploading faces without consent or using expression labels for surveillance.

## No-account / offline route

Use the supplied label sheet and ask a human to classify held-out drawing cards. Save a dataset/test plan and mark it “not model-tested.”

## Reflection

What can your labels establish, and what can they never establish about a real person?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.


---

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


---

# 09. One scene, three visual styles

Open Practice / Vision & image editing

Estimated time: 45 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Control a visual experiment by changing only the style instruction.

## Why this matters

Image generators are stochastic: a different result may come from randomness rather than style alone. Keep the subject, camera, layout and constraints fixed. Where supported, record seed/model/settings; if not supported, repeat each condition and state the limitation. Compare separate original images rather than assuming a grid is a controlled experiment.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Core scene: an empty pedestrian street at dawn, one bicycle beside a bakery window, eye-level camera, no readable signs, no logos or people. Styles: neon-influenced cyberpunk illustration; muted 1970s film photograph; loose watercolor painting.

```

## Copy-and-adapt prompt

```text

Generate the core scene exactly as specified, preserving the bicycle position, eye-level viewpoint and empty street. Apply only this style modifier: [one of the three styles]. No text, logos or recognizable real businesses.

```

## Worked reference

A comparison sheet can record: bicycle retained? one bakery window? empty street? eye-level view? palette? texture? A watercolor output that adds a crowded market fails the fixed-scene requirement even if its painting style is attractive.

## Guided activity

1. **Write fixed constraints.** List four scene elements that must not change. Use an original fictional setting.

2. **Run three conditions.** Generate one image per style with the same core prompt. Record provider, model and settings where visible.

3. **Compare observable features.** Score fixed-element retention separately from palette, lighting and surface texture.

4. **Repeat a condition.** Regenerate one style. Note how much variation happens without changing the style text.

5. **Refine one constraint.** Improve the weakest scene-preservation rule and compare before/after outputs.

## Test your result

- [ ] Three separate outputs share the same written core prompt and differ only in the style modifier.

- [ ] Your comparison scores composition retention separately from visual style.

- [ ] The repeat run documents randomness or seed control rather than claiming causation from one sample.

## Common mistakes

- Changing composition and style simultaneously.

- Using a living artist’s name instead of describing visual attributes.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. Three separate outputs share the same written core prompt and differ only in the style modifier.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. Your comparison scores composition retention separately from visual style.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Changing composition and style simultaneously.

## No-account / offline route

Draw three small scene thumbnails or annotate a licensed original scene using different colour/texture notes. Mark the work as a storyboard, not generated imagery.

## Reflection

Which difference can you reasonably attribute to style, and which might be random?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.


---

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


---

# 28. Expand an image without pretending it is evidence

Open Practice / Vision & image editing

Estimated time: 45 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Review generated extensions for continuity and fabricated context.

## Why this matters

Outpainting invents pixels outside the original frame. A plausible extension does not reveal what really existed there. Use an original object photo with no private setting or people, preserve an unedited source, and inspect the join, perspective, lighting and unwanted objects. Availability may require paid credits.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Make an original close-up photo of a plain mug on a table against an empty wall. Desired extension: more of the same tabletop and wall, with no people, documents, logos, windows or new objects. Keep the original mug unchanged.

```

## Copy-and-adapt prompt

```text

Expand the canvas around this original object photo. Continue the table plane, wall colour, lighting direction and camera perspective. Preserve the original mug. Do not add people, writing or identifiable places. The extension is fictional generated context, not a reconstruction of the real room.

```

## Worked reference

A review may find a table edge bending at the seam, duplicated handles or a new window. Those are continuity/constraint failures. Even a seamless extension must be labelled edited/generated, not documentary evidence of the actual room.

## Guided activity

1. **Choose a safe source.** Use your own object photograph and remove personal information from the frame.

2. **Preserve the original.** Keep the uncropped source and note the intended canvas boundary.

3. **Generate the extension.** Change only the blank surroundings; check the actual tool’s export and credit terms.

4. **Inspect at the seam.** Zoom in on table lines, shadows, mug shape and invented objects. Compare with the source.

5. **Label the output.** Save an edited-image note describing which region is generated and what remains uncertain.

## Test your result

- [ ] An untouched source and the edited output are both retained.

- [ ] The join, lighting, perspective and protected mug are checked explicitly.

- [ ] The extension is labelled fictional generated content, not a record of the original room.

## Common mistakes

- Using a private room, face or document without consent.

- Treating a plausible extension as a recovered historical photograph.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. An untouched source and the edited output are both retained.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. The join, lighting, perspective and protected mug are checked explicitly.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Using a private room, face or document without consent.

## No-account / offline route

Draw the proposed extended canvas and annotate continuity checks; label it a plan, not an edited photograph.

## Reflection

Which added detail could someone wrongly interpret as a fact about the original setting?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.
