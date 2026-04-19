// Copied from https://github.com/slidevjs/slidev/blob/591b6333a22a49cbb3ba90d1202c624897943c98/test/_tutils.ts

// Test fixture: intentionally builds partial mocks of large @slidev/types
// shapes that the transformer under test never reads. The double-cast via
// `unknown` is the usual opt-out for this pattern.
/* oxlint-disable typescript/no-unsafe-type-assertion */

import type {
  MarkdownTransformContext,
  ResolvedSlidevOptions,
  SlideInfo,
  SlidevConfig,
} from "@slidev/types";
import path from "node:path";
import MagicString from "magic-string-stack";

export function createTransformContext(
  code: string,
  shiki?: any,
): MarkdownTransformContext {
  const s = new MagicString(code);
  return {
    s,
    slide: {} as unknown as SlideInfo,
    options: {
      userRoot: path.join(__dirname, "./fixtures/"),
      data: {
        slides: [{} as unknown as SlideInfo],
        watchFiles: {},
        config: {} as unknown as SlidevConfig,
        features: {},
      },
      utils: {
        shiki,
        shikiOptions: {
          theme: "nord",
        },
      },
    } as unknown as ResolvedSlidevOptions,
  };
}
