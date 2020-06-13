<template>
	<div class="introTimeline page" @click="startAutoplay()">
		<div class="introTimeline__content">
			<div class="introTimeline__content--title">
				{{ introTitle }}
			</div>
			<!-- <div class="introTimeline__content__img">-->
			<video class="introTimeline__content--video" autoplay controls>
				<source src="@/assets/videos/1959-luna-2-ussr (1).mp4" type="video/mp4" />
			</video>
			<!-- </div> -->

			<!-- <div class="introTimeline__content--button"> -->
			<!-- <div class="introTimeline__content__button--learnMore">
					<PrimaryButton textPrimaryButton="En savoir plus" />
				</div> -->
		</div>
	</div>
	<!-- </div> -->
</template>

<script>
// import PrimaryButton from "@/components/PrimaryButton.vue"
export default {
	name: "Info",
	components: {},
	props: {
		imageUrlLaptop: {},
		imageUrlPhone: {},
		introTitle: String,
	},
	methods: {
		startAutoplay() {
			var c = document.querySelector(".introTimeline__content--video")
			c.play()
		},
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
	&__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		margin: 0 auto;
		@include laptop {
			// width: 50%;
		}
		&--title {
			width: fit-content;
			font-size: 50px;
			font-weight: 200;
			text-transform: uppercase;
			letter-spacing: 0.1em;
			// -webkit-text-stroke: 1px;
			// -webkit-text-stroke-color: $white;
			color: $white;
			@include tablet {
				font-size: 80px;
			}
			@include laptop {
				font-size: 96px;
				-webkit-text-stroke: 2px;
				-webkit-text-stroke-color: $white;
			}
		}
		&--video {
			width: 600px;
			height: auto;
		}
		&__button {
			display: flex;
			&--learnMore {
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
