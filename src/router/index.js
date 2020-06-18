import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/contexte",
		name: "Contexte",
		component: () => import("@/views/Contexte.vue"),
		nextPage: "Spoutnik",
	},
	{
		path: "/spoutnik",
		name: "Spoutnik",
		component: () => import("@/views/Spoutnik.vue"),
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
		path: "/houbolt",
		name: "Houbolt",
		component: () => import("@/views/Houbolt.vue"),
		nextPage: "Morgan",
	},
	{
		path: "/houbolt/nasa",
		name: "HouboltNasa",
		component: () => import("@/views/HouboltNasa.vue"),
		nextPage: "Morgan",
	},
	{
		path: "/morgan",
		name: "Morgan",
		component: () => import("@/views/Morgan.vue"),
		nextPage: "Apollo",
	},
	{
		path: "/morgan/more",
		name: "MorganMore",
		component: () => import("@/views/MorganMore.vue"),
		nextPage: "Apollo",
	},
	{
		path: "/apollo",
		name: "Apollo",
		component: () => import("@/views/Apollo.vue"),
	},
	{
		path: "/vostok",
		name: "Vostok",
		nextPage: "Programluna",
		component: () => import("@/views/Vostok.vue"),
	},
	{
		path: "/programluna",
		name: "Programluna",
		nextPage: "Luna",
		component: () => import("@/views/ProgramLuna.vue"),
	},
	{
		path: "/contexte/spoutnik",
		name: "ContexteSpoutnik",
		component: () => import("@/views/ContexteSpoutnik.vue"),
		nextPage: "Lancement",
	},
	{
		path: "/rocard",
		name: "Rocard",
		component: () => import("@/views/Rocard.vue"),
		nextPage: "StartArtemis",
	},
	{
		path: "/kennedy",
		name: "Kennedy",
		component: () => import("@/views/Kennedy.vue"),
		nextPage: "Houbolt",
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
	{
		path: "/nasa/more",
		name: "NasaMore",
		component: () => import("@/views/NasaMore.vue"),
		nextPage: "Choice",
	},
	{
		path: "/startArtemis",
		name: "StartArtemis",
		component: () => import("@/views/StartArtemis.vue"),
		nextPage: "Artemis",
	},
	{
		path: "/clep",
		name: "Clep",
		component: () => import("@/views/Clep.vue"),
		nextPage: "Rocard",
	},
	{
		path: "/artemis",
		name: "Artemis",
		nextPage: "Nasa",
		component: () => import("@/views/Artemis.vue"),
	},
	{
		path: "/end",
		name: "End",
		component: () => import("@/views/End.vue"),
	},
]

const router = new VueRouter({
	mode: "history",
	routes,
})

export default router
