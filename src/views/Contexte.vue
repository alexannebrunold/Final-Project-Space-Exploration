<template>
  <div class="context">
    <Info
      class="context__info"
      :imageUrl="imageSrc"
      quoteInfo="Moi envoyer fusée dans espace faire vroum"
      titleInfo="Sergei"
      subtitleInfo="Le premier satellite dans l'espace"
      textInfo="Ingénieur soviétique à l'origine de nombreuses grandes premières spatiales, Sergueï Pavlovitch Korolev naît à Jitomir, en Ukraine, le 12 janvier 1907."
    />
    <div class="context__Button">
      <div class="context__Button__LearnMore">
        <PrimaryButton
          textPrimaryButton="En savoir plus"
          LearnPageName="ContexteSpoutnik"
        />
      </div>
      <div class="context__Button__Next">
        <NextButton class="next" />
      </div>
    </div>
  </div>
</template>

<script>
import Info from "@/components/Info.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import NextButton from "@/components/NextButton.vue";

export default {
  name: "context",
  data() {
    return {
      imageSrc: require("../assets/img/sergei_korolev.jpg"),
    };
  },
  components: {
    Info,
    PrimaryButton,
    NextButton,
  },
};
</script>

<style lang="scss">
.context {
  position: relative;

  &__Button {
    position: absolute;
    width: auto;
    bottom: 10%;
    display: flex;
    justify-content: space-between;
    @include tablet {
      bottom: 20%;
      margin-left: 38.5%;
    }
    @include laptop {
      bottom: 12%;
      margin-left: 48%;
    }
    &__LearnMore,
    &__Next {
      width: fit-content;
      padding-top: 15%;
      margin: auto 15px;
      @include tablet {
        padding-top: 25pt;
      }
      @include laptop {
        padding-right: 150px;//ici le pading marche
        padding-top: 55pt;
        line-height: 120%;
      }
    }
  }
}
</style>
