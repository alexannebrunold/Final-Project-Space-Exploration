<template>
	<div class="learn">
		<MoreInfo
			class="enSavoirPlus__Info"
			:videoUrlLeft="urlVideoLeft"
			:videoUrlRight="urlVideoRight"
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
			urlVideoLeft: " ",
			urlVideoRight: " ",
		}
	},
	components: {
		MoreInfo,
	},
	mounted() {
		const CORS = "https://cors-anywhere.herokuapp.com/"
		const API_URL = "https://spacemoonapis.frb.io/webdocressources/"
		axios.get(CORS + API_URL + "12").then((response) => {
			this.urlVideoLeft = response.data.data[0].videoURL
		})
		axios.get(CORS + API_URL + "11").then((response) => {
			this.urlVideoRight = response.data.data[0].videoURL
		})
	},
}
</script>

<style lang="scss"></style>
