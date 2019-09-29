<template>
  <div
    @mouseover="cardHovered = true"
    @mouseleave="cardHovered = false"
    class="project-card"
    :style="`background: ${brandColor};`"
  >
    <transition name="fade-scale" mode="out-in">
      <div v-show="cardHovered" class="project-card__hover-container">
        <a class="button" href="#">Просмотреть полностью</a>
      </div>
    </transition>
    <div class="project-card__brand">
      <img :src="brandURL" />
    </div>
    <div class="project-card__details">
      <h2>{{ brandName }}</h2>
      <p>{{ brandDetails }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectcard",
  props: [
    "brandURL",
    "brandName",
    "brandDetails",
    "brandPageURL",
    "brandColor"
  ],
  data() {
    return {
      cardHovered: false
    };
  }
};
</script>
