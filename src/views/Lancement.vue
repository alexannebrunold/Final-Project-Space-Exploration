<template>
	<div class="launch page">
		<div>
			<BackButton class="launch__back" textBackButton="Retour"
			@click.native="$router.push('/Contexte')"/>
			<PrimaryButton textPrimaryButton="Lancer Spoutnik 1" class="launch__button"
      @click.native="$router.push('/Liftoff')"/>
		</div>
		<div class="launch__container">
			<p>La course à l’espace démarre le 4 octobre 1957, Le petit satellite soviétique Spoutnik 1 est envoyé dans l’espace.</p>
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
	background-image: url('~@/assets/img/lancement.png');
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

	&__container {
		display: flex;
		justify-content: center;
		position: absolute;
		bottom: 5%;
    min-width: 100vw;
    
    & p {
      font-family: "Poppins";
      font-weight: normal;
      font-size: 18px;
      width: 85%;
      line-height: 150%;
      @include tablet {
        width: 70%;
        font-size: 24px;
      }
      @include laptop {
        width: 50%;
        font-size: 28px;
      }
    }
    
    & p::selection {
      background: black;
    }
	}
}

/*@keyframes  animatedBackground {
	from {
		background-size: 120%;
		
	}

	to {
		background-size: 100%;
	}
}*/
</style>