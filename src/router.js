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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Contacts.vue")
    },
    {
      path: "/skills",
      name: "skills",
      component: () => import("./views/Skills.vue")
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("./views/Projects.vue")
    },
    {
      path: "/project/:id",
      name: "project",
      component: () => import("./views/Project.vue")
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("./views/Blog.vue")
    },
    {
      path: "/post/:id",
      name: "post",
      component: () => import("./views/PostFullpage.vue")
    },
    {
      path: "*",
      component: () => import("./views/NotFound.vue")
    }
  ]
});
