<template>
  <div class="liftoff page">
    <video rel="preload" autoplay class="liftoff__video" @ended="$router.push('/nasa')">
        <source src="../assets/videos/liftoff.mp4" type="video/mp4">
    </video>
    <div class="liftoff__button">
    <PrimaryButton textPrimaryButton="Passer"
    @click.native="$router.push('/nasa')"/>
    </div>
  </div>
</template>

<script>
import PrimaryButton from "@/components/PrimaryButton.vue"
export default {
	name: "lancement",
	components: {
		PrimaryButton,
  },
}
</script>

<style lang="scss" scoped>
  .liftoff {
    background-color: black;
    position: relative;

    &__video {
    z-index: 0;
    filter: grayscale(1);
    position: fixed;
    right: 0;
    bottom: 0;
    margin: auto;
    left: 0;
    top: 0;
    max-width: 100vw;
    max-height: 100%;
    filter: brightness(75%);
    }

    &__button {
      position: absolute;
      bottom: 30px;
      left: 0;
      right: 0;
      z-index: 10;
      

    }
  }
</style>