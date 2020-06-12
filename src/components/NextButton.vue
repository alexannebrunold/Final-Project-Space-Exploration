<template>
  <button class="nextButton">
    {{ textNextButton }}
  </button>
</template>

<script>
export default {
  name: "NextButton",
  props: {
    textNextButton: String,
    name: String,
  },
  mounted() {
    console.log("aaaa" + this.$router.params);
  },
};
</script>

<style lang="scss" scoped>
.nextButton {
  font-family: "Poppins";
  font-weight: regular;
  font-size: 14px;
  background-color: transparent;
  border-radius: 5px;
  border: solid 3px #ffffff;
  color: $white;
  padding: 10px 40px;
  user-select: none;
  transition: ease-out 0.2s;
  display: flex;
  flex-direction: row;
  align-items: center;

  @include tablet {
    font-size: 16px;
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
    background-color: white;
    color: $black;
    cursor: pointer;
  }
}
</style>
