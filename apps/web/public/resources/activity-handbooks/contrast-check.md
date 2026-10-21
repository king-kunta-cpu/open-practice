# 49. Measure contrast instead of trusting a mockup

Open Practice / Design & decisions

Estimated time: 45 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Test actual foreground/background colours and document what contrast cannot prove.

## Why this matters

A generated interface image cannot establish accessibility. Extract or choose actual colour values and calculate contrast using the WCAG relative-luminance formula. Ordinary text generally needs 4.5:1 at WCAG AA; large text has a 3:1 threshold, but meeting a ratio alone does not address keyboard access, labels or screen-reader semantics.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Test pairs: white #FFFFFF on burgundy #7C1F16; warm grey #84766A on cream #FDF7EE; gold #D4971B on cream #FDF7EE. Use the activity calculator to measure each pair, then choose colours for an actual editable heading and button.

```

## Copy-and-adapt prompt

```text

Suggest an accessible-looking page concept, but label it a visual concept only. Separately propose exact hex foreground/background pairs for ordinary text. I will measure the actual contrast and test labels and keyboard access myself. Do not claim neon colours or a screenshot guarantee WCAG compliance.

```

## Worked reference

White on the dark burgundy produces a strong text contrast. Gold on cream is much weaker and should not be assumed suitable for ordinary small text. Record the calculator’s numeric result and threshold rather than trusting colour names or visual excitement.

## Guided activity

1. **Choose actual colours.** Use the supplied pairs, not an image generator’s verbal claim.

2. **Calculate each ratio.** Run the local deterministic calculator and save the numeric results.

3. **Apply a threshold.** Use 4.5:1 for ordinary text and explain when a genuinely large-text threshold may apply.

4. **Revise a failing pair.** Darken the foreground or lighten the background, then measure again.

5. **Inspect beyond contrast.** Write separate checks for labels, focus visibility, keyboard order and information not conveyed by colour alone.

## Test your result

- [ ] All three original colour pairs have measured ratios and ordinary-text pass/fail results.

- [ ] A revised failing pair is measured again instead of judged by eye.

- [ ] The final report explicitly separates contrast from complete accessibility compliance.

## Common mistakes

- Equating neon/high saturation with sufficient contrast.

- Claiming an image mockup proves screen-reader or keyboard accessibility.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. All three original colour pairs have measured ratios and ordinary-text pass/fail results.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. A revised failing pair is measured again instead of judged by eye.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Equating neon/high saturation with sufficient contrast.

## No-account / offline route

Use the formula/known examples in the handbook to annotate a design. Mark unmeasured pairs as unverified.

## Reflection

Which accessibility problem would remain even after every colour pair passed?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.
