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
        <slide>
          <img src="/gallery/1.webp" alt="Slide">
        </slide>
        <slide>
          <img src="/gallery/2.webp" alt="Slide">
        </slide>
        <slide>
          <img src="/gallery/3.webp" alt="Slide">
        </slide>
        <slide>
          <img src="/gallery/4.webp" alt="Slide">
        </slide>
        <slide>
          <img src="/gallery/5.webp" alt="Slide">
        </slide>
        <slide>
          <img src="/gallery/6.webp" alt="Slide">
        </slide>
        <slide>
          <img src="/gallery/7.webp" alt="Slide">
        </slide>
        <slide>
          <img src="/gallery/8.webp" alt="Slide">
        </slide>
        <slide>
          <img src="/gallery/9.webp" alt="Slide">
        </slide>
        <slide>
          <img src="/gallery/10.webp" alt="Slide">
        </slide>
        <slide>
          <img src="/gallery/11.webp" alt="Slide">
        </slide>
        <slide>
          <img src="/gallery/12.webp" alt="Slide">
        </slide>
        <slide>
          <img src="/gallery/13.webp" alt="Slide">
        </slide>
        <slide>
          <img src="/gallery/14.webp" alt="Slide">
        </slide>
        <slide>
          <img src="/gallery/15.webp" alt="Slide">
        </slide>
        <slide>
          <img src="/gallery/16.webp" alt="Slide">
        </slide>
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
        itemsToShow: 8,
        itemsToSlide: 3,
        centerMode: true,
        infiniteScroll: true,
        autoPlay: true,
        pagination: 'no',
        breakpoints: {
          300: {
            itemsToShow: 1,
            itemsToSlide: 1,
          },
          600: {
            itemsToShow: 3,
            itemsToSlide: 1,
          },
          800: {
            itemsToShow: 4,
            itemsToSlide: 2,
          },
          1000: {
            itemsToShow: 5,
            itemsToSlide: 2,
          },
          1200: {
            itemsToShow: 8,
            itemsToSlide: 3,
          },
        },
      },
    };
  },
};
</script>

<style>
.gallery {
  padding-bottom: 30px;
}

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
}
</style>
