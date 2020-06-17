<template>
	<div class="learn">
		<MoreInfo
			class="enSavoirPlus__Info"
			:imageUrlLeft="imageSrcLeft"
			:imageUrlRight="urlVideo"
			titleInfoLeft=""
			titleInfoRight="NASA 60th: How It All Began"
			textInfoLeft="Présentation des officiels de la NASA après la signature par le président Eisenhower du “National Aeronautics and Space Act” fondant la NASA le 29 juillet 1958. <br/>La NASA est fondée le 1 octobre 1958 pour administrer et réaliser les projets relevant de l'astronautique civile, jusque-là pris en charge par les différentes branches des forces armées des États-Unis, afin de rattraper l'avance prise par l'Union soviétique."
			textInfoRight=""
		/>
	</div>
</template>

<script>
import axios from "axios"
import MoreInfo from "@/components/MoreInfo.vue"

export default {
	name: "Learn",
	data() {
		return {
			imageSrcLeft: require("../assets/img/Creation-nasa.jpg"),
			urlVideo: " ",
		}
	},
	components: {
		MoreInfo,
	},
	mounted() {
		const CORS = "https://cors-anywhere.herokuapp.com/"
		const API_URL = "https://spacemoonapis.frb.io/webdocressources/"
		axios.get(CORS + API_URL + "13").then((response) => {
			this.urlVideo = response.data.data[0].videoURL
		})
	},
}
</script>

<style lang="scss"></style>
