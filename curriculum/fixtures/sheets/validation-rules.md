# Validation policy

Invented data only. Preserve the original input. Require a supplied date, category Travel/Food/Tools, unique ReceiptID, and a finite non-negative numeric amount. Zero is valid. Reject missing/invalid values with a reason rather than guessing. First observed r03 is kept; the repeated row is rejected. Conflicting duplicates require human review. Refunds and full calendar validation are deliberately outside scope.

Expected accepted: 7; rejected: 5; total: 72.50.
