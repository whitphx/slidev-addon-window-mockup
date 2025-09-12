<template>
  <figure
    class="wrap"
    :class="{ dark: shouldBeDark, 'codeblock-container': codeblock }"
  >
    <figcaption class="titlebar">
      <span class="lights">
        <i
          class="light close"
          aria-hidden="true"
        />
        <i
          class="light min"
          aria-hidden="true"
        />
        <i
          class="light max"
          aria-hidden="true"
        />
      </span>
      <span
        v-if="title"
        class="title"
      >{{ title }}</span>
      <span class="title-right-placeholder" />
    </figcaption>
    <div
      class="body"
      :style="{ padding: bodyPadding }"
    >
      <slot />
    </div>
  </figure>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useDarkMode } from "@slidev/client";

interface Props {
  title?: string;
  color?: "light" | "dark";
  light?: boolean; // Shorthand for color: "light"
  dark?: boolean; // Shorthand for color: "dark"
  codeblock?: boolean; // In the codeblock mode, the window style is adjusted to better fit child codeblocks.
  padding?: string | number;
}
const props = withDefaults(defineProps<Props>(), {
  title: "",
  color: undefined,
  light: false,
  dark: false,
  codeblock: false,
  padding: undefined,
});
const bodyPadding = computed(() => {
  if (props.padding == null) {
    return props.codeblock ? "0.5rem" : "1rem";
  }
  return typeof props.padding === "number"
    ? `${props.padding}px`
    : props.padding;
});

const { isDark } = useDarkMode();
const shouldBeDark = computed(() => {
  if (props.color != null) {
    if (props.light || props.dark) {
      console.warn(
        "Both color and light/dark props are set. color takes precedence.",
      );
    }
    return props.color === "dark";
  }
  if (props.dark) {
    if (props.light) {
      console.warn(
        "Both light and dark props are true. dark takes precedence.",
      );
    }
    return true;
  } else if (props.light) {
    return false;
  } else {
    return isDark.value;
  }
});
</script>

<style scoped>
.wrap {
  color-scheme: light;

  --radius: 10px;
  --border: 1px solid #e6e6e6;
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  --titlebar-bg: #f5f6f7;
  --body-bg: #fff;
  --title-color: #5b5b5b;

  border: var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  background: var(--body-bg);

  display: flex;
  flex-direction: column;
}
.wrap.dark {
  color-scheme: dark;

  --titlebar-bg: #2b2b2b;
  --body-bg: #1f1f1f;
  --title-color: #cfcfcf;
  --border: 1px solid #3a3a3a;
}
.titlebar {
  display: flex;
  flex-direction: row;
  align-items: center;

  background: var(--titlebar-bg);
  border-bottom: var(--border);
}

.lights {
  display: inline-flex;
  gap: 0.4rem;
  line-height: 0;
  padding: 0.5rem 0.75rem;
  flex: 0 1 5rem;
}
.light {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  display: inline-block;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
}
.close {
  background: #ff5f56;
}
.min {
  background: #ffbd2f;
}
.max {
  background: #27c93f;
}

.title {
  display: inline-block;
  flex: 1 1 auto;
  color: var(--title-color);
  font-size: 0.85rem;
  text-align: center;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.title-right-placeholder {
  flex: 0 999999 5rem; /* flex-basis: 5rem must be same as .lights */
  min-width: 0.5rem;
}

.body {
  overflow: auto;
  flex-grow: 1;
}

.wrap.codeblock-container .body {
  --slidev-code-background: rgb(0 0 0 / 0);
}

/* Copy the theme-aware code block styles from https://github.com/slidevjs/slidev/blob/591b6333a22a49cbb3ba90d1202c624897943c98/packages/client/styles/code.css */
.wrap.dark :deep(.shiki) {
  color: var(--shiki-dark, inherit);
  --twoslash-popup-bg: var(--shiki-dark-bg, inherit);
}

.wrap.dark :deep(.shiki span) {
  color: var(--shiki-dark);
}

.wrap:not(.dark) :deep(.shiki) {
  color: var(--shiki-light, inherit);
  --twoslash-popup-bg: var(--shiki-light-bg, inherit);
}

.wrap:not(.dark) :deep(.shiki span) {
  color: var(--shiki-light);
}
</style>
