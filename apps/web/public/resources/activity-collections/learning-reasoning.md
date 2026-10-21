# Learning & reasoning

Use explanations without mistaking fluency for evidence.

---

# 06. The explainer that earns your trust

Open Practice / Learning & reasoning

Estimated time: 35 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Adapt an explanation to different readers without changing the underlying facts.

## Why this matters

An analogy can make a topic memorable while quietly introducing a misconception. Start from a small source you can verify. Ask for a concrete example and a boundary for every analogy. Then answer a transfer question without reading the generated explanation.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Source facts: In a conventional computer, a bit has value 0 or 1. Quantum computation uses qubits and carefully controlled operations. Measuring a qubit gives an outcome; quantum computers do not simply try every answer and hand over all results. This is a beginner sketch, not a complete account.

```

## Copy-and-adapt prompt

```text

Using only these facts, explain the topic first to a beginner and then to a history student. Use one analogy in each version, label where the analogy breaks, and include one check question. Do not introduce claims about guaranteed speedups or say a qubit is literally a spinning coin.

```

## Worked reference

A history-student analogy might compare different ways of organizing a calculation, then explicitly say historical armies or governments do not model quantum physics. A version that says “it computes every answer at once so all problems are instant” fails.

## Guided activity

1. **Choose a verified source.** Use the supplied sketch or a short authoritative reference. List three facts that must survive both versions.

2. **Request two audiences.** Keep the source fixed. Change only the audience and analogy instructions.

3. **Audit the analogies.** Underline the useful comparison and circle any statement that treats the comparison as literal physics.

4. **Teach it back.** Close the outputs and explain the three facts in your own words. Answer the check question.

5. **Repair one misconception.** Ask for a shorter explanation that removes the misleading analogy while preserving the fact.

## Test your result

- [ ] Both audience versions preserve the source’s three core facts.

- [ ] Each analogy includes an explicit limitation.

- [ ] Your own teach-back answers a new question rather than copying the output.

## Common mistakes

- Treating simpler wording as automatically more accurate.

- Using a fluent analogy as a substitute for a reliable source.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. Both audience versions preserve the source’s three core facts.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. Each analogy includes an explicit limitation.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Treating simpler wording as automatically more accurate.

## No-account / offline route

Write the two explanations yourself and have a reader identify where each analogy fails.

## Reflection

Which explanation helped you answer a new question, not just remember a phrase?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.


---

# 20. Stress-test an argument politely

Open Practice / Learning & reasoning

Estimated time: 35 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Use counterarguments to find assumptions, not to outsource your judgement.

## Why this matters

An AI opponent can generate plausible objections but may invent evidence. Define the claim narrowly, separate empirical statements from values and ask what evidence would change each side’s view. A useful debate ends with a revised claim or a better question, not a manufactured winner.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Claim: “Remote work is always better than office work.” Context: a fictional eight-person design team; two members need physical workshop equipment, three prefer quiet home working, and the team has missed two handovers. No productivity study is supplied.

```

## Copy-and-adapt prompt

```text

Challenge the word “always” in this claim using only the supplied context. Give one strongest counterexample, one assumption to test and one fair question. Do not fabricate studies or diagnose people. After I answer, help me rewrite a narrower, testable claim.

```

## Worked reference

Counterexample: equipment-dependent tasks may require a shared workshop. Revised claim: for suitable desk tasks, a hybrid arrangement might help this team if handover reliability is maintained. That is a proposal to test, not a proven productivity result.

## Guided activity

1. **State the claim.** Mark absolute words and define which team and tasks you mean.

2. **Request a steelman objection.** Ask for the strongest reasonable counterexample rather than insults or rhetorical tricks.

3. **Audit evidence.** Label each statement source-supported, hypothetical or unsupported; remove fabricated study references.

4. **Answer one question.** Explain which trade-off matters most and what measurement you would accept.

5. **Revise and plan a test.** Write a narrower claim and two measures, such as handover completion and task cycle time.

## Test your result

- [ ] The objection targets an identifiable assumption rather than the speaker.

- [ ] No invented study or unsupported productivity number is accepted as evidence.

- [ ] The final claim has a scope and a plausible way to test it.

## Common mistakes

- Equating persuasive language with a true counterargument.

- Treating the exercise as a competition to “destroy” an opponent.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. The objection targets an identifiable assumption rather than the speaker.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. No invented study or unsupported productivity number is accepted as evidence.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Equating persuasive language with a true counterargument.

## No-account / offline route

Write the strongest objection yourself, then ask a partner to improve it respectfully.

## Reflection

What evidence could genuinely make you change your mind?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.


---

# 23. Make a concept map you can correct

Open Practice / Learning & reasoning

Estimated time: 35 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Turn a technical description into a labelled flow without confusing order and causation.

## Why this matters

A hierarchy and a process flow are different diagrams. Ask which relationship each arrow represents, and include alternate or failed paths. Start with a small verified account instead of asking a model to draw the entire internet from memory. A neat diagram can still have the wrong order.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Source sketch: A browser may use a cached address or ask DNS for a server address. It then establishes the needed connection and sends an HTTPS request. A server returns a response. The browser renders content and may request more resources. DNS failure can stop the normal path.

```

## Copy-and-adapt prompt

```text

Turn the sketch into a text flow with labelled arrows. Include the cached-address branch and DNS-failure branch. Distinguish “next step” from “part of.” Do not imply DNS downloads the webpage or that one response always completes rendering.

```

## Worked reference

Browser → cached address? yes → connect/request; no → DNS lookup → address found? yes → connect/request; no → show error/retry. Response → render → possibly request images/styles. DNS resolves names; it does not serve the page content.

## Guided activity

1. **Identify entities and actions.** Make separate lists for browser, DNS, server and response steps.

2. **Generate the text map.** Request labelled arrows and both alternate/failure paths.

3. **Trace one success.** Walk from typing an address to first rendering; point to every required stage.

4. **Trace one failure.** Follow DNS failure without pretending a response was received.

5. **Redraw and explain.** Use the visual guide as a model and write a plain-language description of one arrow’s exact meaning.

## Test your result

- [ ] DNS resolution is distinguished from sending or receiving webpage content.

- [ ] The cache and failure branches are present.

- [ ] Each arrow has a stated relationship rather than an unexplained decorative connector.

## Common mistakes

- Confusing a list of components with an ordered process.

- Removing error branches to make the diagram look simpler.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. DNS resolution is distinguished from sending or receiving webpage content.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. The cache and failure branches are present.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Confusing a list of components with an ordered process.

## No-account / offline route

Write steps on cards and arrange a flow with a cache branch and failure branch.

## Reflection

Which arrow would mislead a beginner if it had no label?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.


---

# 30. Translate jargon without changing the claim

Open Practice / Learning & reasoning

Estimated time: 35 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Make a technical statement understandable without inventing business impact.

## Why this matters

Plain language should preserve uncertainty, conditions and numerical meaning. A model may replace jargon with impressive but unsupported savings or risk claims. Use a short fictional source and demand a parallel evidence ledger so the reader can see what was simplified and what remains unknown.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Source: “The prototype caches repeated requests for five minutes. In a 100-request test, 60 were served from cache. The test did not measure financial savings or peak-load behaviour.”

```

## Copy-and-adapt prompt

```text

Rewrite the source for a non-technical operations reader. Preserve the five-minute window, the 60/100 test result and the unmeasured limits. Then provide a source-to-rewrite mapping. Do not convert cache hits into a claimed 60% cost reduction or a performance guarantee.

```

## Worked reference

Acceptable: “For five minutes, the prototype can reuse some recent answers. In one small test it reused stored results for 60 of 100 requests. We have not tested cost savings or heavy traffic.” A 60% savings claim is unsupported.

## Guided activity

1. **Mark protected meaning.** Underline numbers, qualifiers and limitations in the source.

2. **Generate the rewrite.** Specify a reader and a shorter vocabulary, not a more persuasive sales message.

3. **Build a mapping.** Trace each rewritten claim to an exact source sentence.

4. **Challenge an overclaim.** Ask whether “60% cheaper” follows. Record why the missing cost measurements prevent that conclusion.

5. **User-test comprehension.** Ask a reader to explain what was measured and what was not.

## Test your result

- [ ] All source numbers and limitations survive the rewrite.

- [ ] Cache-hit rate is not misrepresented as cost saving or guaranteed speed.

- [ ] A reader can distinguish the measured result from the untested business effect.

## Common mistakes

- Replacing technical jargon with invented business metrics.

- Deleting uncertainty because it makes the sentence shorter.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. All source numbers and limitations survive the rewrite.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. Cache-hit rate is not misrepresented as cost saving or guaranteed speed.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Replacing technical jargon with invented business metrics.

## No-account / offline route

Write a plain-language version yourself and highlight each source-to-rewrite link.

## Reflection

Which qualifier would most change a decision if it disappeared?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.


---

# 31. Find connections without inventing history

Open Practice / Learning & reasoning

Estimated time: 35 minutes. Not learner-validated.

Original material: CC BY 4.0. Independent, non-degree and non-accredited.

Distinguish an analogy, a documented influence and a factual relationship.

## Why this matters

An unexpected connection is an idea to investigate, not evidence that one system caused another. Separate analogy from history and verify specific claims independently. The Roman Empire and cloud computing can invite useful comparisons, but modern technical terms should not be projected backward as literal ancient systems.

## Before you start

Materials are free. External tools may require an adult account, credits, regional eligibility or a paid plan. Check current terms before using them. Do not paste passwords, API keys, private messages or other people’s personal data. No model runs locally or downloads automatically on this platform.

## Practice input

```text

Compare a Roman road network with a modern distributed computing network. Possible dimensions: routes, hubs, disruption, maintenance and administration. No historical document or technical specification is supplied.

```

## Copy-and-adapt prompt

```text

Suggest three clearly labelled ANALOGIES between these systems. For each, explain one useful comparison and one important difference. Put historical or technical factual claims in a separate verification-needed list. Do not invent direct influence, quotations or ancient equivalents of digital technology.

```

## Worked reference

Analogy: both can involve alternative routes around disruption. Difference: roads transport physical travellers/goods; computer networks move encoded information under protocols. “Romans invented cloud load balancing” is not an acceptable factual conclusion.

## Guided activity

1. **Name relationship types.** Define analogy, factual claim and causal influence before querying.

2. **Generate three candidates.** Ask for useful similarities plus differences, not a sensational hidden-history narrative.

3. **Tag each sentence.** Mark it analogy, factual assertion or unsupported causal claim.

4. **Verify one assertion.** Consult an authoritative historical or technical source and record the exact supporting passage.

5. **Build a cautious map.** Use solid edges for verified relationships and dashed edges for analogies or hypotheses.

## Test your result

- [ ] Each connection is labelled by type and includes an explicit difference.

- [ ] At least one factual assertion has independently checked evidence or remains unresolved.

- [ ] No analogy is reported as proof of historical influence.

## Common mistakes

- Mistaking a clever parallel for causation.

- Inventing citations to make a surprising story sound credible.

## Evidence to keep

- **Keep the build**: Save your original input, exact prompt and resulting artifact. Each connection is labelled by type and includes an explicit difference.

- **Show what you tested**: Record a pass/fail result and evidence for every check below. At least one factual assertion has independently checked evidence or remains unresolved.

- **Explain a limitation**: Write what changed after one deliberate revision and name a remaining failure mode. Mistaking a clever parallel for causation.

## No-account / offline route

Compare two familiar systems on paper and label the analogy boundaries without making historical claims.

## Reflection

Which connection stayed useful after you removed its exaggerated historical claim?

## Honest completion

Completion is a learner self-report based on saved evidence, not verified assessment or an accredited credential.

Original authored activity; independent subject-matter review and learner timing remain pending.
