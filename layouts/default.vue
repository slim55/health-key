<template>
  <div class="app">
    <header-base v-bind="headerBase"/>
    <main class="app__main">
      <nuxt/>
    </main>
    <footer-base v-bind="footerBase"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { PropsType as HeaderBasePropsType } from '@/components/header/HeaderBase.vue';
import { PropsType as FooterBasePropsType } from '@/components/footer/FooterBase.vue';

export default Vue.extend({
  name: 'LayoutsDefault',
  computed: {
    headerBase(): HeaderBasePropsType {
      return {
        phone: this.$accessor.phone,
        navigation: this.$accessor.navigation,
      };
    },
    footerBase(): FooterBasePropsType {
      return {
        phone: this.$accessor.phone,
        phone2: this.$accessor.phone2,
        address: this.$accessor.address,
      };
    },
  },
});
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__main {
    flex-grow: 1;
  }
}
</style>
