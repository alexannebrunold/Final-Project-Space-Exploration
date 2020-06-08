<template>
	<div class="about">
		<div class="about__title">
			<p>We choose to go to the</p>
			<h1>Moon</h1>
		</div>
		<div class="about__textPresentation">
			<p>Bienvenue parmis nous pour un incroyable voyage lunaire</p>
			<p class="about__textPresentation--nameUtilisateur">Dis nous en plus, quel est ton nom ?</p>
		</div>

		<PrimaryButton textPrimaryButton="Component Gobal Button" class="about__inputName" />
		<PrimaryButton textPrimaryButton="Décollage" class="about__decollage" />
		<p class="about__schoolProject">Projet étudiant Hétic - 2020</p>
		<!-- <NextButton />  -->
	</div>
</template>

<script>
import PrimaryButton from "@/components/PrimaryButton.vue"
// import NextButton from "@/components/NextButton.vue"
export default {
	name: "about",
	components: {
		PrimaryButton,
		// NextButton,
	},
}
</script>

<style lang="scss">
.about {
	display: flex;
	flex-direction: column;
	&__title {
		font-size: 24px;
		margin-top: 8%;
		font-weight: lighter;
		@include smartphone {
			font-size: 16px;
		}
		& h1 {
			font-size: 144px;
			text-transform: uppercase;
			-webkit-text-stroke: 2px;
			-webkit-text-stroke-color: $white;
			color: transparent;
			font-weight: bold;
			@include smartphone {
				font-size: 80px;
			}
		}
	}
	&__textPresentation {
		margin-top: 2%;
		font-size: 24px;
		font-weight: 500;
		&--nameUtilisateur {
			font-size: 18px;
		}
	}
	&__inputName {
		margin-top: 8%;
	}
	&__decollage {
		margin-top: 4%;
	}
	&__schoolProject {
		margin-top: 7.5%;
		font-weight: 500;
		font-size: 12px;
	}
}
</style>
