<template>
	<div class="loading page">
		<div class="loading__container">
			<div class="loader">
				<div class="loader__rocket">
					<svg width="164" height="164">
						<circle class="loader__circle" cx="78" cy="82" r="77" transform="rotate(-90, 80, 80)" />
					</svg>
					<div class="loader__icon">
						<svg class="loader__svg">
							<polygon
								points="21 26.24 15.15 21.04 15.15 6.22 10.51 0 5.86 6.22 5.86 17.46 5.85 21.04 0 26.24 0 36 5.86 30.79 5.86 32.39 10.51 32.39 15.15 32.39 15.15 30.8 21 36 21 26.24"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
		<div class="loader__txt">
			<p>Chargement veuillez patienter</p>
			<div class="ball-loader">
				<div class="ball-loader-ball ball1"></div>
				<div class="ball-loader-ball ball2"></div>
				<div class="ball-loader-ball ball3"></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	created() {
		setTimeout(() => this.$router.push({ path: "/nasa" }), 5000)
	},
}
</script>

<style lang="scss">
.loading {
	background-image: url("~@/assets/img/moonbackground.png");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.loader {
	width: 164px;
	height: 164px;
	animation: spin 30s linear infinite;

	&:after {
		content: "";
		z-index: -1;
		position: absolute;
		top: calc(50% - 4em / 2);
		left: calc(50% - 4em / 2);
		display: block;
		width: 4em;
		height: 4em;
		border-radius: 50%;
		animation: pulse $duration $ease #{$duration/2 + 0.2s} infinite;
		will-change: transform;
	}
}

.loader__rocket {
	position: absolute;
	width: 100%;
	height: 100%;
	animation: spin $duration $ease infinite;
	will-change: transform;
}

.loader__icon {
	position: absolute;
	top: -3.05em;
	left: calc(50% - 1em);
	display: block;
	transform: rotate(-90deg);
}

.loader__circle {
	fill: none;
	stroke: $white;
	stroke-dashoffset: 500;
	stroke-linecap: square;
	stroke-width: 3;
	animation: dash $duration $easeCircle infinite;
}

.loader__svg {
	width: 1.9em;
	height: 2.33em;
	fill: $white;
	stroke: #000;
	stroke-width: 1;
}

.loader__txt {
	padding-bottom: 60px;
	padding-top: 60px;
	display: flex;
	flex-direction: row;
	p {
		font-family: "Poppins";
		font-size: 20px;
		padding-right: 50px;
	}

	$width: 60;
	$color: white;
	.ball-loader {
		width: $width + 0px;
		height: ($width / 3) - 10px;

		transform: translateX(-50%) translateY(-50%);
	}
	.ball-loader-ball {
		margin-top: 10px;
		will-change: transform;
		height: ($width / 3) - 10px;
		width: ($width / 3) - 10px;
		border-radius: 50%;
		background-color: $color;
		position: absolute;
		animation: grow 1s ease-in-out infinite alternate;

		&.ball1 {
			left: 0;
			transform-origin: 100% 50%;
		}
		&.ball2 {
			left: 50%;
			transform: translateX(-50%) scale(1);
			animation-delay: 0.33s;
		}
		&.ball3 {
			right: 0;
			animation-delay: 0.66s;
		}
	}

	@keyframes grow {
		to {
			transform: translateX(-50%) scale(0);
		}
	}
}

/*
   Loader animations
   ========================================================================== */

@keyframes spin {
	from {
		transform: rotate(0);
	}

	to {
		transform: rotate(-1turn);
	}
}

@keyframes dash {
	0% {
		stroke-dashoffset: 500;
		// stroke-width: 3;
	}

	50% {
		stroke-dashoffset: 380;
		// stroke-width: 5;
	}

	100% {
		stroke-dashoffset: 500;
		// stroke-width: 3;
	}
}
</style>
