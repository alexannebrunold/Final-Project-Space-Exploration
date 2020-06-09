<template>
	<div>
		<h1 class="title">Page de test</h1>
		<NextButton />
	</div>
</template>

<script>
import NextButton from "@/components/NextButton.vue"

export default {
	name: "test",
	components: {
		NextButton,
	},
}
</script>

<style lang="scss">
.title {
	font-family: "Poppins";
	font-weight: bold;
	letter-spacing: 2px;
	line-height: 125%;
}
</style>
