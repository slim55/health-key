<template>
  <layout-content
    class="price-list"
    :title="title"
  >
    <tabs-base
      v-if="sections.length > 1"
      v-bind="tabsBaseData"
      v-model="activeTab"
      class="mb-4"
    />
    <template
      v-for="(section, index) in sections"
    >
      <div v-if="index === activeTab" :key="index">
        <vs-table>
          <template #thead>
            <vs-tr>
              <vs-th :style="{width: 'calc(100% - 120px)'}">Название</vs-th>
              <vs-th :style="{width: '120px'}">Цена</vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
                v-for="(tr, index) in section.prices"
                :key="index"
                :data="tr"
            >
              <vs-td>
                {{ tr.name }}
              </vs-td>
              <vs-td>
            <span>
              {{ tr.price === 'Бесплатно' ? tr.price : `${tr.price}&nbsp;руб.` }}
            </span>
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
        <p v-if="section.description" class="mt-3" :style="{fontSize: '12px'}">{{ section.description }}</p>
      </div>
    </template>
  </layout-content>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { PropsType as LayoutContentPropsType } from '@/components/layout/LayoutContent.vue';
import { PropsType as TabsBasePropsType } from '@/components/tabs/TabsBase.vue';

export type PricesItemType = {
  name: string;
  price: string;
};

export type PropSectionsItemType = {
  name: string;
  prices: PricesItemType[];
  description?: string;
};

export interface PropsType extends LayoutContentPropsType {
  sections: PropSectionsItemType[];
}

export default Vue.extend({
  name: 'PriceLise',
  props: {
    title: {
      type: String as PropType<PropsType['title']>,
    },
    sections: {
      type: Array as PropType<PropsType['sections']>,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      activeTab: 0,
    };
  },
  computed: {
    tabsBaseData(): TabsBasePropsType {
      return {
        tabs: this.sections.map((section, index) => ({
          id: index,
          name: section.name,
        })),
      };
    },
  },
});
</script>

<style lang="scss">
.price-list {
  width: 100%;
  overflow: hidden;
}
</style>
