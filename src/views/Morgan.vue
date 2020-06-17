<template>
  <div class="morgan">
    <Info
      class="morgan__info"
      :imageUrl="imageSrc"
      quoteInfo=" J'ai aidé à envoyer 12 personnes sur la Lune. Et j'aime le raconter à tout le monde"
      subtitleInfo="Les pionnières de la conquête spatiale."
      textInfo="Après la mission Apollo, Joann Morgan est devenue la première femme haute dirigeante du Centre spatial Kennedy (Floride). Aujourd'hui retraitée, elle aime se rappeler son rôle dans la mission Apollo. "
    />
    <div class="morgan__Button">
      <div class="morgan__Button__LearnMore">
        <PrimaryButton
          textPrimaryButton="En savoir plus"
          LearnPageName="MorganMore"
        />
      </div>
      <div class="morgan__Button__Next">
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
  name: "morgan",
  data() {
    return {
      imageSrc: require("../assets/img/joann_morgan.jpg"),
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
.info__Img__Url[data-v-3e9bec44] {
  object-position: 70%;
}
@media (min-width: 1025px) {
  .info__Img__Quote[data-v-3e9bec44] {
    width: 45%;
  }
}
.morgan {
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
