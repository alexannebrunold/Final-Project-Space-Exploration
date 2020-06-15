<template>
  <div class="learn">
    <MoreInfo
      class="enSavoirPlus__Info"
      :imageUrlLeft="imageSrcLeft"
      :imageUrlRight="imageSrcRight"
      titleInfoLeft=""
      titleInfoRight="NASA 60th: How It All Began"
      textInfoLeft="Présentation des officiels de la NASA après la signature par le président Eisenhower du “National Aeronautics and Space Act” fondant la NASA le 29 juillet 1958. <br/>La NASA est fondée le 1 octobre 1958 pour administrer et réaliser les projets relevant de l'astronautique civile, jusque-là pris en charge par les différentes branches des forces armées des États-Unis, afin de rattraper l'avance prise par l'Union soviétique."
      textInfoRight=""
    />
  </div>
</template>

<script>
import MoreInfo from "@/components/MoreInfo.vue";

export default {
  name: "Learn",
  data() {
    return {
      imageSrcLeft: require("../assets/img/Creation-nasa.jpg"),
      imageSrcRight: require("../assets/img/nasa60.jpg"),
    };
  },
  components: {
    MoreInfo,
  },
};
</script>

<style lang="scss"></style>