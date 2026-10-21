# Verify before you trust

Inspect generated technical and professional advice.

---

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


---

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


---

# 39. Run a fair mock interview panel

Open Practice / Verify before you trust

Estimated time: 35 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Practise evidence-based answers without treating a simulation as a hiring prediction.

## Why this matters

A simulated panel is a rehearsal partner, not a real employer or assessment. Use job-relevant questions and avoid protected traits, stereotypes or personality diagnosis. Ask one question at a time and score answers by concrete evidence, relevance and limits. Use a fictional role and truthful experience.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Role: project support coordinator. Tasks: track actions, escalate blockers, communicate status and keep a simple budget log. Four desired questions: prioritization, a missed deadline, unclear ownership and a reporting mistake. No real employer is represented.

```

## Copy-and-adapt prompt

```text

Act as a clearly fictional practice panel: an execution reviewer and a collaboration reviewer. Alternate four job-relevant questions, one at a time, waiting for my answer. Give concise feedback on evidence, relevance and missing detail. Do not predict hiring success, ask protected-personal questions or invent my experience.

```

## Worked reference

A useful answer describes the situation, the action you actually took and a measured or observable result. If no result is known, say so. “This answer guarantees you the role” is unacceptable simulated feedback.

## Guided activity

1. **Define the role.** Use the task list and choose a truthful example you are comfortable sharing.

2. **Start one question.** Check that the model waits instead of writing your answers for you.

3. **Answer with evidence.** Separate what happened, what you did and what you can actually support.

4. **Review the feedback.** Reject invented strengths, demographic judgments or predictions about a real hiring process.

5. **Revise one answer.** Keep the first and revised answer, and explain the evidence you added or uncertainty you preserved.

## Test your result

- [ ] Four questions are job-relevant and asked one at a time.

- [ ] Feedback concerns observable answer quality, not protected traits or hiring predictions.

- [ ] The revised answer contains no invented experience or result.

## Common mistakes

- Memorizing a fabricated success story.

- Treating an AI panel’s approval as a real qualification.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. Four questions are job-relevant and asked one at a time.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. Feedback concerns observable answer quality, not protected traits or hiring predictions.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Memorizing a fabricated success story.

## No-account / offline route

Have a partner read the four questions one at a time, or record your own answers and use the evidence checklist.

## Reflection

Which revision made the answer more credible without making it more impressive?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.


---

# 40. Turn a contract into questions for a professional

Open Practice / Verify before you trust

Estimated time: 40 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Flag clauses and missing terms without declaring legal validity or giving legal advice.

## Why this matters

Legal meaning depends on jurisdiction, the full agreement and facts outside a snippet. This exercise is preparation: identify quoted terms and formulate questions for a qualified professional. Do not upload confidential agreements or conclude a clause is illegal, unenforceable or safe based on an AI output.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Fictional educational clauses: “The provider may change all fees without notice.” “The customer must give 90 days’ notice to cancel.” “The provider may suspend service at any time.” No governing law, dispute process, reciprocal obligations or data-deletion term is supplied.

```

## Copy-and-adapt prompt

```text

Create a review-preparation table: exact clause, plain-language concern, missing context, question for a qualified adviser. Do not declare any clause illegal, enforceable or acceptable. State that jurisdiction and the full agreement are needed. Do not rewrite a legally binding agreement for signature.

```

## Worked reference

Concern: fees could change without advance warning. Question: “What notice is required in the relevant jurisdiction, and can a customer cancel without penalty after a fee change?” This is a review question, not a conclusion about legal rights.

## Guided activity

1. **Use the fictional text.** Do not paste a private client or employment agreement.

2. **Extract exact clauses.** Keep quoted wording distinct from your interpretation.

3. **Request questions.** Require missing context and a professional-review question for every concern.

4. **Audit the certainty.** Remove definitive legal conclusions and jurisdiction guesses.

5. **Prepare a handoff.** Summarize the issues, relevant unknowns and need for a qualified review before action.

## Test your result

- [ ] Each concern links to an exact supplied clause.

- [ ] Missing jurisdiction and agreement context remain explicit.

- [ ] The output is a question list, not legal clearance or advice to sign/breach the agreement.

## Common mistakes

- Treating a generic model as a lawyer.

- Declaring a clause illegal without jurisdiction or context.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. Each concern links to an exact supplied clause.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. Missing jurisdiction and agreement context remain explicit.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Treating a generic model as a lawyer.

## No-account / offline route

Annotate the three clauses and draft neutral review questions yourself.

## Reflection

Which question requires facts that the snippet cannot supply?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.


---

# 44. Read a SQL query against known totals

Open Practice / Verify before you trust

Estimated time: 45 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Translate a data question into a query and check boundaries against a tiny fixture.

## Why this matters

Generated SQL is not safe to run against an unfamiliar production database. Use a read-only fictional table or a spreadsheet calculation as the reference. Define the SQL dialect, timestamp storage and date range explicitly. A query that looks plausible can include the wrong year or country, or mishandle missing rows.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

sales rows: 2024-12-31, 50, Canada; 2025-01-01, 100, Canada; 2025-06-10, 25.50, Canada; 2025-12-31, 10, Canada; 2026-01-01, 200, Canada; 2025-08-01, 99, Kenya. Dates are ISO date strings; amounts are fictional USD.

```

## Copy-and-adapt prompt

```text

For a SQLite table sales(date TEXT, amount REAL, country TEXT), write one read-only SELECT for total Canada sales in calendar year 2025. Use a half-open date range from 2025-01-01 inclusive to 2026-01-01 exclusive. Explain each filter and how an empty set should be displayed. Do not modify any data.

```

## Worked reference

Reference: SELECT COALESCE(SUM(amount),0) AS total FROM sales WHERE country = 'Canada' AND date >= '2025-01-01' AND date < '2026-01-01'; expected fixture total 135.50. The 2024, 2026 and Kenya rows must be excluded. REAL arithmetic is not a recommendation for production accounting.

## Guided activity

1. **Calculate a manual reference.** Mark the three included Canada/2025 rows and sum them in a spreadsheet or on paper.

2. **Specify dialect and storage.** State SQLite and ISO date strings so the model does not guess functions or timezone semantics.

3. **Inspect the generated query.** Confirm it is a single SELECT with the exact country and half-open date range.

4. **Check boundary cases.** Test how the query treats the first and last included dates, 2026-01-01 and an absent country.

5. **Execute only if safe.** Optionally use a disposable read-only sample database. Otherwise label the artifact reviewed but not SQL-executed.

## Test your result

- [ ] The manually verified total is 135.50 and the excluded rows are listed.

- [ ] Date boundaries include all 2025 dates but exclude 2026-01-01.

- [ ] The report names dialect/storage assumptions and does not claim execution unless it happened.

## Common mistakes

- Running generated queries against a live database with write permissions.

- Using a locale-dependent date format or silently assuming a timezone.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. The manually verified total is 135.50 and the excluded rows are listed.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. Date boundaries include all 2025 dates but exclude 2026-01-01.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Running generated queries against a live database with write permissions.

## No-account / offline route

Filter the supplied rows in a spreadsheet or on paper and compare the result with the proposed SQL.

## Reflection

Why is “before 2026-01-01” safer than guessing the final time of 31 December?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.
