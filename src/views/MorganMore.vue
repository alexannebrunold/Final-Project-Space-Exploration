<template>
  <div class="learn">
    <MoreInfo
      class="enSavoirPlus__Info"
      :imageUrlLeft="imageSrcLeft"
      :imageUrlRight="imageSrcRight"
      titleInfoLeft="Katherine Johnson, mathématicienne afro-américaine"
      titleInfoRight="Margaret Hamilton, informaticienne et ingénieure"
      textInfoLeft="Née le 26 août 1918, Katherine Johnson est la première femme afro-américaine, et mère célibataire, à travailler pour la NASA. Embauchée en 1953 par l’agence spatiale américaine, elle était chargée de valider les calculs mathématiques de ses supérieurs."
      textInfoRight="En 1963, Margaret Hamilton intègre le laboratoire Draper du MIT. Elle y supervise l’équipe chargée de développer les logiciels du programme spatial Apollo."
    />
  </div>
</template>

<script>
import MoreInfo from "@/components/MoreInfo.vue";

export default {
  name: "Learn",
  data() {
    return {
      imageSrcLeft: require("../assets/img/KatherineJohnson.jpg"),
      imageSrcRight: require("../assets/img/MargaretHamilton.jpg"),
    };
  },
  components: {
    MoreInfo,
  },
};
</script>

<style lang="scss">
</style>