import { transformWindowedCodeblock } from "../setup/transformers";
import { test, expect } from "vitest";
import { createTransformContext } from "./_tutils";

test("language name + window", () => {
  const ctx = createTransformContext(`
\`\`\`js window
console.log('Hello, World!');
\`\`\`
`);

  transformWindowedCodeblock(ctx);
  ctx.s.commit();

  expect(ctx.s.toString()).toMatchSnapshot();
});

test("language name + ranges + window", () => {
  const ctx = createTransformContext(`
\`\`\`js {*|1|2} window
console.log('Hello, World!');
\`\`\`
`);

  transformWindowedCodeblock(ctx);
  ctx.s.commit();

  expect(ctx.s.toString()).toMatchSnapshot();
});

test("language name + ranges + options + window", () => {
  const ctx = createTransformContext(`
\`\`\`js {*|1|2}{at: 1} window
console.log('Hello, World!');
\`\`\`
`);

  transformWindowedCodeblock(ctx);
  ctx.s.commit();

  expect(ctx.s.toString()).toMatchSnapshot();
});

test("language name + ranges + options + window + windowOptions", () => {
  const ctx = createTransformContext(`
\`\`\`js {*|1|2}{'maxHeight': '100px'} window {'color': 'dark'}
console.log('Hello, World!');
\`\`\`
`);

  transformWindowedCodeblock(ctx);
  ctx.s.commit();

  expect(ctx.s.toString()).toMatchSnapshot();
});

test("language name + title + ranges + options + window + windowOptions", () => {
  const ctx = createTransformContext(`
\`\`\`js [foo.js] {*|1|2}{'maxHeight': '100px'} window {'color': 'dark'}
console.log('Hello, World!');
\`\`\`
`);

  transformWindowedCodeblock(ctx);
  ctx.s.commit();

  expect(ctx.s.toString()).toMatchSnapshot();
});
