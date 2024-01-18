<!-- eslint-disable max-len -->
<template>
  <section
    id="result"
    class="block-content"
  >
    <h2>Результат</h2>
    <section class="gallery">
      <hooper
        :settings="hooperSettings"
      >
        <slide><img src="/result/1.jpg" alt="Slide"></slide>
        <slide><img src="/result/4.jpg" alt="Slide"></slide>
        <slide><img src="/result/5.jpg" alt="Slide"></slide>
        <slide><img src="/result/6.jpg" alt="Slide"></slide>
        <slide><img src="/result/7.jpg" alt="Slide"></slide>
        <slide><img src="/result/8.jpg" alt="Slide"></slide>
        <slide><img src="/result/9.jpg" alt="Slide"></slide>
        <slide><img src="/result/10.jpg" alt="Slide"></slide>
        <slide><img src="/result/11.jpg" alt="Slide"></slide>
        <slide><img src="/result/12.jpg" alt="Slide"></slide>
        <slide><img src="/result/13.jpg" alt="Slide"></slide>
        <slide><img src="/result/14.jpg" alt="Slide"></slide>
        <slide><img src="/result/15.jpg" alt="Slide"></slide>
        <slide><img src="/result/16.jpg" alt="Slide"></slide>
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
  name: 'ResultBlock',
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 6,
        itemsToSlide: 1,
        centerMode: false,
        playSpeed: 5000,
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
.hooper {
  height: 300px;
}

.hooper-slide img {
  height: 100%;
  border-radius: 8px;
}
</style>
