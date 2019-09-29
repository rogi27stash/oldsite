<template>
  <div>
    <div class="container container_intro">
      <!-- <div class="container__floating-liquid">
        <Liquid1 />
        <Liquid2 />
      </div> -->
      <div class="intro__content">
        <h1>Igor Ryzhenkov</h1>
        <p>
          Начинающий программист из Москвы, обучаюсь по специальности «<span
            class="text-highlight"
            >Информационные системы и программирование</span
          >». Я стараюсь писать качественный и работающий код на
          <span class="text-highlight">Java</span> и
          <span class="text-highlight">JavaScript</span>. Также изучаю
          <span class="text-highlight">C#</span> и
          <span class="text-highlight">Python</span>, дальше планирую изучить
          <span class="text-highlight">C++</span> и
          <span class="text-highlight">Kotlin</span>. В свободное время я
          занимаюсь переводом приложений на русский язык.
        </p>
        <div class="intro-buttons">
          <router-link to="/projects" class="button">Мои работы</router-link>
          <router-link to="/contacts" class="button"
            >Связаться со мной</router-link
          >
        </div>
      </div>
    </div>
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
          brandDetails="В данном проекте я отвечал за фронтенд веб-сайта, я разработал и сверстал его дизайн и реализовал множество функций для обеспечения максимального комфорта для пользователя."
        />
        <ProjectCard
          brandColor="#1a1a1a"
          :brandURL="
            `https://ru-minecraft.ru/templates/new2/images/topmenunew.png`
          "
          brandName="Ru-Minecraft"
          brandDetails="Написал систему шаблонов для новостей на JavaScript, обновил страницу добавления новостей и реализовал новые элементы используя UIKit."
        />
        <p>
          Вы можете
          <router-link to="/projects">просмотреть полный список</router-link>.
        </p>
      </div>
    </div>
    <div class="container container_skills">
      <Skills />
    </div>
    <div class="container container_contact">
      <div class="container__details">
        <h1
          class="container__details--heading container__details--heading_themed"
        >
          Хотите <span class="text-highlight">связаться</span> со мной?
        </h1>
      </div>
      <div>
        <router-link class="button" to="/contacts"
          >Открыть страницу с контактами</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "../components/ProjectCard";
import PremidLogo from "../assets/img/premid.png";

import Skills from "../components/Skills";

export default {
  name: "home",
  data() {
    return {
      PremidLogo
    };
  },
  components: {
    ProjectCard,
    Skills
  },
  mounted() {}
};
</script>
