<template>
  <layout-content
    :title="title"
  >
    <div class="content" v-html="content" />
  </layout-content>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { PropsType as LayoutContentPropsType } from '@/components/layout/LayoutContent.vue';

export interface PropsType extends LayoutContentPropsType {
  content: string;
}

export default Vue.extend({
  name: 'ContentBase',
  props: {
    title: {
      type: String as PropType<PropsType['title']>,
    },
    content: {
      type: String as PropType<PropsType['content']>,
      required: true,
    },
  }
});
</script>
