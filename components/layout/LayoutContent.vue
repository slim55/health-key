<template>
  <section>
    <div class="container">
      <title-base v-if="title" class="mb-4-5" v-bind="titleProps">{{ title }}</title-base>
      <slot/>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { PropsType as TitleBasePropsType } from '@/components/title/TitleBase.vue';

export type PropsType = {
  title?: string;
};

export default Vue.extend({
  name: 'LayoutContent',
  props: {
    title: {
      type: String,
    },
  },
  computed: {
    titleProps(): TitleBasePropsType {
      return {
        tag: 'h2',
      };
    },
  },
});
</script>
