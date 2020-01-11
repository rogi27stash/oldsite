import Vue from "vue";
import App from "./App.vue";
import { createRouter } from "./router";
import i18n from "./i18n";

Vue.config.productionTip = false;

import VueMeta from "vue-meta";

Vue.use(VueMeta);

export async function createApp({
  beforeApp = () => {},
  afterApp = () => {}
} = {}) {
  const router = createRouter();

  await beforeApp({
    router
  });

  const app = new Vue({
    router,
    i18n,
    render: h => h(App)
  });

  const result = {
    app,
    router
  };

  await afterApp(result);

  return result;
}
