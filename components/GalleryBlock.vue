<!-- eslint-disable max-len -->
<template>
  <section
    id="gallery"
    class="block-content"
  >
    <h2>Фото и видео</h2>
    <section class="gallery">
      <div class="youtube-container">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/6JzRBxxjMz8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        >
        </iframe>
      </div>
      <hooper
        :settings="hooperSettings"
      >
        <slide><img src="/gallery/square/1.png" alt="Slide"></slide>
        <slide><img src="/gallery/square/2.png" alt="Slide"></slide>
        <slide><img src="/gallery/square/3.png" alt="Slide"></slide>
        <slide><img src="/gallery/square/4.png" alt="Slide"></slide>
        <slide><img src="/gallery/square/5.png" alt="Slide"></slide>
        <slide><img src="/gallery/square/6.png" alt="Slide"></slide>
        <slide><img src="/gallery/square/7.png" alt="Slide"></slide>
        <slide><img src="/gallery/square/8.png" alt="Slide"></slide>
        <slide><img src="/gallery/square/9.png" alt="Slide"></slide>
        <slide><img src="/gallery/square/10.png" alt="Slide"></slide>
        <slide><img src="/gallery/square/11.png" alt="Slide"></slide>
        <slide><img src="/gallery/square/12.png" alt="Slide"></slide>
        <slide><img src="/gallery/square/13.png" alt="Slide"></slide>
        <slide><img src="/gallery/square/14.png" alt="Slide"></slide>
        <slide><img src="/gallery/square/15.png" alt="Slide"></slide>
        <slide><img src="/gallery/square/16.png" alt="Slide"></slide>
        <!-- eslint-disable-next-line vue/valid-v-slot -->
        <hooper-navigation v-slot:hooper-addons></hooper-navigation>
      </hooper>
    </section>
  </section>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';

export default {
  name: 'GalleryBlock',
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 5,
        itemsToSlide: 1,
        centerMode: false,
        infiniteScroll: true,
        autoPlay: true,
        pagination: 'no',
        breakpoints: {
          300: {
            itemsToShow: 1,
            itemsToSlide: 1,
            centerMode: true,
          },
          600: {
            itemsToShow: 2,
            itemsToSlide: 1,
            centerMode: true,
          },
          1000: {
            itemsToShow: 3.5,
            itemsToSlide: 1,
          },
          1200: {
            itemsToShow: 4.5,
            itemsToSlide: 1,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.youtube-container {
  padding-top: 56.25%;
  position: relative;
  margin-bottom: 16px;
}

.youtube-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hooper {
  height: 300px;
}

.hooper-slide img {
  height: 100%;
  border-radius: 8px;
}
</style>
