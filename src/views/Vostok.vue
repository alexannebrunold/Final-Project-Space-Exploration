<template>
	<div class="vostok">
		<ul class="nav__missions">
			<li @click="$router.push('/home')">Home</li>
			<li @click="$router.push('/contexte')">Spoutnik</li>
			<li @click="$router.push('/kennedy')">Apollo</li>
			<li @click="$router.push('/vostok')" class="currentPart">Luna</li>
			<li @click="$router.push('/clep')">Artemis</li>
			<li @click="$router.push('/end')">End</li>
		</ul>
		<Info
			class="vostok__info"
			:imageUrl="imageSrc"
			subtitleInfo="Premier Humain envoyé dans l'espace."
			textInfo="Vostok 1 est le premier vol spatial habité de l'histoire spatiale et la première mission du programme Vostok. Le vaisseau soviétique Vostok 3KA est lancé le 12 avril 1961 depuis le cosmodrome de Baïkonour avec à son bord le cosmonaute Youri Gagarine. Vostok 1 traduit à l'époque la supériorité du programme spatial soviétique dirigé par Sergueï Korolev sur le programme américain."
		/>

		<div class="vostok__Button">
			<div class="vostok__Button__Next">
				<NextButton class="next" />
			</div>
		</div>
	</div>
</template>

<script>
import Info from "@/components/Info.vue"
import NextButton from "@/components/NextButton.vue"

export default {
	name: "vostok",
	data() {
		return {
			imageSrc: require("../assets/img/youri_gagarine.jpg"),
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
	object-position: 50%;
}
.vostok {
	background-color: $black;
	position: relative;
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
