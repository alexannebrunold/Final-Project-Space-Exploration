<template>
	<div class="endTimeline">
		<h1 class="endTimeline--title">{{ titleEnd }}</h1>
		<p class="endTimeline--paragraphe">{{ paragrapheEnd }}</p>
		<PrimaryButton :textPrimaryButton="textPrimaryButton" />
		<PrimaryButton :textPrimaryButton="textPrimaryButtonTwo" />
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
	width: 80vw;

	&--title {
		font-size: 24px;
		font-family: "Poppins";
		text-align: center;
		@include tablet {
			font-size: 40px;
		}
		@include laptop {
			font-size: 48px;
		}
		@include pc {
			font-size: 60px;
		}
	}
	&--paragraphe {
		padding-bottom: 30px;
		font-size: 14px;
		font-family: "Poppins";

		@include tablet {
			font-size: 16px;
		}
		@include laptop {
			font-size: 18px;
		}
		@include pc {
			font-size: 24px;
		}
	}
}
</style>
