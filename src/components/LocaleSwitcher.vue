<template>
  <div v-if="$data.visible" class="locale-switcher">
    <div>
      <p>
        Hello, looks like you're viewing this page on Russian language, do you
        want to change to the English language?
      </p>
    </div>
    <div>
      <a href="#" @click="changeLanguage('en')" class="button button_black"
        >Change language</a
      >
      <a href="#" @click="closeSwitcher()" class="button button_black"
        ><i class="icon ion-md-close"></i
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "locale-switcher",
  data() {
    return {
      langs: ["ru", "en"],
      visible: false
    };
  },
  mounted() {
    var lang = (navigator.language || navigator.userLanguage).toLowerCase();

    if (localStorage.langSwitcher) {
      this.$data.visible = localStorage.langSwitcher == "true";
    } else {
      if (lang.split("_")[0] == this.$i18n.locale) {
        this.$data.visible = false;
      } else {
        this.$data.visible = true;
      }
    }
  },
  methods: {
    closeSwitcher() {
      localStorage.langSwitcher = false;
      this.$data.visible = false;
    },
    changeLanguage(langId) {
      localStorage.locale = langId.toLowerCase();
      this.$i18n.locale = localStorage.locale;
      this.$data.visible = false;
    }
  }
};
</script>

<style lang="scss">
.locale-switcher {
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: hsl(192, 100%, 60%);
  color: #07060f;
  margin: 0;
  padding: 1em 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .button {
    font-size: 1em;
    padding: 0.8em 2em;
    margin-right: 8px;
  }

  p {
    font-weight: 700;
  }
}
</style>
