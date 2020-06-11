<template>
	<div class="timeline">
		<div class="cardContainer"><CardTimeline v-for="item in arrayTest" :key="item.id" /></div>
		<div class="line"></div>
	</div>
</template>

<script>
import CardTimeline from "./CardTimeline.vue"

export default {
	components: {
		CardTimeline,
	},
	computed: {
		arrayTest: function() {
			let array = []
			for (let i = 0; i < 10; i++) {
				array.push(0)
			}
			return array
		},
	},
}
</script>

<style lang="scss" scoped>
.timeline {
	position: relative;
}

.cardContainer {
	display: flex;
	z-index: 10;
}

.line {
	width: 90%;
	margin: 0 auto;
	display: block;
	height: 10px;
	background-color: $white;
	z-index: 5;
	position: absolute;
	top: 30%;
}
</style>
