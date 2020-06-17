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
        <Roller text="1 octobre 1958" transition="1.5" class="nasa__roller">
        </Roller>
        <vue-typed-js
          :strings="[
            'Pendant la Guerre Froide une compétition entre les Etats-Unis et l\'Union soviétique apparait entre 1957 et 1975. Ils essayent, par l\'astronautique de prouver leur supériorité politique.',
          ]"
          :typeSpeed="25"
          :smartBackspace="true"
          :showCursor="false"
        >
          <p class="typing"></p>
        </vue-typed-js>
      </div>
    </div>
    <div class="nasa__btn">
      <PrimaryButton
        textPrimaryButton="En savoir plus"
        class="nasa__btn1"
        @click.native="$router.push('/nasa/more')"
      />
      <NextButton class="nasa__btn2" />
    </div>
  </div>
</template>
<script>
import PrimaryButton from "@/components/PrimaryButton.vue";
import NextButton from "@/components/NextButton.vue";
import Roller from "vue-roller";

export default {
  name: "lancement",
  components: {
    PrimaryButton,
    NextButton,
    Roller,
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
    padding-left: 20px;
    padding-right: 20px;
    @include tablet {
    }
    @include laptop {
      padding-right: 50px;
    }
    h1 {
      font-size: 24px;
      font-family: "Poppins";
      text-transform: uppercase;
      color: #ffffff;
      text-align: center;
      @include tablet {
        font-size: 40px;
        text-align: right;
      }
      @include laptop {
        font-size: 45px;
      }
      @include pc {
        font-size: 60px;
      }
    }

    p {
      line-height: 130%;
      padding-bottom: 30px;
      font-size: 14px;
      color: white;
      font-family: "Poppins";
      text-align: justify;
      display: flex;
      justify-content: center;
      @include tablet {
        font-size: 16px;
        text-align: right;
      }
      @include laptop {
        font-size: 18px;
      }
      @include pc {
        font-size: 24px;
      }
    }
  }

  &__roller {
    font-size: 24px;
    color: white;
    font-family: "Poppins";
    font-weight: lighter;
    text-transform: uppercase;
    text-align: center;
    @include tablet {
      text-align: right;
    }
  }
  &__btn {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @include tablet {
      flex-direction: row;
      justify-content: flex-end;
      padding-right: 20px;
    }
    @include laptop {
      padding-right: 50px;
    }
  }
  &__btn1 {
    margin-bottom: 30px;
    @include tablet {
      margin-bottom: 0;
      margin-right: 30px;
    }
  }
}
</style>
