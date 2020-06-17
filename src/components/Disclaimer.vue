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
				:typeSpeed="20"
				:smartBackspace="true"
				:showCursor="true"
				:startDelay="800"
			>
				<p class="typing Text"></p>
			</vue-typed-js>
		</div>

		<div class="disclaimer__Subtext">
			<vue-typed-js
				:strings="[
					'Toutes les informations utilisées sur ce site sont strictement à titre informatif, et ne nous appartiennent pas.',
				]"
				:typeSpeed="20"
				:smartBackspace="true"
				:showCursor="false"
				:startDelay="5000"
			>
				<p class="typing Subtext"></p>
			</vue-typed-js>
		</div>
		<div class="disclaimer__here">
			<vue-typed-js
				:strings="[
					'Clique sur la page',
				]"
				:typeSpeed="75"
				:smartBackspace="true"
				:showCursor="false"
				:startDelay="9000"
			>
				<p class="typing here"></p>
			</vue-typed-js>
			</div>
	</div>

</template>

<script>
export default {
	name: "disclaimer",
};
</script>

<style scoped lang="scss">
.disclaimer {
  background-color: black;
  display: flex;
  flex-flow: column;
  width: fit-content;
  justify-content: space-between;

	&__Title {
		margin: auto;
		@include text-stroke;
		font-size: 40px;
		animation: 1.1s infinite ease-in alternate grow;
		@include tablet {
			font-size: 80px;
			margin: 10% auto;
		}
		@include laptop {
			margin: 10% auto;
			font-size: 95px;
		}
  }

  &__Text,
  &__Subtext {
    width: 75%;
    margin: auto;
  }

	&__Text {
		font-family: "Poppins";
		font-size: 14px;
		@include tablet {
			font-size: 22px;
			width: fit-content;
		}
		@include laptop {
			font-size: 26px;
		}
	}

	&__Subtext {
		font-family: "Poppins";
		display: flex;
		justify-content: center;
		font-size: 14px;
		@include tablet {
			font-size: 20px;
		}
		@include laptop {
			font-size: 24px;
		}
	}

		&__here {
		font-weight: bold;
		font-family: "Poppins";
		display: flex;
		justify-content: center;
		font-size: 14px;
		padding-bottom: 15%;
		@include tablet {
			font-size: 20px;
			padding-bottom: 7%;
		}
		@include laptop {
			font-size: 24px;
		}
	}
}

@keyframes grow {
	from {
		color: white;
	}
	to {
		color: transparent;
	}
}
</style>