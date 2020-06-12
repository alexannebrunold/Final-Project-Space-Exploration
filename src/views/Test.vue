<template>
	<div class="test page">
		<Timeline :tableauTimeline="tableauTimeline" />
	</div>
</template>

<script>
import Timeline from "@/components/Timeline.vue"
export default {
	name: "lancement",
	components: {
		Timeline,
	},
	data() {
		return {
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
.test {
	background-color: $black;
}
</style>
