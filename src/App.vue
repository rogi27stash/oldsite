<template>
  <div id="app" class="theme-dark">
    <div class="navbar-wrapper">
      <nav class="navbar">
        <div class="navbar__title">
          <router-link to="/">Igor Ryzhenkov</router-link>
        </div>
        <div class="navbar__items on-tablet">
          <!-- <router-link to="/blog"
            ><i class="icon ion-md-chatboxes"></i> Блог</router-link
          > -->
          <router-link to="/projects"
            ><i class="icon ion-md-images"></i> Проекты</router-link
          >
          <router-link to="/contacts"
            ><i class="icon ion-md-mail-unread"></i> Контакты</router-link
          >
        </div>
        <div class="navbar__items on-phone">
          <a><i class="icon ion-md-menu"></i></a>
        </div>
      </nav>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <footer class="footer">
      <p>
        &copy; 2018–2019 by
        <a href="https://vk.com/igorryzhenkov">Igor Ryzhenkov</a>
      </p>
    </footer>
  </div>
</template>

<script>
import "@/assets/styles/app.scss";

export default {
  name: "App",
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Главная страница",
    // all titles will be injected into this template
    titleTemplate: "%s | IRyzhenkov"
  }
};
</script>
