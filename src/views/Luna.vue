<template>
	<div class="luna page">
		<IntroTimeline
			:backgroundImg="backgroundImg"
			introTitle="Luna"
			:introTimelineVideoSrc="introTimelineVideoSrc"
		/>
		<Timeline :tableauTimeline="tableauTimeline" />
		<EndTimeline
			titleEnd="Le manque de moyens de l’urss"
			paragrapheEnd="		Le programme Luna regroupe toutes les missions spatiales automatiques lancées
			par l’Union soviétique vers la Lune entre 1959 et 1976.

			Vingt-quatre sondes spatiales font officiellement partie de ce programme mais il y
			en eut en réalité 45 en tout. Quinze de ces missions ont atteint leurs objectifs. Dès le 
			début, les considérations politiques visant à démontrer la supériorité du savoir-faire
			soviétique sur celui des États-Unis ont eu le pas sur les motivations scientifiques.
			Lorsque les enjeux de la course à l'espace disparaissent, le programme Luna prend fin
			tandis que les États-Unis orientent leur programme d'Exploration principalement vers
			Mars et les planètes externes du système solaire."
			textPrimaryButton="Apollo"
			textPrimaryButtonTwo="Artemis"
		/>
	</div>
</template>

<script>
import IntroTimeline from "@/components/IntroTimeline.vue"
import Timeline from "@/components/Timeline.vue"
import EndTimeline from "@/components/EndTimeline.vue"
export default {
	name: "lancement",
	components: {
		Timeline,
		IntroTimeline,
		EndTimeline,
	},
	data() {
		return {
			backgroundImg: require("@/assets/img/Luna/LunaBackground.svg"),
			introTimelineVideoSrc: require("@/assets/videos/1959-luna-2-ussr (1).mp4"),

			tableauTimeline: [
				{
					image: require("../assets/img/Luna/Luna1.svg"),
					date: "1959",
					title: "Luna 1",
					description: "Premier engin spatial à passer à proximité de la Lune.",
				},
				{
					image: require("../assets/img/Luna/Luna2.svg"),
					date: "1959",
					title: "Luna 2",
					description: "Premier engin spatial à entrer en contact avec un autre corps céleste.",
				},
				{
					image: require("../assets/img/Luna/Luna3.svg"),
					date: "1959",
					title: "Luna 3",
					description:
						"Premier engin spatial à transmettre des photographies de la face cachée de la Lune.",
				},
				{
					image: require("../assets/img/Luna/Luna4-8.svg"),
					date: "1963 - 65",
					title: "Luna 4-8",
					description: "Séries d’échecs des premières sondes soviétiques.",
				},
				{
					image: require("../assets/img/Luna/Luna9.svg"),
					date: "1966",
					title: "Luna 9",
					description:
						"Sonde spatiale soviétique qui a réussi le premier atterrissage en douceur sur la Lune.",
				},
				{
					image: require("../assets/img/Luna/Luna10.svg"),
					date: "1966",
					title: "Luna 10",
					description:
						"Premier appareil à se placer en orbite autour de la Lune et le premier à se placer en orbite autour d'un autre corps céleste que la Terre.",
				},
				{
					image: require("../assets/img/Luna/Luna11-14.svg"),
					date: "1966 - 68",
					title: "Luna 11-14",
					description: "Séries de sondes en orbite lunaire avec pour objectifs divers études.",
				},
				{
					image: require("../assets/img/Luna/Luna16.svg"),
					date: "1970",
					title: "Luna 16",
					description:
						"Première fois dans l'histoire de l'exploration spatiale à recueillir et rapporter sans intervention humaine un échantillon du sol d'un autre corps céleste sur Terre.",
				},
				{
					image: require("../assets/img/Luna/Luna17.svg"),
					title: "Luna 17",
					date: "1970",
					description: "Premier appareil à déployer un Rover robotique sur la surface de la Lune.",
				},
				{
					image: require("../assets/img/Luna/Luna18-23.svg"),
					date: "1971 - 76",
					title: "Luna 18-23",
					description:
						"Séries de sondes sur la surface lunaire afin de récuperer des échantillons de roche.",
				},
				{
					image: require("../assets/img/Luna/Luna24.svg"),
					date: "1976",
					title: "Luna 24",
					description:
						"Dernière sonde soviétique à se poser sur la Lune et à retourner des échantillons de sol lunaire vers la Terre.",
				},
			],
		}
	},
}
</script>

<style lang="scss">
.luna {
	background-color: $black;
	display: flex;
	flex-direction: row;
	width: fit-content;
}
</style>
