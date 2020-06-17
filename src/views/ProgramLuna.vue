<template>
	<div class="programluna">
		<ul class="programluna__missions">
			<li @click="$router.push('/contexte')">Spoutnik</li>
			<li @click="$router.push('/kennedy')">Apollo</li>
			<li @click="$router.push('/vostok')" class="currentPart">Luna</li>
			<li @click="$router.push('/clep')">Artemis</li>
		</ul>
		<Info
			class="programluna__info"
			:imageUrl="imageSrc"
			subtitleInfo="Le programme Luna en détail."
			textInfo="Le programme Luna est une série de missions spatiales inhabitées envoyées vers la Lune par l’Union soviétique entre 1959 et 1976. 
Vingt quatre sondes spatiales firent officiellement partie de ce programme. Quinze de ces missions furent considérées comme un succès, soit grâce à une mise en orbite réussie, soit parce qu'elles atteignirent le sol lunaire."
		/>
		<div class="programluna__Button">
			<div class="programluna__Button__Next">
				<NextButton class="next" />
			</div>
		</div>
	</div>
</template>

<script>
import Info from "@/components/Info.vue"
import NextButton from "@/components/NextButton.vue"

export default {
	name: "programluna",
	data() {
		return {
			imageSrc: require("../assets/img/program_luna.png"),
		}
	},
	components: {
		Info,
		NextButton,
	},
}
</script>

<style lang="scss">
.info__Img__Quote[data-v-3e9bec44] {
	display: none;
}
.info__Img__Url[data-v-3e9bec44] {
	object-position: 80%;
}

.programluna {
	position: relative;
	&__missions {
		display: none;
		@include tablet {
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: absolute;
			top: 5px;
			right: 15px;
			font-size: 18px;
			font-family: "Poppins";
			font-weight: lighter;
			li {
				cursor: pointer;
				margin-left: 0.7em;
				transition: ease-in-out 0.4s;
				z-index: 200;
				user-select: none;
			}
			li:hover {
				transition: ease-in-out 0.4s;
				transform: translateY(5px);
			}
		}
	}
	&__Button {
		position: absolute;
		width: auto;
		bottom: 3%;
		right: 5%;
		@include tablet {
			bottom: 12%;
			right: 4%;
		}
		@include laptop {
			bottom: 8%;
			right: 8%;
		}
		&__Next {
			width: fit-content;
			padding-top: 15%;
			margin: auto 15px;
			@include tablet {
				padding-top: 25pt;
			}
			@include laptop {
				padding-top: 55pt;
				line-height: 120%;
			}
		}
	}
}
</style>
