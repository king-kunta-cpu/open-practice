# Original fictional input / Ask for a regex, then attack its assumptions

Specification: local part must contain a hyphen; domain is one simple label followed by .edu; no spaces; case-insensitive. Match: first-last@example.edu; A-B@COLLEGE.EDU. Reject: firstlast@example.edu; first-last@example.com; firstlast@my-college.edu; first-last@dept.example.edu.

No private data or credentials are required. CC BY 4.0.
