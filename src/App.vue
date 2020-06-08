<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link>
			|
			<router-link to="/about">About</router-link>
			<h1 class="title">La course À l’espace</h1>
		</div>
		<router-view />
	</div>
</template>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	height: 100%;
	& .title {
		font-size: 144px;
		text-transform: uppercase;
		-webkit-text-stroke: 2px;
		-webkit-text-stroke-color: $black;
		color: transparent;
		text-align: center;
		margin-top: 15%;
		@include smartphone {
			font-size: 80px;
		}
	}
}

#nav {
	// padding: 30px;

	a {
		font-weight: bold;
		color: $black;

		&.router-link-exact-active {
			color: $white;
		}
	}
}
</style>
