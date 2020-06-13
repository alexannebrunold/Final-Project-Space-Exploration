import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

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
		nextPage: "Contexte",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
	},

	{
		path: "/luna",
		name: "Luna",
		component: () => import(/* webpackChunkName: "about" */ "@/views/Luna.vue"),
	},
	{
		path: "/loading",
		name: "Loading",
		nextPage: "Contexte",
		component: () => import(/* webpackChunkName: "about" */ "@/views/Loading.vue"),
	},
	{
		path: "/contexte",
		name: "Contexte",
		component: () => import("@/views/Contexte.vue"),
		nextPage: "Lancement",
	},
	{
		path: "/enSavoirPlus",
		name: "EnSavoirPlus",
		component: () => import("@/views/EnSavoirPlus.vue"),
		nextPage: "Lifftoff",
	},
	{
		path: "/lancement",
		name: "Lancement",
		component: () => import("@/views/Lancement.vue"),
	},
	{
		path: "/choice",
		name: "Choice",
		component: () => import("@/views/Choice.vue"),
	},
	{
		path: "/nasa",
		name: "Nasa",
		component: () => import("@/views/Nasa.vue"),
		nextPage: "Choice",
	},
	{
		path: "/liftoff",
		name: "Liftoff",
		component: () => import("@/views/Liftoff.vue"),
	},
	{
		path: "/apollo",
		name: "Apollo",
		component: () => import("@/views/Apollo.vue"),
	},
	{
		path: "/artemis",
		name: "Artemis",
		component: () => import("@/views/Artemis.vue"),
	},
]

const router = new VueRouter({
	mode: "history",
	routes,
})

export default router
