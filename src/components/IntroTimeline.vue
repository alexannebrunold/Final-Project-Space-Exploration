<template>
	<div class="introTimeline page" to="">
		<div class="introTimeline__content">
			<div class="introTimeline__content--title">
				{{ introTitle }}
			</div>
			<div class="introTimeline__content__img">
				<img class="introTimeline__content__img--laptop" :src="imageUrlLaptop" />
				<img class="introTimeline__content__img--Phone" :src="imageUrlPhone" />
			</div>

			<div class="introTimeline__content--button">
				<!-- <div class="info__Content__Button__LearnMore">
					<PrimaryButton textPrimaryButton="En savoir plus" />
				</div> -->
				<!-- <div class="info__Content__Button__Next">
					<NextButton
						class="next"
						textNextButton="Suivant"
						@click.native="$router.push('/Lancement')"
					/>
				</div> -->
			</div>
		</div>
	</div>
</template>

<script>
// import PrimaryButton from "@/components/PrimaryButton.vue"
// import NextButton from "@/components/NextButton.vue"
export default {
	name: "Info",
	components: {},
	props: {
		imageUrlLaptop: {},
		imageUrlPhone: {},
		introTitle: String,
	},
}
</script>

<style lang="scss" scoped>
.introTimeline {
	font-family: "Poppins";
	color: white;
	display: flex;
	text-align: center;
	background-color: $black;
	// @include laptop {
	// }
	&__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		// width: 80%;
		margin: 0 auto;
		justify-content: center;
		@include laptop {
			// width: 50%;
		}
		&--title {
			width: fit-content;
			font-size: 50px;
			font-weight: bold;
			text-transform: uppercase;
			-webkit-text-stroke: 1px;
			-webkit-text-stroke-color: $white;
			color: transparent;
			@include tablet {
				font-size: 80px;
			}

			@include laptop {
				font-size: 96px;
				-webkit-text-stroke: 2px;
				-webkit-text-stroke-color: $white;
			}
		}

		&__img {
			height: 500px;
			width: 100%;
			@include laptop {
				// height: 100vh;
				// width: auto;
			}

			&--laptop {
				display: none;
				height: inherit;
				@include laptop {
					display: block;
				}
			}

			&--phone {
				width: 100%;
				@include laptop {
					display: none;
				}
			}
		}

		&__Button {
			display: flex;

			&__LearnMore,
			&__Next {
				padding-top: 15%;
				width: fit-content;
				margin-right: 20px;
				@include tablet {
					margin: 0 7.5%;
					padding-top: 25pt;
				}
				@include laptop {
					padding-top: 55pt;
					line-height: 120%;
				}
			}
		}
	}
}
</style>
