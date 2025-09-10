<template>
  <figure class="mw-wrap" :class="[`mw-${variant}`, { 'mw-dark': shouldBeDark }]">
    <figcaption class="mw-titlebar">
      <span class="mw-lights">
        <i class="mw-light mw-close" aria-hidden="true"></i>
        <i class="mw-light mw-min" aria-hidden="true"></i>
        <i class="mw-light mw-max" aria-hidden="true"></i>
      </span>
      <span v-if="title" class="mw-title">{{ title }}</span>
      <slot name="right"></slot>
    </figcaption>
    <div class="mw-body" :style="{ padding: bodyPadding }">
      <slot />
    </div>
  </figure>
</template>

<script setup lang="ts">
import {computed} from "vue";
import { useDarkMode } from "@slidev/client";

interface Props {
  title?: string
  light?: boolean
  dark?: boolean
  /** 見た目バリエーション: terminal / editor / plain */
  variant?: 'terminal' | 'editor' | 'plain'
  /** 本文の余白（例: '1rem'） */
  padding?: string | number
}
const props = withDefaults(defineProps<Props>(), {
  title: '',
  light: false,
  dark: false,
  variant: 'plain',
  padding: '1rem',
})
const bodyPadding = typeof props.padding === 'number' ? `${props.padding}px` : props.padding

const { isDark } = useDarkMode();
const shouldBeDark = computed(() => {
  if (props.dark) {
    if (props.light) {
      console.warn("Both light and dark props are true. dark takes precedence.");
    }
    return true;
  } else if (props.light) {
    return false;
  } else {
    return isDark.value;
  }
})
</script>

<style scoped>
.mw-wrap {
  --mw-radius: 10px;
  --mw-border: 1px solid #e6e6e6;
  --mw-shadow: 0 10px 30px rgba(0,0,0,.08);
  --mw-titlebar-bg: #f5f6f7;
  --mw-body-bg: #fff;
  --mw-title-color: #5b5b5b;

  border: var(--mw-border);
  border-radius: var(--mw-radius);
  box-shadow: var(--mw-shadow);
  overflow: hidden;
  background: var(--mw-body-bg);
}
.mw-wrap.mw-dark {
  --mw-titlebar-bg: #2b2b2b;
  --mw-body-bg: #1f1f1f;
  --mw-title-color: #cfcfcf;
  --mw-border: 1px solid #3a3a3a;
}
.mw-titlebar {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: .5rem;
  padding: .5rem .75rem;
  background: var(--mw-titlebar-bg);
  border-bottom: var(--mw-border);
}
.mw-lights {
  display: inline-flex;
  gap: .4rem;
  line-height: 0;
}
.mw-light {
  width: .8rem;
  height: .8rem;
  border-radius: 50%;
  display: inline-block;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,.08);
}
.mw-close { background: #ff5f56; }
.mw-min   { background: #ffbd2f; }
.mw-max   { background: #27c93f; }

.mw-title {
  justify-self: center;
  color: var(--mw-title-color);
  font-size: .85rem;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* バリエーション（お好みで） */
.mw-wrap.mw-terminal .mw-body {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  background: repeating-linear-gradient(
    0deg, rgba(0,0,0,.04), rgba(0,0,0,.04) 1px, transparent 1px, transparent 22px
  ), var(--mw-body-bg);
}
.mw-wrap.mw-editor .mw-body {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}
.mw-body { overflow: auto; }
</style>
