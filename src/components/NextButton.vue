<template>
	<div>
		<router-link class="nextButton" to="/about">
			Suivant
			<img src="../assets/img/Vector.svg" />
		</router-link>
	</div>
</template>

<script>
export default {
	props: {
		nom: String,
	},
	name: "NextButton",
}
</script>

<style lang="scss">
.nextButton {
	text-decoration: none;
	border: 3px solid $white;
	border-radius: 5px;
	color: #ffffff;
	width: 80px;
	height: fit-content;
	padding: 0.8%;
	text-align: center;
	&:hover {
		background-color: $white;
		color: #000000;
		cursor: pointer;

		& img {
			display: inline-block;
		}
	}
	& img {
		width: 10px;
		padding-left: 2%;
		vertical-align: middle;
		background-color: transparent;
		display: none;
	}
}
</style>
