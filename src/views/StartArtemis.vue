<template>
	<div  class="start page">
    <video rel="preload" autoplay ref="video" loop class="start__video">
      <source src="../assets/videos/moonloop.mp4" type="video/mp4" />
    </video>
		<div class="start__svg">
			<img src="../assets/img/Artemis.svg" alt="">
		</div>
    <div class="start__title"><h1>L’HUMANITÉ RETOURNE SUR LA LUNE</h1></div>
    <NextButton class="next" />
	</div>
</template>

<script>
import NextButton from "@/components/NextButton.vue";

export default {
  name: "houbolt",

  components: {
    NextButton,
  },
};
</script>

<style lang="scss" scoped>
.start {
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -10;
    filter: brightness(15%);
  }

  &__svg {
    img {
      width: 200px;
      @include tablet {
        width: 250px;
      }
    }
    padding-bottom: 10%;
    @include tablet {
      padding-bottom: 5%;
    }
  }

  &__title {
    padding: 0 10% 10%;
    @include tablet {
      padding: 0 5% 5%;
    }
    h1 {
      font-family: "Poppins";
      font-weight: normal;
      font-size: 20px;
      
      @include tablet {
        font-size: 30px;
      }
      @include laptop {
        font-size: 40px;
      }
    }
  }
}
</style>