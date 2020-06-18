<template>
	<div class="moreInfo page" to="">
		<div class="moreInfo__back">
			<BackButton :svgUrl="svgSrc" textBackButton="Retour" @click.native="$router.go(-1)" />
		</div>
		<div class="moreInfo__left">
			<img class="moreInfo__left--img" :src="imageUrlLeft" />
			<h1 class="moreInfo__left--title">
				{{ titleInfoLeft }}
			</h1>
			<p class="moreInfo__left--text">
				{{ textInfoLeft }}
			</p>
		</div>
		<span class="moreInfo__line"></span>
		<div class="moreInfo__right">
			<iframe
				width="500"
				height="406"
				:src="videoUrlRight"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; "
				start="1"
				autoplay="1"
				controls="2"
			></iframe>
			<h1 class="moreInfo__right--title">
				{{ titleInfoRight }}
			</h1>
			<p p class="moreInfo__right--text">
				{{ textInfoRight }}
			</p>

			<p></p>
			<div class="moreInfo__next">
				<NextButton />
			</div>
		</div>
	</div>
</template>

<script>
import NextButton from "@/components/NextButton.vue"
import BackButton from "@/components/BackButton.vue"
export default {
	name: "MoreInfoVideo",
	data() {
		return {
			svgSrc: require("../assets/img/arrow.svg"),
		}
	},
	components: {
		NextButton,
		BackButton,
	},
	props: {
		imageUrlLeft: {},
		videoUrlLeft: {},
		videoUrlRight: {},
		titleInfoLeft: String,
		titleInfoRight: String,
		textInfoLeft: String,
		textInfoRight: String,
	},
}
</script>

<style lang="scss" scoped>
.moreInfo {
	display: flex;
	flex-direction: column;
	background-color: $black;
	position: relative;
	overflow: hidden;
  max-height: 100vh;
	@include tablet {
		flex-direction: row;
	}

	&__back {
		position: absolute;
		left: 15px;
		top: 5px;
	}

	&__left {
		padding-top: 40px;
		@include tablet {
			padding-top: 6%;
			width: 50vw;
			margin-left: 50px;
		}
		@include laptop {
		}
	}
	&__left--img {
		width: 100vw;
		height: 20vh;
		object-fit: cover;
		@include tablet {
			max-width: 100%;
			height: auto;
		}
		@include laptop {
			max-width: 65%;
		}
	}

	&__left--title {
		font-family: "Poppins";
		font-size: 22px;
		font-weight: 300;
		text-align: left;
		margin: 25px 20px 10px;
		@include tablet {
			font-size: 25px;
		}
		@include laptop {
			font-size: 30px;
		}
		@include pc {
			font-size: 40px;
		}
	}

	&__left--text {
		line-height: 140%;
		font-family: "Poppins";
		font-size: 14px;
		font-weight: 300;
		color: #dbdbdb;
		text-align: left;
		margin: 0 20px;
		@include tablet {
			font-size: 16px;
		}
		@include laptop {
			font-size: 16px;
		}
		@include pc {
			font-size: 20px;
		}
	}

	&__line {
		background-color: #505050;
		margin: 50px 0;
		height: 2px;
		width: 100vw;
		@include tablet {
			width: 2px;
			height: 100vh;
			margin: 0 50px;
		}
	}

	&__right {
		@include tablet {
			padding-top: 6%;
			width: 50vw;
			margin-right: 50px;
			height: 100vh;
		}
		@include laptop {
		}
	}

	&__right--video {
		width: 100vw;

		object-fit: cover;
		@include tablet {
			max-width: 100%;
			height: auto;
		}
		@include laptop {
			max-width: 65%;
		}
	}

	&__right--title {
		font-family: "Poppins";
		font-size: 22px;
		font-weight: 300;
		text-align: left;
		margin: 25px 20px 10px;
		@include tablet {
			font-size: 25px;
		}
		@include laptop {
			font-size: 30px;
		}
		@include pc {
			font-size: 40px;
		}
	}

	&__right--text {
		line-height: 140%;
		font-family: "Poppins";
		font-size: 14px;
		font-weight: 300;
		color: #dbdbdb;
		line-height: auto;
		text-align: left;
		margin: 0 20px 40px;
		@include tablet {
			font-size: 16px;
		}
		@include laptop {
			font-size: 16px;
		}
		@include pc {
			font-size: 20px;
		}
	}

	&__next {
		margin-bottom: 30px;
		@include tablet {
			text-align: right;
		}
	}
}
</style>
