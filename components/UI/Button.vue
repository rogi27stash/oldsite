<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    class="button"
    :class="{
      'button-ring': ring,
      'button-default': theme === 'default',
      'button-primary': theme === 'primary',
      'button-md': size === 'medium',
      'button-xl': size === 'large',
    }"
  >
    <slot name="icon-left" /> <span><slot /></span>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Button',
  props: {
    theme: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'medium',
    },
    ring: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
    },
  },
})
</script>

<style lang="postcss" scoped>
.button {
  @apply transform-gpu text-center inline-flex flex-nowrap flex-row items-center outline-none rounded-2xl font-semibold transition-all duration-150 ease-out;
  &:active {
    @apply opacity-80 translate-y-1;
  }
}

.button-ring {
  @apply ring-0;
  &:hover {
    @apply ring-4 ring-opacity-5;
  }
  &:active {
    @apply ring-0;
  }
}

.button-default {
  @apply bg-black-100 text-black-300;
  &:hover {
    @apply bg-black-200 text-black-500;
  }
}
.button-primary {
  @apply bg-primary-500 text-primary-50;
  &:hover {
    @apply bg-primary-600 text-primary-100;
  }
}

.button-md {
  @apply px-8 py-4 text-xs;
}
.button-xl {
  @apply px-8 py-5 text-xl;
}
.button-xl svg {
  @apply -my-5;
  &:first-child {
    @apply mr-3;
  }
  &:last-child {
    @apply ml-3;
  }
}
</style>
