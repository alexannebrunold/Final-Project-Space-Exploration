<template>
	<div id="app">
		<div id="nav">
			<!-- <router-link to="/">Home</router-link> -->
		</div>
		<transition name="view">
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

.view-leave-active,
.view-enter-active {
	transition-delay: 1s;
	animation: stretch 1s ease-in-out;
}
//  {
// 	transition-delay: 0.8s;
// 	animation: stretch 0.8s ease-in;
// }
.view-enter {
	opacity: 0;
	// transform: translateX(100px);
}
.view-enter-to {
	opacity: 1;
	// transform: translateX(0px);
}
.view-leave {
	opacity: 0;
	// transform: translateY(0px);
}
.view-leave-to {
	opacity: 1;
	// transform: translateX(-100px);
}

@keyframes stretch {
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0.5;
	}
	100% {
		opacity: 0;
	}
}
</style>
