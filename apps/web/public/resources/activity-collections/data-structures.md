# Data & structures

Turn messy inputs into formats you can check.

---

# 07. A spreadsheet formula you actually test

Open Practice / Data & structures

Estimated time: 45 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Turn a plain-language lookup requirement into a formula and test missing and duplicate IDs.

## Why this matters

An apparently correct formula may fail in a different spreadsheet locale or quietly select the first duplicate. Define the expected behaviour before asking for syntax. Use a small fictional table, and verify each result manually. Generated formulas are drafts, not evidence that the data is clean.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Create columns A:C: ID, Name, Email. Rows: u01, Nia, nia@example.test; u02, Tari, tari@example.test; u02, Tari old, old@example.test. Lookup cell E2. Test u01, u99 and u02. Desired rule: return the email for exactly one match; blank for no match; FLAG DUPLICATE for multiple matches.

```

## Copy-and-adapt prompt

```text

For my spreadsheet, propose a formula using COUNTIF and a lookup to implement: exactly one matching ID in A2:A4 returns C2:C4; zero matches returns an empty string; more than one match returns FLAG DUPLICATE. Ask which spreadsheet and locale if necessary. Explain the tested ranges. Do not hide every error with IFERROR.

```

## Worked reference

One Excel/Sheets-style draft: =IF(COUNTIF(A2:A4,E2)=0,"",IF(COUNTIF(A2:A4,E2)>1,"FLAG DUPLICATE",XLOOKUP(E2,A2:A4,C2:C4,""))). Some versions/locales need different functions or separators; test in the actual sheet. Expected: u01 → nia@example.test; u99 → blank; u02 → FLAG DUPLICATE.

## Guided activity

1. **Build the tiny sheet.** Type the fictional rows and lookup cell exactly; manually write expected outcomes for the three IDs.

2. **Describe the rule.** Include duplicate handling, no-match behaviour and your actual spreadsheet product/locale.

3. **Test the draft.** Paste the formula into a spare result cell, not into original data. Try each ID and record the displayed value.

4. **Change a boundary.** Add a new row outside A2:A4. Check whether the range updates or silently misses it.

5. **Explain the revision.** Adjust to a table/range appropriate to your tool and retest. Keep the formula text and results.

## Test your result

- [ ] The three original cases match the documented unique, missing and duplicate rules.

- [ ] You have tested the formula in the named spreadsheet, not just read the AI explanation.

- [ ] An added row produces a documented range update or an explicit limitation.

## Common mistakes

- Accepting a first-match lookup when duplicates need review.

- Masking a syntax error or data-quality problem with blanket IFERROR.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. The three original cases match the documented unique, missing and duplicate rules.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. You have tested the formula in the named spreadsheet, not just read the AI explanation.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Accepting a first-match lookup when duplicates need review.

## No-account / offline route

Match the ID cards to the rows by hand and document the three expected results; mark formula execution untested until you have a spreadsheet.

## Reflection

Which failure would an empty-string fallback have hidden?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.


---

# 24. Classify feedback with an uncertainty bucket

Open Practice / Data & structures

Estimated time: 35 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Create a small labelled feedback set and inspect false positives.

## Why this matters

Sentiment is not the same as topic or urgency. A short review can contain praise and criticism at once; forcing it into a single emotional label hides information. Define an explicit Mixed/Unclear route and quote the relevant text instead of guessing a customer’s feelings.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

r1: “Arrived early. Excellent.” r2: “It is a mug.” r3: “The handle broke immediately.” r4: “Looks lovely, but the lid leaks.” r5: “Great, another week waiting.” Labels: Positive, Neutral, Negative, Mixed/Unclear.

```

## Copy-and-adapt prompt

```text

Classify each review by ID using the defined labels. Give an exact evidence span and a separate issue/topic field. Use Mixed/Unclear when praise and criticism coexist or sarcasm is uncertain. Do not infer a person’s mood or intent beyond the text.

```

## Worked reference

r1 → Positive; r2 → Neutral; r3 → Negative, issue handle durability; r4 → Mixed/Unclear, leak plus visual praise; r5 may be Negative with an explicit sarcasm note or Mixed/Unclear if uncertain. Either needs evidence, not an invented emotion.

## Guided activity

1. **Define labels.** Write decision rules and an uncertainty route before testing.

2. **Make reference labels.** Label the five reviews yourself and note where a reasonable reviewer might disagree.

3. **Run the classifier.** Keep review IDs and exact quoted evidence for each output.

4. **Compare mistakes.** Count clear matches separately from ambiguous cases. Inspect r4 and r5 rather than hiding them.

5. **Test a new case.** Use “Fast delivery, broken item.” Decide whether the revised rules preserve both pieces of feedback.

## Test your result

- [ ] Every output preserves the review ID and quotes an actual evidence span.

- [ ] Topic/issue is separate from sentiment, and the mixed review is not flattened into only praise.

- [ ] Ambiguous labels and disagreements remain visible in the score table.

## Common mistakes

- Treating sarcasm detection as certain.

- Inferring a customer’s personality from a short comment.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. Every output preserves the review ID and quotes an actual evidence span.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. Topic/issue is separate from sentiment, and the mixed review is not flattened into only praise.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Treating sarcasm detection as certain.

## No-account / offline route

Use a manual sorting table and compare two readers’ labels before agreeing the policy.

## Reflection

Which review made a three-bucket classification inadequate?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.


---

# 41. Make notes navigable with Markdown

Open Practice / Data & structures

Estimated time: 35 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Organize notes while preserving quotations, deadlines and unknowns.

## Why this matters

Formatting can help people find information, but a polished hierarchy can make invented conclusions look authoritative. Keep original text beside the formatted version and check that headings do not imply decisions that were never made. Markdown is plain text; different renderers support different features.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Raw notes: “Repair table idea. Nia said ‘Keep the first event small.’ Venue inquiry due Friday. Tools list not assigned. Budget proposal $80, not approved. Need insurance check. Next discussion Tuesday.”

```

## Copy-and-adapt prompt

```text

Organize these notes in Markdown using one H1 title, H2 sections for Confirmed actions, Proposals and Open questions, a blockquote for the exact quotation, bold deadlines and a horizontal rule before next steps. Preserve the unassigned owner and unapproved budget. Do not invent decisions.

```

## Worked reference

Expected structure: # Repair table planning; ## Confirmed actions → venue inquiry due **Friday**; ## Proposals → $80 budget, not approved; ## Open questions → tools owner and insurance check. The quotation must retain its wording and attribution.

## Guided activity

1. **Mark the source states.** Identify quote, commitment, proposal and unresolved question before formatting.

2. **Generate plain Markdown.** Keep the raw syntax so you can inspect #, >, ** and --- directly.

3. **Preview safely.** Use the activity’s text-only rendered preview; raw HTML is not required.

4. **Audit the meaning.** Compare all named dates, ownership and budget status with the raw notes.

5. **Test portability.** Open the Markdown as plain text and check that the structure is still understandable.

## Test your result

- [ ] The quote is exact and the proposed budget remains unapproved.

- [ ] Heading levels are consistent and deadlines are emphasized without changing them.

- [ ] Unassigned actions remain unassigned; no formatting implies a false decision.

## Common mistakes

- Making a proposal look like an approved action by moving it under the wrong heading.

- Assuming every Markdown renderer handles tables or raw HTML identically.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. The quote is exact and the proposed budget remains unapproved.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. Heading levels are consistent and deadlines are emphasized without changing them.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Making a proposal look like an approved action by moving it under the wrong heading.

## No-account / offline route

Write the Markdown by hand and compare the raw syntax with a paper outline.

## Reflection

Which heading choice could most easily change how the notes are interpreted?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.


---

# 42. Ask for a regex, then attack its assumptions

Open Practice / Data & structures

Estimated time: 45 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Turn a fuzzy matching request into explicit positive and negative test cases.

## Why this matters

A regex for a limited filter is not a complete email validator. Decide whether a hyphen must occur in the local part or anywhere in the address, whether subdomains count and whether matching is case-insensitive. The activity test runner uses a short-lived worker and synthetic strings, not a production data scan.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Specification: local part must contain a hyphen; domain is one simple label followed by .edu; no spaces; case-insensitive. Match: first-last@example.edu; A-B@COLLEGE.EDU. Reject: firstlast@example.edu; first-last@example.com; firstlast@my-college.edu; first-last@dept.example.edu.

```

## Copy-and-adapt prompt

```text

Propose a bounded JavaScript regex for exactly the stated simplified filter, not RFC-complete email validation. Explain the anchors, local-part hyphen rule, simple domain and case-insensitive flag. Provide results for all supplied tests and at least two edge cases. Do not claim it verifies delivery or institutional status.

```

## Worked reference

One limited pattern: ^[A-Z0-9._+]*-[A-Z0-9._+-]*@[A-Z0-9]+(?:-[A-Z0-9]+)*\.edu$ with i flag. Check its actual behaviour; “a-b@example.edu” is a match, while a hyphen only in the domain is insufficient. The simplified grammar intentionally excludes some valid real addresses.

## Guided activity

1. **Define the policy.** Write the exact location of the hyphen and domain/subdomain rules before asking for syntax.

2. **Get a draft pattern.** Request the target engine and flags; do not copy syntax intended for a different language.

3. **Run the fixture.** Use the bounded test tool and compare actual results with the reference list.

4. **Try edge cases.** Add spaces, an empty local part and uppercase letters; keep false positives and negatives visible.

5. **State the scope.** Label the filter as a toy policy check, not email validation or proof of eligibility.

## Test your result

- [ ] All six supplied strings have recorded expected and observed results.

- [ ] A hyphen only in the domain does not satisfy the local-part requirement.

- [ ] The report names JavaScript/flags and clearly limits the simplified grammar.

## Common mistakes

- Calling a matching string a deliverable or institution-verified email address.

- Using an unbounded pattern or huge input without a timeout.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. All six supplied strings have recorded expected and observed results.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. A hyphen only in the domain does not satisfy the local-part requirement.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Calling a matching string a deliverable or institution-verified email address.

## No-account / offline route

Mark expected matches by hand and explain the policy without executing a pattern.

## Reflection

Which valid real-world address might your deliberately simplified filter reject?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.


---

# 43. From book notes to validated JSON

Open Practice / Data & structures

Estimated time: 40 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Distinguish valid JSON syntax, a data shape and a formal JSON Schema.

## Why this matters

Valid JSON can still contain wrong values or inconsistent records. First parse the text, then check the agreed keys and types, then compare facts with the source. This exercise converts records and describes a shape; a formal JSON Schema is a separate optional extension, not something every JSON array automatically contains.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Fictional books: Paper Signals — A. Dube — 2021 — rating 4; Quiet Circuits — T. Moyo — 2023 — rating 5; Small Useful Things — N. Rao — year unknown — rating 3. Ratings are integers from 1 to 5. No additional books or authors are supplied.

```

## Copy-and-adapt prompt

```text

Convert these three records to a JSON array using only lowercase keys: title, author, year, rating. Use an integer year or null when unknown; rating must be an integer from 1 to 5. Return JSON only, without comments, code fences, trailing commas or invented facts. Then, in a separate response if requested, describe the field rules.

```

## Worked reference

One record: {"title":"Small Useful Things","author":"N. Rao","year":null,"rating":3}. A year of "unknown" is the wrong type for this contract, and a fabricated year such as 2020 is a factual error even if parsing succeeds.

## Guided activity

1. **Define the shape.** Write exact keys, types, null policy and rating range before generating.

2. **Request the array.** Use the fixture and preserve missing years rather than filling them.

3. **Parse the output.** Use the activity checker; remove Markdown fences only if you understand they are wrappers, not JSON.

4. **Validate the contract.** Check array length, exact key set, types, null and rating range independently of parsing.

5. **Check facts and break it.** Compare titles/authors with the fixture, then try rating 9 or a trailing comma and note which check catches it.

## Test your result

- [ ] JSON parsing succeeds and there are exactly three records with the agreed lowercase keys.

- [ ] Unknown year is null; ratings satisfy the integer 1–5 rule.

- [ ] Every title/author/value matches the fixture; syntax success is not mistaken for factual validity.

## Common mistakes

- Calling any valid JSON array a JSON Schema.

- Filling missing data to make the output look complete.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. JSON parsing succeeds and there are exactly three records with the agreed lowercase keys.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. Unknown year is null; ratings satisfy the integer 1–5 rule.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Calling any valid JSON array a JSON Schema.

## No-account / offline route

Write the three structured records as a table and apply the same key/type/fact checklist.

## Reflection

Which error can pass a JSON parser but still violate your requirements?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.
