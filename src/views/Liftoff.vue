<template>
  <div class="liftoff page">
    <PrimaryButton textPrimaryButton="Passer" class="liftoff__button"
    @click.native="$router.push('/nasa')"/>
    <video autoplay class="liftoff__video">
        <source src="../assets/videos/liftoff.mp4" type="video/mp4">
    </video>
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
      z-index: 1;
      bottom: 6%;
      margin: auto;
      left: 0;
      right: 0;

    }
  }
</style>