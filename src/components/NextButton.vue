<template>
	<div>
		<button class="nextButton">
			Suivant
			<img src="../assets/img/Vector.svg" />
		</button>
	</div>
</template>

<script>
export default {
	name: "NextButton",
}
</script>

<style lang="scss">
.nextButton {
	border: 3px solid #ffffff;
	border-radius: 5px;
	color: #ffffff;
	width: 80px;
	height: fit-content;
	padding: 0.8%;
	text-align: center;
	&:hover {
		background-color: #ffffff;
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
