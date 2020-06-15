<template>
<div>
	<Disclaimer :is="dynamicComponent"/>
	<Main/>
		<video rel="preload" ref="video" loop class="home__video">
			<source src="../assets/videos/bg-video.mp4" type="video/mp4">
		</video>
		<img @click="toggleMute" class="home__sound" src="../assets/img/home/sound.svg" alt="" />
</div>
</template>

<script defer>
import Main from "@/components/Main.vue";
import Disclaimer from "@/components/Disclaimer.vue";
export default {
	name: "home",
  components: {
		Main,
		Disclaimer,
	},
	mounted() {
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
.home {
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
</style>
