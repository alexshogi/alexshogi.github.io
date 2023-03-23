<template>
  <footer>
    <SiteLogo class="footer-logo" />
    <span>© 2023</span>
    <span>Фитнес-студия "ОДИН"</span>
  </footer>
</template>

<script>
import SiteLogo from './SiteLogo.vue';

export default {
  name: 'SiteFooter',
  components: {
    SiteLogo,
  },
};
</script>

<style lang="scss" scoped>
footer {
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1d1d1d;

  .footer-logo {
    height: 45px;
    max-height: 45px;
    width: 45px;
    max-width: 45px;
    pointer-events: none;
  }
}

@media (max-width: 499px) {
  .footer-logo {
    display: none;
  }
}
</style>
