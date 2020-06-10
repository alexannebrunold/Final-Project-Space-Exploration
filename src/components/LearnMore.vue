<template>
	<div>
		<router-link class="learnMore" to="">
			En savoir plus
			<img src="../assets/img/Vector.svg" />
		</router-link>
	</div>
</template>

<script>
export default {
	name: "LearnMore",
	props: {
		nom: String,
	},
}
</script>

<style lang="scss" scoped>
.learnMore {
	text-decoration: none;
	background-color: white;
	border: 3px solid white;
	border-radius: 3px;
	padding: 10px 15px;
	color: #000000;
	width: 80px;
	height: fit-content;
	text-align: center;
	font-size: 18px;
	&:hover {
		border: 3px solid white;
		border-radius: 3px;
		color: $black;
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
