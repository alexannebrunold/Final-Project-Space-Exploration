<template>
	<button class="backButton">
		<img src="../assets/img/arrow.svg" alt="">
		{{ textBackButton }}
	</button>
</template>

<script>
export default {
	name: "BackButton",
	props: {
		textBackButton: String,
		name: String,
	},
	mounted() {
		console.log("aaaa" + this.$router.params)
	},
}
</script>

<style lang="scss" scoped>
.backButton {
	font-family: "Poppins";
	font-weight: 300;
	font-size: 18px;
	color: $white;
	background: transparent;
	border: none;
	user-select: none;
	transition: ease-out 0.2s;
	display: flex;
	flex-direction: row;
	align-items: center;

	& img {
		margin-right: 12.5px;
	}

	@include tablet {
		font-size: 20px;
	}
	@include laptop {
		font-size: 22px;
		& img {
			width: 120%;
		}
	}
	@include pc {
		font-size: 24px;
	}

	&:hover {
		transition: ease-out 0.2s;
		cursor: pointer;
	}
}
</style>