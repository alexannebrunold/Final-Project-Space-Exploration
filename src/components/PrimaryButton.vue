<template>
	<button class="primaryButton">
		{{ textPrimaryButton }}
	</button>
</template>

<script>
export default {
	name: "PrimaryButton",
	props: {
		textPrimaryButton: String,
		name: String,
	},
	// computed: {
	// 	nextPageName: function() {
	// 		console.log("e")
	// 		return this.routes.find((e) => {
	// 			return e.name
	// 		})
	// 	},
	// },
	mounted() {
		console.log("aaaa" + this.$router.params)
	},
}
</script>

<style lang="scss" scoped>
.primaryButton {
	font-family: "Poppins";
	font-weight: regular;
	font-size: 18px;
	background-color: #ffffff;
	border-radius: 5px;
	border: solid 3px #ffffff;
	color: #000000;
	padding: 15px 50px;
	user-select: none;
	transition: ease-out 0.2s;
	&:hover {
		transition: ease-out 0.2s;
		border: solid 3px rgb(255, 255, 255);
		background-color: transparent;
		color: #ffffff;
		cursor: pointer;
	}
}
</style>
