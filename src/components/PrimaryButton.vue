<template>
  <router-link :to="{ name: LearnPageName }">
    <button class="primaryButton">
      {{ textPrimaryButton }}
    </button>
  </router-link>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: {
    textPrimaryButton: String,
    name: String,
    LearnPageName: String,
  },
  mounted() {
    console.log("aaaa" + this.$router.params);
  },
};
</script>

<style lang="scss" scoped>
.primaryButton {
  font-family: "Poppins";
  font-size: 14px;
  background-color: #ffffff;
  border-radius: 5px;
  border: solid 3px #ffffff;
  color: #000000;
  padding: 10px 20px;
  user-select: none;
  transition: ease-out 0.2s;
  @include tablet {
    padding: 10px 40px;
    font-size: 16px;
  }
  @include laptop {
    font-size: 16px;
  }
  @include pc {
    font-size: 22px;
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
