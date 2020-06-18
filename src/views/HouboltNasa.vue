<template>
	<div class="learn">
		<MoreInfo
			class="enSavoirPlus__Info"
      :imageSrcLeft="imageSrcLeft"
      :imageSrcRight="imageSrcRight"
			titleInfoLeft=""
			titleInfoRight=""
			textInfoLeft="Le bâtiment d'assemblage (VAB) de la fusée Saturn V ; la fusée de 110 mètres de haut en cours de déplacement donne l'échelle.Le Centre spatial Kennedy (KSC), situé sur l'île Meritt en Floride, est le site d'où sont lancées les fusées géantes du programme Apollo. La NASA, qui a besoin d'installations à l'échelle de la fusée Saturn V, met en construction en 1963 cette nouvelle base de lancement qui jouxte celle de Cap Canaveral appartenant à l'Armée de l'Air américaine."
			textInfoRight="Le programme Apollo entraîne un changement d'échelle : comparaison des lanceurs et véhicules spatiaux des programmes Mercury, Gemini et Apollo.La fusée géante de 3 000 tonnes Saturn V, capable de placer en orbite basse une masse de 140 tonnes, fut développée pour lancer les véhicules de l'expédition lunaire."
		/>
		<div class="learn__info">
			<img src="../assets/img/info.svg" alt="" />
			<p>
				153 milliards dollars US en valeur 2019 (corrigée de l'inflation) et mobilisera jusqu'à 400
				000 personnes.
			</p>
		</div>
	</div>
</template>

<script>
import MoreInfo from "@/components/MoreInfo.vue"

export default {
	name: "Learn",
	data() {
		return {
			imageSrcLeft: require("../assets/img/ApolloSaturn.jpg"),
			imageSrcRight: require("../assets/img/NASAcomparison.jpg"),
		}
	},
	components: {
		MoreInfo,
	},
}
</script>

<style lang="scss">
.learn {
	position: relative;
	&__info {
		display: none;
		@include laptop {
			position: absolute;
			display: flex;
			flex-direction: row;
			align-items: center;
			bottom: 15px;
			left: 15px;
			width: 45%;
		}
		@include pc {
			width: 100%;
		}
		& img {
			width: 30px;
			margin-right: 10px;
		}
		& p {
			font-family: "Poppins";
			font-size: 12px;
			font-weight: 300;
			@include pc {
				font-size: 14px;
			}
		}
	}
}
</style>
