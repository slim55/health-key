<template>
  <section class="map">
    <div class="map__container">
      <div class="container position-relative">
        <div class="map__content text-center text-md-left">
          <title-base class="mb-4" size="is-small">{{ information.title }}</title-base>
          <p>Адрес: <span v-html="information.address"/></p>
          <p class="mt-1">Детский массаж: <phone-number :phone="information.phone"/></p>
          <p class="mt-1">Взрослый массаж: <phone-number :phone="information.phone2"/></p>
          <p class="mt-1">WhatsApp: <phone-number-whats-app :phone="information.phone"/></p>
        </div>
      </div>
    </div>
    <div class="map__yandex">
      <yandex-map-base v-bind="yandexMapBase">
        <template v-slot:marker="{ id }">
          <img v-if="balloonInfo(id).image" :src="balloonInfo(id).image" :alt="balloonInfo(id).name" width="280px"/>
          <br>
          <b v-html="balloonInfo(id).name"/>
          <br>
          Детский массаж: <phone-number :phone="balloonInfo(id).phone"/>
          <br>
          Взрослый массаж: <phone-number :phone="balloonInfo(id).phone2"/>
          <br>
          WhatsApp: <phone-number-whats-app :phone="balloonInfo(id).phone"/>
        </template>
      </yandex-map-base>
    </div>
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { PropsType as YandexMapBasePropsType } from '@/components/yandex/YandexMapBase.vue';
import { PropsType as PhoneNumberPropsType } from '@/components/phone/PhoneNumber.vue';

export type MarkersItemPropType = {
  coords: YandexMapBasePropsType['markers'][0]['coords'];
  image?: string;
  name: string;
  phone: PhoneNumberPropsType['phone'];
  phone2: PhoneNumberPropsType['phone'];
};
export type InformationPropType = {
  title: string;
  address: string;
  phone: PhoneNumberPropsType['phone'];
  phone2: PhoneNumberPropsType['phone'];
  whatsapp: PhoneNumberPropsType['phone'];
};

export interface PropsType {
  centerMapCoords: YandexMapBasePropsType['centerMapCoords'];
  markers: MarkersItemPropType[];
  information: InformationPropType;
}

export default Vue.extend({
  name: 'MapBase',
  props: {
    centerMapCoords: {
      type: Array,
      required: true,
    },
    markers: {
      type: Array as PropType<PropsType['markers']>,
      required: true,
    },
    information: {
      type: Object as PropType<PropsType['information']>,
      required: true,
    },
  },
  computed: {
    computedCenterMapCoords(): PropsType['centerMapCoords'] {
      const coords = this.centerMapCoords as PropsType['centerMapCoords'];
      if (typeof window !== 'undefined') {
        return window.matchMedia('screen and (max-width: 767px)').matches
          ? coords
          : [coords[0], coords[1] + 0.015];
      }
      return coords;
    },
    yandexMapBase(): YandexMapBasePropsType {
      return {
        centerMapCoords: this.computedCenterMapCoords,
        zoom: 15,
        markers: this.markers.map((marker, index) => ({
          id: index,
          coords: marker.coords,
          icon: {
            layout: 'default#image',
            imageHref: '/images/map-marker.svg',
            imageSize: [48, 48],
            imageOffset: [-24, -48],
          },
        })),
      };
    },
  },
  methods: {
    balloonInfo(id: number): MarkersItemPropType | null {
      return this.markers.find((marker, index) => id === index) || null;
    },
  },
});
</script>

<style lang="scss">
.map {
  position: relative;
  width: 100%;
  height: 400px;

  @media screen and (max-width: 767px) {
    height: auto;
  }

  &__container {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 1;
    width: 100%;
    transform: translateY(-50%);

    @media screen and (max-width: 767px) {
      position: static;
      transform: none;
    }
  }

  &__content {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 1;
    width: 350px;
    padding: 1rem;
    background-color: #fff;
    border-radius: .5rem;
    transform: translateY(-50%);

    @media screen and (max-width: 767px) {
      position: static;
      width: auto;
      transform: none;
    }
  }

  &__yandex {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 767px) {
      position: relative;
      height: 400px;
    }
  }
}
</style>
