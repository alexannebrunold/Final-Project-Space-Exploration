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
  </div>
</template>

<script>
import Info from "@/components/Info.vue";

export default {
  name: "context",
  data() {
    return {
      imageSrc: require("../assets/img/sergei_korolev.jpg"),
    };
  },
  components: {
    Info,
  },
};
</script>

<style lang="scss"></style>
