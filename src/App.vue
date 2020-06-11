<template>
	<div id="app">
		<div id="nav">
			<!-- <router-link to="/">Home</router-link> -->
		</div>
		<transition name="fade" mode="out-in">
			<router-view />
		</transition>
	</div>
</template>

<style lang="scss">
.page {
	height: 100vh;
	width: 100vw;
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
		@include smartphone {
			font-size: 80px;
		}
	}
}

#nav {
	a {
		font-weight: bold;
		color: $white;

		&.router-link-exact-active {
			color: $white;
		}
	}
}

.fade-enter {
	opacity: 0.8;
}

.fade-enter-active {
	transition: opacity 1s ease-in;
	background-color: #000000;
}

.fade-leave {
	opacity: 1;
}

.fade-leave-active {
	transition: opacity 0.4s ease-in;
	background-color: #000000;
}
</style>
