<template>
  <figure
    class="mw-wrap"
    :class="{ 'mw-dark': shouldBeDark, 'mw-codeblock-container': codeblock }"
  >
    <figcaption class="mw-titlebar">
      <span class="mw-lights">
        <i
          class="mw-light mw-close"
          aria-hidden="true"
        />
        <i
          class="mw-light mw-min"
          aria-hidden="true"
        />
        <i
          class="mw-light mw-max"
          aria-hidden="true"
        />
      </span>
      <span
        v-if="title"
        class="mw-title"
      >{{ title }}</span>
      <slot name="right" />
    </figcaption>
    <div
      class="mw-body"
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
  padding: "1rem",
});
const bodyPadding = computed(() => {
  if (props.codeblock) {
    return "0.5rem";
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
.mw-wrap {
  color-scheme: light;
  --mw-radius: 10px;
  --mw-border: 1px solid #e6e6e6;
  --mw-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  --mw-titlebar-bg: #f5f6f7;
  --mw-body-bg: #fff;
  --mw-title-color: #5b5b5b;

  border: var(--mw-border);
  border-radius: var(--mw-radius);
  box-shadow: var(--mw-shadow);
  overflow: hidden;
  background: var(--mw-body-bg);

  display: flex;
  flex-direction: column;
}
.mw-wrap.mw-dark {
  color-scheme: dark;
  --mw-titlebar-bg: #2b2b2b;
  --mw-body-bg: #1f1f1f;
  --mw-title-color: #cfcfcf;
  --mw-border: 1px solid #3a3a3a;
}
.mw-titlebar {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: var(--mw-titlebar-bg);
  border-bottom: var(--mw-border);
}
.mw-lights {
  display: inline-flex;
  gap: 0.4rem;
  line-height: 0;
}
.mw-light {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  display: inline-block;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
}
.mw-close {
  background: #ff5f56;
}
.mw-min {
  background: #ffbd2f;
}
.mw-max {
  background: #27c93f;
}

.mw-title {
  justify-self: center;
  color: var(--mw-title-color);
  font-size: 0.85rem;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mw-body {
  overflow: auto;
  flex-grow: 1;
}

.mw-wrap.mw-codeblock-container .mw-body {
  --slidev-code-background: rgb(0 0 0 / 0);
}

/* Copy the theme-aware code block styles from https://github.com/slidevjs/slidev/blob/591b6333a22a49cbb3ba90d1202c624897943c98/packages/client/styles/code.css */
.mw-wrap.mw-dark :deep(.shiki) {
  color: var(--shiki-dark, inherit);
  --twoslash-popup-bg: var(--shiki-dark-bg, inherit);
}

.mw-wrap.mw-dark :deep(.shiki span) {
  color: var(--shiki-dark);
}

.mw-wrap:not(.mw-dark) :deep(.shiki) {
  color: var(--shiki-light, inherit);
  --twoslash-popup-bg: var(--shiki-light-bg, inherit);
}

.mw-wrap:not(.mw-dark) :deep(.shiki span) {
  color: var(--shiki-light);
}
</style>
