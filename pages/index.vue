<template>
  <main class="page">
    <h1>
      фитнес, качалка, fitness, спорткомплекс, фитнес клуб, фитнес хаус,
      фитнес цены, зал, фитнес москва, фитнес вао, персональные тренировки,
      сжигание жира, выносливость, мышечный тонус, мышечная масса, тренер, метрогородок
    </h1>
    <HeroBlock />
    <!-- <AboutBlock /> -->
    <ProsBlock />
    <CoachesBlock />
    <GalleryBlock />
    <!-- <TimetableBlock /> -->
    <ContactsBlock />
  </main>
</template>

<script>
import HeroBlock from '../components/HeroBlock.vue';
// import AboutBlock from '../components/AboutBlock.vue';
import ProsBlock from '../components/ProsBlock.vue';
import CoachesBlock from '../components/CoachesBlock.vue';
import GalleryBlock from '../components/GalleryBlock.vue';
// import TimetableBlock from '../components/TimetableBlock.vue';
import ContactsBlock from '../components/ContactsBlock.vue';

export default {
  name: 'IndexPage',
  components: {
    HeroBlock,
    // AboutBlock,
    ProsBlock,
    CoachesBlock,
    GalleryBlock,
    // TimetableBlock,
    ContactsBlock,
  },
};
</script>

<style scoped>
h1 {
  visibility: hidden;
  margin: 0;
  padding: 0;
  font-size: 0;
  line-height: 0;
}
</style>
