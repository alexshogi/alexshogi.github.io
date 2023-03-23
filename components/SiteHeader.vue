<template>
  <header class="site-header">
    <nuxt-link :to="{ path: '/' }">
      <SiteLogo class="header-logo" />
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
import SiteLogo from './SiteLogo.vue';

export default {
  name: 'SiteHeader',
  components: {
    SiteLogo,
  },
  methods: {
    onMenuItemClick() {
      const checkbox = document.getElementById('menu-toggle');

      checkbox.checked = false;
    },
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
}

.menu {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu > li {
  margin: 0 1rem;
  overflow: hidden;
  cursor: pointer;

  a {
    text-transform: uppercase;
    font-weight: 500;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  &:hover a {
    color: #F55151;
  }
}

.menu-button-container {
  display: none;
  height: 100%;
  width: 30px;
  margin-right: 1rem;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#menu-toggle {
  display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
  display: block;
  background-color: #fff;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}

.menu-button::before {
  content: '';
  margin-top: -8px;
}

.menu-button::after {
  content: '';
  margin-top: 8px;
}

#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0px;
  transform: rotate(45deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0px;
  transform: rotate(-45deg);
}

@media (max-width: 999px) {
  .menu-button-container {
    display: flex;
  }
  .menu {
    position: absolute;
    top: 0;
    margin-top: 110px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  #menu-toggle ~ .menu li {
    height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    transition: height 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  #menu-toggle:checked ~ .menu li {
    border: 1px solid #333;
    height: 4em;
    padding: 0.5em;
    transition: height 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .menu > li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0.5em 0;
    width: 100%;
    color: white;
    background-color: #222;
  }
  .menu > li:not(:last-child) {
    border-bottom: 1px solid #444;
  }
}
</style>
