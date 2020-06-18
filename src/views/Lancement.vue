<template>
	<div class="launch page">
		<ul class="nav__missions">
			<li @click="$router.push('/home')">Home</li>
			<li @click="$router.push('/contexte')" class="currentPart">Spoutnik</li>
			<li @click="$router.push('/kennedy')">Apollo</li>
			<li @click="$router.push('/vostok')">Luna</li>
			<li @click="$router.push('/clep')">Artemis</li>
			<li @click="$router.push('/end')">End</li>
		</ul>
		<div>
			<BackButton
				:svgUrl="svgSrc"
				class="launch__back"
				textBackButton="Retour"
				@click.native="$router.go(-1)"
			/>
			<PrimaryButton
				textPrimaryButton="Lancer Spoutnik 1"
				class="launch__button"
				@click.native="$router.push('/Liftoff')"
				@click="play()"
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
	data() {
		return {
			svgSrc: require("../assets/img/arrow.svg"),
		}
	},
	methods: {
		play() {
			this.$refs.video.play()
			console.log(this.$refs.video.play())
		},
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
