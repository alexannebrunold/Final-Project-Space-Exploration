<template>
	<div>
		<button class="primaryButton">
			{{ textPrimaryButton }}
		</button>
	</div>
</template>

<script>
export default {
	name: "PrimaryButton",
	props: {
		textPrimaryButton: String,
	},
}
</script>

<style lang="scss">
.primaryButton {
	font-family: "Poppins";
	font-weight: regular;
	font-size: 22px;
	background-color: #ffffff;
	border-radius: 5px;
	border: solid 3px #ffffff;
	color: #000000;
	padding: 15px 50px;
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
