import Vue from 'vue';
// @ts-ignore
import YmapPlugin from 'vue-yandex-maps';

const settings = {
  apiKey: process.env.YANDEX_MAP_API || '17100ffd-5064-470b-b83f-ec7af8b5ec12',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
};

Vue.use(YmapPlugin, settings);
