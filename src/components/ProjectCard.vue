<template>
  <div
    @mouseover="cardHovered = true"
    @mouseleave="cardHovered = false"
    class="project-card"
    :style="`background: ${brandColor};`"
  >
    <transition name="fade-scale" mode="out-in">
      <div
        v-show="cardHovered && $slots.hoverObjects"
        class="project-card__hover-container"
      >
        <slot name="hoverObjects"></slot>
      </div>
    </transition>
    <div class="project-card__details">
      <h2><slot name="brandName"></slot></h2>
      <slot name="brandDetails"></slot>
    </div>
    <div class="project-card__brand">
      <img :src="brandIcon" />
    </div>
  </div>
</template>

<script>
export default {
  name: "projectcard",
  props: ["brandIcon", "brandColor"],
  data() {
    return {
      cardHovered: false
    };
  }
};
</script>
