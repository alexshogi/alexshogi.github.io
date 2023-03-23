<template>
  <section class="hero">
    <div class="video-container">
      <video
        ref="videoPlayer"
        loop
        muted
        playsinline
      >
        <source src="/promo.mp4" type="video/mp4" />
        <source src="/promo.webm" type="video/webm" />
      </video>
      <div class="shadow"></div>
      <span class="video-text">
        Прогрессируем<br>вместе
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroBlock',
  mounted() {
    const { videoPlayer } = this.$refs;
    videoPlayer.load();
    videoPlayer.play();
  },
};
</script>

<style lang="scss" scoped>
.hero {
  padding-bottom: 30px;
}

video {
  filter: grayscale(30%);
  width: 100%;
}

.video-container {
  position: relative;

  .video-text {
    position: absolute;
    display: inline-block;
    padding: 16px;
    top: 5%;
    left: 5%;
    font-style: normal;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.95);
    z-index: 10;

    &::before {
      display: block;
      content: "";
      position: absolute;
      width: 130px;
      height: 2px;
      background-color: #F55151;
      left: 20px;
      top: 5px;
    }

    &::after {
      display: block;
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #F55151;
    }
  }

  .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.45);
    z-index: 5;
  }
}

@media (max-width: 499px) {
  .video-text {
    font-size: 30px;
    line-height: 40px;

    &::after {
      bottom: 24px;
      left: 130px;
    }
  }
}

@media (min-width: 500px) and (max-width: 767px) {
  .video-text {
    font-size: 40px;
    line-height: 50px;

    &::after {
      bottom: 25px;
      left: 165px;
    }
  }
}

@media (min-width: 768px) and (max-width: 1399px) {
  .video-text {
    font-size: 70px;
    line-height: 80px;

    &::after {
      bottom: 27px;
      left: 270px;
    }
  }
}

@media (min-width: 1400px) {
  .video-text {
    font-size: 80px;
    line-height: 95px;

    &::after {
      bottom: 32px;
      left: 311px;
    }
  }
}
</style>
