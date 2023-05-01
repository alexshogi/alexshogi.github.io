export default {
  mode: 'universal',
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ОДИН, фитнес-студия',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Фитнес в г. Москва - Метрогородок | 👊 персональные тренировки 💜 современное оборудование ⭐ скидки постоянным клиентам 💸 бесплатная первая тренировка 👊 Записывайся онлайн!' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { src: 'https://kit.fontawesome.com/0353e2db86.js', crossorigin: 'anonymous' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/ymapPlugin.js', mode: 'client' },
    { src: '~/plugins/hooperPlugin.js', mode: 'client' },
  ],

  router: {
    scrollBehavior(to) {
      if (to.hash) {
        return window.scrollTo({ top: document.querySelector(to.hash).offsetTop - 130, behavior: 'smooth' });
      }
      return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
