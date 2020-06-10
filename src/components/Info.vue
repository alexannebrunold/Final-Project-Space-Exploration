<template>
	<div class="info" to="">
		<div class="info__Img">
			<img :src="imageUrl" />
			<div class="info__Img__Quote">
				{{ quoteInfo }}
			</div>
		</div>
		<div class="info__Content">
			<div class="info__Content__Subtitle">
				{{ titleInfo }}
			</div>
			<div class="info__Content__Text">
				{{ textInfo }}
			</div>
			<div class="info__Content__LearnMore">
				<LearnMore />
			</div>
		</div>
	</div>
</template>

<script>
import LearnMore from "@/components/LearnMore.vue"
export default {
	name: "Info",
	components: {
		LearnMore,
	},
	props: {
		imageUrl: {},
		quoteInfo: String,
		titleInfo: String,
		textInfo: String,
	},
}
</script>

<style lang="scss" scoped>
.info {
	font-family: "Poppins";
	color: white;
	display: flex;
	background-color: $black;
	&__Img {
		width: 100%;
		height: 100vh;
		position: relative;
		display: flex;
		&__Quote {
			background: black;
			opacity: 40%;
			left: 25%;
			right: 25%;
			padding: 10px;
			font-size: 12pt;
			position: absolute;
			bottom: 25px;
			& p {
				background: none;
			}
		}
	}

	&__Content {
		display: flex;
		flex-direction: column;
		padding-top: 50px;
		text-align: left;

		&__Title {
			width: fit-content;
			margin: 0 auto;
			font-size: 96px;
			font-weight: bold;
			text-transform: uppercase;
			-webkit-text-stroke: 2px;
			-webkit-text-stroke-color: $white;
			color: transparent;
			text-align: center;
		}

		&__Subtitle,
		&__Text,
		&__LearnMore,
		&__NextButton {
			padding-top: 55pt;
			margin: 0 100px;
			line-height: 120%;
		}

		&__Subtitle {
			font-size: 48px;
			font-weight: 300;
			width: 85%;
		}

		&__Text {
			font-size: 22px;
			width: 85%;
			font-weight: 200;
		}
	}
}
</style>
