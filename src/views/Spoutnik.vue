<template>
	<div class="spoutnik page" @click="play()">
		<div>
			<BackButton class="spoutnik__back" textBackButton="Retour" @click.native="$router.go(-1)" />
		</div>
		<div class="spoutnik__container">
			<vue-typed-js
				:strings="[
					'La course à l\'espace démarre le 4 Octobre 1957',
					'Le petit satellite Soviétique Spoutnik 1 est envoyé dans l\'espace',
					' ',
				]"
				:typeSpeed="60"
				:showCursor="false"
			>
				<p class="typing"></p>
			</vue-typed-js>
		</div>
		<video
			rel="preload"
			autoplay
			ref="video"
			class="spoutnik__video"
			@ended="$router.push('/lancement')"
		>
			<source src="@/assets/videos/sputnik_1.mp4" type="video/mp4" />
		</video>
		<div class="spoutnik__button">
			<PrimaryButton textPrimaryButton="Passer" @click.native="$router.push('/lancement')" />
		</div>
	</div>
</template>

<script>
import BackButton from "@/components/BackButton.vue"
import PrimaryButton from "@/components/PrimaryButton.vue"
export default {
	name: "spoutnik",

	data() {
		return {
			disclaimer: true,
			duration: " ",
		}
	},
	components: {
		BackButton,
		PrimaryButton,
	},
	methods: {
		play() {
			this.$refs.video.play()
			console.log(this.$refs.video.play())
		},
	},
	mounted() {},
}
</script>

<style scoped lang="scss">
.spoutnik {
	&__back {
		position: absolute;
		top: 10px;
		left: 10px;
	}

	&__container {
		display: flex;
		justify-content: center;
		margin-top: 25%;
		& p {
			font-family: "Poppins";
			font-weight: normal;
			font-size: 18px;

			line-height: 130%;
			@include tablet {
				font-size: 24px;
			}
			@include laptop {
				font-size: 28px;
			}
		}

		& p::selection {
			background: black;
		}
	}
	&__video {
		position: fixed;
		right: 0;
		bottom: 0;
		min-width: 100%;
		min-height: 100%;
		z-index: -1;
		filter: brightness(50%);
	}
	&__button {
		position: absolute;
		bottom: 50px;
		right: 50px;
		z-index: 1;
	}
}
</style>
