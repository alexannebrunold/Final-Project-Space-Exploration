<template>
	<div class="end page">
		<ul class="nav__missions">
			<li @click="$router.push('/contexte')">Spoutnik</li>
			<li @click="$router.push('/kennedy')">Apollo</li>
			<li @click="$router.push('/vostok')">Luna</li>
			<li @click="$router.push('/clep')">Artemis</li>
		</ul>
		<div class="end__particules page">
			<vue-particles
				color="ffffff"
				:particleOpacity="0.7"
				:particlesNumber="50"
				shapeType="circle"
				:particleSize="4"
				linesColor="#dedede"
				:linesWidth="0"
				:lineLinked="true"
				:lineOpacity="0"
				:linesDistance="0"
				:moveSpeed="3"
				:hoverEffect="true"
				hoverMode="grab"
				:clickEffect="true"
				clickMode="push"
			></vue-particles>
		</div>
		<svg
			@click="play"
			@click.prevent="toggle"
			class="end__logo"
			viewBox="0 0 160 160"
			width="60"
			height="60"
			fill="black"
		>
			<circle cx="80" cy="80" r="50" />
			<g transform=" matrix(0.866, -0.5, 0.25, 0.433, 80, 80)">
				<path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z" fill="white">
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="360 0 0"
						to="0 0 0"
						dur="2s"
						repeatCount="indefinite"
					/>
				</path>
			</g>
			<path d="M 50,0 A 50,50 0 0,0 -50,0Z" transform="matrix(0.866, -0.5, 0.5, 0.866, 80, 80)" />
		</svg>
		<div class="end__title">
			<h1>Merci</h1>
		</div>
		<div class="end__image" @click="pause" @click.prevent="toggle">
			<img src="../assets/img/moon.png" alt="" />
			<p>Visez les étoiles et vous atteindrez la lune.</p>
		</div>
		<div class="end__textRight">
			<p>
				<a
					class="end__textRight__p"
					href="https://github.com/alexannebrunold/Final-Project-Space-Exploration"
				>
					Ce site est issu d’un projet étudiant
				</a>
			</p>
			<img src="../assets/img/github.svg" alt="" />
		</div>
		<div class="end__name">
			<p class="end__name--1">
				<a class="end__name--1" href="https://www.linkedin.com/in/thomas-monmousseau-0152371a4/">
					Thomas Monmousseau
				</a>
			</p>
			<p class="end__name--2">
				<a class="end__name--2" href="https://www.linkedin.com/in/alexanne-brunold-7842381a4/">
					Alexanne Brunold
				</a>
			</p>
			<p class="end__name--3">
				<a class="end__name--3" href="https://www.linkedin.com/in/jason-leroy-503b29192/">
					Jason Leroy
				</a>
			</p>
			<p class="end__name--4">
				<a class="end__name--4" href="https://www.linkedin.com/in/kayse-sulejman-83a7191a0/">
					Kayse Sulejman
				</a>
			</p>
			<p class="end__name--5">
				<a class="end__name--5" href="https://www.linkedin.com/in/th%C3%A9o-rougier/">
					Théo Rougier
				</a>
			</p>
			<p class="end__name--6">
				<a class="end__name--6" href="https://www.linkedin.com/in/patxi-manzano/">Patxi Manzano</a>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "app",
	data() {
		return {
			visible: false,

			current: {},
			index: 0,
			isPlaying: false,
			songs: [
				{
					title: "We choose to go to the moon",
					src: require("../assets/audio/easteregg.mp3"),
				},
			],
			player: new Audio(),
		}
	},
	methods: {
		toggle: function() {
			this.visible = !this.visible
		},
		play(song) {
			if (typeof song.src != "undefined") {
				this.current = song

				this.player.src = this.current.src
			}

			this.player.play()
			this.isPlaying = true
		},
		pause() {
			this.player.pause()
			this.isPlaying = false
		},
	},
	created() {
		this.current = this.songs[this.index]
		this.player.src = this.current.src
	},
}
</script>

<style lang="scss" scoped>
.end {
	position: absolute;
	background-color: $black;
	display: flex;
	flex-direction: column;
	position: relative;
	overflow: hidden;

	&__particules {
		position: absolute;
		min-height: 100vh;
	}
	&__title {
		padding-top: 2%;
		font-size: 18px;
		font-family: "Poppins";
		font-weight: lighter;
		@include tablet {
			font-size: 24px;
		}
		@include laptop {
			font-size: 28px;
		}
		@include pc {
			font-size: 36px;
		}
		& h1 {
			transition: linear 0.8s;
			padding-top: 2%;
			text-transform: uppercase;
			background-clip: text;
			background-size: cover;
			-webkit-text-stroke: 1px;
			-webkit-text-stroke-color: $white;
			color: transparent;
			animation: 3s infinite ease-in-out alternate hover;
			cursor: pointer;
			font-weight: bold;
			font-size: 80px;
			width: fit-content;
			position: absolute;
			left: 0;
			right: 0;
			margin: auto;
			@include tablet {
				font-size: 110px;
			}
			@include laptop {
				font-size: 125px;
			}
			@include pc {
				font-size: 140px;
			}
		}
		& h1:hover {
			color: white;
			transition: linear 0.8s;
		}
	}
	&__logo {
		display: none;
		@include tablet {
			display: block;
			transition: linear 0.8s;
			position: absolute;
			z-index: 20;
			cursor: pointer;
			top: 5px;
			left: 5px;
		}
	}
	&__logo:hover {
		transition: linear 0.8s;
		transform: scale(1.5);
		fill: white;
	}
	&__image {
		padding-top: 7%;
		display: flex;
		flex-direction: column;
		align-items: center;
		img {
			animation: 180s linear infinite rotate;
			height: 40vh;
			width: auto;
			object-fit: cover;
			@include tablet {
				height: 45vh;
			}
			@include laptop {
				height: 55vh;
			}
		}

		p {
			margin-bottom: 5%;
			width: 75%;
			font-size: 18px;
			font-family: "Poppins";
			font-weight: normal;
			text-decoration: none;
			@include tablet {
				width: 75%;
				font-size: 24px;
				margin-top: 10px;
			}
			@include laptop {
				font-size: 28px;
			}
			@include pc {
				font-size: 40px;
			}
		}
	}
	&__textRight {
		display: none;
		@include tablet {
			display: block;
			display: flex;
			flex-direction: row;
			height: 100%;
			font-family: "Poppins";
			font-weight: normal;
			top: 0;
			bottom: 0;
			position: absolute;
			transition: linear 0.4s;
			right: 10px;
			justify-content: center;
			text-orientation: sideways-right;
			writing-mode: vertical-rl;
			font-size: 15px;

			&__p {
				text-decoration: none;
				color: white;
			}
			img {
				margin-top: 10px;
			}
		}
		@include laptop {
			font-size: 20px;
		}
		@include pc {
			font-size: 25px;
		}
	}
	&__textRight:hover {
		transform: translateX(-10px);
		transition: linear 0.4s;
		cursor: pointer;
	}
	&__textRight::selection {
		background: black;
	}

	&__name {
		position: absolute;
		margin-bottom: 1%;
		bottom: 5%;
		left: 0;
		right: 0;
		font-size: 14px;
		font-family: "Poppins";
		font-weight: normal;
		@include laptop {
			font-size: 16px;
			display: flex;
			flex-direction: row;
			justify-content: center;
		}
		@include pc {
			font-size: 22px;
		}
		&--1 {
			text-decoration: none;
			color: white;
			transition: ease-in-out 0.4s;
			margin-bottom: 0.5em;
			cursor: pointer;
			@include laptop {
				margin-left: 1em;
			}
		}
		&--1:hover {
			z-index: 100;
			transform: scale(1.2);
			transition: ease-in-out 0.4s;
			margin-left: 1em;
		}

		&--2 {
			text-decoration: none;
			color: white;
			transition: ease-in-out 0.4s;
			margin-bottom: 0.5em;
			cursor: pointer;
			@include laptop {
				margin-left: 1em;
			}
		}
		&--2:hover {
			z-index: 100;
			transform: scale(1.2);
			transition: ease-in-out 0.4s;
			margin-left: 1em;
		}

		&--3 {
			text-decoration: none;
			color: white;
			transition: ease-in-out 0.4s;
			margin-bottom: 0.5em;
			cursor: pointer;
			@include laptop {
				margin-left: 1em;
			}
		}
		&--3:hover {
			z-index: 100;
			transform: scale(1.2);
			transition: ease-in-out 0.4s;
			margin-left: 1em;
		}

		&--4 {
			text-decoration: none;
			color: white;
			transition: ease-in-out 0.4s;
			margin-bottom: 0.5em;
			cursor: pointer;
			@include laptop {
				margin-left: 1em;
			}
		}
		&--4:hover {
			z-index: 100;
			transform: scale(1.2);
			transition: ease-in-out 0.4s;
			margin-left: 1em;
		}

		&--5 {
			text-decoration: none;
			color: white;
			transition: ease-in-out 0.4s;
			margin-bottom: 0.5em;
			cursor: pointer;
			@include laptop {
				margin-left: 1em;
			}
		}
		&--5:hover {
			z-index: 100;
			transform: scale(1.2);
			transition: ease-in-out 0.4s;
			margin-left: 1em;
		}

		&--6 {
			text-decoration: none;
			color: white;
			transition: ease-in-out 0.4s;
			margin-bottom: 0.5em;
			cursor: pointer;
			@include laptop {
				margin-left: 1em;
			}
		}

		&--6:hover {
			z-index: 100;
			transform: scale(1.2);
			transition: ease-in-out 0.4s;
			margin-left: 1em;
		}
	}
}
@keyframes hover {
	from {
		transform: translateY(-10px);
	}
	to {
		transform: translateY(10px);
	}
}
@keyframes rotate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(359deg);
	}
}
</style>
