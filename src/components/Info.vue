<template>
  <div class="info page" to="">
    <div class="info__Img">
      <img class="info__Img__Url" :src="imageUrl" />
      <div class="info__Img__Quote">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  components: {},
  props: {
    imageUrl: {},
    quoteInfo: String,
    titleInfo: String,
    subtitleInfo: String,
    textInfo: String,
  },
};
</script>

<style lang="scss" scoped>
.info {
  font-family: "Poppins";
  color: white;
  display: flex;
  flex-flow: column;
  background-color: $black;
  @include tablet {
    flex-flow: row;
  }

  &__Img {
    max-height: 25vh;
    width: auto;
    position: relative;
    display: flex;
    @include tablet {
      max-height: 100vh;
      height: 100vh;
      width: auto;
      width: 40%;
      max-height: auto;
      width: 50%;
    }
    @include laptop {
      width: 40%;
    }

    &__Url {
      width: 100%;
      height: inherit;
      object-fit: cover;
      object-position: top;
      @include tablet {
        object-position: 20%;
      }
    }

    &__Quote {
      background: black;
      opacity: 40%;
      padding: 10px;
      font-size: 8px;
      width: fit-content;
      position: absolute;
      bottom: 5px;
      left: 0;
      right: 0;
      margin: auto;

      @include tablet {
        font-size: 10px;
        width: fit-content;
        bottom: 15px;
      }
      @include laptop {
        font-size: 12px;
        bottom: 25px;
      }

      @include pc {
        font-size: 15px;
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
    width: 90%;
    margin: 0 auto;
    justify-content: center;
    @include laptop {
      width: 50%;
      padding-top: 0px;
      padding-bottom: 200px;
    }
    &__Title {
      width: fit-content;
      margin: 0 auto;
      @include text-stroke;
      text-align: center;

      @include tablet {
        padding-top: 25px;
        font-size: 80px;
      }

      @include laptop {
        padding-top: 0px;
        font-size: 106px;
        -webkit-text-stroke: 2px;
        -webkit-text-stroke-color: $white;
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
        font-size: 45px;
        padding-top: 100px;
        font-weight: 400;
      }
      @include pc {
        font-size: 60px;
        padding-top: 100px;
      }
    }
    &__Text {
      line-height: 130%;
      font-size: 14px;
      font-weight: 300;
      margin: 0 auto;
      padding-top: 10%;
      @include tablet {
        font-size: 16px;
        width: 85%;
      }
      @include laptop {
        font-size: 18px;
      }
      @include pc {
        font-size: 24px;
      }
    }
  }
}
</style>
