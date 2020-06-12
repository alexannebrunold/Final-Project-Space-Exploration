<template>
	<span class="cardTimeline">
		<span class="cardTimeline__div">
			<img src="../assets/img/Ellipse.svg" alt="" />
			<div class="cardTimeline__div--circle"></div>
		</span>
		<h1 class="cardTimeline__date">{{ item.date }}</h1>
		<p class="cardTimeline__title">{{ item.title }}</p>
		<p class="cardTimeline__description">{{ item.description }}</p>
	</span>
</template>

<script>
export default {
	props: {
		item: Object,
	},
}
</script>

<style lang="scss" scoped>
.cardTimeline {
	display: table;
	height: 538px;
	width: auto;
	text-align: left;
	padding-left: 1%;
	padding-right: 1%;
	&__div {
		display: table;
		margin-bottom: 4%;
		&--circle {
			margin: 0 auto;
			width: 16px;
			height: 16px;
			border-radius: 20px;
			background: #c4c4c4;
			margin-top: 4%;
		}
	}

	&__date {
		font-size: 32px;
		font-weight: 800;
		margin-bottom: 1%;
	}
	&__title {
		font-size: 24px;
		text-align: left;
		margin-top: 4%;
	}
	&__description {
		font-size: 16px;
		width: 230px;
		color: #dbd4d4;
		margin-top: 6%;
	}
}
</style>
