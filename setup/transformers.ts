import type {
  MarkdownTransformContext,
  TransformersSetup,
} from "@slidev/types";

function WindowedCodeblock(ctx: MarkdownTransformContext) {
  ctx.s.replace(
    /^```(\S+)? *(\{[^\n]*\})? +window\n([\s\S]+?)\n```/gm,
    (full, lang = "", options = "", code = "") => {
      return (
        "<WindowMockup codeblock>\n" +
        "```" +
        lang +
        options +
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
    preCodeblock: [WindowedCodeblock],
    postCodeblock: [],
    post: [],
  };
};

export default setup;
