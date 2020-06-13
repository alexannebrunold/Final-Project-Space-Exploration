<template>
  <div class="learnMore">
    <div class="learnMore__Left">

      <img class="learnMore__Left__Laptop" :src="imageUrlLaptopLeft" />
      <img class="learnMore__Left__Phone" :src="imageUrlPhoneLeft" />
      
      <div class="learnMore__Left__Title">
        {{ titleInfoLeft }}
      </div>
      
      <div class="learnMore__Left__Text">
        {{ textInfoLeft }}
      </div>
    </div>

    <div class="border"></div>

    <div class="learnMore__Right">

      <img class="learnMore__Right__Laptop" :src="imageUrlLaptopRight" />
      <img class="learnMore__Right__Phone" :src="imageUrlPhoneRight" />

      <div class="learnMore__Right__Title">
        {{ titleInfoRight }}
      </div>
      
      <div class="learnMore__Right__Text">
        {{ textInfoRight }}
      </div>
      
      <div class="learMore__Right__Button">
        <PrimaryButton />
      </div>
    </div>
  </div>

</template>

<script>
import PrimaryButton from "@/components/PrimaryButton.vue";
export default {
  name: "EnSavoirPlus",
  components: {
    PrimaryButton,
  },
  props: {
    imageUrlLaptopLeft: {},
    imageUrlPhoneLeft: {},
    imageUrlLaptopRight: {},
    imageUrlPhoneRight: {},
    titleInfoLeft: String,
    titleInfoRight: String,
    textInfoLeft: String,
    textInfoRight: String,
  },
};
</script>

<style lang="scss" scoped>

.learnMore {
  display: flex;
  flex-flow: column;
  background-color: $black;
  @include laptop {
    flex-direction: row;
  }



  &__Left {
    flex-direction: column;
    position: relative;
    display: flex;
    @include laptop {
      flex-direction: column;
      height: 100vh;
      width: auto;
      margin-left: 122px;
      margin-top: 138px;
      line-height: auto;
    }
    &__Laptop {
      display: none;
      height: inherit;
      @include laptop {
        display: block;
        width: 510px;
        height: 390px;
      }
    }

    &__Phone {
        width: 100%;
        height: 144px;
        object-fit:cover;
      @include laptop {
        display: none;
      }
    }
    &__Title {
        width: fit-content;
        text-align: left;
        margin-top: 20px;
        font-size: 22px;
        margin-left: 20px;

        @include laptop {
          text-align: left;
          margin-top:50px;
          font-size: 22px;
        }
      }
      &__Text {
        font-size: 18px;
        margin-top:28px;
        margin-left: 20px;
        margin-right: 20px;
        text-align: left;
        font-weight: normal;

        @include laptop {
          text-align: left;
          margin-top:18px;
          font-size: 18px;
          width: 509px;
          font-weight: normal;
        }
      }
  }

.border{
  margin-top: 55px;
  height: 2px;
  background-color: grey;
  @include laptop {
    height: 2px;
    rotate: 90deg;
  }
}




  &__Right {
    flex-direction: column;
    position: relative;
    display: flex;
    @include laptop {
      flex-direction: column;
      height: 100vh;
      width: auto;
      margin-left: 175px;
      margin-right: 122px;
      margin-top: 138px;
      line-height: auto;
    }
    &__Laptop {
      display: none;
      height: inherit;
      @include laptop {
        display: flex;
        width: 510px;
        height: 390px;
      }
    }
    &__Phone {
      width: 100%;
      height: 150px;
      margin-top: 55px;
      object-fit:cover;
      @include laptop {
        display: none;
      }
    }
    &__Title {
        width: fit-content;
        margin-top: 20px;
        text-align: left;
        font-size: 22px;
        margin-left: 20px;

        @include laptop {
          text-align: left;
          margin-top: 50px;
          font-size: 22px;
        }
      }
      &__Text {
        font-size: 18px;
        margin-top: 28px;
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 48px;
        text-align: left;
        font-weight: normal;
        @include laptop {
          text-align: left;
          margin-top: 40px;
          font-size: 18px;
          width: 85%;
          font-weight: normal;
        }
        &__button {
          padding: 5px 20px;
          border: 3px solid #FFFFFF;
          box-sizing: border-box;
          border-radius: 5px;
          @include laptop {
            border: 3px solid #FFFFFF;
            box-sizing: border-box;
            border-radius: 5px;
          }
        }
      }
    }
  }
</style>