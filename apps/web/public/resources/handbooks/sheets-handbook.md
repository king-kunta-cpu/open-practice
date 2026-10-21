# Make messy data useful

Open Practice / Data & spreadsheets / curriculum 2.0

Estimated guided practice: 4h estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Create a checked expense summary

## Before you start

- Basic rows/columns and simple arithmetic.

- A spreadsheet is helpful; manual completion is supported.

## Learning outcomes

- Structure fictional expense data and calculate known totals.

- Test formulas with normal and edge cases.

- Validate dirty data without silently guessing or deleting evidence.

- Deliver a reconciled summary and reproducible reject log.

## Activity 1: Start with clean sample data

Estimated time: 30 minutes.

### Outcomes

- Structure tabular data for reliable calculations.

- Establish independent expected outputs.

A spreadsheet is easier to check when each row represents one event and each column has one meaning. Start with fictional expenses, not bank statements. Keep dates consistent, amounts numeric, and categories drawn from an explicit list. Stable receipt identifiers make duplicate handling possible.

The five-row warm-up totals 60: Travel 10, Food 5, Travel 15, Tools 20, and Food 10. These expected values are deliberately small enough to calculate by hand. If an AI suggests a summary, compare it with this independent baseline rather than trusting the narrative.

### Worked example

```text

WARM-UP TOTAL: 10 + 5 + 15 + 20 + 10 = 60.
TRAVEL: 10 + 15 = 25.
FOOD: 5 + 10 = 15.
TOOLS: 20.
COLUMNS: Date, Category, Description, Amount, ReceiptID.

```

### Guided activity

1. Import the warm-up CSV into a spreadsheet or inspect it as text.

2. Check that every row has the same five fields.

3. Calculate the total and category subtotals independently.

4. Write the allowed category list: Travel, Food, Tools.

5. Explain why a receipt ID is useful before attempting deduplication.

### Expected evidence

- A correctly structured five-row table.

- An independently checked total of 60 and three subtotals.

- A short data dictionary for each column.

### Common mistakes

- Storing currency symbols inside numeric amounts.

- Putting two transactions into one cell or row.

### Check your understanding

If the spreadsheet returns 6010 instead of 70 after an addition, what data-type problem might exist?

### Offline route

Use a printed table or text editor and calculate totals manually.

## Activity 2: Ask for a formula, then test it

Estimated time: 40 minutes.

### Outcomes

- Translate a data layout into spreadsheet formulas.

- Validate formulas with known outputs and counterexamples.

AI can help draft a formula, but the spreadsheet calculates the result. Specify the exact column layout, row range, and desired treatment of blanks. A formula that references the wrong column can be syntactically valid and still give a plausible wrong answer.

With the warm-up headers in row 1, Amount is column D and Category is column B. SUM(D2:D6) should produce 60. SUMIF(B2:B6,"Travel",D2:D6) should produce 25. Some spreadsheet locales use semicolons instead of commas; adjust syntax without changing the logic. Always state the layout when asking a model for help.

### Worked example

```text

TOTAL: =SUM(D2:D6)
TRAVEL: =SUMIF(B2:B6,"Travel",D2:D6)
EXPECTED: 60 and 25.
COUNTEREXAMPLE: Summing E2:E6 addresses receipt IDs, not amounts.

```

### Guided activity

1. Write the column map beside your data.

2. Ask an AI for a total and a Travel subtotal formula, or write them yourself.

3. Run the formulas and compare with the hand-checked values.

4. Deliberately change one range to the wrong column and observe the result.

5. Record the correct formula, expected result, and observed failure.

### Expected evidence

- Two formulas with correct ranges.

- A pass/fail record against expected totals.

- One documented wrong-range example.

### Common mistakes

- Accepting a formula because the model explains it confidently.

- Ignoring that a locale may require different separators.

### Check your understanding

What evidence distinguishes a correct formula from a formula that merely happens to give the right total once?

### Offline route

Annotate the ranges in text and perform the same calculation by hand.

## Activity 3: Add a failure test

Estimated time: 35 minutes.

### Outcomes

- Design edge cases for data workflows.

- Separate validation policy from formula syntax.

Tests should cover more than the original happy path. Try a new row beyond the initial range, a blank amount, a category misspelling, a zero amount, and a negative value. Your data policy decides what is valid; do not let the model silently choose the policy for you.

For this workshop, amounts must be finite numbers greater than or equal to zero, categories must match the allowed list, and receipt IDs must be unique. This simplified rule deliberately excludes refunds; a real expense system would need an explicit policy for them. The purpose is to make rejection visible instead of quietly altering the data.

### Worked example

```text

CASE: Add Travel 12.50 beyond the original range.
EXPECTED TOTAL IF INCLUDED: 72.50.
FAILURE: A fixed formula still returns 60.
FIX: Expand the range or use a structured table; then rerun all earlier checks.

```

### Guided activity

1. Add a sixth valid expense of 12.50.

2. Check whether the original range includes the new row.

3. Create test rows for blank, negative, misspelled-category, and zero values.

4. Write the expected handling for each case before calculating.

5. Update the formula/range and confirm the earlier totals still behave as expected.

### Expected evidence

- A five-case edge-test table.

- A corrected expanding-range approach or documented manual process.

- A stated policy for zero and negative values.

### Common mistakes

- Treating every negative amount as a harmless typo.

- Fixing the range without rerunning earlier checks.

### Check your understanding

Why is silently changing a negative value to positive worse than recording a rejected row?

### Offline route

Use the supplied cases and mark which the stated validation policy accepts.

## Activity 4: Clean and validate extracted data

Estimated time: 35 minutes.

### Outcomes

- Validate extracted rows using explicit rules.

- Maintain an audit trail for rejected data.

AI-assisted extraction should produce candidate rows, not trusted accounting records. Preserve the original input and record changes. A missing amount should remain missing or enter a reject log; it must not become a guessed number just to make a table complete.

The dirty-expenses fixture contains twelve rows. Under the workshop policy, seven are accepted and five rejected: one duplicate receipt ID, one non-numeric amount, one unknown category, one negative amount, and one missing date. The accepted total is 72.50. Zero is valid. Dates must be supplied, but this exercise does not implement a full calendar validator.

### Worked example

```text

EXPECTED ACCEPTED ROWS: 7.
EXPECTED REJECTED ROWS: 5.
REJECT LOG: ReceiptID, original row, reason, action.
REASONS: duplicate_id; non_numeric_amount; unknown_category; negative_amount; missing_date.

```

### Guided activity

1. Read dirty-expenses.csv without overwriting it.

2. Apply the written rules one by one and record every rejection.

3. Produce a clean table in the original column order.

4. Compare it against expected-clean.csv and the five reject reasons.

5. Explain why the zero-amount row is accepted but the missing amount is not.

### Expected evidence

- Seven accepted rows and a five-row reject log.

- An unchanged original input file.

- A clean total of 72.50 with no guessed amounts.

### Common mistakes

- Deleting problematic rows without a trace.

- Treating missing, zero, and invalid text as the same value.

### Check your understanding

Can another person reconstruct why each original row was accepted or rejected?

### Offline route

Perform the validation manually using the fixture and expected-output file.

## Activity 5: Produce an auditable summary

Estimated time: 40 minutes.

### Outcomes

- Reconcile summary values and communicate exclusions.

- Constrain AI-generated narratives to known data.

A summary needs reconciliation before presentation. The clean fixture’s categories total Travel 37.50, Food 15.00, and Tools 20.00, which sum to 72.50. A chart should communicate those values, not hide the excluded rows.

Separate what the data contains from what you infer. These twelve fictional records cannot establish a real spending trend or recommend layoffs. State the date scope, accepted-row count, rejected-row count, and validation policy beside the summary. If you ask AI for a narrative, give it only the checked aggregate and require it not to invent causes.

### Worked example

```text

CHECKED SUMMARY: Travel 37.50; Food 15.00; Tools 20.00; total 72.50.
SAFE NARRATIVE: Travel is the largest category in this fictional accepted subset.
UNSUPPORTED NARRATIVE: Fuel inflation caused overspending this month.

```

### Guided activity

1. Calculate category subtotals from the accepted rows.

2. Reconcile the subtotals to the grand total.

3. Create a small bar chart or labelled text chart.

4. Write a two-sentence narrative restricted to the checked facts.

5. Attach a footnote stating that five original rows were rejected and why.

### Expected evidence

- A reconciled category summary and simple chart.

- A factual narrative with no invented causal explanation.

- A visible validation and exclusion note.

### Common mistakes

- Using a pretty chart to conceal a failed total.

- Turning a tiny fictional sample into a real-world business conclusion.

### Check your understanding

Which sentence in your report would require evidence beyond this dataset?

### Offline route

Draw a text bar chart and write the checked totals directly from the expected file.

## Activity 6: Capstone: ship a checked expense pipeline

Estimated time: 60 minutes.

### Outcomes

- Deliver a reproducible data-quality workflow.

- Explain the boundary between a practice build and financial software.

Build a repeatable process from original input through validation, clean data, rejection records, totals, and a short report. It can be manual, spreadsheet-based, or a small script. The acceptance criteria are the same: predictable treatment of bad rows and reproducible checked results.

Do not describe the result as accounting software. It is an educational validation workflow using fictional data. Include instructions for adding a new receipt and explain what must happen if a duplicate ID has conflicting values. A person should review such conflicts rather than the system silently choosing one.

### Worked example

```text

PACK: original.csv, rules.md, clean.csv, rejects.csv, summary.md, tests.md.
ACCEPTANCE: 7 accepted; 5 rejected; total 72.50; category totals reconcile; rerunning unchanged input produces the same result.

```

### Guided activity

1. Assemble your input, written rules, clean output, reject log, and summary.

2. Run the same process twice and compare outputs.

3. Add one valid row and one duplicate-ID conflict as change tests.

4. Score the capstone rubric and document unresolved limitations.

5. Export the files with a README that another learner can follow.

### Expected evidence

- A reproducible six-file data workflow.

- Baseline tests and two change tests.

- A limitation note covering refunds, dates, and real financial use.

### Common mistakes

- Claiming production readiness from a small fixture.

- Overwriting the original data during cleaning.

### Check your understanding

What would you need to add before this process could safely touch real financial records?

### Offline route

Deliver the same artefacts using manually checked tables; automation is optional.

## End-of-path review

These are self-check questions, not verified examinations.

### Question 1

What proves a suggested formula works for your sample?

1. The model says it is correct

2. Its calculated output matches independently checked expected values

3. It is a long formula

Review answer: 2. Check the relevant worked example and its evidence/authority boundary.

### Question 2

How should a missing amount be handled under this exercise policy?

1. Guess a reasonable amount.

2. Reject or flag it with a recorded reason.

3. Replace it with zero without a note.

Review answer: 2. Missing and zero are different. The input must remain auditable.

### Question 3

What should category subtotals do?

1. Reconcile to the checked grand total.

2. Always match the model’s narrative.

3. Ignore rows the chart cannot show.

Review answer: 1. A summary needs numerical reconciliation and explicit exclusions before presentation.

## Capstone review rubric

Score each criterion 0 (missing), 1 (partial), or 2 (demonstrated). A self-review pass needs at least 8/10 and 2/2 on the final safety/limits criterion. This is practice feedback, not verified assessment.

### Input preservation

Original data and validation policy are retained.

### Correct validation

The baseline yields 7 accepted and 5 rejected rows with reasons.

### Reconciled totals

Total 72.50; Travel 37.50, Food 15.00, Tools 20.00.

### Repeatability

Reruns and added-row/duplicate-conflict tests are documented.

### Scope and privacy [critical]

Only fictional data; financial limitations and exclusions are clear.

## References

- [Google Sheets function reference](https://support.google.com/docs/table/25273)

- [LibreOffice Calc guidance](https://help.libreoffice.org/latest/en-US/text/scalc/main0000.html)

## Editorial boundary

Original authored practice material; not independently expert-reviewed.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
