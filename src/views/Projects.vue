<template>
  <div class="projects-page">
    <div class="page-header">
      <h1>Мои проекты</h1>
      <p>Здесь представлены все проекты, которые я разрабатывал или разрабатываю по сей день, вы также можете узнать больше о них нажав на карточку интересующего вас проекта.</p>
    </div>
  </div>
</template>


<script>

import ProjectCard from "@/components/ProjectCard.vue";

export default {
  data () {
    return {
      projectList: []
    }
  },
  components: {
    ProjectCard
  }
};

</script>
