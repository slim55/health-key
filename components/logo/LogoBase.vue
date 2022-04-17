<template>
  <div class="logo">
    <img src="/images/logo.png" alt="Ключ к здоровью" class="logo__image" />
    <span class="logo__name">Ключ к здоровью</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LogoBase',
});
</script>

<style lang="scss">
.logo {
  cursor: default;

  &__image {
    max-width: 30px;
    max-height: 30px;
    margin-right: 5px;
    vertical-align: middle;
  }

  &__name {
    font-size: 14px;
    font-weight: bold;
    color: #000;
  }
}
</style>
