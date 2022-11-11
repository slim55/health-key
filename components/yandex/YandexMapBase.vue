<template>
  <client-only>
    <yandex-map
      v-bind="yandexMap"
      style="width: 100%; height: 100%;"
    >
      <ymap-marker
        v-for="marker in ymapMarkers"
        :key="marker.markerId"
        v-bind="marker"
      >
        <div slot="balloon">
          <slot name="marker" v-bind="{ id: marker.markerId }"/>
        </div>
      </ymap-marker>
    </yandex-map>
  </client-only>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export type CoordsType = [lan: number, lat: number];
export type YandexControlType = 'zoomControl' | 'rulerControl' | 'trafficControl' | 'fullscreenControl' | 'typeSelector';
export type YandexPlacemarkType = {
  layout: 'default#image';
  imageHref: string;
  imageSize: [number, number];
  imageOffset: [number, number];
};
export type MarkerItemPropType = {
  id: number;
  coords: CoordsType;
  icon: YandexPlacemarkType;
};
export type YandexMapPropsType = {
  coords: CoordsType;
  zoom: number;
  scrollZoom: boolean;
  controls: YandexControlType[];
};
export type YmapMarkerPropsType = {
  markerId: number;
  markerType: 'Placemark';
  coords: CoordsType;
  icon: YandexPlacemarkType;
};

export interface PropsType {
  centerMapCoords: CoordsType;
  zoom: number;
  markers: MarkerItemPropType[];
}

export default Vue.extend({
  name: 'YandexMapBase',
  props: {
    centerMapCoords: {
      type: Array,
      required: true,
    },
    zoom: {
      type: Number as PropType<PropsType['zoom']>,
      required: true,
    },
    markers: {
      type: Array as PropType<PropsType['markers']>,
      required: true,
    },
  },
  computed: {
    yandexMap(): YandexMapPropsType {
      return {
        coords: this.centerMapCoords as PropsType['centerMapCoords'],
        zoom: this.zoom,
        scrollZoom: false,
        controls: ['zoomControl'],
      };
    },
    ymapMarkers(): YmapMarkerPropsType[] {
      return this.markers.map(marker => ({
        markerId: marker.id,
        markerType: 'Placemark',
        coords: marker.coords,
        icon: marker.icon,
      }));
    },
  },
});
</script>
