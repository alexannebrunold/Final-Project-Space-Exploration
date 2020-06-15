<template>
  <div class="programluna">
    <Info
      class="programluna__info"
      :imageUrl="imageSrc"
      titleInfo="Luna"
      subtitleInfo="Le programme Luna en détail."
      textInfo="Le programme Luna est une série de missions spatiales inhabitées envoyées vers la Lune par l’Union soviétique entre 1959 et 1976. 
Vingt quatre sondes spatiales firent officiellement partie de ce programme. Quinze de ces missions furent considérées comme un succès, soit grâce à une mise en orbite réussie, soit parce qu'elles atteignirent le sol lunaire."
    />
  </div>
</template>

<script>
import Info from "@/components/Info.vue";

export default {
  name: "programluna",
  data() {
    return {
      imageSrc: require("../assets/img/program_luna.png"),
    };
  },
  components: {
    Info,
  },
};
</script>

<style lang="scss">
.info__Img__Quote[data-v-3e9bec44] {
  display: none;
}
.info__Img__Url[data-v-3e9bec44] {
  object-position: 80%;
}
</style>
