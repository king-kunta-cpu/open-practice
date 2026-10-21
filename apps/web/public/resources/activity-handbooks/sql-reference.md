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
