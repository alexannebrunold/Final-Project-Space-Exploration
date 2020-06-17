<template>
	<div class="clep page">
		<ul class="clep__missions">
			<li @click="$router.push('/contexte')">Spoutnik</li>
			<li @click="$router.push('/kennedy')">Apollo</li>
			<li @click="$router.push('/vostok')">Luna</li>
			<li @click="$router.push('/clep')" class="currentPart">Artemis</li>
		</ul>
		<div class="clep__Img">
			<img class="clep__Img__Laptop" src="../assets/img/clepDesktop.jpg" />
			<img class="clep__Img__Phone" src="../assets/img/clepMobile.jpg" />
		</div>
		<div class="clep__container">
			<div class="clep__title">
				<h1>CLEP</h1>
			</div>
			<div class="clep__subtitle">
				<h2>Le Programme Chinois d’Exploration Lunaire (CLEP)</h2>
			</div>

			<div class="clep__citation">
				<p>
					Le Programme Chinois d'Exploration Lunaire, a pour but l'étude et l'exploration de la Lune
					par des robots, puis, à l'horizon 2025-2030, par des missions spatiales habitées. Ce
					programme s'est concrétisé, jusqu'en 2019, par le lancement par des fusées Longue Marche
					de trois sondes spatiales Chang'e depuis 2007, l'atterrissage d'un robot explorateur en
					2013 et la mission Chang'e 4, qui est la première mission humaine à se poser sur la face
					cachée de la Lune.
				</p>

				<div id="svgplay" class="clep__svg" @click="toggle">
					<div class="button"><NextButton /></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import NextButton from "@/components/NextButton.vue"
export default {
	data() {
		return {
			visible: true,
		}
	},
	methods: {
		toggle: function() {
			this.visible = !this.visible
		},
	},
	components: {
		NextButton,
	},
}
</script>

<style lang="scss">
.clep {
	background-color: $black;
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
	&__container {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	&__title {
		width: fit-content;
		margin: 0 auto;
		@include text-stroke;
		text-align: center;

		@include tablet {
			padding-top: 25px;
			font-size: 80px;
		}

		@include laptop {
			padding-top: 0px;
			font-size: 106px;
			-webkit-text-stroke: 2px;
			-webkit-text-stroke-color: $white;
		}
	}

	&__subtitle {
		text-align: left;
		padding: 20px 20px 20px 20px;
		@include laptop {
			padding: 50px 50px 50px 50px;
		}

		h2 {
			font-size: 18px;
			line-height: 140%;
			@include laptop {
				font-size: 42px;
				width: 80%;
			}
		}
	}

	&__citation {
		padding: 20px 20px;
		font-family: "Poppins";
		line-height: 140%;
		font-size: 14px;
		text-align: left;
		@include laptop {
			padding: 20px 50px 20px 50px;
			width: 70%;
			font-size: 24px;
		}
	}
}
.button {
	margin-top: 40px;
	justify-self: right;
}
</style>
