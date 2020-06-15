<template>
	<div class="disclaimer page">
		<div class="disclaimer__Title">
			<h1>Attention</h1>
		</div>
		<div class="disclaimer__Text">
			Ce webdocumentaire est réalisé pour un projet d'étude bachelor Web à l'école d'études
			supérieur Hétic
		</div>
		<div class="disclaimer__Subtext">
			<p>
				Toutes les informations utilisés sur ce site sont strictement à titre informatif, et ne nous
				appartiennent pas.
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "disclaimer",
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
	transition: 0.3s ease;
}

.fade-enter,
.fade-leave-active {
	transition: 0.5s ease;
	opacity: 0;
}

.disclaimer {
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
