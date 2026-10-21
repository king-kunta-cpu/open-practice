# 21. Check reasoning with an external answer

Open Practice / Prompt craft

Estimated time: 35 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Compare answer-only and concise-explanation prompts against a known reference.

## Why this matters

A request for hidden chain-of-thought does not guarantee accuracy and is not needed. Ask instead for a short calculation, stated assumptions and a checkable result. A polished explanation can rationalize a wrong answer. Use a puzzle with an external solution and keep the input identical across conditions.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Puzzle: A notebook and a pen cost $1.10 together. The notebook costs $1.00 more than the pen. What does the pen cost? Reference: pen $0.05; notebook $1.05; total $1.10 and difference $1.00.

```

## Copy-and-adapt prompt

```text

Solve the notebook-and-pen puzzle. State the answer, one short equation and a substitution check. Do not provide a private internal reasoning transcript. If you make an assumption, state it.
[Paste puzzle without the reference answer.]

```

## Worked reference

Let pen cost p. Then notebook costs p + 1.00, so 2p + 1.00 = 1.10 and p = 0.05. A $0.10 pen would imply a $1.10 notebook, totaling $1.20, so the tempting answer fails.

## Guided activity

1. **Record the reference.** Hide the answer from the model and verify both total and difference yourself.

2. **Run answer-only.** Ask for just the price in a fresh hosted chat and save the unedited answer.

3. **Run a concise-check version.** Use the supplied prompt in a fresh context with the same puzzle.

4. **Evaluate both externally.** Substitute each answer into the original constraints; do not score by explanation length.

5. **Transfer the test.** Change the total to $1.30 with a $1.00 difference; the pen should be $0.15.

## Test your result

- [ ] Both responses are checked against the total and difference, not judged on fluency.

- [ ] The report includes the $0.15 transfer case and its substitution check.

- [ ] You do not claim that longer explanations prevent errors or reveal hidden internal reasoning.

## Common mistakes

- Rewarding a long explanation even when its arithmetic is wrong.

- Leaking the reference answer into only one experimental condition.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. Both responses are checked against the total and difference, not judged on fluency.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. The report includes the $0.15 transfer case and its substitution check.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Rewarding a long explanation even when its arithmetic is wrong.

## No-account / offline route

Solve the equation manually and compare the tempting wrong answer with the two original constraints.

## Reflection

Did the explanation improve the result, or only make it sound more convincing?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.
