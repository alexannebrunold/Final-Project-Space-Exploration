<template>
	<router-link class="nextButton" :to="{ name: nextPageName }">
		Suivant
	</router-link>
</template>

<script>
export default {
	name: "NextButton",
	props: {
		name: String,
	},
	computed: {
		routes: function() {
			return this.$router.options.routes
		},
		currentPage: function() {
			return this.$router.history.current.name
		},
		nextPageName: function() {
			return this.routes.find((e) => {
				return e.name === this.currentPage
			}).nextPage
		},
	},
	mounted() {
		console.log(this.nextPageName)
	},
}
</script>

<style lang="scss" scoped>
.nextButton {
	font-family: "Poppins";
	font-weight: regular;
	font-size: 14px;
	background-color: transparent;
	border-radius: 5px;
	border: solid 3px #ffffff;
	color: $white;
	padding: 10px 20px;
	user-select: none;
	transition: ease-out 0.2s;
	flex-direction: row;
	align-items: center;

	@include tablet {
		font-size: 16px;
		padding: 10px 40px;
	}
	@include laptop {
		font-size: 16px;
	}
	@include pc {
		font-size: 22px;
	}

	&:hover {
		transition: ease-out 0.2s;
		border: solid 3px rgb(255, 255, 255);
		background-color: white;
		color: $black;
		cursor: pointer;
	}
}
</style>
