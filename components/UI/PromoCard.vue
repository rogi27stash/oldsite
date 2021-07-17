<template>
  <div class="promo-card">
    <h1 class="promo-card__icon">
      <slot name="icon"></slot>
    </h1>
    <h1 class="promo-card__title"><slot name="title"></slot></h1>
    <p class="promo-card__info">
      <slot name="info"></slot>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PromoCard',
})
</script>

<style lang="postcss" scoped>
.promo-card {
  @apply flex transform-gpu flex-col rounded-2xl leading-tight p-8 bg-gradient-to-br transition-all duration-150 ease-out;
  &:hover {
    @apply scale-105 shadow-2xl;
  }
  &:active {
    @apply opacity-80 translate-y-1;
  }
}
.promo-card__icon {
  @apply text-2xl font-bold text-white mb-2;
}
.promo-card__title {
  @apply flex items-center text-white tracking-normal text-2xl font-bold mb-4;
}
.promo-card__info {
  @apply text-xl font-medium text-white text-opacity-70 leading-tight;
}
</style>
