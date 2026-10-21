# Account/library/offline release verification

Verified against the live Worker on 2026-10-21.

## Automated
21 tests pass under Node 22, including native SQLite persistence, password hashing, escaping in offline exports, required resource files, and existing routing/security tests. The older sandbox Node 20 skips the native SQLite test; the full Node 22 run has no skips.

## Live HTTP
- Public course/library/news/privacy pages and SVG resource return HTTP 200.
- Register a temporary adult account, receive recovery code and secure session.
- Save a course workspace, retrieve it, refuse a stale version with HTTP 409.
- Record an allowed learning event and verify extraneous key-like fields are not stored.
- Export account work and events.
- Sign out; signed-out save is denied with HTTP 401.
- Sign in and retrieve prior saved notes (cross-session persistence).
- Make a successful learner-key Groq inference request.
- Recover/reset password using the code, then delete the test account and verify session is cleared.

## Chromium browser
- Register through the actual UI and save a course note to the account.
- Download a native HTML workspace.
- Open it from disk, disconnect network access, edit a note, download a new HTML copy, reopen and verify the edit survived.
- Render all 9 library resources and 3 news entries.
- Delete the browser test account.
- Check mobile viewport at 390px: no horizontal overflow.
- No uncaught browser JavaScript errors.

Test accounts were deleted. No API keys were committed. Google Gemini and learner Cloudflare adapters are implemented but have not had authenticated end-to-end inference tests; no suitable learner credentials were supplied for them. Learner Groq was verified. These checks are not a penetration test, load test, data-restoration drill, or child-safety review.

## Dashboard bugfix release
The old Load cloud work button returned silently for an empty account and used a blocking confirmation/reload path for saved accounts. It now opens a dedicated dashboard with explicit loading, empty, error and retry states; browser/cloud course cards; and explicit cloud-copy restore. Normal sign-in redirects to the dashboard. Registration/recovery retains the one-time code until the learner chooses to continue. Recovery-code replacement requires the current password and revokes existing sessions before issuing a new session. Additional automated coverage verifies rotation and the empty-state/timeout paths.

Dashboard release Chromium verification: a new empty account opened the dashboard with all six courses; saved work appeared after sign-out/sign-in; recovery replacement succeeded; the temporary account was deleted. No browser JavaScript errors. The Node 22 run now passes 22 tests.

## Brass & Circuit redesign verification
25 Node 22 tests pass. Binary logo/favicon responses match the original bytes after Worker packaging. Main pages have a same-origin script policy; downloadable starter HTML retains its own working inline script. Chromium reran account creation/deletion, dashboard loading, cloud saves and recovery rotation, plus offline edit/save/reopen. Library and news render correctly, and the 390px mobile viewport has no horizontal overflow. A fresh production homepage load made zero third-party browser requests and had no failed assets; logo loading was verified. The hero's embedded SVG emblem needs no external image fetch.

## Collection command-center release
28 Node 22 tests pass. Chromium verifies previous/next selection, mini-manual selection, ArrowLeft/ArrowRight/Home/End controls, mobile horizontal drag/swipe, selected-item tracking, the new offline download action, and font loading. Public pages have no horizontal overflow at 390px. Account registration, saved-work retrieval, recovery replacement, deletion and offline edit/download/reopen were rerun successfully; temporary test accounts were removed. The six covers are original school diagrams; no reference-site media or tracking/urgency scripts were copied.
