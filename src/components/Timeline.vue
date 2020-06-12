<template>
	<div class="timeline">
		<div class="cardContainer">
			<CardTimeline v-for="item in tableauTimeline" :key="item.title" :item="item" />
		</div>
		<div class="line"></div>
	</div>
</template>

<script>
import CardTimeline from "./CardTimeline.vue"

export default {
	props: {
		tableauTimeline: Array,
	},
	components: {
		CardTimeline,
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
	height: 3px;
	width: 96%;
	margin: 0 auto;
	display: block;
	background-color: $white;
	z-index: 1;
	position: absolute;
	top: 30%;
	left: 0;
	right: 0;
}
</style>
