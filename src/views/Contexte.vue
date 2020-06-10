<!-- 
<template>
  <div class="context">
    <Info
      class="context__info"
      imageUrl="sergei_korolev.png"
      quoteInfo="Moi envoyer fusée dans espace faire vroum"
      titleInfo="Le premier satellite dans l'espace"
      textInfo="Ingénieur soviétique à l'origine de nombreuses grandes premières spatiales, Sergueï Pavlovitch Korolev naît à Jitomir, en Ukraine, le 12 janvier 1907."
    />
  </div>
</template>

<script>
import Info from "@/components/Info.vue";

export default {
  name: "context",
  components: {
    Info,
  },
};
</script>

<style lang="scss">
.title {
  font-family: "Poppins";
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 125%;
}
</style> 
-->

<template>
  <div class="info">
    <div class="info__Img">
      <img src="@/assets/img/sergei_korolev.png" alt="" />
      <div class="info__Img__Quote">
        <p>"Insérer citation de Sergei ici"</p>
      </div>
    </div>
    <div class="info__Content">
      <div class="info__Content__Title">
        Sergei
      </div>
      <div class="info__Content__Subtitle">
        <h1>Le premier satellite dans l’espace</h1>
      </div>
      <div class="info__Content__Text">
        <p>
          Ingénieur soviétique à l'origine de nombreuses grandes premières
          spatiales, Sergueï Pavlovitch Korolev naît à Jitomir, en Ukraine, le
          12 janvier 1907.
        </p>
      </div>
      <div class="info__Content__LearnMore">
        <LearnMore />
      </div>
    </div>
  </div>
</template>

<script>
import LearnMore from "@/components/LearnMore.vue";
export default {
  name: "context",
  components: {
    LearnMore,
  },
};
</script>

<style lang="scss">
.info {
  font-family: "Poppins";
  color: white;
  display: flex;

  &__Img {
    width: auto;
    height: 100vh;
    position: relative;
    display: flex;

    &__Quote {
      background: black;
      opacity: 40%;
      left: 25%;
      right: 25%;
      padding: 10px;
      font-size: 12pt;
      position: absolute;
      bottom: 25px;

      & p {
        background: none;
      }
    }
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
    &__LearnMore,
    &__NextButton {
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
  }
}
</style>
