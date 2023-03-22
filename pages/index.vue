<template>
  <main class="page">
    <HeroBlock />
    <AboutBlock />
    <ProsBlock />
    <CoachesBlock />
    <GalleryBlock />
    <!-- <TimetableBlock /> -->
    <ContactsBlock />
  </main>
</template>

<script>
import HeroBlock from '../components/HeroBlock.vue';
import AboutBlock from '../components/AboutBlock.vue';
import ProsBlock from '../components/ProsBlock.vue';
import CoachesBlock from '../components/CoachesBlock.vue';
import GalleryBlock from '../components/GalleryBlock.vue';
// import TimetableBlock from '../components/TimetableBlock.vue';
import ContactsBlock from '../components/ContactsBlock.vue';

export default {
  name: 'IndexPage',
  components: {
    HeroBlock,
    AboutBlock,
    ProsBlock,
    CoachesBlock,
    GalleryBlock,
    // TimetableBlock,
    ContactsBlock,
  },
};
</script>
