<!-- eslint-disable max-len -->
<template>
  <main class="page">
    <h1>Фитнес в Москве: *✮* персональные тренировки *✮* современное оборудование *✮* скидки постоянным клиентам *✮* бесплатная первая тренировка *✮* Записывайся онлайн! *✮*</h1>
    <HeroBlock />
    <!-- <AboutBlock /> -->
    <ProsBlock />
    <CoachesBlock />
    <PriceBlock />
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
import PriceBlock from '../components/PriceBlock.vue';
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
    PriceBlock,
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
