<template>
	<div class="kennedy page">
		<ul class="nav__missions">
			<li @click="$router.push('/contexte')">Spoutnik</li>
			<li @click="$router.push('/kennedy')" class="currentPart">Apollo</li>
			<li @click="$router.push('/vostok')">Luna</li>
			<li @click="$router.push('/clep')">Artemis</li>
			<li @click="$router.push('/end')">End</li>
		</ul>
		<div class="kennedy__Img">
			<img class="kennedy__Img__Laptop" src="../assets/img/kennedy.png" />
			<img class="kennedy__Img__Phone" src="../assets/img/kennedy_phone.png" />
		</div>
		<div class="kennedy__container">
			<div class="kennedy__title">
				<h1>Le discours du président Kennedy</h1>
			</div>
			<div class="kennedy__citation">
				<div class="kennedy__citation1">
					<p>
						En réaction au succès du premier homme "Youri Gargarine" envoyé dans l'espace par
						l'URSS. Le président Kennedy annonce le lancement du programme Apollo devant le congrès
						américain le 25 mai 1961.
						<br />
						<br />
						Il confirme sa décision dans un autre discours resté célèbre "We choose to go to the
						Moon" le 12 septembre 1962.
					</p>
				</div>
				<div class="kennedy__trait"></div>
				<div class="kennedy__audiov1">
					<svg
						class="play"
						v-if="!isPlaying"
						@click="play"
						@click.prevent="toggle"
						width="36"
						height="36"
						viewBox="0 0 36 36"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M18 0C8.05982 0 0 8.05982 0 18C0 27.9402 8.05982 36 18 36C27.9402 36 36 27.9402 36 18C36 8.05982 27.9402 0 18 0ZM23.7897 18.2772L15.0147 24.6616C14.9666 24.6962 14.9099 24.7168 14.8508 24.7213C14.7918 24.7257 14.7326 24.7138 14.6799 24.6868C14.6272 24.6598 14.5829 24.6188 14.5519 24.5683C14.521 24.5178 14.5046 24.4597 14.5045 24.4004V11.6397C14.5043 11.5804 14.5205 11.5221 14.5514 11.4714C14.5823 11.4207 14.6266 11.3796 14.6794 11.3525C14.7323 11.3255 14.7916 11.3136 14.8508 11.3182C14.9099 11.3228 14.9667 11.3437 15.0147 11.3786L23.7897 17.7589C23.8312 17.7882 23.865 17.8271 23.8883 17.8722C23.9117 17.9173 23.9239 17.9673 23.9239 18.0181C23.9239 18.0689 23.9117 18.1189 23.8883 18.164C23.865 18.2091 23.8312 18.2479 23.7897 18.2772Z"
							fill="white"
						/>
					</svg>
					<svg
						class="pause"
						v-else
						@click="pause"
						@click.prevent="toggle"
						width="512"
						height="512"
						viewBox="0 0 512 512"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M437.02 74.98C388.667 26.629 324.38 0 256 0C187.62 0 123.333 26.629 74.98 74.98C26.629 123.333 0 187.62 0 256C0 324.38 26.629 388.667 74.98 437.02C123.333 485.371 187.62 512 256 512C324.38 512 388.667 485.371 437.02 437.02C485.371 388.667 512 324.38 512 256C512 187.62 485.371 123.333 437.02 74.98V74.98ZM256 482C131.383 482 30 380.617 30 256C30 131.383 131.383 30 256 30C380.617 30 482 131.383 482 256C482 380.617 380.617 482 256 482V482Z"
							fill="white"
						/>
						<path
							d="M346 141H286C277.716 141 271 147.716 271 156V356C271 364.284 277.716 371 286 371H346C354.284 371 361 364.284 361 356V156C361 147.716 354.284 141 346 141ZM331 341H301V171H331V341Z"
							fill="white"
						/>
						<path
							d="M226 141H166C157.716 141 151 147.716 151 156V356C151 364.284 157.716 371 166 371H226C234.284 371 241 364.284 241 356V156C241 147.716 234.284 141 226 141ZM211 341H181V171H211V341Z"
							fill="white"
						/>
					</svg>
				</div>
				<div class="kennedy__button"><NextButton /></div>
			</div>

			<div class="kennedy__soundwave">
				<div id="wave" class="kennedy__wave" v-if="visible">
					<i class="bar"></i>
					<i class="bar"></i>
					<i class="bar"></i>
					<i class="bar"></i>
					<i class="bar"></i>
					<i class="bar"></i>
					<i class="bar"></i>
					<i class="bar"></i>
					<i class="bar"></i>
					<i class="bar"></i>
					<i class="bar"></i>
					<i class="bar"></i>
					<i class="bar"></i>
					<i class="bar"></i>
					<i class="bar"></i>
					<i class="bar"></i>
					<i class="bar"></i>
					<i class="bar"></i>
					<i class="bar"></i>
					<i class="bar"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import NextButton from "@/components/NextButton.vue"
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
					src: require("../assets/audio/gotothemoon.mp3"),
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
	components: {
		NextButton,
	},
}
</script>

<style lang="scss">
.kennedy {
	background-color: $black;
	display: flex;
	flex-direction: column;
	@include laptop {
		display: flex;
		flex-direction: row-reverse;
	}

	&__Img {
		height: auto;
		width: 100%;

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
			@include tablet {
				height: 350px;
				object-fit: cover;
			}
		}
	}

	&__title {
		text-align: left;
		padding: 20px 20px 20px 20px;
		@include laptop {
			padding: 50px 50px 50px 50px;
		}

		h1 {
			font-size: 22px;
			@include laptop {
				font-size: 52px;
			}
		}

		h2 {
			font-size: 18px;
			@include laptop {
				font-size: 32px;
			}
		}
	}

	&__citation {
		padding: 20px 20px;
		text-align: left;
		@include laptop {
			padding: 20px 50px 20px 50px;
			width: 70%;
		}
	}
	&__citation1 {
		font-size: 15px;
		padding-bottom: 10px;
		@include laptop {
			font-size: 20px;
			padding-bottom: 15px;
		}
	}

	&__trait {
		border: 1px solid #c4c4c4;
		width: 100%;
	}

	&__soundwave {
		@include laptop {
			display: flex;
			justify-content: center;
		}
	}

	&__button {
		display: flex;
		justify-content: center;
		@include laptop {
			padding-top: 40px;
			display: flex;
			align-items: flex-end;
			justify-content: flex-start;
		}
	}

	&__wave {
		@include laptop {
			position: absolute;
			bottom: 0;
			width: 500px;
			height: 120px;
			display: flex;
			justify-content: space-around;
			align-items: flex-end;
		}
	}
	.bar {
		@include laptop {
			background: white;
			animation: sound 0ms -800ms linear infinite alternate;
			transition: height 0.8s;
		}
	}

	@keyframes sound {
		0% {
			opacity: 0.35;
			height: 6px;
		}
		100% {
			opacity: 1;
			height: 50px;
		}
	}

	.bar:nth-child(1) {
		width: 12px;
		height: 30px;
		animation-duration: 474ms;
	}

	.bar:nth-child(2) {
		width: 12px;

		animation-duration: 433ms;
	}

	.bar:nth-child(3) {
		width: 12px;
		animation-duration: 407ms;
	}

	.bar:nth-child(4) {
		width: 12px;
		height: 26px;
		animation-duration: 458ms;
	}

	.bar:nth-child(5) {
		width: 12px;
		height: 30px;
		animation-duration: 400ms;
	}

	.bar:nth-child(6) {
		width: 12px;
		height: 32px;
		animation-duration: 427ms;
	}

	.bar:nth-child(7) {
		width: 12px;
		height: 34px;
		animation-duration: 441ms;
	}

	.bar:nth-child(8) {
		width: 12px;
		height: 36px;
		animation-duration: 419ms;
	}

	.bar:nth-child(9) {
		width: 12px;
		height: 40px;
		animation-duration: 487ms;
	}

	.bar:nth-child(10) {
		width: 12px;
		height: 46px;
		animation-duration: 442ms;
	}

	.bar:nth-child(11) {
		width: 12px;
		height: 2px;
		animation-duration: 474ms;
	}

	.bar:nth-child(12) {
		width: 12px;
		height: 10px;
		animation-duration: 433ms;
	}

	.bar:nth-child(13) {
		width: 12px;
		height: 18px;
		animation-duration: 407ms;
	}

	.bar:nth-child(14) {
		width: 12px;
		height: 26px;
		animation-duration: 458ms;
	}

	.bar:nth-child(15) {
		width: 12px;
		height: 30px;
		animation-duration: 400ms;
	}

	.bar:nth-child(16) {
		width: 12px;
		height: 32px;
		animation-duration: 427ms;
	}

	.bar:nth-child(17) {
		width: 12px;
		height: 34px;
		animation-duration: 441ms;
	}

	.bar:nth-child(18) {
		width: 12px;
		height: 36px;
		animation-duration: 419ms;
	}

	.bar:nth-child(19) {
		width: 12px;
		height: 40px;
		animation-duration: 487ms;
	}

	.bar:nth-child(20) {
		width: 12px;
		height: 46px;
		animation-duration: 442ms;
	}
	.play,
	.pause {
		padding-top: 10px;
		width: 30px;
		height: 30px;
		padding-bottom: 10px;
	}
}
</style>
