<template>
  
	<div  class="end page">
		<div class="end__title">
			<h1>Merci</h1>
		</div>
		<div class="end__image">
      <img src="../assets/img/moon.png" alt="" />
			<p>Visez les étoiles et vous atteindrez la lune.</p>
		</div>
    <div class="end__textRight">
      <p>Ce site est issu d’un projet étudiant</p>
      <img src="../assets/img/github.svg" alt="">
    </div>
    <div class="end__name">
      <p class="end__name--1">Thomas Monmousseau</p>
      <p class="end__name--2">Alexanne Brunold</p>
      <p class="end__name--3">Jason Leroy</p>
      <p class="end__name--4">Kayse Sulejman</p>
      <p class="end__name--5">Théo Rougier</p>
      <p class="end__name--6">Patxi Manzano</p>
    </div>
      <vue-particles
      class="end__particule"
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="50"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="0"
        :lineLinked="true"
        :lineOpacity="0"
        :linesDistance="0"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.end {
  background-color: $black;
  display: flex;
  flex-direction: column;
  position: relative;
	&__title {
     padding-top: 2%;
		font-size: 18px;
		font-family: "Poppins";
		font-weight: lighter;
		@include tablet {
			font-size: 24px;
		}
		@include laptop {
			font-size: 28px;
		}
		@include pc {
			font-size: 36px;
		}

		& h1 {
			transition: linear 0.8s;
      padding-top: 3%;
			text-transform: uppercase;
			background-clip: text;
			background-size: cover;
			-webkit-text-stroke: 1px;
			-webkit-text-stroke-color: $white;
			color: transparent;
      animation: 2s linear infinite alternate hover; 
			cursor: pointer;
			font-weight: bold;
			font-size: 80px;

			@include tablet {
				font-size: 110px;
			}
			@include laptop {
				font-size: 125px;
			}
			@include pc {
				font-size: 140px;
			}
    }
    & h1:hover {
      color: white;
      transition: linear 0.8s;
    }
  }

  &__image {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      animation: 180s linear infinite rotate; 
      height: 40vh;
      width: auto;
      object-fit: cover;
      @include tablet {
        height: 45vh;
      }
      @include laptop {
        height: 55vh;
      }
    }
    p {
      margin-bottom: 5%;
      width: 75%;
      font-size: 18px;
      font-family: "Poppins";
      font-weight: normal;
      @include tablet {
        width: 75%;
        font-size: 24px;
        margin-top: 10px;
      }
      @include laptop {
        font-size: 28px;
      }
      @include pc {
        font-size: 40px;
      }
    }
  }

  &__textRight {
    display: none;

		@include tablet {
      display: block;
      display: flex;
      flex-direction: row;
      height: 100%;
      font-family: "Poppins";
      font-weight: normal;
      top: 0;
      bottom: 0;
      position: absolute;
      transition: linear 0.4s;
      right: 10px;
      justify-content: center;
      text-orientation: sideways-right;
      writing-mode: vertical-rl;
			font-size: 15px;
      img {
        margin-top: 10px;
      }
		}
		@include laptop {
			font-size: 20px;
		}
		@include pc {
			font-size: 25px;
		}
	}

	&__textRight:hover {
		transform: translateX(-10px);
		transition: linear 0.4s;
		cursor: pointer;
	}

	&__textRight::selection {
		background: black;
	}
  
  &__name {
    position: absolute;
    margin-bottom: 1%;
    bottom: 5%;
    left: 0;
    right: 0;
    font-size: 14px;
    font-family: "Poppins";
    font-weight: normal;
    @include tablet {

    }
    @include laptop {
      font-size: 16px;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    @include pc {
      font-size: 22px;
    }

    &--1 {
      margin-bottom: 0.5em;
      @include laptop {
        margin-left: 1em;
      }
    }
    
    &--2 {
      margin-bottom: 0.5em;
      @include laptop {
        margin-left: 1em;
      }
    }
    
    &--3 {
      margin-bottom: 0.5em;
      @include laptop {
        margin-left: 1em;
      }
    }
    
    &--4 {
      margin-bottom: 0.5em;
      @include laptop {
        margin-left: 1em;
      }
    }
    
    &--5 {
      margin-bottom: 0.5em;
      @include laptop {
        margin-left: 1em;
      }
    }
    
    &--6 {
      margin-bottom: 0.5em;
      @include laptop {
        margin-left: 1em;
      }
    }
    &__particule{
      z-index: -10;
    }
  }
}

@keyframes hover {
  from {
    transform: translateY(-10px);
  }

  to {
    transform: translateY(10px);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>