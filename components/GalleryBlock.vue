<template>
  <section
    id="gallery"
    class="block-content"
  >
    <h2>Фото и видео</h2>
    <section class="gallery">
      <hooper
        :itemsToShow="8"
        :itemsToSlide="3"
        :centerMode="true"
        :infiniteScroll="true"
        :autoPlay="true"
        pagination="no"
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
};
</script>

<style>
.hooper {
  height: 300px;
}

.hooper-slide img {
  height: 100%;
}
</style>

<style lang="scss">
</style>
