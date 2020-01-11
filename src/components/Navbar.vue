<template>
  <div class="navbar">
    <nav>
      <div class="navbar__title">
        <div class="navbar__logo"><img :src="Logo" /></div>
        <router-link to="/">Igor Ryzhenkov</router-link>
      </div>
      <div class="navbar__items">
        <router-link v-for="Link in Links" :key="Link.title" :to="Link.path">
          <i :class="`icon ion-${Link.icon}`"></i>
          {{ $t(`navbar.${Link.title}`) }}
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from "../assets/img/logo.svg";

export default {
  name: "navbar",
  data() {
    return {
      Logo,
      Links: [
        {
          path: "/",
          title: "about",
          icon: "md-contact"
        },
        {
          path: "/projects",
          title: "projects",
          icon: "ios-color-fill"
        },
        {
          path: "/contacts",
          title: "contacts",
          icon: "md-information-circle"
        }
      ]
    };
  }
};
</script>
