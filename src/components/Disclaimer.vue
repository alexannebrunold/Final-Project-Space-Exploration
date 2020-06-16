<template>
	<div class="disclaimer page">
		<div class="disclaimer__Title">
			<h1>Attention</h1>
		</div>
		<div class="disclaimer__Text">
			<vue-typed-js
				:strings="[
					'Ce webdocumentaire est réalisé pour un projet d\'étude bachelor web à l\'école d\'études supérieures Hétic',
				]"
				:typeSpeed="30"
				:smartBackspace="true"
				:showCursor="false"
				:startDelay="800"
			>
				<p class="typing"></p>
			</vue-typed-js>
		</div>

		<div class="disclaimer__Subtext">
			<vue-typed-js
				:strings="[
					'Toutes les informations utilisées sur ce site sont strictement à titre informatif, et ne nous appartiennent pas.',
				]"
				:typeSpeed="28"
				:smartBackspace="true"
				:showCursor="false"
				:startDelay="7500"
			>
				<p class="typing"></p>
			</vue-typed-js>
		</div>
	</div>
</template>

<script>
export default {
	name: "disclaimer",
}
</script>

<style lang="scss" scoped>
.disclaimer {
	background-color: black;
	display: flex;
	flex-flow: column;
	width: fit-content;
	justify-content: space-between;

	&__Title {
		margin: 25% auto;
		@include text-stroke;
		font-size: 40px;

		@include tablet {
			font-size: 80px;
			margin: 15% auto;
		}

		@include pc {
			margin: 10% auto;
			font-size: 120px;
		}
	}

	&__Text,
	&__Subtext {
		width: 75%;
		margin: auto;
	}

	&__Text {
		font-size: 14px;
		@include tablet {
			font-size: 28px;
		}
		@include pc {
			font-size: 30px;
		}
	}

	&__Subtext {
		font-size: 10px;
		@include tablet {
			font-size: 20px;
		}
		@include pc {
			font-size: 24px;
		}
	}
}
</style>
