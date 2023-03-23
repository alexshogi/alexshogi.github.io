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
