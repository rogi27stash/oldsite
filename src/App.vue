<template>
  <div id="app" class="content-wrapper">
    <LocaleSwitcher />
    <Navbar />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <footer class="footer">
      <p>
        &copy; {{ new Date().getFullYear() }} by
        <a class="underline" href="https://vk.com/igorryzhenkov"
          >Igor Ryzhenkov</a
        >
      </p>
    </footer>
  </div>
</template>

<script>
import "@/assets/fonts/stylesheet.css";
import "@/assets/styles/app.scss";

import LocaleSwitcher from "@/components/LocaleSwitcher.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  metaInfo: {
    title: "Главная страница",
    titleTemplate: "%s – Igor Ryzhenkov"
  },
  beforeMount() {
    if (localStorage.locale) {
      this.$i18n.locale = localStorage.locale;
    } else {
      localStorage.locale = this.$i18n.locale;
    }
  },
  components: {
    Navbar,
    LocaleSwitcher
  }
};
</script>
