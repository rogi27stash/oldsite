<template>
  <div id="app" class="theme-dark">
    <!-- <LocaleSwitcher/> -->
    <div class="navbar-wrapper">
      <nav class="navbar">
        <div class="navbar__title">
          <p>Voknehzyr's Home</p>
        </div>
        <div class="navbar__items">
          <!-- <router-link to="/blog">Blog</router-link> -->
          <router-link to="/">Home</router-link>
          <router-link to="/projects">Projects</router-link>
          <router-link to="/skills">Skills</router-link>
          <router-link to="/contacts">Contacts</router-link>
        </div>
      </nav>
    </div>
      <transition :name="transitionName" mode="out-in">
        <router-view class="child-view"></router-view>
      </transition>
  </div>
</template>

<script>
  import LocaleSwitcher from "@/components/LocaleSwitcher.vue";
  import "@/assets/styles/app.scss";

  export default {
    data() {
      return {
        transitionName: 'slide-left'
      }
    },
    beforeRouteUpdate(to, from, next) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      next()
    },
    components: {
      LocaleSwitcher
    }
  };

</script>


<style lang="scss">
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

  .child-view {
    position: relative;
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }

</style>
