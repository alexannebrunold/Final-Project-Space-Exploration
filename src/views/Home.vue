<template>
		<div @click="showMain()" class="home">
			<Disclaimer v-show="disclaimer" />
			<transition name="top">
				<div v-show="!disclaimer">
					<Main />
					<ul class="home__missions">
						<li @click="$router.push('/contexte')">Spoutnik</li>
						<li @click="$router.push('/kennedy')">Apollo</li>
						<li @click="$router.push('/vostok')">Luna</li>
						<li @click="$router.push('/clep')">Artemis</li>
					</ul>
					<video rel="preload" autoplay ref="video" loop class="home__video">
						<source src="@/assets/videos/bg-video.mp4" type="video/mp4" />
					</video>
					<img @click="toggleMute" class="home__sound" src="../assets/img/home/sound.svg" alt="" />
				</div>
			</transition>
		</div>
</template>

<script>
import Main from "@/components/Main.vue"
import Disclaimer from "@/components/Disclaimer.vue"

export default {
	name: "home",
	data() {
		return {
			disclaimer: true,
			initVideo: false,
			urlVideo: " ",
		}
	},
	components: {
		Main,
		Disclaimer,
	},
	methods: {
		toggleMute() {
			var vid = this.$refs.video
			vid.muted = !vid.muted
		},
		showMain() {
			this.disclaimer = false
			this.initVideo = true
		},
	},
}
</script>

<style scoped lang="scss">
.home {
	background-color: black;
	&__missions {
		display: none;
		@include tablet {
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: absolute;
			top: 5px;
			right: 15px;
			font-size: 18px;
			font-family: "Poppins";
			font-weight: lighter;

			li {
				cursor: pointer;
				margin-left: 0.7em;
				transition: ease-in-out 0.4s;
				z-index: 200;
				user-select: none;
			}
			li:hover {
				transition: ease-in-out 0.4s;
				transform: translateY(5px);
			}
		}
	}

	&__video {
		position: fixed;
		right: 0;
		bottom: 0;
		min-width: 100%;
		min-height: 100%;
		z-index: -10;
		filter: brightness(50%);
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
}
.top-enter-active,
.top-leave-active { transition: ease-in-out 2s; }
.top-enter,
.top-leave-to {
  opacity: 0;
  transform: translate3d(0, -100px, 0);
}
</style>