<template>
  <layout-content
    :title="title"
  >
    <vs-table>
      <template #thead>
        <vs-tr>
          <vs-th>Название</vs-th>
          <vs-th>Цена</vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          v-for="(tr, index) in prices"
          :key="index"
          :data="tr"
        >
          <vs-td>
            {{ tr.name }}
          </vs-td>
          <vs-td>
            {{ tr.price }} руб.
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </layout-content>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { PropsType as LayoutContentPropsType } from '@/components/layout/LayoutContent.vue';

export type PricesItemProp = {
  name: string;
  price: string;
};

export interface PropsType extends LayoutContentPropsType {
  prices: PricesItemProp[];
}

export default Vue.extend({
  name: 'PriceLise',
  props: {
    title: {
      type: String as PropType<PropsType['title']>,
    },
    prices: {
      type: Array as PropType<PropsType['prices']>,
      default: () => [],
      required: true,
    },
  }
});
</script>
