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
	border: 3px solid #ffffff;
	border-radius: 5px;
	color: #ffffff;
	width: fit-content;
	height: fit-content;
	padding: 0.8%;
	&:hover {
		background-color: #ffffff;
		color: #000000;
		cursor: pointer;
	}
}
</style>
