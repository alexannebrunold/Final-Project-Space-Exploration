<template>
  <div class="choice page">
    <div class="choice__US" @click="$router.push('/Kennedy')">
      <img src="../assets/img/Astronaute.jpg" alt="Astronaute US" />
      <p>USA</p>
    </div>
    <div class="choice__URSS" @click="$router.push('/Vostok')">
      <img src="../assets/img/Youri-Gagarine.jpg" alt="Youri Gargarine URSS" />
      <p>URSS</p>
    </div>
    <p class="choice__text">Choisis ton point de vue</p>
  </div>
</template>

<style lang="scss">
.choice {
  position: fixed;
  background-color: $black;
  cursor: pointer;
  display: flex;
  &__US {
    overflow: hidden;
    position: relative;
    & img {
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
      transition: ease-in-out 0.4s;
      height: 100vh;
      width: 50vw;
      object-fit: cover;
      object-position: top;
    }
    & img:hover {
      -webkit-filter: grayscale(0%);
      filter: grayscale(0%);
      transform: scale(1.1);
      object-position: 50% -200%;
    }
    & p {
      width: fit-content;
      height: fit-content;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      margin: auto;
      font-size: 35px;
      z-index: 2;
      font-weight: 200;
      letter-spacing: 0.35em;
      @include tablet {
        font-size: 50px;
      }
      @include laptop {
        font-size: 65px;
      }
      @include pc {
        font-size: 85px;
      }
    }
  }
  &__URSS {
    overflow: hidden;
    position: relative;
    & img {
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
      transition: ease-in-out 0.4s;
      height: 100vh;
      width: 50vw;
      object-fit: cover;
      object-position: top;
    }
    & img:hover {
      -webkit-filter: grayscale(0%);
      filter: grayscale(0%);
      transform: scale(1.1);
      object-position: 50% -50%;
    }
    & p {
      width: fit-content;
      height: fit-content;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      margin: auto;
      font-size: 35px;
      z-index: 2;
      font-weight: 200;
      letter-spacing: 0.35em;
      @include tablet {
        font-size: 50px;
      }
      @include laptop {
        font-size: 65px;
      }
      @include pc {
        font-size: 85px;
      }
    }
  }

  &__text {
    font-family: "Poppins";
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    font-size: 30px;
    z-index: 2;
    font-weight: 300;
    @include tablet {
      font-size: 45px;
    }
    @include laptop {
      font-size: 50px;
    }
    @include pc {
      font-size: 65px;
    }
  }
}
</style>
