<template>
  <div class="max-w-screen-2xl m-auto">
    <h1>Blogger!</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BookOpenIcon, BeakerIcon } from '@vue-hero-icons/outline'

export default Vue.extend({
  data() {
    return { skillsModalToggle: false }
  },
  beforeMount() {
    if (this.$route.hash === '#skills') this.$data.skillsModalToggle = true
  },
  components: {
    BookOpenIcon,
    BeakerIcon,
  },
})
</script>

<style lang="postcss" scoped>
.mine {
  @apply flex;
}
</style>
