<template>
	<div class="test page">
		<div>
			<BackButton
				class="test__back"
				textBackButton="Retour"
				@click.native="$router.push('/Contexte')"
			/>
		</div>
		<div class="test__container">
			<vue-typed-js
				:strings="[
					'La course à l\'espace démarre le 4 Octobre 1957',
					'Le petit satellite Soviétique Spoutnik 1 est envoyé dans l\'espace',
				]"
				:typeSpeed="60"
				:smartBackspace="true"
				:showCursor="false"
			>
				<p class="typing"></p>
			</vue-typed-js>
		</div>
		<video rel="preload" autoplay ref="video" controls class="test__video" @click="play()">
			<source src="@/assets/videos/bg-video.mp4" type="video/mp4" />
		</video>
	</div>
</template>

<script>
import BackButton from "@/components/BackButton.vue"

export default {
	name: "lancement",
	data() {
		return {
			disclaimer: true,
		}
	},
	components: {
		BackButton,
	},
	methods: {
		play() {
			this.$refs.video.play()
			console.log(this.$refs.video.play())
		},
	},
	mounted() {
		setTimeout(() => {
			this.$router.push("/lancement")
		}, 20000)
	},
}
</script>

<style scoped lang="scss">
.test {
	background-color: $black;
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
}
</style>
