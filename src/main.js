import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import VueTypedJs from "vue-typed-js"
import VueParticles from "vue-particles"
import VuePageTransition from 'vue-page-transition'


Vue.config.productionTip = false

Vue.use(VuePageTransition)
Vue.use(VueParticles)
Vue.use(VueTypedJs)

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app")



