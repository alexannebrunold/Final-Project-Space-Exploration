<template>
	<div class="test page">
		<Timeline />
	</div>
</template>

<script>
import Timeline from "@/components/Timeline.vue"
export default {
	name: "lancement",
	components: {
		Timeline,
	},
}
</script>

<style lang="scss">
.test {
	background-color: $black;
}
</style>
