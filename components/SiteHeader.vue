<template>
  <header class="site-header">
    <nuxt-link :to="{ path: '/' }">
      <SiteLogo class="header-logo" />
    </nuxt-link>
    <nav class="header-nav">
      <nuxt-link :to="{ path: '/', hash: '#about' }">
        О нас
      </nuxt-link>
      <nuxt-link :to="{ path: '/', hash: '#pros' }">
        Возможности
      </nuxt-link>
      <nuxt-link :to="{ path: '/', hash: '#coaches' }">
        Тренеры
      </nuxt-link>
      <nuxt-link :to="{ path: '/', hash: '#gallery' }">
        Фото
      </nuxt-link>
      <!-- <nuxt-link :to="{ path: '/', hash: '#timetable' }">
        Расписание
      </nuxt-link> -->
      <nuxt-link :to="{ path: '/', hash: '#contacts' }">
        Контакты
      </nuxt-link>
    </nav>
  </header>
</template>

<script>
import SiteLogo from './SiteLogo.vue';

export default {
  name: 'SiteHeader',
  components: {
    SiteLogo,
  },
};
</script>

<style lang="scss" scoped>
.site-header {
  position: fixed;
  display: flex;
  flex-direction: row;
  height: 110px;
  width: 100%;
  max-width: 1440px;
  align-items: center;
  justify-content: space-between;
  background-color: #1d1d1d;
  background: linear-gradient(120deg, #1d1d1d 0%, rgba(47, 47, 47, 0.15) 100%);
  padding-left: 16px;
  backdrop-filter: blur(20px);
  z-index: 100;

  .header-logo {
    height: 60px;
    max-height: 60px;
    width: 60px;
    max-width: 60px;
  }

  .header-nav {
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;

    a {
      font-size: 1.2em;
      text-transform: uppercase;
      font-weight: 500;
      padding: 8px 32px;

      &:hover {
        color: #F55151;
      }
    }
  }
}
</style>
