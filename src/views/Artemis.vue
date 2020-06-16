<template>
	<div class="artemis page" @mousewheel="scrollHorizontal()" ref="bodyScroll">
		<IntroTimeline
			:backgroundImg="backgroundImg"
			introTitle="Artemis"
			:introTimelineVideoSrc="introTimelineVideoSrc"
		/>
		<Timeline :tableauTimeline="tableauTimeline" class="timelineComponent" />
		<div class="endTimeline">
			<div class="endTimeline--title">
				<p>We choose to go to the</p>
				<h1>Moon</h1>
			</div>
			<p class="endTimeline--paragraphe">
				La
				<span>Lune</span>
				fut donc un enjeu politique majeur durant la guerre froide, grâce à
				<span>Apollo 11</span>
				les

				<span>Etats-Unis</span>
				finissent
				<span>vainqueur</span>
				de la conquête lunaire malgré l’avance de l’URSS plusieurs années avant.
				<br />
				<br />
				Le
				<span>retour</span>
				des hommes sur la lune redevient un thème recurent de nouveau motivé pour des
				<span>raisons politiques</span>
				plus qu’économique.
				<br />
				D’autres nations se lancent dans la course à la lune, comme l’Inde, l’Europe et nottament la
				<span>Chine</span>
				et son programme
				<span>CLEP</span>
				.
				<br />
				<br />
				Les Etats-Unis annoncent enfin le
				<span>programme Artemis</span>
				afin de renvoyer des hommes sur la
				<span>Lune</span>
				puis permettre des missions sur la surface de
				<span>Mars</span>
				.
			</p>
		</div>
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
			backgroundImg: require("@/assets/img/artemis_intro.jpg"),
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
.artemis {
	background-color: $black;
	display: flex;
	flex-direction: row;
	width: fit-content;
	background-image: url("~@/assets/img/artemis_background.jpg");
}
.endTimeline {
	background-image: url("~@/assets/img/artemis_end.jpg");
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
		font-size: 18px;
		padding-bottom: 10px;
		font-family: "Poppins";
		font-weight: lighter;
		@include tablet {
			font-size: 24px;
			margin-top: 16%;
		}
		@include laptop {
			font-size: 28px;
			margin-top: 4%;
		}
		@include pc {
			font-size: 36px;
		}

		& h1 {
			transition: linear 0.8s;
			text-transform: uppercase;
			padding-bottom: 5%;
			background-clip: text;
			background-size: cover;
			-webkit-text-stroke: 1px;
			-webkit-text-stroke-color: $white;
			color: transparent;

			cursor: pointer;
			font-weight: bold;
			font-size: 80px;

			@include tablet {
				font-size: 110px;
			}
			@include laptop {
				font-size: 125px;
			}
			@include pc {
				font-size: 200px;
			}
		}

		& h1:hover {
			color: white;
			transition: linear 0.8s;
		}

		& h1::selection {
			background: black;
		}

		& p {
			padding-bottom: 5px;
		}
		& p::selection {
			background: black;
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
			width: 70%;
		}
		@include laptop {
			font-size: 18px;
			width: 80%;
			margin-top: 4%;
			padding-bottom: 0px;
			line-height: 140%;
		}
		@include pc {
			font-size: 24px;
		}
	}
}
</style>
