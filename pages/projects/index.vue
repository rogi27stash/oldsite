<template>
  <div class="max-w-screen-2xl m-auto">
    <div class="container">
      <div
        v-for="(project, index) in projects"
        :key="project.name"
        class="project-card"
      >
        <div class="project-card__background">
          <img
            :src="`https://source.unsplash.com/featured/?liquid,fluid,abstract,${index}/1600x900`"
          />
        </div>
        <div class="project-card__info">
          <h1>PreMiD</h1>
          <p>
            Exercitation elit adipisicing irure aute ea consequat esse irure
            nostrud non labore. Proident aliquip minim in cillum consectetur
            duis id reprehenderit duis adipisicing duis.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          name: 'test',
        },
        {
          name: 'test1',
        },
        {
          name: 'test2',
        },
        {
          name: 'test3',
        },
        {
          name: 'test4',
        },
        {
          name: 'test5',
        },
      ],
    }
  },
})
</script>

<style lang="postcss" scoped>
.container {
  @apply flex flex-wrap gap-4 justify-center;
}

.project-card {
  flex-basis: 48%;
  @apply relative rounded-2xl overflow-hidden h-60;
}
.project-card__background {
  @apply absolute right-0 left-0 top-0 bottom-0 z-10;
}
.project-card__background img {
  @apply w-full select-none;
}
.project-card__info {
  @apply absolute flex overflow-hidden flex-col z-20 p-4 rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-40 bg-black-700 bottom-0 text-primary-100;
}
.project-card__info h1 {
  @apply text-xl lg:text-2xl font-semibold mb-2 text-primary-50;
}
.project-card__info p {
  @apply text-sm lg:text-base overflow-ellipsis;
}
</style>
