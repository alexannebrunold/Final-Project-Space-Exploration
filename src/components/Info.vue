<template>
  <div class="info" to="">
    <div class="info__Img">
      <img class="info__Img__Laptop" :src="imageUrlLaptop" />
      <img class="info__Img__Phone" :src="imageUrlPhone" />
      <div class="info__Img__Quote">
        .
        {{ quoteInfo }}
      </div>
    </div>

    <div class="info__Content">
      <div class="info__Content__Title">
        {{ titleInfo }}
      </div>
      <div class="info__Content__Subtitle">
        {{ subtitleInfo }}
      </div>
      <div class="info__Content__Text">
        {{ textInfo }}
      </div>
      <div class="info__Content__LearnMore">
        <PrimaryButton />
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryButton from "@/components/PrimaryButton.vue";
export default {
  name: "Info",
  components: {
    PrimaryButton,
  },
  props: {
    imageUrlLaptop: {},
    imageUrlPhone: {},
    quoteInfo: String,
    titleInfo: String,
    subtitleInfo: String,
    textInfo: String,
  },
};
</script>

<style lang="scss" scoped>
.info {
  height: 100vh;
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

    &__Quote {
      background: black;
      opacity: 40%;
      padding: 10px;
      font-size: 8px;
      position: absolute;
      bottom: 5px;
      left: 15%;
      right: 15%;
      @include laptop {
        font-size: 12px;
        bottom: 25px;
      }
      & p {
        background: none;
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
      padding-top: 80px;
    }
    &__Title {
      width: fit-content;
      margin: 0 auto;
      font-size: 50px;
      font-weight: bold;
      text-transform: uppercase;
      -webkit-text-stroke: 1px;
      -webkit-text-stroke-color: $white;
      color: transparent;
      text-align: center;

      @include laptop {
        font-size: 106px;
        -webkit-text-stroke: 2px;
        -webkit-text-stroke-color: $white;
      }
    }

    &__Subtitle,
    &__Text,
    &__LearnMore,
    &__NextButton {
      padding-top: 20pt;
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

      @include laptop {
        font-size: 58px;
        width: 85%;
        padding-top: 100px;
      }
    }

    &__Text {
      font-size: 14px;
      font-weight: 300;

      @include laptop {
        font-size: 32px;
        width: 85%;
        font-weight: 200;
      }
    }
  }
}
</style>
