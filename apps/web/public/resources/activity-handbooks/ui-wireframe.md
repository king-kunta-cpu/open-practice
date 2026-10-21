# 17. From AI mockup to usable wireframe

Open Practice / Design & decisions

Estimated time: 45 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Turn an image concept into a labelled, testable interface plan.

## Why this matters

An attractive image is not a working app, and image-generated text is often unreliable. Start with a single user task and a content hierarchy. Use an image generator optionally for visual exploration, then redraw the actual labels and focus order in a simple document or design tool.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Fictional task: a beginner wants to log a ten-minute walk. Screen needs: activity name, duration, save action, cancel action and a confirmation/error state. No calorie estimate, health claim, account details or personal location is needed.

```

## Copy-and-adapt prompt

```text

Propose a mobile wireframe for logging a walk. Put the task title first, labelled duration field second, primary Save activity action third and a secondary Cancel action nearby. Specify empty, invalid and success states in text. If creating an image, use placeholder blocks, not claims that the rendered text or interface is accessible.

```

## Worked reference

A usable specification says: duration accepts a positive number of minutes; blank shows “Enter a duration”; zero shows “Use more than zero minutes”; success says “Walk saved: 10 minutes.” A pretty image with an unlabeled number field fails.

## Guided activity

1. **Define the task.** Write what the person must complete in one sentence and remove unrelated features.

2. **Explore one concept.** Generate a layout description or optional image; keep it labelled as a concept.

3. **Make a real wireframe.** Replace image text with editable labels and write each control’s purpose.

4. **Walk through failures.** Try blank, zero and valid duration on paper; map the exact messages and next actions.

5. **Test with a reader.** Ask someone to identify the primary action and explain what happens next without your coaching.

## Test your result

- [ ] Every field has an explicit editable label and a described purpose.

- [ ] Empty, invalid and success states are specified, not merely drawn.

- [ ] The report calls the image a mockup, not a functional or accessibility-certified interface.

## Common mistakes

- Judging usability from visual polish alone.

- Assuming dark mode or high contrast guarantees accessibility.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. Every field has an explicit editable label and a described purpose.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. Empty, invalid and success states are specified, not merely drawn.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Judging usability from visual polish alone.

## No-account / offline route

Draw a labelled paper wireframe and run the same three-state walkthrough with a reader.

## Reflection

Which missing state did the image fail to show?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.
