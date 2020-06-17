<template>
  <div class="timeline">
    <div width="200" class="timeline">
      <div class="cardContainer">
        <CardTimeline
          v-for="(item, index) in tableauTimeline"
          :cardStart="index === 0"
          :cardEnd="index == tableauTimeline.length - 1"
          @updateTimelinePostionStart="
            (position) => {
              timelinePostionStart = position;
            }
          "
          @updateTimelinePostionEnd="
            (position) => {
              timelinePostionEnd = position;
            }
          "
          :key="item.title"
          :item="item"
        />
      </div>
      <div class="line" :style="{ width: widthTimeline }"></div>
    </div>
  </div>
</template>

<script>
import CardTimeline from "./CardTimeline.vue";

export default {
  data() {
    return {
      timelinePostionStart: 0,
      timelinePostionEnd: 0,
    };
  },
  props: {
    tableauTimeline: Array,
  },
  components: {
    CardTimeline,
  },
  computed: {
    widthTimeline() {
      return this.timelinePostionEnd - this.timelinePostionStart + "px";
    },
  },
  mounted() {
    console.log();
  },
};
</script>

<style lang="scss" scoped>
.timeline {
  display: flex;
  align-items: center;
  position: relative;
}
.cardContainer {
  display: flex;
  z-index: 10;
  margin-top: 5%;
}

.line {
  height: 3px;
  margin: 0 auto;
  display: block;
  background-color: #c4c4c4;
  z-index: 1;
  position: absolute;
  top: 49.5%;
  left: 109px;
}
</style>
