<template>
  <div class="apollo">
    <PopUp
      class="apollo__PopUp"
      :imageUrlLaptop="imageSrcLaptop"
      :imageUrlPhone="imageSrcPhone"
      :logoUrl="logoSrc"
      titlePopUp="Apollo 1"
      subtitlePopUp="L'incendie du module de commande et de service d’Apollo 1"
      textPopUp="Apollo 1 (initialement AS-204) devait être la quatrième mission du programme Apollo et la première emportant un équipage. Elle n’eut jamais lieu car un incendie se déclencha dans le module de commande du vaisseau lors d'une répétition au sol en conditions réelles, provoquant la mort de son équipage."
      datePopUp="27 Janvier 1967"
    />
  </div>
</template>

<script>
import PopUp from "@/components/PopUp.vue";

export default {
  name: "apollo",
  data() {
    return {
      imageSrcLaptop: require("../assets/img/apollo1_crew_laptop.png"),
      imageSrcPhone: require("../assets/img/apollo1_crew_phone.png"),
      logoSrc: require("../assets/img/apollo_logo/apollo_1.png"),
    };
  },
  components: {
    PopUp,
  },
};
</script>

<style lang="scss"></style>
