<template>
	<div class="launch page">
		<div>
			<PrimaryButton textPrimaryButton="Lancer Spoutnik 1" class="launch__button" />
		</div>
		<div class="launch__container">
			<p class="container__text">La course à l’espace démarre le 4 octobre 1957, Le petit satellite soviétique Spoutnik 1 est envoyé dans l’espace.</p>
		</div>
	</div>
</template>

<script>
import PrimaryButton from "@/components/PrimaryButton.vue"
export default {
	name: "lancement",
	components: {
		PrimaryButton,
	},
}
</script>

<style scoped lang="scss">
.launch {
	background-image: url('~@/assets/img/lancement.png');
	width: auto;
	height: 100vh;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	overflow: hidden;
	display: flex;
	justify-content: center;
	flex-direction: column;
	position: relative;

	&__button {
		font-family: "Poppins";
		font-weight: regular;
	}
	
	&__container {
		display: flex;
		justify-content: center;
		position: absolute;
		bottom: 5%;
		min-width: 100vw;
	}
	.container__text {
		font-family: "Poppins";
		font-weight: regular;
		font-size: 26px;
		width: 50%;
		line-height: 150%;
	}
}

</style>

