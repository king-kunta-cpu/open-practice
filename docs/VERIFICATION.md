# Verification — 0.8.0 / 2026-10-21

**Current status: deployed to https://open-practice.zlnew.workers.dev.** The final automated suite has 45 passing tests; the production browser suite also passes. Earlier local-only sections below are retained as a chronological record. The production-deployment section contains the final migration evidence.

## Earlier local verification phase
38 automated tests pass under Node 22 with no skips. Chromium checks use the local Node preview, not the production Worker. External namespace transfer, remote repository rename/push and production deployment have **not** been executed for this release.

## Automated checks
- Six canonical paths, 36 complete activities, 18 review questions, six capstones, 30 rubric criteria; guided-time totals reconcile to 1,440 estimated minutes.
- Every activity includes outcomes, explanation, example, guided steps, evidence, common mistakes, understanding check and offline alternative.
- Legacy first-three-activity indices and notes survive; prior knowledge checks do not silently pass the expanded review.
- A 9/10 capstone fails its threshold if the critical safety criterion is only 1/2.
- Eight calculator reference cases plus multiplication overflow; cleaned expense fixture reconciles to its documented category totals.
- Tutor context contains the selected activity rather than the full path.
- Six practice ZIPs rebuild deterministically, open without archive errors and include workbook, metadata and fixtures.
- Worker-packaged ZIP/image/font bytes equal the source bytes, with correct MIME types.
- Active authored text uses current identity; historical Git records and third-party licence files are excluded from rewriting.
- Native SQLite registration, persistence, recovery rotation, export/deletion behaviour and the existing security/provider/router suite remain passing.

## Chromium local browser
- Curriculum page renders six paths and accurate 36-activity/21-resource counts.
- A path shows six activity selectors, structured examples/evidence, three review questions and five rubric controls.
- Selecting the correct review responses updates progress; critical rubric scoring changes the displayed threshold status.
- Native HTML export contains all six activities, review questions and rubric. Notes containing script-like text remain text and never execute.
- Download → open from disk → edit final-activity note → download updated copy → reopen preserves both old and new notes.
- Offline JSON reimport restores the final-activity note to the online path.
- Library renders 21 downloads; dashboard uses eight completion units and a 36-activity denominator.
- Homepage, curriculum, active cloud-AI path, dashboard, library, News Drops and privacy have no horizontal overflow at 390px.
- Offline quote fixture calculates a fractional case; lexical-retrieval fixture renders sources and explicitly reports a no-overlap query.
- A temporary account saves and retrieves the final expanded activity through the local HTTP API, then is deleted.
- No uncaught browser JavaScript errors in the successful run.

The browser suite exercises one path's full review/export round trip; structural/unit checks cover all six. Mocked provider tests do not establish live provider availability. Earlier production Groq/account tests belong to the preceding release and are not proof that 0.6.0 is live.

## Remaining gates
Independent subject-matter review, learner-tested timing, full backup/restore rehearsal, namespace-transfer rehearsal, production account-preservation verification, external rename/push/deployment, authenticated Gemini/learner Cloudflare tests, abuse/load/security review and provider budget enforcement. No email-link sender is configured. Self-review scores are not independently verified assessment.

## Optional browser runner
Start the Node server, install Playwright in a separate QA environment, then run `PREVIEW_URL=http://127.0.0.1:3001 node scripts/browser-check.mjs`. If Playwright is not installed in the repository, set `PLAYWRIGHT_MODULE` to its module path. `QA_DIR` selects an output directory; otherwise temporary OS storage is used. Playwright is test tooling, not a runtime dependency.

## Editorial Collection / 0.7.0
44 automated tests pass. The reference page’s actual CSS was inspected for its cream, burgundy, terracotta and gold palette, serif headings, rounded cards and cover/detail layout. Public and learner pages were rebuilt locally in that format. Additional Chromium checks verify public collection arrows, six selectors, Home/End keyboard navigation, course entry, cream background, native serif heading, account-dialog theme, and seven public/learner routes at 360, 390, 768 and 1024px without horizontal overflow. Existing offline download/edit/reopen/import and final-activity account save/delete checks pass under the new theme. Screenshots were visually inspected; a collapsed catalogue-card column found during inspection was fixed before the final run.

No external push, hostname transfer, account-store migration or production deployment was performed. The running preview is the current verified build.

## Production deployment / 21 October 2026
The 0.7.0 release is now live at https://open-practice.zlnew.workers.dev. The previous local-only notes above describe earlier verification stages, not the final deployment status.

- Rehearsed cross-Worker SQLite transfer on disposable Workers; identical namespace ID and retained row verified. Test Workers were then removed.
- Captured an encrypted, transaction-consistent snapshot of account/session/workspace/event tables before transfer. Recovery material is kept out of source and release ZIPs; a complete snapshot-restore rehearsal is still pending.
- Production namespace and original object ID preserved. Pre-transfer login and exact workspace retrieval succeeded on the new host, including the final expanded-activity note. No replacement account was used as a substitute.
- Stale saved-work update correctly returned 409. The company tutor returned an actual Groq response using its privately transferred credential.
- Temporary migration-proof account deleted. The former address redirects, and its Worker has no database/secret binding or cron. Destination retention cron runs daily at 03:00 UTC.
- The maintained Chromium suite passed against the real production hostname: public collection, curriculum, rich activities/review/rubric, native offline edit/download/reopen, JSON reimport, library count, dynamic dashboard, local tools, account save/retrieve/delete and mobile layout. A QA race was corrected by waiting for the activity UI before setting a file input; no application import defect was found.
- Existing remote repository renamed to `king-kunta-cpu/open-practice`; no second source repository was created.

No accreditation, audited-security status, guaranteed provider budget, email-link sender or complete operator restore drill is claimed.

## The 50-activity studio / 0.8.0
57 automated tests pass with no skips. Tests verify all 50 unique activity numbers, ten collections with five members each, substantive unique inputs/prompts/references, five guided steps per activity, 50 original covers, 50 four-stage visual guides, 50 handbooks/input sheets, deterministic collection packs, original CSV/PDF fixtures and byte-accurate Worker binary packaging. New tests cover self-review evidence requirements, bounded record normalization, contrast reference values, JSON syntax/shape errors and standalone HTML escaping.

The activity Chromium suite visits all 50 detailed views and confirms that their guides load. It exercises catalogue pagination/search/category filters; explicit manual/hosted/design route labels; local evidence/self-review; offline HTML download/edit/reopen and JSON reimport; regex, JSON, contrast and script-disabled HTML tools; temporary-account activity save/restore; dashboard activity records; and 360/390/768/1024px layouts. A long-account-name overflow found in the first run was corrected with wrapping before the passing run. Temporary accounts are deleted. The existing foundation browser suite also passes with the 31-item library.

Timing and independent subject-matter review remain pending. No paid tool access, custom model training, image generation entitlement, real-user research, accessibility certification or professional advice is implied by reading an activity. Learner-recorded completion is not independently verified.


## Tool field desk / 0.8.1

The 0.8.0 studio was published and its all-50 activity suite plus foundation suite passed on the live host. GitHub CI passed for `efa4c303ef9e`.

The 0.8.1 tool directory adds ten provider options with official access-reference links, four track filters and two access labels, reusing existing illustrated exercises rather than inventing independent mastery claims. It does not save keys or add provider bindings. The free-tier label is not a guarantee of model/feature/region availability. Canva editing alone is explicitly design-only; a Zapier manual handoff is not an automated AI run. The source list's local-training/simulation recommendations are replaced and Lobe's maintenance status is disclosed.

Local verification: 61 automated tests; ten challenge inputs/prompts/guides and related covers; directory search/track/access/reset/empty state; clipboard failure fallback; linked evidence workspace; account dialog; 360/390/768/1024px responsive layouts. No new account/workspace schema or database migration is needed.


## Artwork refresh / 0.8.2 — first ten only

Activities 01–10 have original colorful AI-generated editorial illustrations with dimensional lighting, shading and material textures. Their ten visual guides now have artwork headers, color-coded steps and shaded process diagrams. The remaining 40 activity covers/guides are not yet replaced: generation was limited to ten images in this turn. The catalogue uses larger edge-to-edge artwork instead of padded book thumbnails. The linked tools directory, dashboard, collection selectors and ZIP downloads consume the same updated assets.

Images remain self-contained in SVG data URIs, including offline HTML exports. Compressed source art and guide thumbnails live in `branding/activity-art`; the deterministic builder uses only Python's standard library. 63 automated tests cover the original functionality plus artwork embedding and the 3 MiB Worker payload ceiling. All 100 activity SVGs are XML-valid. The all-50 activity browser suite and ten-tool suite passed locally after the artwork update, including mobile layouts and offline edit/reopen.
