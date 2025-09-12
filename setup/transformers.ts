import type { MarkdownTransformContext } from "@slidev/types";
import { defineTransformersSetup } from "@slidev/types";

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

export default defineTransformersSetup(() => {
  return {
    pre: [],
    preCodeblock: [WindowedCodeblock],
    postCodeblock: [],
    post: [],
  };
});
