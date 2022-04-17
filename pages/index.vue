<template>
  <div class="home-page">
    <promo-base
      class="mb-4"
      v-bind="promoData"
    />
    <content-base
      id="massage"
      class="pt-4"
      v-bind="contentData"
    />
    <price-list
      id="price-list"
      class="py-4"
      v-bind="priceListData"
    />
    <specialists-base
      id="specialists"
      class="py-4"
      v-bind="specialistsData"
    />
    <map-base
      id="contacts"
      class="mt-4"
      v-bind="mapData"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { PropsType as PromoBasePropsType } from '@/components/promo/PromoBase.vue';
import { PropsType as ContentBasePropsType } from '@/components/content/ContentBase.vue';
import { PropsType as PriceListPropsType } from '@/components/price/PriceList.vue';
import { PropsType as SpecialistsBasePropsType } from '@/components/specialists/SpecialistsBase.vue';
import { PropsType as MapBasePropsType } from '@/components/map/MapBase.vue';

export default Vue.extend({
  name: 'IndexPage',
  computed: {
    promoData(): PromoBasePropsType {
      return this.$accessor.promo;
    },
    contentData(): ContentBasePropsType {
      return this.$accessor.content;
    },
    priceListData(): PriceListPropsType {
      return this.$accessor.price_list;
    },
    specialistsData(): SpecialistsBasePropsType {
      return this.$accessor.specialists;
    },
    mapData(): MapBasePropsType {
      return this.$accessor.mapData;
    },
  },
});
</script>
