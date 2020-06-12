<template>
  <button class="primaryButton">
    {{ textPrimaryButton }}
  </button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: {
    textPrimaryButton: String,
    name: String,
  },
  mounted() {
    console.log("aaaa" + this.$router.params);
  },
};
</script>

<style lang="scss" scoped>
.primaryButton {
  font-family: "Poppins";
  font-size: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  border: solid 3px #ffffff;
  color: #000000;
  padding: 5px 20px;
  user-select: none;
  transition: ease-out 0.2s;
  @include tablet {
    font-size: 16px;
    padding: 10px 40px;
  }
  @include laptop {
    font-size: 18px;
  }
  @include pc {
    font-size: 24px;
  }

  &:hover {
    transition: ease-out 0.2s;
    border: solid 3px rgb(255, 255, 255);
    background-color: transparent;
    color: #ffffff;
    cursor: pointer;
  }
}
</style>
