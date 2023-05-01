<template>
  <div class="container">
    <SiteHeader />
    <Nuxt />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader.vue';
import SiteFooter from '../components/SiteFooter.vue';

export default {
  name: 'DefaultLayout',
  components: {
    SiteHeader,
    SiteFooter,
  },
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: `https://odin-fitness.ru${this.$route.path}`,
        },
      ],
    };
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
