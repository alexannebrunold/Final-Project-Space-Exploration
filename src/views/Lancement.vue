<template>
	<div class="launch page">
		<div>
			<BackButton class="launch__back" textBackButton="Retour" @click.native="$router.go(-1)" />
			<PrimaryButton
				textPrimaryButton="Lancer Spoutnik 1"
				class="launch__button"
				@click.native="$router.push('/Liftoff')"
			/>
		</div>
	</div>
</template>

<script>
import PrimaryButton from "@/components/PrimaryButton.vue"
import BackButton from "@/components/BackButton.vue"
export default {
	name: "lancement",
	components: {
		PrimaryButton,
		BackButton,
	},
}
</script>

<style scoped lang="scss">
.launch {
	background-image: url("~@/assets/img/lancement.jpg");
	width: auto;
	background-size: cover;
	background-position: center;
	overflow: hidden;
	display: flex;
	justify-content: center;
	flex-direction: column;
	position: relative;
	&__back {
		position: absolute;
		top: 10px;
		left: 10px;
	}
}
</style>
