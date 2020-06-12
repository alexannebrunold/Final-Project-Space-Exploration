<template>
  <div class="popup page" to="">
    <div class="popup__Img">
      <img class="popup__Img__Laptop" :src="imageUrlLaptop" />
      <img class="popup__Img__Phone" :src="imageUrlPhone" />
    </div>
    <div class="popup__Content">
      <div class="popup__Content__Title">
        {{ titlePopUp }}
        <img class="popup__Content__Title__Logo" :src="logoUrl" />
      </div>
      <div class="popup__Content__Subtitle">
        {{ subtitlePopUp }}
      </div>
      <div class="popup__Content__Text">
        {{ textPopUp }}
      </div>
      <div class="popup__Content__Date">
        {{ datePopUp }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUp",
  props: {
    imageUrlLaptop: {},
    imageUrlPhone: {},
    logoUrl: {},
    datePopUp: String,
    titlePopUp: String,
    subtitlePopUp: String,
    textPopUp: String,
  },
};
</script>

<style lang="scss" scoped>
.popup {
  font-family: "Poppins";
  color: white;
  display: flex;
  flex-flow: column;
  background-color: $black;
  @include laptop {
    flex-flow: row;
  }

  &__Img {
    height: auto;
    width: 100%;
    position: relative;
    display: flex;
    @include laptop {
      height: 100vh;
      width: auto;
    }

    &__Laptop {
      display: none;
      height: inherit;
      @include laptop {
        display: block;
      }
    }

    &__Phone {
      width: 100%;
      @include laptop {
        display: none;
      }
    }
  }

  &__Content {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    text-align: left;
    width: 80%;
    margin: 0 auto;
    justify-content: center;
    @include laptop {
      width: 50%;
      padding-top: 0px;
    }
    &__Title {
      display: flex;
      flex-flow: column;
      width: fit-content;
      margin: 0 auto;
      font-size: 50px;
      font-weight: bold;
      text-transform: uppercase;
      -webkit-text-stroke: 1px;
      -webkit-text-stroke-color: $white;
      color: transparent;
      text-align: center;
      align-items: center;
      height: 150px;
      justify-content: space-between;

      @include tablet {
        padding-top: 25px;
        font-size: 80px;
        justify-content: space-between;
        width: 85%;
        margin: 0 auto;
        flex-flow: row;
      }

      @include laptop {
        padding-top: 0px;
        font-size: 106px;
        -webkit-text-stroke: 2px;
        -webkit-text-stroke-color: $white;
      }

      &__Logo {
        max-width: 35%;
        height: auto;
      }
    }

    &__Subtitle,
    &__Text,
    &__Date {
      padding-top: 15%;
      line-height: 150%;
      @include laptop {
        padding-top: 55pt;
        margin: 0 10%;
        line-height: 120%;
      }
    }

    &__Subtitle {
      font-size: 24px;
      font-weight: 300;
      width: 100%;
      margin: 0 auto;

      @include tablet {
        font-size: 40px;
        width: 85%;
        padding-top: 75px;
      }

      @include laptop {
        font-size: 36px;
        padding-top: 100px;
      }
    }

    &__Text {
      font-size: 14px;
      font-weight: 200;
      margin: 0 auto;
      padding-top: 10%;

      @include tablet {
        font-size: 24px;
        font-weight: 200;
        width: 85%;
      }

      @include laptop {
        font-size: 28px;
      }
    }

    &__Date {
      text-align: end;
      font-size: 12px;
      padding: 5%;

      @include tablet {
        font-size: 18px;
      }
    }
  }
}
</style>
