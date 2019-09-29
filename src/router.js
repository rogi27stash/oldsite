import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("./views/Contacts.vue")
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("./views/project/Projects.vue")
    },
    {
      path: "/project/:id",
      name: "project",
      component: () => import("./views/project/ProjectPage.vue")
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("./views/Blog.vue")
    },
    {
      path: "/post/:id",
      name: "post",
      component: () => import("./views/blog/PostFullpage.vue")
    },
    {
      path: "*",
      component: () => import("./views/errors/NotFound.vue")
    }
  ]
});
