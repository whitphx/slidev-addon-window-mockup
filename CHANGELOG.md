# slidev-addon-window-mockup

## 0.3.1

### Patch Changes

- [#74](https://github.com/whitphx/slidev-addon-window-mockup/pull/74) [`04ee456`](https://github.com/whitphx/slidev-addon-window-mockup/commit/04ee4562c9bfe91d6f3e436cd4539153d7229f1a) Thanks [@whitphx](https://github.com/whitphx)! - Refresh transitive `js-yaml` from 3.14.1 to the patched 3.14.2, clearing
  prototype-pollution advisory GHSA-mh29-5h37-fv8m reported by the
  dependency review workflow.

- [#74](https://github.com/whitphx/slidev-addon-window-mockup/pull/74) [`fae54ce`](https://github.com/whitphx/slidev-addon-window-mockup/commit/fae54ceba582e3a7ca38061af381bf71c75b036c) Thanks [@whitphx](https://github.com/whitphx)! - Refresh `pnpm-lock.yaml` to deduplicate transitive `vite` resolutions onto
  a single patched version, clearing three security advisories
  (GHSA-p9ff-h696-f583, GHSA-v2wj-q39q-566r, GHSA-4w7w-66w2-5vf9).

- [#74](https://github.com/whitphx/slidev-addon-window-mockup/pull/74) [`7f1ff61`](https://github.com/whitphx/slidev-addon-window-mockup/commit/7f1ff61c74d033a8b29363a3827fd5fdd612f395) Thanks [@whitphx](https://github.com/whitphx)! - Migrate dev tooling from ESLint + Prettier to the Oxc toolchain (`oxlint`

  - `oxfmt`) and enable oxlint's type-aware linting. No changes to the
    published runtime behavior.

- [#74](https://github.com/whitphx/slidev-addon-window-mockup/pull/74) [`1251504`](https://github.com/whitphx/slidev-addon-window-mockup/commit/1251504c05b58cfcaa3d974dcdb663ead1bf7c6f) Thanks [@whitphx](https://github.com/whitphx)! - Pin transitive `dompurify` to `>=3.4.0` via a pnpm override so
  `monaco-editor`'s pinned `dompurify@3.2.7` is replaced with a patched
  release, clearing five security advisories (GHSA-v2wj-7wpq-c8vv,
  GHSA-h8r8-wccr-v5f2, GHSA-cj63-jhhr-wcxv, GHSA-cjmm-f4jc-qw8r,
  GHSA-39q2-94rc-95cp).

## 0.3.0

### Minor Changes

- [#13](https://github.com/whitphx/slidev-addon-window-mockup/pull/13) [`f2a48b6`](https://github.com/whitphx/slidev-addon-window-mockup/commit/f2a48b65ac953f389e67c0a2a66105408723d56d) Thanks [@whitphx](https://github.com/whitphx)! - Get title from the Markdown codeblock

### Patch Changes

- [#16](https://github.com/whitphx/slidev-addon-window-mockup/pull/16) [`2fe142a`](https://github.com/whitphx/slidev-addon-window-mockup/commit/2fe142a0b39e5a609cf2bcc466dbfc1d45a81bd3) Thanks [@whitphx](https://github.com/whitphx)! - Refactoring CSS class and variable names

- [#12](https://github.com/whitphx/slidev-addon-window-mockup/pull/12) [`7b4d8a4`](https://github.com/whitphx/slidev-addon-window-mockup/commit/7b4d8a4dfa29da9c86bd41ab3e2dd0317ce768da) Thanks [@whitphx](https://github.com/whitphx)! - Fix titlebar spacing

- [#17](https://github.com/whitphx/slidev-addon-window-mockup/pull/17) [`46f778f`](https://github.com/whitphx/slidev-addon-window-mockup/commit/46f778f3c02cf9df4fec682bffeb4dbbbcbd6aa8) Thanks [@whitphx](https://github.com/whitphx)! - Update title samples

- [#18](https://github.com/whitphx/slidev-addon-window-mockup/pull/18) [`e6d6dd4`](https://github.com/whitphx/slidev-addon-window-mockup/commit/e6d6dd4cceedf401e7caf91136b8b9422b2ab49b) Thanks [@whitphx](https://github.com/whitphx)! - Update documents

## 0.2.0

### Minor Changes

- [#11](https://github.com/whitphx/slidev-addon-window-mockup/pull/11) [`a2e994b`](https://github.com/whitphx/slidev-addon-window-mockup/commit/a2e994b01a5bf605787fea51bd41d2d87527ddff) Thanks [@whitphx](https://github.com/whitphx)! - Markdonw codeblock syntax with the window option accepts options for the window mockup

- [#11](https://github.com/whitphx/slidev-addon-window-mockup/pull/11) [`a2e994b`](https://github.com/whitphx/slidev-addon-window-mockup/commit/a2e994b01a5bf605787fea51bd41d2d87527ddff) Thanks [@whitphx](https://github.com/whitphx)! - Adjust the Shiki color to the outer window mockup color setting

- [#9](https://github.com/whitphx/slidev-addon-window-mockup/pull/9) [`3571ab2`](https://github.com/whitphx/slidev-addon-window-mockup/commit/3571ab20c7d4c700c9e7e93b6884ef9904c5a707) Thanks [@whitphx](https://github.com/whitphx)! - Add color prop

## 0.1.2

### Patch Changes

- [#7](https://github.com/whitphx/slidev-addon-window-mockup/pull/7) [`c1eadff`](https://github.com/whitphx/slidev-addon-window-mockup/commit/c1eadff64306a04ed74bdc2c83f11b21d3c7889a) Thanks [@whitphx](https://github.com/whitphx)! - Fix the transformer setup function not to use the helper function imported from @slidev/types because it can be not resolvable in some installed environment

## 0.1.1

### Patch Changes

- [#5](https://github.com/whitphx/slidev-addon-window-mockup/pull/5) [`913824d`](https://github.com/whitphx/slidev-addon-window-mockup/commit/913824dc8ec929524d0a3aabafbb51fe034bf0d0) Thanks [@whitphx](https://github.com/whitphx)! - Include the transformer setup script in the package

## 0.1.0

### Minor Changes

- [#3](https://github.com/whitphx/slidev-addon-window-mockup/pull/3) [`0008165`](https://github.com/whitphx/slidev-addon-window-mockup/commit/00081656f17c0d31a82dbde5792bf60329671351) Thanks [@whitphx](https://github.com/whitphx)! - Add codeblock prop to make the window mockup and its child codeblocks to adjust their styles

## 0.0.1

### Patch Changes

- [#1](https://github.com/whitphx/slidev-addon-window-mockup/pull/1) [`a1cad1f`](https://github.com/whitphx/slidev-addon-window-mockup/commit/a1cad1ffa532edeabbb04ca70a420cfa2cc02c5b) Thanks [@whitphx](https://github.com/whitphx)! - NPM trusted publishing
