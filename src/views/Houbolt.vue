<template>
	<div class="houbolt">
		<ul class="nav__missions">
			<li @click="$router.push('/home')">Home</li>
			<li @click="$router.push('/contexte')">Spoutnik</li>
			<li @click="$router.push('/kennedy')" class="currentPart">Apollo</li>
			<li @click="$router.push('/vostok')">Luna</li>
			<li @click="$router.push('/clep')">Artemis</li>
			<li @click="$router.push('/end')">End</li>
		</ul>
		<Info
			class="houbolt__info"
			:imageUrl="imageSrc"
			quoteInfo="Est-ce qu'on veut aller sur la Lune ou non ?"
			subtitleInfo="Le programme Apollo en détail."
			textInfo="John Houbolt expliquant le scénario du LOR, qu'il réussit à promouvoir non sans difficultés. Dès 1959, des études sont lancées au sein de l'agence spatiale américaine dans une perspective à long terme, sur la manière de poser un engin habité sur la Lune."
		/>
		<div class="houbolt__Button">
			<div class="houbolt__Button__LearnMore">
				<PrimaryButton textPrimaryButton="En savoir plus" LearnPageName="HouboltNasa" />
			</div>
			<div class="houbolt__Button__Next">
				<NextButton class="next" />
			</div>
		</div>
	</div>
</template>

<script>
import Info from "@/components/Info.vue"
import PrimaryButton from "@/components/PrimaryButton.vue"
import NextButton from "@/components/NextButton.vue"

export default {
	name: "houbolt",
	data() {
		return {
			imageSrc: require("../assets/img/john_houbolt.jpg"),
		}
	},
	components: {
		Info,
		PrimaryButton,
		NextButton,
	},
}
</script>

<style lang="scss">
.info__Img__Url[data-v-3e9bec44] {
	object-position: 80%;
}
.houbolt {
	position: relative;
	&__Button {
		position: absolute;
		width: auto;
		bottom: 10%;
		display: flex;
		justify-content: space-between;
		@include tablet {
			bottom: 20%;
			margin-left: 38.5%;
		}
		@include laptop {
			bottom: 12%;
			margin-left: 48%;
		}
		&__LearnMore,
		&__Next {
			padding-top: 15%;
			margin: auto 15px;
			@include tablet {
				padding-top: 25pt;
			}
			@include laptop {
				padding-right: 150px; //ici le pading marche
				padding-top: 55pt;
				line-height: 120%;
			}
		}
	}
}
</style>
