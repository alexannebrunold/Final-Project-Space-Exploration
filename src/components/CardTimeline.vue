<template>
	<span class="cardTimeline page">
		<span class="cardTimeline__div">
			<img src="../assets/img/Ellipse.svg" alt="" />
			<div class="cardTimeline__div--circle"></div>
		</span>
		<h1 class="cardTimeline__date">1959</h1>
		<p class="cardTimeline__title">Luna 1</p>
		<p class="cardTimeline__description">Premier engin spatial à passer à proximité de la Lune.</p>
	</span>
</template>

<style lang="scss" scoped>
.cardTimeline {
	display: table;
	height: 538px;
	width: auto;
	text-align: left;
	margin-left: 4%;
	margin-right: 4%;
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
		font-size: 48px;
		font-weight: 800;
	}
	&__title {
		font-size: 32px;
		text-align: left;
	}
	&__description {
		font-size: 18px;
		width: 230px;
		color: #dbd4d4;
	}
}
</style>
