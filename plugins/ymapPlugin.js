/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import YmapPlugin from 'vue-yandex-maps';

const settings = {
  apiKey: '4b9455d0-291c-4cb3-a6f5-3fb92790ff73',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1',
};

Vue.use(YmapPlugin, settings);
