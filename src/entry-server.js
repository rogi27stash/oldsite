import { createApp } from "./main";

const prepareUrlForRouting = url => {
  const { BASE_URL } = process.env;
  return url.startsWith(BASE_URL.replace(/\/$/, ""))
    ? url.substr(BASE_URL.length)
    : url;
};

export default context => {
  return new Promise(async (resolve, reject) => {
    const { app, router } = await createApp();
    const meta = app.$meta(); // here

    router.push(prepareUrlForRouting(context.url));
    context.meta = meta;

    router.onReady(() => {
      context.rendered = () => {};
      resolve(app);
    }, reject);
  });
};
