<template>
	<div class="luna page">
		<IntroTimeline introTitle="Apollo" :introTimelineVideoSrc="introTimelineVideoSrc" />
		<Timeline :tableauTimeline="tableauTimeline" />
		<EndTimeline
			titleEnd="Hey"
			paragrapheEnd="Lorem"
			textPrimaryButton="Luna"
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
			introTimelineVideoSrc: require("@/assets/videos/bg-video.mp4"),
			tableauTimeline: [
				{
					image: require("../assets/img/apollo/Apollo1logo.svg"),
					date: "1961",
					title: "Apollo 1",
					description:
						" Un incendie se déclare dans le vaisseau Apollo lors d’une répétition au sol en conditions réelles,",
				},
				{
					image: require("../assets/img/apollo/Apollo2-6logo.svg"),
					date: "1962-1968",
					title: "Apollo 2 à 6",
					description: " mission non habitée, essai du lanceur Saturn V et du module lunaire.",
				},
				{
					image: require("../assets/img/apollo/Apollo7logo.svg"),
					date: "1968",
					title: "Apollo 7",
					description:
						"Apollo 7 est la première mission habitée du programme Apollo. ",
				},
				{
					image: require("../assets/img/apollo/Apollo8logo.svg"),
					date: "1968",
					title: "Luna 8",
					description: "La mission Apollo 8 est le premier vol habité à quitter l’orbite terrestre. ",
				},
				{
					image: require("../assets/img/apollo/Apollo9logo.svg"),
					date: "1969",
					title: "Apollo 9",
					description:
						"Apollo 9 constitue le premier essai en vol de l’ensemble des équipements prévus pour une mission lunaire.",
				},
				{
					image: require("../assets/img/apollo/Apollo10logo.svg"),
					date: "1969",
					title: "Luna 10",
					description:
						"Cette mission à failli être celle du premier atterrissage sur le sol lunaire.",
				},
				{
					image: require("../assets/img/apollo/Apollo11logo.svg"),
					date: "1969",
					title: "Apollo 11",
					description: "« C’est un petit pas pour [un] homme, mais un bond de géant pour l’Humanité »",
				},
				{
					image: require("../assets/img/apollo/Apollo12logo.svg"),
					date: "1969",
					title: "Apollo 12",
					description:
						"Apollo 12, et la deuxième à se poser sur la Lune.",
				},
				{
					image: require("../assets/img/apollo/Apollo13logo.svg"),
					title: "Apollo 13",
					date: "1970",
					description: "Cette mission à failli tourner au drame a cause de problèmes techniques.",
				},
				{
					image: require("../assets/img/apollo/Apollo14logo.svg"),
					date: "1971",
					title: "Apollo 14",
					description:
						" Il s'agit de la première mission dont le but principal est scientifique",
				},
				{
					image: require("../assets/img/apollo/Apollo15logo.svg"),
					date: "1971",
					title: "Apollo 15",
					description:
						"Apollo 15 et la cinquième mission ayant pour objectif de déposer un équipage à la surface de la Lune.",
				},
				{
					image: require("../assets/img/apollo/Apollo16logo.svg"),
					date: "1972",
					title: "Apollo 16",
					description:
						"Apollo 16 est la première mission à se poser sur de hauts plateaux lunaires",
				},
				{
					image: require("../assets/img/apollo/Apollo17logo.svg"),
					date: "1976",
					title: "Apollo 17",
					description:
						"Apollo 17 et la dernière mission du programme spatial Apollo",
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
