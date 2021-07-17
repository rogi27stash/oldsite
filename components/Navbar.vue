<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <div class="navbar-logo flex flex-grow-0">
        <a href="javascript:void(0)"> <img class="h-10" src="/logo.svg" /> </a>
      </div>
      <div class="flex flex-row ml-auto">
        <NuxtLink
          v-for="item in navbarItems"
          :key="item.name"
          :to="item.url"
          class="navbar-item hidden lg:inline-block"
          >{{ item.name }}</NuxtLink
        >
        <a
          href="javascript:void(0)"
          v-on:click="mobileMenu = !mobileMenu"
          class="navbar-item lg:hidden inline-block"
          ><MenuIcon size="2x"
        /></a>
      </div>
    </div>
    <transition name="menuToggle">
      <div v-if="mobileMenu" class="navbar-mobile">
        <div class="absolute right-0 top-0 z-50 p-12">
          <a href="javascript:void(0)" v-on:click="mobileMenu = !mobileMenu"
            ><XIcon size="2.5x" />
          </a>
        </div>
        <div class="navbar-mobile__container">
          <NuxtLink
            v-for="item in navbarItems"
            :key="item.name"
            :to="item.url"
            class="navbar-item navbar-item_mobile"
            >{{ item.name }}</NuxtLink
          >
        </div>
      </div>
    </transition>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { MenuIcon, XIcon } from '@vue-hero-icons/outline'

export default Vue.extend({
  name: 'Navbar',
  components: {
    MenuIcon,
    XIcon,
  },
  data() {
    return {
      mobileMenu: false,
      navbarItems: [
        {
          name: 'Главная страница',
          url: '/',
        },
        {
          name: 'Список проектов',
          url: '/projects',
        },
        {
          name: 'Блог',
          url: '/blog',
        },
        {
          name: 'Контакты',
          url: '/contacts',
        },
      ],
    }
  },
})
</script>

<style lang="postcss" scoped>
.navbar {
  @apply m-auto py-0 mb-12 flex-nowrap;
}
.navbar-inner {
  @apply max-w-screen-2xl m-auto flex flex-nowrap items-center;
}
.navbar-item {
  @apply text-xl font-semibold text-black-300 pl-12 tracking-normal;
  &:hover {
    @apply text-primary-600;
  }
}
.navbar-mobile {
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;

  @apply transition p-6 ease-out transform-gpu z-50 backdrop-filter backdrop-blur-sm bg-background-100 bg-opacity-95 fixed;
}
.navbar-mobile__container {
  @apply flex flex-col flex-shrink items-center h-full justify-center;
}

.navbar-item_mobile {
  @apply transition-all ease-out duration-100 text-4xl font-semibold text-black-600 tracking-normal p-2 w-3/4 sm:w-1/2;
  &:hover {
    @apply text-primary-600 ml-12;
  }
}

.menuToggle-enter-active,
.menuToggle-leave-active {
  @apply transition-all ease-out;
}
.menuToggle-enter,
.menuToggle-leave-to {
  opacity: 0;
  @apply transform-gpu scale-110 translate-y-12 origin-top;
}
</style>
