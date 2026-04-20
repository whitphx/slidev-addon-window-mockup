---
"slidev-addon-window-mockup": patch
---

Pin transitive `dompurify` to `>=3.4.0` via a pnpm override so
`monaco-editor`'s pinned `dompurify@3.2.7` is replaced with a patched
release, clearing five security advisories (GHSA-v2wj-7wpq-c8vv,
GHSA-h8r8-wccr-v5f2, GHSA-cj63-jhhr-wcxv, GHSA-cjmm-f4jc-qw8r,
GHSA-39q2-94rc-95cp).
