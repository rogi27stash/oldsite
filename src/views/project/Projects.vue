<template>
  <div class="projects-page">
    <div class="container container_projects">
      <div class="container__details">
        <h1
          class="container__details--heading container__details--heading_themed"
        >
          Я работал над этими <span class="text-highlight">проектами</span>.
        </h1>
      </div>
      <div class="projects__content">
        <ProjectCard
          brandColor="#1a1a1a"
          :brandURL="PremidLogo"
          brandName="PreMiD"
          brandDetails="В данном проекте я отвечал за фронтенд, я разработал и сверстал его дизайн, также реализовав функции, о которых меня попросили."
        />
        <ProjectCard
          brandColor="#1a1a1a"
          :brandURL="
            `https://ru-minecraft.ru/templates/new2/images/topmenunew.png`
          "
          brandName="Ru-Minecraft"
          brandDetails="Написал систему шаблонов для новостей на JavaScript, обновил страницу добавления новостей и реализовал новые элементы используя UIKit."
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
import PremidLogo from "../../assets/img/premid.png";

export default {
  metaInfo: {
    title: "Проекты"
  },
  data() {
    return {
      PremidLogo,
      projectList: []
    };
  },
  components: {
    ProjectCard
  }
};
</script>
