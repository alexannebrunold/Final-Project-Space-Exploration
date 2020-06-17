<template>
	<div id="app">
		{{ data.videoURL }}
		<div id="nav">
			<!-- <router-link to="/">Home</router-link> -->
		</div>
		<vue-page-transition name="overlay-up">
			<router-view />
		</vue-page-transition>
	</div>
</template>

<script>
export default {
	name: "App",
	data() {
		return {
			data: {},
		}
	},
	beforeMount() {
		this.getName()
	},
	methods: {
		async getName() {
			const res = await fetch("https://spacemoonapis.frb.io/webdocressources/1")
			const data = await res.json()
			console.log(res, data)
			this.data = data
		},
	},
}
</script>

<style lang="scss">
.page {
	min-height: 100vh;
	min-width: 100vw;
	display: table;
	font-family: "Poppins";
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: $white;
	height: 100%;
	& .title {
		font-size: 144px;
		text-transform: uppercase;
		-webkit-text-stroke: 2px;
		-webkit-text-stroke-color: $white;
		color: transparent;
		text-align: center;
		margin-top: 15%;
	}
}

#nav {
	a {
		font-weight: bold;
		color: $white;

		&.router-link-exact-active {
			color: $black;
		}
	}
}


.overlay-left,  .overlay-right,  .overlay-top,  .overlay-bottom   {
    background: #191919 !important;
}
</style>
