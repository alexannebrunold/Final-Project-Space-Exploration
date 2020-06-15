<template>
	<div class="popup page">
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
	data() {
		return {
			"luna-1": {
				image: require("../assets/img/PopUp/Luna/Luna1.svg"),
				title: "LUNA 1",
				subtitle: "Premier essai, première réussite, premier échec",
				text: "Luna 1 (appelée aussi Lunik 1 ou Mechta) devait effectuer des mesures dans l'espace interplanétaire puis s'écraser sur le sol lunaire, mais elle rate sa cible et passe à environ 6 000 kilomètres de la Lune. Elle est la première des sondes soviétiques du programme Luna d'exploration lunaire qui s'acheva en 1976. La sonde Luna 1 marque le début de l'exploration spatiale.",
				date: "2 Janvier 1959",
			},
			"luna-2": {
				image: require("../assets/img/PopUp/Luna/Luna2.svg"),
				title: "LUNA 2",
				subtitle: "Le début d'une course effrénée",
				text: "Luna 2 (ou Lunik 2 ou Objet 00114) marque le début de l'exploration du Système solaire par des engins spatiaux. Pour la première fois, un engin construit par l'homme atteint la surface d'un autre corps céleste. La sonde s'écrase. Tous les instruments scientifiques ont parfaitement fonctionnés et l'absence de champ magnétique lunaire significatif est confirmé.",
				date: "14 Septembre 1959",
			},
			"luna-3": {
				image: require("../assets/img/PopUp/Luna/Luna3.svg"),
				title: "LUNA 3",
				subtitle: "Un angle de vue inédit",
				text: "Luna 3 (appelée aussi Lunik 3 ou Objet 00021) fut le premier engin spatial à transmettre des photographies de la face cachée de la Lune. La sonde automatique ne retransmit que des clichés de mauvaise qualité, mais par traitement informatique on parvint à produire à partir de ceux-ci le premier atlas de la face cachée. Très accidentée, celle-ci s'avérait fort différente de la face visible.",
				date: "4 octobre 1959",
			},
			"luna-4-8": {
				image: require("../assets/img/PopUp/Luna/Luna4-8.svg"),
				title: "LUNA 4-8",
				subtitle: "Des échecs répétés",
				text: "Pas moins de 13 sondes Luna sont envoyées (deux modèles YE-3 et 11 YE-6) entre 1960 et 1965, mais aucune de ces missions ne parvient à remplir leurs objectifs. Entre les échecs de lancement les erreurs de trajectoire et deux récents crashs lunaires (Luna 7 et 8) le modèle YE-6 est finalement abandonné, tout comme le nouveau système de lanceur. Cette innovation, conçue pour l'YE-6 sera à l'origine d'un grand nombre de défaillances du lanceur.",
				date: "11963-1965",
			},
			"luna-9": {
				image: require("../assets/img/PopUp/Luna/Luna9.svg"),
				title: "LUNA 9",
				subtitle: "Atterrir sur la Lune, une réalité",
				text: "Luna 9 (appelée aussi Lunik 9 ou Objet 01954) qui a réussi le premier atterrissage en douceur sur la Lune. Les Soviétiques battent ainsi une fois de plus les Américains qui parviennent à poser Surveyor 1 le 2 juin 1966 à la première tentative. L'objectif de la mission Luna 9 était d'obtenir des informations sur les caractéristiques du sol lunaire.",
				date: "	31 janvier 1966",
			},
			"luna-10": {
				image: require("../assets/img/PopUp/Luna/Luna10.svg"),
				title: "LUNA 10",
				subtitle: "L’orbite lunaire",
				text: "Luna 10 (appelée aussi Lunik 10 ou Objet 02126) se plaça en orbite lunaire le 3 avril 1966 et termina sa première révolution au bout de 3 heures, devenant ainsi le premier satellite artificiel de la lune. Des études du champ de gravitation lunaire furent également menées. Pour l'anecdote, la sonde retransmit vers la Terre un enregistrement de l'Internationale lors du XXIIe congrès du Parti Communiste Soviétique.",
				date: "31 mars 1966",
			},
			"luna-11-14": {
				image: require("../assets/img/PopUp/Luna/Luna11-14.svg"),
				title: "LUNA 11-14",
				subtitle: "Des missions qui se diversifient",
				text: "Les sondes Luna 11 à 14 sont pour la majorité de grandes réussites avec des missions en tout genre comme prendre des photos depuis l'orbite lunaire (Luna 12), se poser en douceur sur la lune (Luna13) ou encore la Cartographie détaillée de la lune, mesure du champ de gravité et test des futurs systèmes de télécommunications (Luna 14).",
				date: "1966-1968",
			},
			"luna-16": {
				image: require("../assets/img/PopUp/Luna/Luna16.svg"),
				title: "LUNA 16",
				subtitle: "Le premier échantillon lunaire",
				text: "La sonde spatiale Luna 16 réussit pour la première fois dans l'histoire de l'exploration spatiale à recueillir et rapporter sans intervention humaine un échantillon du sol d'un autre corps céleste sur Terre. À la date de lancement, des roches lunaires avaient déjà été rapportées sur Terre par les missions américaines Apollo 11 et Apollo 12.",
				date: "	12 septembre 1970",
			},
			"luna-17": {
				image: require("../assets/img/PopUp/Luna/Luna17.svg"),
				title: "LUNA 17",
				subtitle: "Le premier échantillon lunaire",
				text: "Le vaisseau se posa sur la Lune le 17 novembre. Il déploya une double rampe qui permit à Lunokhod 1 de descendre vers la surface lunaire. Il fut déclaré officiellement inactif le 4 octobre 1971. Lunokhod a voyagé sur une distance de 10 540 mètres c'est le premier à transmettre plus de 20 000 images et 200 panoramas. Il a aussi effectué plus de 500 tests sur le sol lunaire.",
				date: "15 novembre 1970",
			},
			"luna-18-23": {
				image: require("../assets/img/PopUp/Luna/Luna18-23.svg"),
				title: "LUNA 18-23",
				subtitle: "Une exploration complète",
				text: "Les lancements de la mission Luna entre 1971 et 1974 sont des séries de sondes qui vont récupérer des roches lunaire tout en parcourant sa surface (le rover Lunokhod 2 parcourt 37 km)",
				date: "1971-1974",
			},
			"luna-24": {
				image: require("../assets/img/PopUp/Luna/Luna24.svg"),
				title: "LUNA 24",
				subtitle: "Une dernière mission",
				text: "Ce fut la dernière sonde soviétique à se poser sur la Lune et à rapporter des échantillons de sol lunaire vers la Terre, près de 4 ans après la dernière mission humaine, Apollo 17.",
				date: "13 août 1976",
			},
			apollo: {
				image: require("../assets/img/PopUp/Luna/Luna1.svg"),
				title: "LUNA 10",
				subtitle: "L’orbite lunaire",
				text: "Lorem",
				date: "31 Mars 1966",
			},
			annonce: {
				image: require("../assets/img/PopUp/Artemis/Artemis-0.svg"),
				title: "Artemis",
				subtitle: "Le Programme Artemis",
				text:
					"Le programme Artemis est un programme spatial habité de la NASA, l'agence spatiale américaine, dont l'objectif est d'amener un équipage sur le sol lunaire d'ici 2024",
			},
			"artemis-1": {
				image: require("../assets/img/PopUp/Artemis/Artemis-1.svg"),
				title: "Artemis 1",
				subtitle: "Premier essai du lanceur",
				text:
					"L'objectif principal est de valider le fonctionnement du nouveau lanceur Space Launch System ainsi que celui du vaisseau Orion sans équipage. Ce dernier sera testé durant les différentes phases d'une mission autour de la Lune : insertion en orbite autour de celle-ci, modification de l'orbite, injection sur une orbite de retour vers la Terre, rentrée atmosphérique à grande vitesse.",
			},
			"artemis-2": {
				image: require("../assets/img/PopUp/Artemis/Artemis-2.svg"),
				title: "Artemis 2",
				subtitle: "Premier essai du lanceur",
				text:
					"L'objectif principal est de valider le fonctionnement du nouveau lanceur Space Launch System ainsi que celui du vaisseau Orion sans équipage. Ce dernier sera testé durant les différentes phases d'une mission autour de la Lune : insertion en orbite autour de celle-ci, modification de l'orbite, injection sur une orbite de retour vers la Terre, rentrée atmosphérique à grande vitesse.",
			},
			"artemis-3": {
				image: require("../assets/img/PopUp/Artemis/Artemis-3.svg"),
				title: "Artemis 3",
				subtitle: "De retour sur la lune",
				text:
					"L'objectif principal est de valider le fonctionnement du nouveau lanceur Space Launch System ainsi que celui du vaisseau Orion sans équipage. Ce dernier sera testé durant les différentes phases d'une mission autour de la Lune : insertion en orbite autour de celle-ci, modification de l'orbite, injection sur une orbite de retour vers la Terre, rentrée atmosphérique à grande vitesse.",
			},
			mars: {
				image: require("../assets/img/PopUp/Artemis/Mars.svg"),
				title: "ET APRÈS ?",
				subtitle: "Objectif Mars",
				text:
					"L'objectif principal est de valider le fonctionnement du nouveau lanceur Space Launch System ainsi que celui du vaisseau Orion sans équipage. Ce dernier sera testé durant les différentes phases d'une mission autour de la Lune : insertion en orbite autour de celle-ci, modification de l'orbite, injection sur une orbite de retour vers la Terre, rentrée atmosphérique à grande vitesse.",
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
