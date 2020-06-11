<template>
  <div class="popup" to="">
    <div class="popup__Img">
      <img :src="imageUrl" />
    </div>
    <div class="popup__Content">
      <div class="popup__Content__Subtitle">
        {{ titlePopUp }}
      </div>
      <div class="popup__Img">
        <img :src="imageUrl" />
      </div>
      <div class="popup__Content__Text">
        {{ textPopUp }}
      </div>
      <div class="popup__Img__Date">
        {{ datePopUp }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUp",
  props: {
    imageUrl: {},
    datePopUp: String,
    titlePopUp: String,
    textPopUp: String,
  },
};
</script>

<style lang="scss" scoped>
.popup {
  font-family: "Poppins";
  color: white;
  display: flex;
  background-color: $black;
  &__Img {
    width: 100%;
    height: 100vh;
  }

  &__Content {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    text-align: left;

    &__Title {
      width: fit-content;
      margin: 0 auto;
      font-size: 96px;
      font-weight: bold;
      text-transform: uppercase;
      -webkit-text-stroke: 2px;
      -webkit-text-stroke-color: $white;
      color: transparent;
      text-align: center;
    }

    &__Subtitle,
    &__Text,
    &__Date {
      padding-top: 55pt;
      margin: 0 100px;
      line-height: 120%;
    }

    &__Subtitle {
      font-size: 48px;
      font-weight: 300;
      width: 85%;
    }

    &__Text {
      font-size: 22px;
      width: 85%;
      font-weight: 200;
    }

    &__Date {
      padding: 10px;
      font-size: 12pt;
      bottom: 25px;
    }
  }
}
</style>
