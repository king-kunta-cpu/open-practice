# Design & decisions

Prototype ideas and separate simulation from research.

---

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


---

# 26. A simulated interview is a hypothesis machine

Open Practice / Design & decisions

Estimated time: 35 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Use a fictional persona to generate questions for real research, not fake validation.

## Why this matters

A language model’s persona reflects learned stereotypes and your prompt. It does not represent actual customers or their subconscious reactions. Define situational needs instead of demographic caricatures, then convert the simulated objections into neutral questions for consented real interviews.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Idea: a kitchen inventory app that suggests meals. Fictional situation: someone has ten minutes to cook, shares a kitchen, dislikes repetitive data entry and uses an older phone. No actual customer interview has happened.

```

## Copy-and-adapt prompt

```text

Simulate a skeptical potential user with the stated constraints, without inventing a real identity. Give five possible objections, label them hypotheses, and turn each into a non-leading interview question. Do not claim purchase intent, demographic representativeness or research findings.

```

## Worked reference

Hypothesis: entering every ingredient may take too long. Neutral question: “How do you currently keep track of ingredients, if at all?” Leading question to reject: “Wouldn’t automatic inventory save you lots of time?”

## Guided activity

1. **Describe the situation.** Use tasks, constraints and current behaviour rather than age/gender stereotypes.

2. **Generate hypotheses.** Request five objections with the explicit simulated label.

3. **Convert to questions.** Rewrite each objection into a question that does not suggest the desired answer.

4. **Spot invented validation.** Remove claims such as “users will love it” or a fabricated willingness-to-pay number.

5. **Plan real research.** Write a consented interview plan, recruitment limits and what would disconfirm the idea.

## Test your result

- [ ] All simulated responses are labelled hypotheses, not customer quotes.

- [ ] Interview questions avoid selling the idea or implying the answer.

- [ ] The plan includes real consented research and a disconfirming observation.

## Common mistakes

- Reporting a model’s persona output as market validation.

- Using stereotyped demographics as a substitute for actual needs.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. All simulated responses are labelled hypotheses, not customer quotes.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. Interview questions avoid selling the idea or implying the answer.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Reporting a model’s persona output as market validation.

## No-account / offline route

Brainstorm objections yourself and turn them into neutral questions; no simulated participants are needed.

## Reflection

What observation from a real person would contradict the most attractive simulation result?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.


---

# 37. Build an FAQ from unanswered questions

Open Practice / Design & decisions

Estimated time: 35 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Anticipate difficult questions without inventing policies or reassuring answers.

## Why this matters

A skeptical question is useful only if the answer is honest. Separate known policy, missing policy and a question that needs user research. The model can propose friction points; it cannot authorize refunds, privacy practices or support promises. Build a review queue before publishing anything.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Fictional service: a community tool-lending desk opens Saturdays. Borrowing is limited to seven days. Members collect tools in person. Deposit, damage, identity-check, data-retention and cancellation policies have not been decided.

```

## Copy-and-adapt prompt

```text

Generate seven difficult customer questions. For each, label Answer supported, Policy missing or Needs research, cite the supplied fact if present, and draft only an honest placeholder where policy is unknown. Do not promise free replacements, no deposits, privacy guarantees or always-available stock.

```

## Worked reference

“How long may I borrow a tool?” → Answer supported: seven days. “What if it breaks?” → Policy missing: do not publish a liability or replacement promise. “Can I get a tool today?” → check Saturday opening and actual availability.

## Guided activity

1. **List known policies.** Keep the three supplied facts separate from everything still undecided.

2. **Generate the hard questions.** Include cost, damage, access, privacy, availability and cancellation.

3. **Classify answerability.** Match each answer to a source fact or mark the gap visibly.

4. **Create a policy queue.** Assign an owner and review status to each missing policy rather than filling it with AI guesses.

5. **Test the FAQ draft.** Ask a reader which answers could cause a mistaken expectation or commitment.

## Test your result

- [ ] Exactly seven questions cover distinct practical concerns.

- [ ] Unsupported policies remain explicitly unresolved and are not published as promises.

- [ ] A review queue identifies who must supply and approve each missing answer.

## Common mistakes

- Treating a generated FAQ as an approved service policy.

- Writing reassuring answers before the business has made the decision.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. Exactly seven questions cover distinct practical concerns.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. Unsupported policies remain explicitly unresolved and are not published as promises.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Treating a generated FAQ as an approved service policy.

## No-account / offline route

Draft questions with a partner and sort them into supported/missing/research-needed piles.

## Reflection

Which tempting answer would accidentally commit the service to something it has not approved?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.


---

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


---

# 50. Turn a synthetic focus group into a real test plan

Open Practice / Design & decisions

Estimated time: 35 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Use varied constraints to brainstorm hypotheses while avoiding fake participants and reactions.

## Why this matters

A model cannot reveal what real people subconsciously think. Simulated personas are a brainstorming aid shaped by the prompt, not representative research or testimonials. Vary relevant needs such as time, readability and trust instead of relying on demographic stereotypes. Design a real consented test to evaluate the hypotheses.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Fictional slogan: “One small build. One useful skill.” Test contexts: a rushed first-time learner; a reader using a small phone with low bandwidth; a cautious learner concerned about credentials and privacy. No person has actually reviewed the slogan.

```

## Copy-and-adapt prompt

```text

Generate possible reactions for these three fictional contexts. Label every reaction Hypothesis, not a quote from a participant. For each, list a neutral question and an observable test. Do not infer subconscious feelings, population preferences or purchase intent. Do not invent survey counts or ratings.

```

## Worked reference

Hypothesis: “useful skill” may feel too vague. Neutral question: “What would you expect to do after reading this?” Observable test: ask consented readers to describe the expected activity before showing the course list. Three simulated reactions are not three participants.

## Guided activity

1. **Define relevant contexts.** Use task constraints rather than stereotypes about age, gender or occupation.

2. **Generate labelled hypotheses.** Keep the fictional nature visible on every reaction.

3. **Write neutral questions.** Avoid asking whether the reader likes your preferred wording.

4. **Plan an observable task.** Choose what a real reader will do or explain and decide how to record consent and feedback.

5. **Report honestly.** Keep simulation notes separate from any later human evidence, including sample limits and negative feedback.

## Test your result

- [ ] All synthetic reactions are labelled hypotheses with no invented participant quotes or counts.

- [ ] Each context produces a neutral question and an observable test.

- [ ] The final plan separates brainstorming from actual consented user research.

## Common mistakes

- Reporting a synthetic focus group as representative market evidence.

- Attributing hidden psychological reactions to demographic stereotypes.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. All synthetic reactions are labelled hypotheses with no invented participant quotes or counts.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. Each context produces a neutral question and an observable test.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Reporting a synthetic focus group as representative market evidence.

## No-account / offline route

Brainstorm the three context-based hypotheses yourself and write the same real-user test plan.

## Reflection

What result from real readers would make you abandon the slogan?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.
