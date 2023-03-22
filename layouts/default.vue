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
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">

</style>
