<template>
  <layout-content
    :title="title"
  >
    <div v-if="list.length" class="row">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="col-12 col-sm-6"
        :class="{'mt-3 mt-sm-0': index}"
      >
        <div class="d-flex justify-content-center flex-wrap">
          <card-specialist v-bind="item"/>
        </div>
      </div>
    </div>
  </layout-content>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { PropsType as LayoutContentPropsType } from '@/components/layout/LayoutContent.vue';
import { PropsType as CardSpecialistPropsType } from '@/components/card/CardSpecialist.vue';

export interface PropsType extends LayoutContentPropsType {
  list: CardSpecialistPropsType[];
}

export default Vue.extend({
  name: 'SpecialistsBase',
  props: {
    title: {
      type: String as PropType<PropsType['title']>,
    },
    list: {
      type: Array as PropType<PropsType['list'][]>,
      default: () => [],
      required: true,
    },
  }
});
</script>
