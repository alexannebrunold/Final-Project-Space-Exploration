<template>
  <div class="clep page">
    <div class="clep__Img">
      <img class="clep__Img__Laptop" src="../assets/img/clepDesktop.jpg" />
      <img
        class="clep__Img__Phone"
        src="../assets/img/clepMobile.jpg"
      />
    </div>
    <div class="clep__container">
      <div class="clep__title">
        <h2>Le Programme Chinois d’Exploration Lunaire (CLEP)</h2>
      </div>

        <div class="clep__citation">
          <p>Le Programme Chinois d'Exploration Lunaire, a pour but l'étude et l'exploration de la Lune par des robots, puis, à l'horizon 2025-2030, par des missions spatiales habitées. Ce programme s'est concrétisé, jusqu'en 2019, par le lancement par des fusées Longue Marche de trois sondes spatiales Chang'e depuis 2007, l'atterrissage d'un robot explorateur en 2013 et la mission Chang'e 4, qui est la première mission humaine à se poser sur la face cachée de la Lune.</p>

        <div id="svgplay" class="clep__svg" @click="toggle">
        <div class="button"><NextButton /></div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import NextButton from "@/components/NextButton.vue"
export default {
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    toggle: function() {
      this.visible = !this.visible;
    },
  },
  components: {
		NextButton,
	},
};
</script>

<style lang="scss">
.clep {
  background-color: $black;
  display: flex;
  flex-direction: column;
  @include laptop {
    display: flex;
    flex-direction: row-reverse;
  }

  &__Img {
    height: auto;
    width: 100%;

    @include laptop {
      height: 100vh;
      width: auto;
    }

    &__Laptop {
      display: none;
      height: inherit;
      @include laptop {
        display: block;
      }
    }

    &__Phone {
      width: 100%;
      @include laptop {
        display: none;
      }
      @include tablet {
        height: 350px;
        object-fit: cover;
      }
    }
  }

  &__title {
    text-align: left;
    padding: 20px 20px 20px 20px;
    @include laptop {
      padding: 50px 50px 50px 50px;
    }

    h2 {
      font-size: 18px;
      line-height: 140%;
      @include laptop {
        font-size: 42px;
        width: 80%;
      }
    }
  }

  &__citation {
    padding: 20px 20px;
    font-family: "Poppins";
    line-height: 140%;
    font-size: 14px;
    text-align: left;
    @include laptop {
      padding: 20px 50px 20px 50px;
      width: 70%;
      font-size: 24px;
    }
  }
}
.button {
  margin-top: 40px;
  justify-self: right;
}
</style>
