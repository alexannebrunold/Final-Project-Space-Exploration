<template>
  <div class="houbolt">
    <Info
      class="houbolt__info"
      :imageUrl="imageSrc"
      quoteInfo="Est-ce qu'on veut aller sur la Lune ou non ?"
      titleInfo="John Houbolt"
      subtitleInfo="Le programme Apollo en détail."
      textInfo="John Houbolt expliquant le scénario du LOR, qu'il réussit à promouvoir non sans difficultés. Dès 1959, des études sont lancées au sein de l'agence spatiale américaine dans une perspective à long terme, sur la manière de poser un engin habité sur la Lune."
    />
  </div>
</template>

<script>
import Info from "@/components/Info.vue";

export default {
  name: "houbolt",
  data() {
    return {
      imageSrc: require("../assets/img/john_houbolt.jpg"),
    };
  },
  components: {
    Info,
  },
};
</script>

<style lang="scss">
.info__Img__Url[data-v-3e9bec44] {
  object-position: 80%;
}
</style>
