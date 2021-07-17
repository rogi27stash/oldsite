<template>
  <div
    class="progressbar"
    :class="{
      'progressbar-small': size === 'small',
      'progressbar-medium': size === 'medium',
      'progressbar-large': size === 'large',
    }"
  >
    <div
      class="progressbar-progress"
      :class="[`bg-${$props.color}`]"
      :style="`width: ${$props.progress}%`"
    >
      <p v-if="text">{{ text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ProgressBar',
  props: {
    text: {
      type: String,
    },
    progress: {
      type: Number,
      default: 20,
    },
    color: {
      type: String,
      default: 'primary-600',
    },
    size: {
      type: String,
      default: 'medium',
    },
  },
})
</script>

<style lang="postcss" scoped>
.progressbar {
  position: relative;
  overflow: hidden;
  @apply bg-background-300 rounded-2xl;

  &.progressbar-small {
    @apply p-2;
  }
  &.progressbar-small > .progressbar-progress {
    @apply p-2 -m-2;
  }
  &.progressbar-medium {
    @apply p-3;
  }
  &.progressbar-medium > .progressbar-progress {
    @apply p-3 -m-3;
  }
  &.progressbar-large {
    @apply p-6;
  }
  &.progressbar-large > .progressbar-progress {
    @apply p-6 -m-6;
  }
}

.progressbar-progress {
  position: relative;
  right: 0;
  @apply transform-gpu transition-all rounded-2xl ease-out max-h-2;
}

.progressbar-progress p {
  line-height: 0em !important;
  @apply h-full w-full font-semibold text-xs text-primary-50 text-center overflow-hidden sm:overflow-visible;
}
</style>
