<template>
	<div class="home">
		<h1 class="title">La course À l’espace</h1>
		<NextButton />
	</div>
</template>

<script>
import NextButton from "@/components/NextButton.vue"

export default {
	name: "Home",
	components: {
		NextButton,
	},
}
</script>

<style lang="scss">
.title {
}
</style>
