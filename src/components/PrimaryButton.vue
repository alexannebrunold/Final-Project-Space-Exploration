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
