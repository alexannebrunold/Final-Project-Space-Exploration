<template>
	<div class="luna page" @mousewheel="scrollHorizontal()" ref="bodyScroll">
		<IntroTimeline :backgroundImg="backgroundImg" introTitle="Luna" :introVideo="urlVideo" />

		<Timeline :tableauTimeline="tableauTimeline" />
		<div class="endTimeline">
			<h1 class="endTimeline--title">Le manque de moyens de l’URSS</h1>
			<p class="endTimeline--paragraphe">
				Le programme
				<span>Luna</span>
				regroupe toutes les missions spatiales automatiques lancées par
				<span>l’Union soviétique</span>
				vers la Lune entre 1959 et 1976.
				<br />
				<br />
				Vingt-quatre
				<span>sondes spatiales</span>
				font officiellement partie de ce programme mais il y en eut en réalité 45 en tout. Quinze de
				ces missions ont atteint leurs objectifs. Dès le début, les considérations politiques visant
				à démontrer la supériorité du savoir-faire
				<span>soviétique</span>
				sur celui des
				<span>États-Unis</span>
				ont eu le pas sur les motivations scientifiques. Lorsque les enjeux de la
				<span>course à l'espace</span>
				disparaissent, le programme Luna prend fin tandis que les
				<span>États-Unis</span>
				orientent leur programme d'Exploration principalement vers
				<span>Mars</span>
				et les planètes externes du
				<span>système solaire</span>
				.
			</p>
			<div class="endTimeline__buttons">
				<PrimaryButton
					textPrimaryButton="Apollo"
					class="endTimeline__buttons--firstButton"
					@click.native="$router.push('/kennedy')"
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
			backgroundImg: require("@/assets/img/Luna/LunaBackground.svg"),
			// introTimelineVideoSrc: require("@/assets/videos/1959-luna-2-ussr (1).mp4"),
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
					description:
						"Séries de sondes en orbite lunaire avec pour objectifs diverses études scientifiques.",
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
						"Dernière sonde soviétique à se poser sur la Lune et à rapporter des échantillons de sol lunaire vers la Terre.",
				},
			],
		}
	},
	mounted() {
		const API_URL = "https://spacemoonapis.frb.io/webdocressources/"
		axios.get(API_URL + "5").then((response) => {
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
.line[data-v-7f3aebf1] {
  top: 46.7%;
}
.luna {
  background-color: $black;
  display: flex;
  flex-direction: row;
  width: fit-content;
  background-image: url("~@/assets/img/luna_background.jpg");
}
.endTimeline {
  background-image: url("~@/assets/img/luna_end.jpg");
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
      margin-top: 2%;
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
      margin-top: 8%;
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
    margin-top: 8%;
    &--firstButton {
      margin-right: 18%;
    }
  }
}
</style>
