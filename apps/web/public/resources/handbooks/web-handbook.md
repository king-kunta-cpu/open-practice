# From idea to working page

Open Practice / Build with AI / curriculum 2.0

Estimated guided practice: 5h estimated. This estimate has not been learner-tested.

Original practice material · CC BY 4.0 · Non-degree and non-accredited.

## What you will build

Publish a useful one-page tool

## Before you start

- Can create/open a local HTML file.

- A modern browser; coding experience is not required.

## Learning outcomes

- Specify a minimal tool with eight acceptance tests.

- Inspect generated code for unnecessary network and permission use.

- Debug small reproducible failures and rerun regressions.

- Release an accessible, offline, credential-free calculator.

## Activity 1: Specify the smallest tool

Estimated time: 35 minutes.

### Outcomes

- Specify a minimal useful web tool.

- Define acceptance tests before implementation.

A useful first web tool has one clear job and no unnecessary accounts, payments, analytics, or personal data. Build a fictional quote calculator: quantity multiplied by unit price. Inputs must be finite, non-negative numbers. Decide whether decimals and zero are allowed before asking AI for code.

Acceptance criteria turn an idea into something testable. Define inputs, expected results, error messages, keyboard behaviour, and offline use. This makes it possible to reject generated code that looks attractive but does the wrong thing. The calculator is an estimate exercise, not a production billing system.

### Worked example

```text

ACCEPTANCE: 3 × 5 = 15.00; 0 × 5 = 0.00; 1.5 × 2 = 3.00; negative or blank input is rejected. Every input has a visible label. The page works without a network request.

```

### Guided activity

1. Write a one-sentence problem statement.

2. Choose rules for zero, decimal, blank, negative, and non-finite values.

3. Create at least eight input/expected-result tests using quote-tests.json.

4. Sketch the page with labels, calculate action, result, and error area.

5. State explicitly that no payment or real customer data is involved.

### Expected evidence

- A small written specification and page sketch.

- Eight acceptance tests with expected values.

- A clear boundary between an estimate and an invoice.

### Common mistakes

- Starting from visual styling before defining behaviour.

- Letting generated code decide how invalid inputs are handled.

### Check your understanding

If the tool displays 0.00 for a blank quantity, did it meet your specification?

### Offline route

Write the specification and test table on paper before coding.

## Activity 2: Build and inspect

Estimated time: 50 minutes.

### Outcomes

- Inspect generated code for scope and risk.

- Separate computation from interface handling.

Ask for one self-contained HTML file with labelled inputs, a button, a result area, and no external libraries. Read generated code before running it. Look for network calls, script imports, credential fields, unexpected storage, and operations unrelated to the tool’s purpose.

Separate calculation logic from the interface. A pure calculateQuote function can be tested with known inputs; the event handler reads form values and displays the result. Avoid inserting user-provided content with innerHTML. Use textContent for results and errors so input is treated as text rather than markup.

### Worked example

```text

LOGIC: reject blank input; convert to numbers; reject non-finite or negative values; multiply; check that the result is finite; format for display.
INTERFACE: read fields → call calculation → put a result/error into a text node.
SCOPE: no tax, currency conversion, or payment processing.

```

### Guided activity

1. Create or generate a one-file implementation matching your specification.

2. Inspect it for fetch, external script tags, storage, and unrelated permissions.

3. Find the function that validates and multiplies values.

4. Explain each validation branch in your own words.

5. Open it locally and run the happy-path tests before styling it.

### Expected evidence

- An inspectable self-contained HTML file.

- An explanation of input validation and calculation.

- A list of external dependencies: none for this build.

### Common mistakes

- Running generated install commands without inspection.

- Assuming HTML min attributes replace all validation logic.

### Check your understanding

Which lines would you inspect first if a generated calculator unexpectedly requested an API key?

### Offline route

Use the supplied self-contained reference calculator and annotate the code before changing it.

## Activity 3: Test and share

Estimated time: 45 minutes.

### Outcomes

- Test actual behaviour across inputs and devices.

- Share a reproducible build with honest limits.

Run the same acceptance tests against your actual file, not a screenshot or an AI explanation. Record expected output, observed output, and pass/fail. Test keyboard operation and a narrow screen as well as arithmetic. A page that works only with a mouse is not complete.

The reference calculator intentionally remains simple. JavaScript floating-point arithmetic can be unsuitable for precise financial accounting. Formatting with two decimals does not solve every money-calculation problem. State that limitation rather than advertising the exercise as an invoicing or payment system.

### Worked example

```text

TEST LOG: quantity 3, price 5 → expected 15.00 → observed 15.00 → pass.
KEYBOARD TEST: Tab reaches both inputs and Calculate; Enter submits; the result is announced in a status region.
LIMITATION: Educational estimate, no tax or financial rounding policy.

```

### Guided activity

1. Run all eight fixture cases and record observed results.

2. Navigate the page using only Tab, Shift+Tab, Enter, and Space.

3. Test a phone-width viewport and long error text.

4. Disconnect the network and repeat a successful calculation.

5. Share the HTML with a README listing tests and limitations.

### Expected evidence

- Eight recorded arithmetic/validation tests.

- Keyboard, narrow-screen, and offline checks.

- A README that does not overstate financial correctness.

### Common mistakes

- Testing the reference file while sharing a different untested version.

- Treating two-decimal formatting as a complete accounting policy.

### Check your understanding

Can someone open the file offline and reproduce your test results without installing anything?

### Offline route

The entire activity is designed to run from a local file.

## Activity 4: Debug with reproducible failures

Estimated time: 45 minutes.

### Outcomes

- Write focused debugging requests.

- Protect behaviour with regression tests.

A useful bug report contains the smallest input that reproduces the problem, the expected result, the actual result, and the relevant environment. When asking AI for help, include the narrow function and test—not secrets, an entire account export, or unrelated application files.

Change one thing at a time and keep a known-working version. A suggested fix may solve one case while breaking another. Rerun the full small test set after each change. If the model proposes a large rewrite, ask it to explain why a smaller patch is insufficient.

### Worked example

```text

BUG: Empty quantity shows zero instead of an error.
CAUSE: Number("") becomes 0.
SMALL FIX: Check the trimmed raw input before numeric conversion.
REGRESSION TESTS: zero must still be accepted; blank must fail.

```

### Guided activity

1. Introduce the blank-input bug in a copy of the calculator.

2. Write a four-part bug report with exact reproduction steps.

3. Ask for or propose the smallest change that addresses the cause.

4. Run the blank and zero tests, then all remaining cases.

5. Record the diff and the reason the fix is correct.

### Expected evidence

- A reproducible bug report.

- A small explained patch and regression test results.

- An unchanged known-working backup.

### Common mistakes

- Pasting an entire private project into a cloud prompt.

- Accepting a rewrite without checking whether old tests still pass.

### Check your understanding

Why must zero remain a separate test after fixing blank-input handling?

### Offline route

Debug the local file using browser developer tools or a text editor.

## Activity 5: Improve accessibility and safe rendering

Estimated time: 45 minutes.

### Outcomes

- Apply basic accessible form patterns.

- Render untrusted text without executing it.

Accessibility and safe rendering are engineering requirements, not final decorations. Use visible labels connected to inputs, meaningful button text, readable contrast, and a result/status region. Errors should explain the problem without relying only on red colour.

Treat any future free-text field as untrusted. For this exercise, test that text such as <img src=x onerror=alert(1)> is shown as text or rejected, never executed. Do not add a rich-text editor or third-party UI library just to display a result. Keep the file inspectable and responsive.

### Worked example

```text

REQUIRED: label for="quantity" matches input id="quantity".
STATUS: a result region uses role="status".
SAFE OUTPUT: result.textContent = message.
REVIEW: controls remain readable at browser zoom and do not require hovering.

```

### Guided activity

1. Check the label/input associations.

2. Confirm that errors are understandable without colour.

3. Inspect every location that displays user-supplied text.

4. Test keyboard focus visibility and a larger browser zoom.

5. Remove decorative features that reduce clarity or add unnecessary dependencies.

### Expected evidence

- An accessibility checklist with observed results.

- No untrusted HTML insertion in the tool.

- A responsive version that remains usable without hover.

### Common mistakes

- Using placeholders as the only labels.

- Confusing a sanitisation claim with evidence that rendering is safe.

### Check your understanding

How would a keyboard user know which input is invalid and where the current focus is?

### Offline route

Perform every check on the downloaded HTML; no account or network is required.

## Activity 6: Capstone: release a tested quote tool

Estimated time: 80 minutes.

### Outcomes

- Package and review a minimal web release.

- Distinguish a practice build from production financial software.

Deliver a small release that another person can inspect, run offline, and test. Include the implementation, specification, acceptance tests, observed results, accessibility notes, and known limitations. A release note should explain what changed and what is deliberately outside scope.

If you publish the file online, review it again for secrets and dependencies. Do not add payment buttons or real customer collection to this capstone. Those features introduce additional financial, security, legal, and privacy responsibilities that this practice build has not addressed.

### Worked example

```text

RELEASE PACK: index.html, README.md, specification.md, test-results.md, CHANGELOG.md.
ACCEPTANCE: all eight fixture tests pass; keyboard and offline checks pass; no network dependencies; no misleading billing claims.

```

### Guided activity

1. Freeze a release candidate and run the entire test checklist.

2. Ask another learner to reproduce two tests from the README.

3. Fix one issue they find and record the change.

4. Score the five capstone criteria with evidence.

5. Export the HTML and release pack without credentials or private data.

### Expected evidence

- A runnable and inspectable release pack.

- Complete tests and a documented review improvement.

- Explicit limits covering financial accuracy, tax, and production use.

### Common mistakes

- Publishing a later untested version after finishing the test report.

- Claiming secure or production-ready solely because the page runs.

### Check your understanding

Which acceptance test would catch a regression introduced by your last visual change?

### Offline route

Complete and distribute the release as local files; public deployment is optional.

## End-of-path review

These are self-check questions, not verified examinations.

### Question 1

When should you execute generated code?

1. After inspecting it and understanding its permissions

2. Immediately, because it was generated

3. Only if it contains a secret key

Review answer: 1. Check the relevant worked example and its evidence/authority boundary.

### Question 2

Why test zero separately after rejecting blanks?

1. Because zero is invalid too.

2. Because fixing blank handling must not accidentally reject a valid zero.

3. Because formatting changes the input.

Review answer: 2. Blank and zero have different meanings in the specification.

### Question 3

Which method is appropriate for showing untrusted text in a result region?

1. textContent

2. A raw innerHTML assignment

3. eval

Review answer: 1. textContent treats the input as text instead of executable markup.

## Capstone review rubric

Score each criterion 0 (missing), 1 (partial), or 2 (demonstrated). A self-review pass needs at least 8/10 and 2/2 on the final safety/limits criterion. This is practice feedback, not verified assessment.

### Specification

Inputs, invalid cases and scope are defined before implementation.

### Behaviour

All eight fixture tests have expected and observed results.

### Accessible use

Visible labels, keyboard operation, focus and status/error handling are checked.

### Reproducibility

Offline file, README, change log and review evidence are supplied.

### Safety and scope [critical]

No secrets/dependencies/real payments; financial limits are stated.

## References

- [MDN: first website](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website)

- [MDN: accessible forms](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)

- [MDN: textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

## Editorial boundary

Original authored practice material; not independently expert-reviewed.

Use fictional/redacted data and your own authorised provider credentials. Never include credentials in this pack or public work.
