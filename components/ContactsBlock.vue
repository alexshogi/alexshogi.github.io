<template>
  <div class="block-content">
    <h2>Контактная информация</h2>
    <div
      id="contacts"
      class="contacts"
    >
      <section class="contact-info">
        <h3>Адрес</h3>
        <p>Тагильская ул., 4В помещение H29</p>
        <br>
        <h3>Контакты</h3>
        <p>
          <a href="tel:+7-985-988-6369">+7 (985) 988-63-69</a>
        </p>
        <div class="social">
          <a
            href="https://t.me/fitness_odin"
            target="_blank"
            rel="nofollow"
            aria-haspopup="false"
            aria-label="Соцсети, telegram"
          >
            <i class="fa-brands fa-telegram"></i>
          </a>

          <a
            href="https://vk.com/club218956657"
            target="_blank"
            rel="nofollow"
            aria-haspopup="false"
            aria-label="Соцсети, vkontakte"
          >
            <i class="fa-brands fa-vk"></i>
          </a>

          <a
            href="https://wa.me/79859886369"
            target="_blank"
            rel="nofollow"
            aria-haspopup="false"
            aria-label="Соцсети, whatsapp"
          >
            <i class="fa-brands fa-square-whatsapp"></i>
          </a>

          <a
            href="https://www.youtube.com/@Fitness-Odin"
            target="_blank"
            rel="nofollow"
            aria-haspopup="false"
            aria-label="Соцсети, youtube"
          >
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
        <br>
        <h3>Время работы</h3>
        <p>Ежедневно 09:00 – 23:00</p>
      </section>
      <section class="map">
        <ClientOnly>
          <yandex-map
            :controls="['zoomControl']"
            :coords="coords"
            :zoom="18"
            :options="options"
          >
            <ymap-marker
              marker-id="1"
              :coords="coords"
              :icon="markerIcon"
            />
          </yandex-map>
        </ClientOnly>
      </section>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { yandexMap, ymapMarker } from 'vue-yandex-maps';

export default {
  name: 'ContactsBlock',
  components: {
    yandexMap,
    ymapMarker,
  },
  data: () => ({
    coords: [
      55.815618,
      37.752472,
    ],
    options: {
      zoomControlPosition: { right: 10, top: 50 },
    },
    markerIcon: {
      layout: 'default#image',
      imageHref: '/images/location.png',
      imageSize: [60, 60],
      imageOffset: [0, 0],
    },
  }),
};
</script>

<style>
  .badge {
    max-width: 100%;
    border-radius: 0;
  }
</style>
