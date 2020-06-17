<template>
	<div class="introTimeline" @click="startAutoplay()">
		<img :src="backgroundImg" alt="" />
		<div class="introTimeline__content">
			<div class="introTimeline__content--title">
				{{ introTitle }}
			</div>
			<iframe
				width="900"
				height="506"
				:src="introVideo"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; "
				start="1"
				autoplay="1"
				controls="2"
			></iframe>
		</div>
	</div>
</template>

<script>
export default {
	name: "Info",
	components: {},
	props: {
		backgroundImg: String,
		introVideo: String,
		introTitle: String,
	},
	methods: {
		startAutoplay() {
			this.$refs.video.play()
		},
	},
	mounted() {},
}
</script>

<style lang="scss" scoped>
.introTimeline {
  font-family: "Poppins";
  color: white;
  display: flex;
  text-align: center;
  background-color: $black;
  position: relative;
  overflow: hidden;
  & img {
    z-index: 0;
    position: absolute;
    filter: opacity(50%);
    overflow: hidden;
    object-fit: cover;
    width: 100%;
    height: auto;
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0 80px;
    position: relative;
    @include laptop {
      // width: 50%;
    }
    &--title {
      margin: 2% auto 0 auto;
      width: fit-content;
      font-size: 50px;
      font-weight: 200;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      // -webkit-text-stroke: 1px;
      // -webkit-text-stroke-color: $white;
      color: $white;
      @include tablet {
        font-size: 80px;
      }
      @include laptop {
        font-size: 96px;
        -webkit-text-stroke: 2px;
        -webkit-text-stroke-color: $white;
      }
    }
    &--video {
      width: 50%;
      height: auto;
      margin: auto;
    }
    &__button {
      display: flex;
      &--learnMore {
        padding-top: 15%;
        width: fit-content;
        margin-right: 20px;
        @include tablet {
          margin: 0 7.5%;
          padding-top: 25pt;
        }
        @include laptop {
          padding-top: 55pt;
          line-height: 120%;
        }
      }
    }
  }
}
</style>
