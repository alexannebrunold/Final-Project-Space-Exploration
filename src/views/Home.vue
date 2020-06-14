<template>
	<div  class="home page">
		<video rel="preload" ref="video" loop class="home__video">
		<source src="../assets/videos/bg-video.mp4" type="video/mp4">
		</video>
		<p class="home__missions">Spoutnik | Apollo | Luna | Artemis</P>
		<div class="home__title">
			<p>We choose to go to the</p>
			<h1>Moon</h1>
		</div>
		<p class="home__textLeft">The moon race</p>
		<div class="home__textPresentation">
			<p>Bienvenue parmis nous pour un incroyable voyage lunaire</p>
			<p class="home__textPresentation--nameUtilisateur">
				Temps estimé : 20 min_
			</p>
		</div>
		<PrimaryButton
			textPrimaryButton="Décollage"
			class="home__decollage"
			@click.native="$router.push('/Contexte')"
		/>
		<img @click="toggleMute" class="home__sound" src="../assets/img/home/sound.svg" alt="" />
		<div class="home__better ">
			<p>For a better experience use</p>
			<img src="../assets/img/home/screen.svg" alt="" />
			<img src="../assets/img/home/headphones.svg" alt="" />
		</div>
		<p class="home__schoolProject">Projet étudiant Hétic - 2020</p>
	</div>
</template>

<script defer>
import PrimaryButton from "@/components/PrimaryButton.vue"

export default {
	name: "home",
	components: {
		PrimaryButton,
  },
	mounted() {
		console.log(PrimaryButton)
		this.play()
	},
	methods: {
		play() {
			this.$refs.video.play()
		},
		toggleMute() {
			var vid = this.$refs.video
			vid.muted = !vid.muted
		},
	},
}
</script>

<style scoped lang="scss">
* .home {
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

	&__missions {
		display: none; 
	@include tablet {
		display: block;
		position: absolute;
		top: 5px;
		right: 5px;
		font-size: 18px;
		font-family: "Poppins";
		font-weight: lighter;
		cursor: pointer;
		}
	}
	&__missions::selection {
		background: black;
	}
	&__title {
		font-size: 18px;
		padding-bottom: 10px;
		font-family: "Poppins";
		font-weight: lighter;
		@include tablet {
			font-size: 24px;
		}
		@include laptop {
			font-size: 28px;
		}
		@include pc {
			font-size: 36px;
		}

		& h1 {
			transition: linear 0.8s;
			text-transform: uppercase;
			padding-bottom: 5%;
			background-clip: text;
			background-size: cover;
			-webkit-text-stroke: 1px;
			-webkit-text-stroke-color: $white;
			color: transparent;

			cursor: pointer;
			font-weight: bold;
			font-size: 80px;

			@include tablet {
				font-size: 110px;
			}
			@include laptop {
				font-size: 125px;
			}
			@include pc {
				font-size: 200px;
			}
		}

		& h1:hover {
			color: white;
			transition: linear 0.8s;
		}

		& h1::selection {
			background: black;
		}

		& p {
			padding-bottom: 5px;
		}
		& p::selection {
			background: black;
		}
	}

	&__textLeft {
		color: transparent;
		font-size: 30px;
		height: 1em;
		font-family: "Poppins";
		font-weight: 300;
		text-transform: uppercase;
		letter-spacing: 5px;
		-webkit-text-stroke: 0.3px;
		-webkit-text-stroke-color: $white;
		top: 5px;
		bottom: 0;
		position: absolute;
		transition: linear 0.4s;

		@include tablet {
			height: auto;
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

	&__textLeft:hover {
		color: white;
		transition: linear 0.4s;
		cursor: pointer;
	}

	&__textLeft::selection {
		background: black;
	}

	&__textPresentation {
		margin-bottom: 40px;
		padding: 0 10px;
		font-size: 18px;
		font-family: "Poppins";
		font-weight: normal;
		@include tablet {
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
			@include tablet {
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

	&__decollage {
		margin-top: 20px;
		@include tablet {
			margin-top: 30px;
		}
		@include laptop {
			margin-top: 50px;
		}
	}

	&__sound {
		position: absolute;
		bottom: 55px;
		width: 25px;
		user-select: none;
		cursor: pointer;
		@include tablet {
			width: 40px;
			right: 25px;
			bottom: 25px;
		}
	}

	&__better {
		position: absolute;
		bottom: 25px;
		display: flex;
		flex-direction: row;
		align-items: center;

		& p {
			font-family: "Poppins";
			font-weight: lighter;
			font-size: 16px;
			margin-right: 5px;
		}

		& p::selection {
			background: black;
		}

		& img {
			height: 20px;
			margin-left: 10px;
			user-select: none;
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
