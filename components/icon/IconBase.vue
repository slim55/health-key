<template>
  <span class="icon">
    <i class="mdi" :class="`mdi-${icon}`"/>
  </span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export type PropsType = {
  icon: string;
};

export default Vue.extend({
  name: 'IconBase',
  props: {
    icon: {
      type: String as PropType<PropsType['icon']>,
      required: true,
    },
  },
});
</script>

<style lang="scss">
  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
  }
</style>
