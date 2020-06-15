<template>
  <div class="vostok">
    <Info
      class="vostok__info"
      :imageUrl="imageSrc"
      titleInfo="vostok"
      subtitleInfo="Premier Humain envoyé dans l'espace."
      textInfo="Vostok 1 est le premier vol spatial habité de l'histoire spatiale et la première mission du programme Vostok. Le vaisseau soviétique Vostok 3KA est lancé le 12 avril 1961 depuis le cosmodrome de Baïkonour avec à son bord le cosmonaute Youri Gagarine. Après avoir bouclé une orbite sans rencontrer de problème, le vaisseau effectua une rentrée mouvementée mais atterrit sans encombre dans la région de Saratov. Vostok 1 traduit à l'époque la supériorité du programme spatial soviétique dirigé par Sergueï Korolev sur le programme américain."
    />
  </div>
</template>

<script>
import Info from "@/components/Info.vue";

export default {
  name: "vostok",
  data() {
    return {
      imageSrc: require("../assets/img/youri_gagarine.jpg"),
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
  object-position: 50%;
}
</style>
