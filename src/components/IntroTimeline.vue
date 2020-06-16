<template>
	<div class="introTimeline" @click="startAutoplay()">
		<img :src="backgroundImg" alt="" />
		<div class="introTimeline__content">
			<div class="introTimeline__content--title">
				{{ introTitle }}
			</div>
			<video class="introTimeline__content--video" controls ref="video">
				<source :src="introTimelineVideoSrc" type="video/mp4" />
			</video>
		</div>
	</div>
</template>

<script>
export default {
	name: "Info",
	components: {},
	props: {
		backgroundImg: String,
		introTimelineVideoSrc: String,
		introTitle: String,
	},
	methods: {
		startAutoplay() {
			this.$refs.video.play()
		},
	},
	mounted() {},
}
</script>

<style lang="scss" scoped>
.introTimeline {
	font-family: "Poppins";
	color: white;
	display: flex;
	text-align: center;
	background-color: $black;
	height: 100vh;
	& img {
		z-index: 0;
		position: absolute;
		filter: opacity(20%);
		overflow: hidden;
		height: 100%;
		width: auto;
		object-fit: cover;
	}
	&__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		padding: 0 80px;
		position: relative;
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
