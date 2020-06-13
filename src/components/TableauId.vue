<template>
	<div class="tab page">
		<p v-for="(tab, index) in tabs" :key="tab.message">{{ index }} - {{ tab.msg }}</p>
		<div>
			<p>Element 1</p>
			<p>Element 2</p>
			<p>Element 3</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tabs: [
				{
					id: 1,
					msg: "hi",
				},
				{
					id: 2,
					msg: "hello",
				},
				{
					id: 3,
					msg: "coucou",
				},
			],
		}
	},
}
</script>

<style lang="scss" scoped>
.tab {
	background-color: $black;
}
</style>
