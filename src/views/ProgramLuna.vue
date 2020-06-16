<template>
  <div class="programluna">
    <Info
      class="programluna__info"
      :imageUrl="imageSrc"
      subtitleInfo="Le programme Luna en détail."
      textInfo="Le programme Luna est une série de missions spatiales inhabitées envoyées vers la Lune par l’Union soviétique entre 1959 et 1976. 
Vingt quatre sondes spatiales firent officiellement partie de ce programme. Quinze de ces missions furent considérées comme un succès, soit grâce à une mise en orbite réussie, soit parce qu'elles atteignirent le sol lunaire."
    />
    <div class="programluna__Button">
      <div class="programluna__Button__LearnMore">
        <PrimaryButton
          textPrimaryButton="En savoir plus"
          LearnPageName="ProgramLuna"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Info from "@/components/Info.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";

export default {
  name: "programluna",
  data() {
    return {
      imageSrc: require("../assets/img/program_luna.png"),
    };
  },
  components: {
    Info,
    PrimaryButton,
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

.programluna {
  position: relative;

  &__Button {
    position: absolute;
    width: auto;
    bottom: 10%;
    display: flex;
    justify-content: space-between;
    @include tablet {
      bottom: 20%;
      margin-left: 38.5%;
    }
    @include laptop {
      bottom: 12%;
      margin-left: 48%;
    }
    &__LearnMore {
      width: fit-content;
      padding-top: 15%;
      margin: auto 15px;
      @include tablet {
        padding-top: 25pt;
      }
      @include laptop {
        padding-top: 55pt;
        line-height: 120%;
      }
    }
  }
}
</style>
