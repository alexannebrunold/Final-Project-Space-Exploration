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
    <LearnMore textLearnMore="En savoir plus" class="nasa__btn" />
  </div>
</template>

<script>
import LearnMore from "@/components/LearnMore.vue";
export default {
  name: "lancement",
  components: {
    LearnMore,
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
    @include tablette {
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
    @include tablette {
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
    @include tablette {
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
      @include tablette {
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
      @include tablette {
        text-align: right;
        padding-bottom: 10px;
      }
    }

    h3 {
<<<<<<< HEAD
      font-size: 22px;
=======
      font-size: 24px;
>>>>>>> 8958df57bf0d3e5421fa7a9bf2553e8695aa02c8
      color: white;
      font-family: "Poppins";
      text-align: left;
      display: flex;
      justify-content: center;
      @include tablette {
        font-size: 22px;
        text-align: right;
      }
    }
  }
  &__btn {
    display: flex;
    justify-content: center;
    padding: 80px 20px;
    @include tablette {
      display: flex;
      justify-content: flex-end;
      padding: 50px 20px;
    }
    @include laptop {
      padding: 50px;
    }
  }
}
</style>
