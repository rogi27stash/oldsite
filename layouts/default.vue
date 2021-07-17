<template>
  <div class="font-body p-12">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="postcss">
::selection {
  @apply bg-primary-600 text-primary-100;
}

html {
  @apply scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-primary-200 bg-background-50 text-background-900;
}

.pageSwitch-enter-active,
.pageSwitch-leave-active {
  @apply transition-all duration-150 ease-out;
}
.pageSwitch-enter,
.pageSwitch-leave-active {
  @apply transform-gpu opacity-0;
}
</style>
