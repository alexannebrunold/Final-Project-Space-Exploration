<template>
  <div class="learn">
    <MoreInfo
      class="enSavoirPlus__Info"
      :imageUrlLeft="imageSrcLeft"
      :imageUrlRight="imageSrcRight"
      titleInfoLeft="R-7 Semiorka, lanceur de Spoutnik 1"
      titleInfoRight="Spoutnik 1, premier satellite artificel de la Terre"
      textInfoLeft="Premier missile balistique intercontinental développé par l'Union soviétique. 
                    C'est également la première fusée à avoir placé un satellite artificiel en orbite autour de la Terre. 
                    Il donne naissance à toute une famille de lanceurs à la fois performants et fiables dont les dernières versions (Soyouz) sont encore fabriquées dans l'Usine no 1 de Samara1."
      textInfoRight="Premier de la série de satellites Spoutnik, il est lancé le 4 octobre 1957 depuis le cosmodrome de Baïkonour.Le lancement de Spoutnik 1 marque l'an 1 de l'ère spatiale."
    />
  </div>
</template>

<script>
import MoreInfo from "@/components/MoreInfo.vue";

export default {
  name: "Learn",
  data() {
    return {
      imageSrcLeft: require("../assets/img/R-7Semiorka.png"),
      imageSrcRight: require("../assets/img/Spoutnik1.png"),
    };
  },
  components: {
    MoreInfo,
  },
};
</script>

<style lang="scss"></style>