<template>
	<div class="learn">
		<MoreInfo
			class="enSavoirPlus__Info"
			:imageUrlLeft="urlVideo"
			:videoUrlRight="urlVideoo"
			titleInfoLeft="Katherine Johnson, mathématicienne afro-américaine"
			titleInfoRight="Margaret Hamilton, informaticienne et ingénieure"
			textInfoLeft="Née le 26 août 1918, Katherine Johnson est la première femme afro-américaine, et mère célibataire, à travailler pour la NASA. Embauchée en 1953 par l’agence spatiale américaine, elle était chargée de valider les calculs mathématiques de ses supérieurs."
			textInfoRight="En 1963, Margaret Hamilton intègre le laboratoire Draper du MIT. Elle y supervise l’équipe chargée de développer les logiciels du programme spatial Apollo."
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
			urlVideo: " ",
			urlVideoo: " ",
			// imageSrcLeft: require("../assets/img/KatherineJohnson.jpg"),
			// imageSrcRight: require("../assets/img/MargaretHamilton.jpg"),
		}
	},
	components: {
		MoreInfo,
	},
	mounted() {
		const CORS = "https://cors-anywhere.herokuapp.com/"
		let one = "https://spacemoonapis.frb.io/webdocressources/12"
		let two = "https://spacemoonapis.frb.io/webdocressources/13"
		const requestOne = axios.get(CORS + one)
		const requestTwo = axios.get(CORS + two)
		axios.all([requestOne, requestTwo]).then(
			axios.spread((...response) => {
				this.urlVideo = response.data.data[0].videoURL
				this.urlVideoo = response.data.data[1].videoURL
			})
		)
	},
}
</script>

<style lang="scss"></style>
