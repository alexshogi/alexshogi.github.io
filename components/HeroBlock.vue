<template>
  <section class="hero">
    <div class="video-container">
      <video
        ref="videoPlayer"
        width="1440"
        height="804"
        loop
        muted
      >
        <source :src="videoUrl" type="video/webm" />
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
  data() {
    return {
      videoUrl: './promo.webm',
    };
  },
  mounted() {
    const { videoPlayer } = this.$refs;
    videoPlayer.load();
    videoPlayer.play();
  },
};
</script>

<style lang="scss" scoped>
video {
  filter: grayscale(30%);
}

.video-container {
  position: relative;

  .video-text {
    position: absolute;
    display: inline-block;
    padding: 16px;
    top: 125px;
    left: 95px;
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 96px;
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
      bottom: 32px;
      left: 311px;
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
</style>
