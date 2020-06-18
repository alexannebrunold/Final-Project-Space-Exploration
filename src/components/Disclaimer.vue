<template>
	<div class="disclaimer page">
		<div class="disclaimer__Title">
			<h1>Attention</h1>
		</div>
		<div class="disclaimer__Text">
			<vue-typed-js
				:strings="[
					'Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus Bachelor de l’école HETIC. Les contenus présentés n\'ont pas fait l\'objet d\'une demande de droit d\'utilisation. Ce site ne sera en aucun cas exploité à des fins commerciales et ne sera pas publié.',
				]"
				:typeSpeed="20"
				:smartBackspace="true"
				:showCursor="false"
				:startDelay="800"
			>
				<p class="typing Text"></p>
			</vue-typed-js>
		</div>
		<div class="disclaimer__here">
			<vue-typed-js
				:strings="['Clique sur la page']"
				:typeSpeed="75"
				:smartBackspace="true"
				:showCursor="false"
				:startDelay="9500"
			>
				<p class="typing here"></p>
			</vue-typed-js>
		</div>
	</div>
</template>

<script>
export default {
	name: "disclaimer",
}
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
		line-height: 140%;
		font-family: "Poppins";
		font-size: 14px;
		@include tablet {
			font-size: 22px;
			width: fit-content;
		}
		@include laptop {
			font-size: 26px;
			width: 75%;
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
