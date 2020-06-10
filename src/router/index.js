import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		nextPage: "Loading",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
	},
	{
		path: "/loading",
		name: "Loading",
		nextPage: "Contexte",
		component: () => import(/* webpackChunkName: "about" */ "../views/Loading.vue"),
	},
	{
		path: "/contexte",
		name: "Contexte",
		component: () => import("../views/Contexte.vue"),
	},
	{
		path: "/lancement",
		name: "Lancement",
		component: () => import("../views/Lancement.vue"),
	},
]

const router = new VueRouter({
	mode: "history",
	routes,
})

export default router
