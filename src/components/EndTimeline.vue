<template>
	<div class="endTimeline">
		<h1 class="endTimeline--title">{{ titleEnd }}</h1>
		<pre class="endTimeline--paragraphe">{{ paragrapheEnd }}</pre>
		<div class="endTimeline__buttons">
			<PrimaryButton
				:textPrimaryButton="textPrimaryButton"
				class="endTimeline__buttons--firstButton"
			/>
			<PrimaryButton :textPrimaryButton="textPrimaryButtonTwo" />
		</div>
	</div>
</template>

<script>
import PrimaryButton from "@/components/PrimaryButton.vue"
export default {
	components: {
		PrimaryButton,
	},
	props: {
		titleEnd: String,
		paragrapheEnd: String,
		textPrimaryButton: String,
		textPrimaryButtonTwo: String,
	},
}
</script>

<style lang="scss" scoped>
.endTimeline {
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 1%;
	margin-right: 1%;
	margin-left: 1%;
	@include tablet {
		width: 90vw;
	}
	@include laptop {
		width: 80vw;
	}
	&--title {
		font-size: 24px;
		font-family: "Poppins";
		text-align: center;

		@include tablet {
			font-size: 40px;
		}
		@include laptop {
			font-size: 48px;
			margin-top: 10%;
		}
		@include pc {
			font-size: 60px;
		}
	}
	&--paragraphe {
		padding-bottom: 30px;
		font-size: 14px;
		font-family: "Poppins";
		width: 100%;
		margin-top: 8%;
		text-align: left;
		@include tablet {
			font-size: 16px;
		}
		@include laptop {
			font-size: 18px;
			width: 80%;
			margin-top: 8%;
			padding-bottom: 0px;
			line-height: 140%;
			margin-left: -16%;
		}
		@include pc {
			font-size: 24px;
		}
	}
	&__buttons {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 8%;
		&--firstButton {
			margin-right: 18%;
		}
	}
}
</style>
