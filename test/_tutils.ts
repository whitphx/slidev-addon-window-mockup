// Copied from https://github.com/slidevjs/slidev/blob/591b6333a22a49cbb3ba90d1202c624897943c98/test/_tutils.ts

import type { MarkdownTransformContext } from "@slidev/types";
import path from "node:path";
import MagicString from "magic-string-stack";

export function createTransformContext(
  code: string,
  shiki?: any,
): MarkdownTransformContext {
  const s = new MagicString(code);
  return {
    s,
    slide: {} as any,
    options: {
      userRoot: path.join(__dirname, "./fixtures/"),
      data: {
        slides: [{} as any],
        watchFiles: {},
        config: {} as any,
        features: {},
      },
      utils: {
        shiki,
        shikiOptions: {
          theme: "nord",
        },
      },
    } as any,
  };
}
