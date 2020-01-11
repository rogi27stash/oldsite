<template>
  <div class="projects-page">
    <div class="container container-section container-projects">
      <div class="container__content">
        <div>
          <i18n path="projects.title" tag="h1">
            <span>{{ $t("projects.title2") }}</span>
          </i18n>
        </div>
        <div class="projects__content">
          <ProjectCard brandColor="#101518" :brandIcon="PremidLogo">
            <template #brandName>
              PreMiD
            </template>
            <template #brandDetails>
              <p>
                {{ $t("projects.projects.premid.desc") }}
              </p>
            </template>
            <template #hoverObjects>
              <a
                class="button button_black"
                href="https://premid.app/"
                target="_blank"
                >{{ $t("projects.projects.btn_open_project") }}</a
              >
            </template>
          </ProjectCard>
          <ProjectCard
            brandColor="#b67d2c"
            :brandIcon="
              `https://ru-minecraft.ru/templates/new2/images/topmenunew.png`
            "
          >
            <template #brandName>
              Ru-Minecraft
            </template>
            <template #brandDetails>
              <p>
                {{ $t("projects.projects.rumc.desc") }}
              </p>
            </template>
            <template #hoverObjects>
              <a
                class="button button_black"
                href="https://ru-minecraft.ru/"
                target="_blank"
                >{{ $t("projects.projects.btn_open_project") }}</a
              >
            </template>
          </ProjectCard>
        </div>
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
