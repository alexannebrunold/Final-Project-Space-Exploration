<template>
	<div class="luna page">
		<IntroTimeline introTitle="Apollo" :introTimelineVideoSrc="introTimelineVideoSrc" />
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
					@click.native="$router.push('/luna')"
				/>
				<PrimaryButton textPrimaryButton="Artemis" @click.native="$router.push('/artemis')" />
			</div>
		</div>
	</div>
</template>

<script>
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
			introTimelineVideoSrc: require("@/assets/videos/bg-video.mp4"),
			tableauTimeline: [
				{
					image: require("../assets/img/Luna/Luna1.svg"),
					date: "1961",
					title: "Apollo 1",
					description:
						" Un incendie se déclare dans le vaisseau Apollo lors d’une répétition au sol en conditions réelles,",
				},
				{
					image: require("../assets/img/Luna/Luna2.svg"),
					date: "1962-1968",
					title: "Apollo 2 à 6",
					description: " mission non habitée, essai du lanceur Saturn V et du module lunaire.",
				},
				{
					image: require("../assets/img/Luna/Luna3.svg"),
					date: "1959",
					title: "Apollo 3",
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
.endTimeline {
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 1%;
	margin-right: 1%;
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
