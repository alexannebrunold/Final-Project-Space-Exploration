<template>
	<div class="artemis">
		<IntroTimeline introTitle="Artemis" :introTimelineVideoSrc="introTimelineVideoSrc" />
		<Timeline :tableauTimeline="tableauTimeline" />
	</div>
</template>

<script>
import IntroTimeline from "@/components/IntroTimeline.vue"
import Timeline from "@/components/Timeline.vue"
export default {
	name: "lancement",
	components: {
		Timeline,
		IntroTimeline,
	},
	data() {
		return {
			introTimelineVideoSrc: require("@/assets/videos/Artemis.mp4"),
			tableauTimeline: [
				{
					image: require("../assets/img/Artemis/Artemis.svg"),
					date: "2019",
					title: "Annonce",
					description:
						"Le programme Artemis est un programme spatial habité de la NASA, l'agence spatiale américaine, dont l'objectif est d'amener un équipage sur le sol lunaire d'ici 2024",
				},
				{
					image: require("../assets/img/Artemis/Artemis1.svg"),
					date: "2020-21",
					title: "Artemis 1",
					description:
						"L'objectif principal est de valider le fonctionnement du nouveau lanceur Space Launch System ainsi que celui du vaisseau Orion sans équipage. ",
				},
				{
					image: require("../assets/img/Artemis/Artemis2.svg"),
					date: "2022-2023",
					title: "Artemis 2",
					description:
						"Artemis 2  est le second vol prévu du lanceur américain Space Launch System et le premier avec un équipage du vaisseau spatial Orion. Le lancement est prévu pour 2022-20233",
				},
				{
					image: require("../assets/img/Artemis/Artemis3.svg"),
					date: "2024",
					title: "Artemis 3",
					description:
						"Artemis 3 est le troisième vol du vaisseau Orion et la première mission du programme Artemis qui déposera un équipage à la surface de la Lune.",
				},
				{
					image: require("../assets/img/Artemis/Mars.svg"),
					date: "Projection",
					title: "Mars",
					description:
						"Ces missions sont les premières d'une longue série dont l'objectif est d'effectuer des séjours  à la surface de la Lune  et mettre au point les techniques nécessaires à des missions habitées à la surface de Mars.",
				},
			],
		}
	},
}
</script>

<style lang="scss">
.artemis {
	background-color: $black;
	display: flex;
	flex-direction: row;
	width: fit-content;
}
</style>
