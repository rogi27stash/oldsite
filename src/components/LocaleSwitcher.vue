<template>
  <div class="locale-switcher">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{
        lang
      }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "locale-switcher",
  data() {
    return { langs: ["ru", "en"] };
  }
};
</script>
