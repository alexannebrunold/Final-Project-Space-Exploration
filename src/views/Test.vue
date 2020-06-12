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
					title: "Luna 1",
					date: "1959",
					description: "Premier engin spatial à passer à proximité de la Lune.",
				},
				{
					title: "Luna 2",
					date: "1959",
					description: "Premier engin spatial à entrer en contact avec un autre corps céleste.",
				},
				{
					title: "Luna 3",
					date: "1959",
					description:
						"Premier engin spatial à transmettre des photographies de la face cachée de la Lune.",
				},
				{
					title: "Luna 4-8",
					date: "1963 - 65",
					description: "Séries d’échecs des premières sondes soviétiques.",
				},
				{
					title: "Luna 9",
					date: "1966",
					description:
						"Sonde spatiale soviétique qui a réussi le premier atterrissage en douceur sur la Lune.",
				},
				{
					title: "Luna 10",
					date: "1966",
					description:
						"Premier appareil à se placer en orbite autour de la Lune et le premier à se placer en orbite autour d'un autre corps céleste que la Terre.",
				},
				{
					title: "Luna 11-14",
					date: "1966 - 68",
					description: "Séries de sondes en orbite lunaire avec pour objectifs divers études.",
				},
				{
					title: "Luna 16",
					date: "1970",
					description:
						"Première fois dans l'histoire de l'exploration spatiale à recueillir et rapporter sans intervention humaine un échantillon du sol d'un autre corps céleste sur Terre.",
				},
				{
					title: "Luna 17",
					date: "1970",
					description: "Premier appareil à déployer un Rover robotique sur la surface de la Lune.",
				},
				{
					title: "Luna 18-23",
					date: "1971 - 76",
					description:
						"Séries de sondes sur la surface lunaire afin de récuperer des échantillons de roche.",
				},
				{
					title: "Luna 24",
					date: "1976",
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
