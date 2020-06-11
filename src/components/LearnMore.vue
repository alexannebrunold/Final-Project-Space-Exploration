<template>
  <div>
    <router-link class="learnMore" to="">
      En savoir plus
      <img src="../assets/img/Vector.svg" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "LearnMore",
};
</script>

<style lang="scss" scoped>
.learnMore {
  text-decoration: none;
  background-color: white;
  border: 3px solid white;
  border-radius: 5px;
  padding: 5px 10px;
  color: #000000;
  width: 130px;
  height: fit-content;
  text-align: center;
  font-size: 12px;

  @include laptop {
    padding: 10px 15px;
    font-size: 18px;
  }
  &:hover {
    border: 3px solid white;
    border-radius: 7px;
    color: $black;
    cursor: pointer;

    & img {
      display: inline-block;
    }
  }
  & img {
    width: 10px;
    padding-left: 2%;
    vertical-align: middle;
    background-color: transparent;
    display: none;
  }
}
</style>
