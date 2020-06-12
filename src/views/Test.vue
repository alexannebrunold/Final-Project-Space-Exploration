<template>
	<div class="test page">
		<Timeline :tableauTimeline="tableauTimeline" />
	</div>
</template>

<script>
import Timeline from "@/components/Timeline.vue"
export default {
	name: "lancement",
	components: {
		Timeline,
	},
	data() {
		return {
			tableauTimeline: [
				{
					title: "Bonjour",
					date: "1562",
				},
				{
					title: "Bonjour toi",
					date: "1567",
				},
			],
		}
	},
}
</script>

<style lang="scss">
.test {
	background-color: $black;
}
</style>
