<template>
	<div class="about">
		<PrimaryButton textPrimaryButton="Component Gobal Button" />
		<NextButton />
	</div>
</template>

<script>
import PrimaryButton from "@/components/PrimaryButton.vue"
import NextButton from "@/components/NextButton.vue"
export default {
	name: "about",
	components: {
		PrimaryButton,
		NextButton,
	},
}
</script>
