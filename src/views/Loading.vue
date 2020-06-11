<template>
  <div class="loading page">
    <div class="loading__container">
      <div class="loader">
        <div class="loader__rocket">
          <svg width="164" height="164">
            <circle
              class="loader__circle"
              cx="78"
              cy="82"
              r="77"
              transform="rotate(-90, 80, 80)"
            />
          </svg>
          <div class="loader__icon">
            <svg class="loader__svg">
              <polygon
                points="21 26.24 15.15 21.04 15.15 6.22 10.51 0 5.86 6.22 5.86 17.46 5.85 21.04 0 26.24 0 36 5.86 30.79 5.86 32.39 10.51 32.39 15.15 32.39 15.15 30.8 21 36 21 26.24"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="loader__txt">
      <p>Temps estimé : 20min</p>
    </div>
  </div>
</template>

<style lang="scss">
.loading {
  background-image: url("~@/assets/img/moonbackground.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loader {
  width: 164px;
  height: 164px;
  animation: spin 30s linear infinite;

  &:after {
    content: "";
    z-index: -1;
    position: absolute;
    top: calc(50% - 4em / 2);
    left: calc(50% - 4em / 2);
    display: block;
    width: 4em;
    height: 4em;
    border-radius: 50%;
    animation: pulse $duration $ease #{$duration/2 + 0.2s} infinite;
    will-change: transform;
  }
}

.loader__rocket {
  position: absolute;

  width: 100%;
  height: 100%;
  animation: spin $duration $ease infinite;
  will-change: transform;
}

.loader__icon {
  position: absolute;
  top: -1.05em;
  left: calc(50% - 1em);
  display: block;
  transform: rotate(-90deg);
}

.loader__circle {
  fill: none;
  stroke: $white;
  stroke-dashoffset: 500;
  stroke-linecap: square;
  stroke-width: 5;
  animation: dash $duration $easeCircle infinite;
}

.loader__svg {
  width: 1.9em;
  height: 2.33em;
  fill: $white;
  stroke: #000;
  stroke-width: 1;
}

.loader__txt {
  padding-bottom: 60px;
  padding-top: 40px;
  font-family: "Poppins";
  font-size: 20px;
}

/*
   Loader animations
   ========================================================================== */

@keyframes spin {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(-1turn);
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: 500;
    // stroke-width: 3;
  }

  50% {
    stroke-dashoffset: 380;
    // stroke-width: 5;
  }

  100% {
    stroke-dashoffset: 500;
    // stroke-width: 3;
  }
}
</style>
