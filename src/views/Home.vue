<template>
	<div class="home page">
		<video autoplay loop class="home__video">
		<source src="../assets/videos/bg-video.mp4" type="video/mp4">
		</video>
		<div class="home__title">
			<p>We choose to go to the</p>
			<h1>Moon</h1>
		</div>
		<div class="home__textLeft">
			<p>The moon race</p>
		</div>
		<div class="home__textPresentation">
			<p>Bienvenue parmis nous pour un incroyable voyage lunaire</p>
			<p class="home__textPresentation--nameUtilisateur">
				Dis nous en plus, quel est ton nom ?
			</p>
		</div>
		<PrimaryForm
			class="home__form"
		/>
		<PrimaryButton
			textPrimaryButton="Décollage"
			class="home__decollage"
			@click.native="$router.push('/Contexte')"
		/>
		<p class="home__schoolProject">Projet étudiant Hétic - 2020</p>
	</div>
</template>

<script>
import PrimaryButton from "@/components/PrimaryButton.vue"
import PrimaryForm from "@/components/PrimaryForm.vue"

export default {
	name: "home",
	components: {
		PrimaryButton,
		PrimaryForm,
	},
	mounted() {
		console.log(PrimaryButton)
	},
}
</script>

<style scoped lang="scss">*

.home {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;

	&__video {
	position: fixed;
	right: 0;
	bottom: 0;
	min-width: 100%;
	min-height: 100%;
	z-index: -10;
	filter: brightness(50%);
	}

	&__title {
		font-size: 18px;
		padding-bottom: 10px;
		font-family: "Poppins";
		font-weight: lighter;
		@include tablette {
			font-size: 24px;
		}
		@include laptop {
			font-size: 28px;
		}
		@include pc {
			font-size: 36px;
		}

		& h1 {
			padding-bottom: 5%;
			text-transform: uppercase;
			-webkit-text-stroke: 1px;
			-webkit-text-stroke-color: $white;
			color: transparent;
			font-weight: bold;
			font-size: 80px;
			@include tablette {
				font-size: 110px;
			}
			@include laptop {
				font-size: 125px;
			}
			@include pc {
				font-size: 200px;
			}
		}

		& h1::selection { 
			background: black; 
		}

		& p {
			padding-bottom: 20px;
		}
		& p::selection {
			background: black;
		}
	}

	&__textLeft {
		color: transparent;
		font-size: 30px;
		font-family: "Poppins";
		font-weight: 300;
		text-transform: uppercase;
		letter-spacing: 5px;
		-webkit-text-stroke: 0.3px;
		-webkit-text-stroke-color: $white;
		top: 5px;
		bottom: 0;
		position: absolute;
		user-select: none;

		@include tablette {
		font-size: 55px;
		left: 5px;
		text-orientation: sideways;
		writing-mode: vertical-rl;
		}
		@include laptop {
			font-size: 65px;
		}
		@include pc {
			font-size: 90px;
		}
	}

	&__textPresentation {
		margin-bottom: 40px;
		padding: 0 10px;
		font-size: 18px;
		font-family: "Poppins";
		font-weight: normal;
		@include tablette {
			width: 75%;
			font-size: 24px;
			margin-top: 10px;
		}
		@include laptop {
			font-size: 28px;
		}
		@include pc {
			font-size: 40px;
		}
		&--nameUtilisateur {
			font-size: 14px;
			margin-top: 10px;
			@include tablette {
				font-size: 16px;
			}
			@include laptop {
				margin-bottom: 20px;
				font-size: 18px;
			}
			@include pc {
				font-size: 26px;
			}
		}
		& p::selection {
			background: black;
		}
	}

	&__form {
		margin-bottom: 20px;
	}

	&__decollage {
		margin-top: 20px;
		@include tablette {
			margin-top: 30px;
		}
		@include laptop {
			margin-top: 50px;
		}
	}
	&__schoolProject {
		font-family: "Poppins";
		font-weight: normal;
		position: absolute;
		font-size: 14px;
		bottom: 5px;
	}

	&__schoolProject::selection {
		background: black;
	}
}
</style>