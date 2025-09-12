import type {
  MarkdownTransformContext,
  TransformersSetup,
} from "@slidev/types";

// Ref: const reCodeBlock = /^```([\w'-]+)?\s*(?:\[(.*?)\])?\s*(?:\{([\w*,|-]+)\}\s*?(\{[^}]*\})?([^\r\n]*))?\r?\n((?:(?!^```)[\s\S])*?)^```$/gm
// from https://github.com/slidevjs/slidev/blob/591b6333a22a49cbb3ba90d1202c624897943c98/packages/slidev/node/syntax/transform/code-wrapper.ts#L5
const reWindowedCodeblock =
  /^```([\w'-]+)?\s*(?:\[(.*?)\])?\s*(\{[\w*,|-]+\}\s*?(?:\{[^}]*\})?[^\r\n]*)?window\s*?(\{[^}]*\})?\r?\n((?:(?!^```)[\s\S])*?)^```$/gm;

export function transformWindowedCodeblock(ctx: MarkdownTransformContext) {
  ctx.s.replace(
    reWindowedCodeblock,
    (
      full,
      lang = "",
      title = "",
      optionsStr,
      windowOptions: string = "",
      code: string,
    ) => {
      windowOptions = windowOptions.trim() || "{}";
      if (windowOptions.startsWith("{") && title) {
        windowOptions = "{" + `'title':'${title}',` + windowOptions.slice(1);
      }
      return (
        `<WindowMockup codeblock v-bind="${windowOptions}">\n` +
        "```" +
        lang +
        (optionsStr ? " " + optionsStr : "") +
        "\n" +
        code +
        "\n```" +
        "\n</WindowMockup>"
      );
    },
  );
}

// We avoid using `import { defineTransformersSetup } from "@slidev/types"`
// because `@slidev/types` can be not resolvable in the installed environment (maybe the monorepo case?).
// So we just import types and use the static type annotation here,
// instead of importing the actual implementation of the helper function.
const setup: TransformersSetup = () => {
  return {
    pre: [],
    preCodeblock: [transformWindowedCodeblock],
    postCodeblock: [],
    post: [],
  };
};

export default setup;
