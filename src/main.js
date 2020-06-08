import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import reset from "@/components/scss/vendors/reset.scss"
import global from "@/components/scss/config/global.scss"
Vue.config.productionTip = false

new Vue({
	router,
	store,
	reset,
	global,
	render: (h) => h(App),
}).$mount("#app")
