<template>
  <div class="nasa page">
    <div class="nasa__container">
      <div class="nasa__logo">
        <img class="nasa__logo1" src="../assets/img/nasalogo1.png" alt="" />
        <div class="nasa__trait"></div>
        <img class="nasa__logo2" src="../assets/img/nasalogo2.png" alt="" />
      </div>
      <div class="nasa__title">
        <h1>Création de la NASA</h1>
        <h2>1 octobre 1958</h2>
        <h3>
          Dans un contexte de Guerre Froide Une compétition entre les États-Unis
          et l'Union soviétique apparait Entre 1957 et 1975 ils essayent, par
          l’astronautique de prouver leur supériorité politique.
        </h3>
      </div>
    </div>
      <PrimaryButton
			textPrimaryButton="Décollage"
			class="nasa__btn"
			@click.native="$router.push('/Contexte')"
		/>
  </div>
</template>

<script>
import PrimaryButton from "@/components/PrimaryButton.vue";
export default {
  name: "nasa",
  components: {
    PrimaryButton,
  },
};
</script>

<style scoped lang="scss">
.nasa {
  background-image: url("~@/assets/img/nasabackground.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;

  &__container {
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    display: none;
    @include tablet {
      display: block;
      padding-left: 20px;
      height: 120px;
      display: flex;
      align-items: center;
    }
    @include laptop {
      padding-left: 50px;
    }
  }

  &__trait {
    @include tablet {
      width: 40px;
      border-bottom: 6px dotted;
      color: white;
    }
    @include laptop {
      width: 80px;
      border-bottom: 8px dotted;
    }
  }

  &__title {
    padding-top: 40px;
    width: 830px;
    padding-left: 20px;
    padding-right: 20px;
    @include tablet {
      width: 830px;
    }
    @include laptop {
      padding-right: 50px;
    }

    h1 {
      font-size: 48px;
      font-family: "Poppins";
      text-transform: uppercase;
      color: #ffffff;
      text-align: center;
      @include tablet {
        font-size: 78px;
        text-align: right;
      }
    }

    h2 {
      font-size: 24px;
      color: white;
      font-family: "Poppins";
      font-weight: lighter;
      text-transform: uppercase;
      text-align: center;
      padding-bottom: 60px;
      @include tablet {
        text-align: right;
        padding-bottom: 10px;
      }
    }

    h3 {

      font-size: 20px;
      color: white;
      font-family: "Poppins";
      text-align: center;
      display: flex;
      justify-content: center;
      @include tablet {
        font-size: 22px;
        text-align: right;
      }
    }
  }
  &__btn {
    margin-top: 50px;
    @include tablet {
   

    }
    @include laptop {
      
    }
  }
}
</style>
