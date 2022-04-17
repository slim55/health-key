<template>
  <component
    :is="tag"
    :class="className"
  >
    <slot/>
  </component>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export type TagPropType = 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type SizePropType = 'is-small' | 'is-default';

export type PropsType = {
  tag?: TagPropType;
  size?: SizePropType;
};

export default Vue.extend({
  name: 'TitleBase',
  props: {
    tag: {
      type: String as PropType<PropsType['tag']>,
      default: 'div',
    },
    size: {
      type: String as PropType<PropsType['size']>,
      default: '',
    },
  },
  computed: {
    className(): string {
      return `title${this.size ? ' ' + this.size : ''}`;
    },
  },
});
</script>

<style lang="scss">
.title {
  position: relative;
  text-align: center;
  font-size: 1.75rem;
  font-weight: bold;

  &.is-small {
    font-size: 1.25rem;
  }

  &::after {
    content: '';
    position: absolute;
    top: calc(100% + 3px);
    left: 50%;
    width: 80px;
    height: 3px;
    background-color: #000;
    transform: translateX(-50%);
  }
}
</style>
