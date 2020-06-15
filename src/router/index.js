import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Disclaimer",
    component: () => import("@/views/Disclaimer.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    nextPage: "contexte",
  },
  {
    path: "/contexte",
    name: "Contexte",
    component: () => import("@/views/Contexte.vue"),
    nextPage: "Lancement",
  },
  {
    path: "/lancement",
    name: "Lancement",
    component: () => import("@/views/Lancement.vue"),
  },
  {
    path: "/loading",
    name: "Loading",
    nextPage: "Contexte",
    component: () => import("@/views/Loading.vue"),
  },
  {
    path: "/liftoff",
    name: "Liftoff",
    component: () => import("@/views/Liftoff.vue"),
  },
  {
    path: "/nasa",
    name: "Nasa",
    component: () => import("@/views/Nasa.vue"),
    nextPage: "Choice",
  },
  {
    path: "/choice",
    name: "Choice",
    component: () => import("@/views/Choice.vue"),
  },
  {
    path: "/luna",
    name: "Luna",
    component: () => import("@/views/Luna.vue"),
  },
  {
    path: "/apollo",
    name: "Apollo",
    component: () => import("@/views/Apollo.vue"),
  },

  {
    path: "/contexteSpoutnik",
    name: "ContexteSpoutnik",
    component: () => import("@/views/ContexteSpoutnik.vue"),
    nextPage: "Lifftoff",
  },

  {
    path: "/rocard",
    name: "Rocard",
    component: () => import("@/views/Rocard.vue"),
  },

  {
    path: "/artemis",
    name: "Artemis",
    component: () => import("@/views/Artemis.vue"),
  },
  {
    path: "/popUp/:name",
    name: "PopUp",
    component: () => import("@/views/PopUp.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
