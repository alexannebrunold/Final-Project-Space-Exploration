<template>
  <div class="enSavoirPlus">
    <Info
      class="enSavoirPlus__Info"
      :imageUrlLaptopLeft="imageSrcLaptopLeft"
      :imageUrlPhoneLeft="imageSrcPhoneLeft"
      :imageUrlLaptopRight="imageSrcLaptopRight"
      :imageUrlPhoneRight="imageSrcPhoneRight"
      titleInfoLeft="R-7 Semiorka, lanceur de Spoutnik 1"
      titleInfoRight="Spoutnik 1, premier satellite artificel de la Terre"
      textInfoLeft="Premier missile balistique intercontinental développé par l'Union soviétique. 
                    C'est également la première fusée à avoir placé un satellite artificiel en orbite autour de la Terre. 
                    Il donne naissance à toute une famille de lanceurs à la fois performants et fiables dont les dernières versions (Soyouz) sont encore fabriquées dans l'Usine no 1 de Samara1."
      textInfoRight="Premier de la série de satellites Spoutnik, est lancé le 4 octobre 1957 depuis le cosmodrome de Baïkonour.Le lancement de Spoutnik 1 marque l'an 1 de l'ère spatiale."
    />
    <div class="polopo"></div>
  </div>
</template>

<script>
import Info from "@/components/LearnMore.vue";

export default {
  name: "enSavoirPlus",
  data() {
    return {
      imageSrcLaptopLeft: require("../assets/img/R-7Semiorka.png"),
      imageSrcPhoneLeft: require("../assets/img/R-7Semiorka.png"),
      imageSrcLaptopRight: require("../assets/img/Spoutnik1.png"),
      imageSrcPhoneRight: require("../assets/img/Spoutnik1.png"),
    };
  },
  components: {
    Info,
  },
};
</script>

<style lang="scss"></style>