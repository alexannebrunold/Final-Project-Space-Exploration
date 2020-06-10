<template>
	<div class="choice page">
		<div class="choice__views">
			<div class="choice__views__US">
				<img src="../assets/img/Astronaute.png" alt="Astronaute US" />
				<p>USA</p>
			</div>
			<div class="choice__views__URSS">
				<img src="../assets/img/Youri-Gagarine.png" alt="Youri Gargarine URSS" />
				<p>URSS</p>
			</div>
		</div>
		<p class="choice__text">Choisis ton point de vue 'pseudo'</p>
	</div>
</template>

<style lang="scss">
.choice {
	background-color: $black;
	&__views {
		display: flex;
		flex-direction: row;
		font-size: 78px;
		font-weight: 100;
		letter-spacing: 0.35em;

		&__US {
			& img {
				position: relative;
				height: 680px;
				width: 100%;
				// object-fit: cover;
				// top: 2%;
			}
			& p {
				position: absolute;
				vertical-align: middle;
				top: 40%;
				width: 50%;
			}
		}
		&__URSS {
			& img {
				height: 680px;
				width: 100%;
				object-fit: cover;
			}
			& p {
				position: absolute;
				vertical-align: middle;
				top: 40%;
				width: 50%;
			}
		}
	}
	&__text {
		position: absolute;
		vertical-align: middle;
		top: 80%;
		width: 100%;
		font-size: 64px;
		font-weight: 300;
	}
}
</style>
