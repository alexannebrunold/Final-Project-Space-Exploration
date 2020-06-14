<!-- <template>
  <div class="Audio page">
    <div class="Audio__Img">
      <img class="Audio__Img__Laptop" :src="ImgUrlLaptop" />
      <img class="Audio__Img__Phone" :src="ImgUrlPhone" />
    </div>
    <div class="Audio__container">
      <div class="Audio__title">
        {{ h1Info }}
      </div>
      <div class="Audio__citation">
        <div class="Audio__citation1">
          {{ citationInfo }}
        </div>
        <div class="Audio_trait"></div>
        <div class="Audio__svg">
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5 2.5625C10.5943 2.5625 2.5625 10.5943 2.5625 20.5C2.5625 30.4057 10.5943 38.4375 20.5 38.4375C30.4057 38.4375 38.4375 30.4057 38.4375 20.5C38.4375 10.5943 30.4057 2.5625 20.5 2.5625ZM26.2696 20.7763L17.5251 27.1385C17.4772 27.1729 17.4206 27.1935 17.3618 27.1979C17.3029 27.2023 17.244 27.1905 17.1914 27.1636C17.1389 27.1367 17.0947 27.0958 17.0639 27.0455C17.0331 26.9951 17.0167 26.9373 17.0166 26.8782V14.1618C17.0164 14.1027 17.0326 14.0446 17.0634 13.9941C17.0942 13.9436 17.1383 13.9026 17.191 13.8756C17.2436 13.8487 17.3027 13.8368 17.3617 13.8414C17.4207 13.846 17.4772 13.8668 17.5251 13.9016L26.2696 20.2598C26.3109 20.289 26.3446 20.3277 26.3679 20.3726C26.3912 20.4176 26.4033 20.4674 26.4033 20.518C26.4033 20.5686 26.3912 20.6185 26.3679 20.6634C26.3446 20.7084 26.3109 20.7471 26.2696 20.7763Z"
              fill="white"
            />
          </svg>
        </div>
        <div class="Audio__citation2">
          {{ citationInfo }}
        </div>
        <div class="Audio__trait"></div>
        <div class="Audio__svg">
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5 2.5625C10.5943 2.5625 2.5625 10.5943 2.5625 20.5C2.5625 30.4057 10.5943 38.4375 20.5 38.4375C30.4057 38.4375 38.4375 30.4057 38.4375 20.5C38.4375 10.5943 30.4057 2.5625 20.5 2.5625ZM26.2696 20.7763L17.5251 27.1385C17.4772 27.1729 17.4206 27.1935 17.3618 27.1979C17.3029 27.2023 17.244 27.1905 17.1914 27.1636C17.1389 27.1367 17.0947 27.0958 17.0639 27.0455C17.0331 26.9951 17.0167 26.9373 17.0166 26.8782V14.1618C17.0164 14.1027 17.0326 14.0446 17.0634 13.9941C17.0942 13.9436 17.1383 13.9026 17.191 13.8756C17.2436 13.8487 17.3027 13.8368 17.3617 13.8414C17.4207 13.846 17.4772 13.8668 17.5251 13.9016L26.2696 20.2598C26.3109 20.289 26.3446 20.3277 26.3679 20.3726C26.3912 20.4176 26.4033 20.4674 26.4033 20.518C26.4033 20.5686 26.3912 20.6185 26.3679 20.6634C26.3446 20.7084 26.3109 20.7471 26.2696 20.7763Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div class="Audio__wave"></div>
    </div>
  </div>
</template>

<style lang="scss">
.Audio {
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

    h1 {
      font-size: 22px;
      @include laptop {
        font-size: 52px;
      }
    }

    h2 {
      font-size: 18px;
      @include laptop {
        font-size: 32px;
      }
    }
  }

  &__citation {
    padding: 20px 20px;
    text-align: left;
    @include laptop {
      padding: 20px 50px 20px 50px;
      width: 70%;
    }
  }
  &__citation1 {
    padding-bottom: 10px;
    @include laptop {
      font-size: 20px;
      padding-bottom: 15px;
    }
  }

  &__citation2 {
    padding-bottom: 10px;
    @include laptop {
      font-size: 20px;
      padding-top: 15%;
      padding-bottom: 15px;
    }
  }

  &__trait {
    border: 1px solid #c4c4c4;
    width: 100%;
  }
  &__svg {
    padding-top: 5px;
    width: 10px;
    @include laptop {
      padding-top: 15px;
    }
  }
}
</style>
