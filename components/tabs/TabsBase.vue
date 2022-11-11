<template>
  <vs-button-group>
    <vs-button
      v-for="tab in tabs"
      :key="tab.id"
      dark
      flat
      size="large"
      :active="computedActive === tab.id"
      @click="computedActive = tab.id"
    >
      {{ tab.name }}
    </vs-button>
  </vs-button-group>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export type PropTabsItemType = {
  id: string | number;
  name: string;
};

export interface PropsType {
  tabs: PropTabsItemType[];
  active?: string | number;
}

export default Vue.extend({
  name: 'TabsBase',
  model: {
    prop: 'active',
    event: 'input',
  },
  props: {
    tabs: {
      type: Array as PropType<PropsType['tabs']>,
      required: true,
    },
    active: {
      type: [String, Number] as PropType<PropsType['active']>,
    },
  },
  data() {
    return {
      newActive: this.active,
    };
  },
  computed: {
    computedActive: {
      get: function(): PropsType['active'] {
        return this.newActive;
      },
      set: function(value: PropsType['active']) {
        this.newActive = value;
        this.$emit('input', value);
      },
    },
  },
  watch: {
    active: function() {
      this.newActive = this.active;
    },
  },
  mounted() {
    if (typeof this.newActive === 'undefined' && this.tabs.length) {
      this.newActive = this.tabs[0].id;
    }
  },
});
</script>
