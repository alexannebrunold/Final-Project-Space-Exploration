<template>
	<span class="cardTimeline">
		<span class="cardTimeline__div">
			<img :src="item.image" alt="" @click="$router.push(`popUp/${toSlug(item.title)}`)" />
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
		cardStart: Boolean,
		cardEnd: Boolean,
	},
	methods: {
		toSlug: function(title) {
			return title.replace(" ", "-").toLowerCase()
		},
	},
	mounted() {
		setTimeout(() => {
			const el = this.$el
			if (this.cardStart) {
				console.log(el.querySelector(".cardTimeline__div--circle").offsetLeft)
				this.$emit(
					"updateTimelinePostionStart",
					el.querySelector(".cardTimeline__div--circle").offsetLeft
				)
			} else if (this.cardEnd) {
				console.log("cardEnd")
				this.$emit(
					"updateTimelinePostionEnd",
					el.querySelector(".cardTimeline__div--circle").offsetLeft
				)
			}
		}, 1000)
	},
}
</script>

<style lang="scss" scoped>
.cardTimeline {
	z-index: 2;
	display: table;
	height: 538px;
	text-align: left;
	padding-left: 1%;
	padding-right: 1%;
	transition: ease-in 0.2s;
	&:hover {
		transform: scale(1.06);
		cursor: pointer;
		margin-top: 1px;
		transition: ease-in 0.2s;
		background-color: #2c2c2c0e;
		height: 400px;
		border-radius: 8px;
	}
	&__div {
		display: table;
		margin-bottom: 4%;
		&--circle {
			margin: 0 auto;
			width: 20px;
			height: 20px;
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
