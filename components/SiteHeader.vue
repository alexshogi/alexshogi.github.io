<template>
  <header class="site-header">
    <nuxt-link :to="{ path: '/' }">
      <img src="/logo/svg/logo-no-background.svg" class="header-logo" alt="1">
    </nuxt-link>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
      <div class='menu-button'></div>
    </label>
    <ul class="menu">
      <!-- <li @click="onMenuItemClick">
        <nuxt-link :to="{ path: '/', hash: '#about' }">
          О студии
        </nuxt-link>
      </li> -->
      <li @click="onMenuItemClick">
        <nuxt-link :to="{ path: '/', hash: '#pros' }">
          Возможности
        </nuxt-link>
      </li>
      <li @click="onMenuItemClick">
        <nuxt-link :to="{ path: '/', hash: '#coaches' }">
          Тренеры
        </nuxt-link>
      </li>
      <li @click="onMenuItemClick">
        <nuxt-link :to="{ path: '/', hash: '#prices' }">
          Цены
        </nuxt-link>
      </li>
      <li @click="onMenuItemClick">
        <nuxt-link :to="{ path: '/', hash: '#gallery' }">
          Фото
        </nuxt-link>
      </li>
      <!-- <li>
        <nuxt-link :to="{ path: '/', hash: '#timetable' }">
          Расписание
        </nuxt-link>
      </li> -->
      <li @click="onMenuItemClick">
        <nuxt-link :to="{ path: '/', hash: '#contacts' }">
          Контакты
        </nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
  methods: {
    onMenuItemClick() {
      const checkbox = document.getElementById('menu-toggle');

      checkbox.checked = false;
    },
  },
};
</script>
