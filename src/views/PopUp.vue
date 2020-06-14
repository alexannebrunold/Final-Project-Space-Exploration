<template>
	<div class="popup page" to="">
		<div class="popup__Img">
			<img class="popup__Img__Laptop" :src="currentPage.image" />
			<img class="popup__Img__Phone" :src="imageUrlPhone" />
		</div>
		<div class="popup__Content">
			<div class="popup__Content__Title">
				{{ currentPage.title }}
				<img class="popup__Content__Title__Logo" :src="logoUrl" />
			</div>
			<div class="popup__Content__Subtitle">
				{{ currentPage.subtitle }}
			</div>
			<div class="popup__Content__Text">
				{{ currentPage.text }}
			</div>
			<div class="popup__Content__Date">
				{{ currentPage.date }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "PopUp",
	props: {
		imageUrlLaptop: {},
		imageUrlPhone: {},
		logoUrl: {},
		datePopUp: String,
		titlePopUp: String,
		subtitlePopUp: String,
		textPopUp: String,
	},
	data() {
		return {
			"luna-1": {
				image: require("../assets/img/PopUp/Luna/Luna1.svg"),
				title: "LUNA 1",
				subtitle: "Premier essai, première réussite, premier échec",
				text: "Lorem",
				date: "2 Janvier 1959",
			},
			"luna-2": {
				image: require("../assets/img/PopUp/Luna/Luna1.svg"),
				title: "LUNA 2",
				subtitle: "Le coup de feu de l’exploration du Système solaire",
				text: "Lorem",
				date: "14 Septembre 1959",
			},
			"luna-3": {
				image: require("../assets/img/PopUp/Luna/Luna1.svg"),
				title: "LUNA 3",
				subtitle: "La face plus si cachée",
				text: "Lorem",
				date: "14 Septembre 1959",
			},
			"luna-9": {
				image: require("../assets/img/PopUp/Luna/Luna1.svg"),
				title: "LUNA 9",
				subtitle: "Atterir sur la Lune, une réalité",
				text: "Lorem",
				date: "31 Janvier 1966",
			},
			"luna-10": {
				image: require("../assets/img/PopUp/Luna/Luna1.svg"),
				title: "LUNA 10",
				subtitle: "L’orbite lunaire",
				text: "Lorem",
				date: "31 Mars 1966",
			},
		}
	},
	computed: {
		currentPage: function() {
			return this[this.$route.params.name]
		},
	},
}
</script>

<style lang="scss" scoped>
.popup {
	font-family: "Poppins";
	color: white;
	display: flex;
	flex-flow: column;
	background-color: $black;
	@include laptop {
		flex-flow: row;
	}

	&__Img {
		height: auto;
		width: 100%;
		position: relative;
		display: flex;
		@include laptop {
			height: 100vh;
			width: auto;
		}

		&__Laptop {
			display: none;
			height: inherit;
			@include laptop {
				display: block;
			}
		}

		&__Phone {
			width: 100%;
			@include laptop {
				display: none;
			}
		}
	}

	&__Content {
		display: flex;
		flex-direction: column;
		padding-top: 20px;
		text-align: left;
		width: 80%;
		margin: 0 auto;
		justify-content: center;
		@include laptop {
			width: 50%;
			padding-top: 0px;
		}
		&__Title {
			display: flex;
			flex-flow: column;
			width: fit-content;
			margin: 0 auto;
			@include text-stroke;
			text-align: center;
			align-items: center;
			height: 150px;
			justify-content: space-between;

			@include tablet {
				padding-top: 25px;
				font-size: 80px;
				justify-content: space-between;
				width: 85%;
				margin: 0 auto;
				flex-flow: row;
			}

			@include laptop {
				padding-top: 0px;
				font-size: 106px;
				-webkit-text-stroke: 2px;
				-webkit-text-stroke-color: $white;
			}

			&__Logo {
				max-width: 35%;
				height: auto;
			}
		}

		&__Subtitle,
		&__Text,
		&__Date {
			padding-top: 15%;
			line-height: 150%;
			@include laptop {
				padding-top: 55pt;
				margin: 0 10%;
				line-height: 120%;
			}
		}

		&__Subtitle {
			font-size: 24px;
			font-weight: 300;
			width: 100%;
			margin: 0 auto;

			@include tablet {
				font-size: 40px;
				width: 85%;
				padding-top: 75px;
			}

			@include laptop {
				font-size: 36px;
				padding-top: 100px;
			}
		}

		&__Text {
			font-size: 14px;
			font-weight: 200;
			margin: 0 auto;
			padding-top: 10%;

			@include tablet {
				font-size: 24px;
				font-weight: 200;
				width: 85%;
			}

			@include laptop {
				font-size: 28px;
			}
		}

		&__Date {
			text-align: end;
			font-size: 12px;
			padding: 5%;

			@include tablet {
				font-size: 18px;
			}
		}
	}
}
</style>
