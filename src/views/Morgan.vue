<template>
  <div class="morgan">
    <Info
      class="morgan__info"
      :imageUrl="imageSrc"
      quoteInfo=" J'ai aidé à envoyer 12 personnes sur la Lune. Et j'aime le raconter à tout le monde"
      titleInfo="JoAnn morgan"
      subtitleInfo="Les pionnières de la conquête spatiale."
      textInfo="Après la mission Apollo, JoAnn Morgan est devenue la première femme haute dirigeante du Centre spatial Kennedy (Floride). Aujourd'hui retraitée, elle aime se rappeler son rôle dans la mission Apollo. "
    />
  </div>
</template>

<script>
import Info from "@/components/Info.vue";

export default {
  name: "morgan",
  data() {
    return {
      imageSrc: require("../assets/img/joann_morgan.jpg"),
    };
  },
  components: {
    Info,
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
</style>
