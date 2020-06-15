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
			"apollo-1": {
				image: require("../assets/img/PopUp/Apollo/Apollo1.svg"),
				title: "APOLLO 1",
				subtitle: "L'incendie du module de commande et de service d’Apollo 1",
				text: "Apollo 1 (initialement AS-204) devait être la quatrième mission du programme Apollo et la première emportant un équipage. Elle n’eut jamais lieu car un incendie se déclencha dans le module de commande du vaisseau lors d'une répétition au sol en conditions réelles, provoquant la mort de son équipage.",
				date: "27 Janvier 1967",
			},
			"apollo-2-6": {
				image: require("../assets/img/PopUp/Apollo/Apollo2-6.svg"),
				title: "APOLLO 2-6",
				subtitle: "Des missions test sans équipage",
				text: "Les déboires du vaisseau spatial Apollo permirent au programme de développement de la fusée géante Saturn V de rattraper son retard. Celle-ci avait en effet rencontré de nombreux problèmes touchant en particulier le deuxième étage  : excès de poids, phénomènes de vibration.",
				date: "1962-1968 ",
			},
			"apollo-7": {
				image: require("../assets/img/PopUp/Apollo/Apollo7.svg"),
				title: "APOLLO 7",
				subtitle: "Les vols habités préparatoires",
				text: " Son but est de valider les modifications effectuées sur le vaisseau spatial à la suite de l'incendie d’Apollo 1. Au cours de son séjour en orbite, l’équipage répète les manœuvres qui seront effectuées lors des missions lunaires. Après avoir quitté l’orbite terrestre et effectué leur rentrée dans l’atmosphère, la capsule et son équipage sont récupérés sans incident dans l’Atlantique. C’était la première mission américaine à envoyer une équipe de trois hommes dans l'espace et à diffuser des images pour la télévision.",
				date: "11 octobre 1968",
			},
			"apollo-8": {
				image: require("../assets/img/PopUp/Apollo/Apollo8.svg"),
				title: "APOLLO 8",
				subtitle: "Un pari risqué",
				text: "À ce stade d'avancement du programme, il s'agit d'une mission risquée car une défaillance du moteur du vaisseau Apollo au moment de sa mise en orbite lunaire ou de son injection sur la trajectoire de retour aurait pu être fatale à l'équipage d'autant que le module lunaire a été remplacé par une maquette. Mais les dirigeants de la NASA redoutent un coup d'éclat des Soviétiques pour la fin de l'année et décident de courir le risque. Les astronautes font au total dix révolutions autour de la Lune. Durant ce vol, ils réalisent de nombreux clichés de la Lune dont le premier lever de Terre.",
				date: "21 décembre 1968",
			},
			"apollo-9": {
				image: require("../assets/img/PopUp/Apollo/Apollo9.svg"),
				title: "APOLLO 9",
				subtitle: "Un entrainement stricte",
				text: "Pour la première fois, on baptise le vaisseau Apollo (Gumdrop) et le Lem (Spider), une décision destinée à faciliter les communications avec le sol lorsque les deux vaisseaux ont un équipage. Les astronautes effectuent toutes les manœuvres de la mission lunaire tout en restant en orbite terrestre. Le module lunaire simule un atterrissage puis réalise le premier rendez-vous réel avec le vaisseau Apollo.",
				date: "3 mars 1969 ",
			},
			"apollo-10": {
				image: require("../assets/img/PopUp/Apollo/Apollo10.svg"),
				title: "APOLLO 10",
				subtitle: "La fin d'un cycle",
				text: "Les dirigeants de la NASA envisagèrent que cette mission soit celle du premier atterrissage sur le sol lunaire, car l'ensemble des véhicules et des manœuvres avait été testé sans qu'aucun problème majeur n'ait été détecté. Mais, dans la mesure où les Soviétiques ne semblaient pas préparer de mission d'éclat, ils préférèrent opter pour une dernière répétition au réalisme encore plus poussé.",
				date: "18 mai 1969",
			},
			"apollo-11": {
				image: require("../assets/img/PopUp/Apollo/Apollo11.svg"),
				title: "APOLLO 11",
				subtitle: "Le premier homme sur la lune",
				text: "Le 21 juillet 1969, les astronautes Neil Armstrong et Buzz Aldrin, après un atterrissage mouvementé dans la mer de la Tranquillité, font leurs premiers pas sur la Lune. Armstrong, qui est le premier à sortir du module lunaire, prononce sa phrase devenue depuis célèbre « C’est un petit pas pour [un] homme, mais un bond de géant pour l’Humanité » (Neil Armstrong, Apollo 11). L'objectif principal de la mission était de réussir l'atterrissage.",
				date: "20 juillet 1969 à 20 h 17 min 40 s",
			},
			"apollo-13": {
				image: require("../assets/img/PopUp/Apollo/Apollo13.svg"),
				title: "APOLLO 13",
				subtitle: "Un abandon technique",
				text: "Apollo 13 est la troisième mission du programme spatial américain Apollo ayant pour objet de conduire un équipage jusque sur la Lune. Les astronautes Jim Lovell et Fred Haise devaient se poser , tandis que Ken Mattingly devait rester en orbite. Mais la NASA pensait que ce dernier risquait d'attraper la rougeole du fait de la maladie d'un autre astronaute, et Jack Swigert fut envoyé à sa place. De plus, un accident grave, qui aurait pu être fatal pour l'équipage, se produisit durant le transit entre la Terre et la Lune et imposa l'abandon de la mission et le retour vers la Terre.",
				date: "11 avril 1970",
			},
			"apollo-14": {
				image: require("../assets/img/PopUp/Apollo/Apollo14.svg"),
				title: "APOLLO 14",
				subtitle: "Une mission scientifique",
				text: "Apollo 14 (31 janvier 1971 - 9 février 1971) est la huitième mission habitée du programme Apollo, et la troisième à se poser sur la Lune. Il s'agit de la première mission dont le but principal est scientifique, et dont le lieu d'atterrisage ait été sélectionné non en fonction de contraintes techniques, mais pour son intérêt géologique. Le module lunaire se posa dans la formation géologique Fra Mauro, qui était la destination originelle de la mission Apollo 13 avortée.",
				date: "31 janvier 1971",
			},
			"apollo-15": {
				image: require("../assets/img/PopUp/Apollo/Apollo15.svg"),
				title: "APOLLO 15",
				subtitle: "Des échantillons important",
				text: "Apollo 15 (26 juillet 1971 - 7 août 1971) est la cinquième mission ayant pour objectif de déposer un équipage à la surface de la Lune. Par rapport aux missions précédentes, Apollo 15 bénéficie d'un lanceur Saturn V plus puissant. Sa capacité accrue permet notamment de prolonger le séjour des astronautes à la surface la Lune (67 heures), de disposer d'un véhicule, le rover lunaire augmentant le rayon d'action durant les sorties extravéhiculaires et de ramener une masse plus importante d'échantillons de sol.",
				date: "26 juillet 1971",
			},
			"apollo-16": {
				image: require("../assets/img/PopUp/Apollo/Apollo16.svg"),
				title: "APOLLO 16",
				subtitle: "Une mission lunaire de trois jours",
				text: "Apollo 16 est une mission habitée du programme Apollo ayant eu lieu du 16 au 27 avril 1972 et au cours de laquelle deux des membres de l'équipage se sont posés sur la Lune et ont exploré la zone située près de leur site d'atterrissage. Il s'agit de la dixième mission Apollo ainsi que la cinquième et avant-dernière comprenant un séjour sur la Lune. Apollo 16 est la première mission à se poser sur de hauts plateaux lunaires, en l’occurrence dans la région du cratère Descartes. Il s'agit également de la seconde mission Apollo de type J, qui se caractérise par des objectifs scientifiques étendus et un séjour sur la surface lunaire prolongé à trois jours grâce à une version évoluée du module lunaire.",
				date: "16 avril 1972",
			},
			"apollo-17": {
				image: require("../assets/img/PopUp/Apollo/Apollo17.svg"),
				title: "APOLLO 17",
				subtitle: "Une dernière mission",
				text: "Apollo 17 (7 décembre 1972 - 19 décembre 1972) est la dernière mission du programme spatial Apollo à emmener des hommes à la surface de la Lune. Avec cette mission, l'agence spatiale américaine, la NASA, conclut le projet lancé en 1961 par le président John F. Kennedy qui avait pour objectif d'amener des hommes sur la Lune. Apollo 17 est, comme Apollo 15 et 16, une mission de type J, caractérisée par un important volet scientifique. Le module lunaire utilisé permet aux astronautes de séjourner trois jours sur la surface de la Lune ; les sorties extravéhiculaires peuvent durer jusqu'à huit heures tandis que la mobilité des astronautes est accrue grâce au rover lunaire ; le vaisseau Apollo emporte des expériences scientifiques mises en œuvre en surface mais également en orbite.",
				date: "7 décembre 1972",
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
