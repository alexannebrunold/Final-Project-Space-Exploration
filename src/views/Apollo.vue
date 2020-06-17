<template>
	<div class="apollo page" @mousewheel="scrollHorizontal()" ref="bodyScroll" :introVideo="urlVideo">
		<IntroTimeline
			introTitle="Apollo"
			:backgroundImg="backgroundImg"
			:introTimelineVideoSrc="introTimelineVideoSrc"
		/>
		<Timeline :tableauTimeline="tableauTimeline" />

		<div class="endTimeline">
			<h1 class="endTimeline--title">La fin prématurée du programme Apollo</h1>
			<p class="endTimeline--paragraphe">
				Ces expéditions ont permis de rapporter
				<span>382 kilogrammes</span>
				de roche lunaire et de mettre en place plusieurs batteries d'instruments scientifiques. Les
				astronautes ont effectué des observations in situ au cours d'excursions sur le sol lunaire
				d'une durée pouvant atteindre huit heures, assistés à partir d'Apollo 15 par un véhicule
				tout-terrain, le
				<span>rover lunaire</span>
				. La NASA propose plusieurs types de mission dont le

				<span>lancement en orbite</span>
				d'une station spatiale, des séjours prolongés sur la Lune mettant en œuvre plusieurs
				nouveaux modules dérivés du LEM, une mission
				<span>habitée vers Mars</span>
				, le survol de Vénus par une mission habitée, etc. Mais les objectifs scientifiques trop
				vagues ne réussissent pas à convaincre le Congrès américain beaucoup moins motivé par les
				programmes spatiaux « post-Apollo ».
				<br />
				<br />

				Par ailleurs, les priorités des
				<span>États-Unis</span>
				ont changé : les dispositifs sociaux mis en place par le président Lyndon Johnson dans le
				cadre de sa
				<span>guerre contre la pauvreté</span>
				(Medicare et Medicaid) et surtout un
				<span>conflit vietnamien</span>
				qui s'envenime prélèvent une part croissante du budget.
			</p>
			<div class="endTimeline__buttons">
				<PrimaryButton
					textPrimaryButton="Luna"
					class="endTimeline__buttons--firstButton"
					@click.native="$router.push('/vostok')"
				/>
				<PrimaryButton textPrimaryButton="Artemis" @click.native="$router.push('/clep')" />
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios"
import IntroTimeline from "@/components/IntroTimeline.vue"
import Timeline from "@/components/Timeline.vue"
import PrimaryButton from "@/components/PrimaryButton.vue"
export default {
	name: "lancement",
	components: {
		Timeline,
		IntroTimeline,
		PrimaryButton,
	},
	data() {
		return {
			urlVideo: " ",
			backgroundImg: require("@/assets/img/apollo_intro.jpg"),
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
					title: "Apollo-2-6",
					description: " mission non habitée, essai du lanceur Saturn V et du module lunaire.",
				},
				{
					image: require("../assets/img/apollo/Apollo7logo.svg"),
					date: "1968",
					title: "Apollo 7",
					description: "Apollo 7 est la première mission habitée du programme Apollo. ",
				},
				{
					image: require("../assets/img/apollo/Apollo8logo.svg"),
					date: "1968",
					title: "Apollo 8",
					description:
						"La mission Apollo 8 est le premier vol habité à quitter l’orbite terrestre. ",
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
					title: "Apollo 10",
					description:
						"Cette mission à failli être celle du premier atterrissage sur le sol lunaire.",
				},
				{
					image: require("../assets/img/apollo/Apollo11logo.svg"),
					date: "1969",
					title: "Apollo 11",
					description:
						"« C’est un petit pas pour [un] homme, mais un bond de géant pour l’Humanité »",
				},
				{
					image: require("../assets/img/apollo/Apollo12logo.svg"),
					date: "1969",
					title: "Apollo 12",
					description: "Apollo 12, et la deuxième à se poser sur la Lune.",
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
					description: " Il s'agit de la première mission dont le but principal est scientifique",
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
					description: "Apollo 17 et la dernière mission du programme spatial Apollo",
				},
			],
		}
	},
	mounted() {
		const CORS = "https://cors-anywhere.herokuapp.com/"
		const API_URL = "https://spacemoonapis.frb.io/webdocressources/"
		axios.get(CORS + API_URL + "3").then((response) => {
			console.log(response.data.data[0].videoURL)
			this.urlVideo = response.data.data[0].videoURL
			console.log(this.urlVideo)
		})
	},
	methods: {
		scrollHorizontal(e) {
			e = window.event || e
			let delta = Math.max(-1, Math.min(1, e.wheelDelta))
			let scrollSpeed = 40
			document.documentElement.scrollLeft -= delta * scrollSpeed
			this.$refs.bodyScroll.scrollLeft -= delta * scrollSpeed
			e.preventDefault()
		},
	},
}
</script>

<style lang="scss">
.apollo {
	background-color: $black;
	display: flex;
	flex-direction: row;
	width: fit-content;
	background-image: url("~@/assets/img/apollo_background.jpg");
}
.endTimeline {
	background-image: url("~@/assets/img/apollo_end.jpg");
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 1%;

	@include tablet {
		width: 90vw;
	}
	@include laptop {
		width: 80vw;
	}
	&--title {
		font-size: 24px;
		font-family: "Poppins";
		text-align: center;

		@include tablet {
			font-size: 40px;
		}
		@include laptop {
			font-size: 48px;
			margin-top: 1%;
		}
		@include pc {
			font-size: 60px;
		}
	}
	&--paragraphe {
		padding-bottom: 30px;
		font-size: 14px;
		font-family: "Poppins";
		width: 100%;
		margin-top: 8%;
		text-align: left;
		font-weight: 300;
		& span {
			font-weight: 500;
		}
		@include tablet {
			font-size: 16px;
		}
		@include laptop {
			font-size: 18px;
			width: 80%;
			margin-top: 6%;
			padding-bottom: 0px;
			line-height: 140%;
		}
		@include pc {
			font-size: 24px;
		}
	}
	&__buttons {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 4%;
		&--firstButton {
			margin-right: 18%;
		}
	}
}
</style>
