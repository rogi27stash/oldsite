import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";

Vue.config.productionTip = false;

import VueMeta from "vue-meta";

Vue.use(VueMeta);

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
