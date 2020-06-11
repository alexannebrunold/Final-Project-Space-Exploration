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
    padding-left: 50px;
    height: 120px;
    display: flex;
    align-items: center;
  }

  &__trait {
    width: 80px;
    border-bottom: 8px dotted;
    color: white;
  }

  &__title {
    padding-right: 50px;
    padding-top: 20px;
    width: 830px;

    h1 {
      font-size: 78px;
      font-family: "Poppins";
      text-transform: uppercase;
      color: #ffffff;
      text-align: right;
    }

    h2 {
      font-size: 24px;
      color: white;
      font-family: "Poppins";
      font-weight: lighter;
      text-transform: uppercase;
      text-align: right;
      padding-bottom: 10px;
    }

    h3 {
      font-size: 22px;
      color: white;
      font-family: "Poppins";
      text-align: right;
    }
  }
  &__btn {
    display: flex;
    justify-content: flex-end;
    padding: 50px;
  }
}
</style>
