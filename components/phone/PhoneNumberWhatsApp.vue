<template>
  <a :href="`https://wa.me/${transformPhone}`" class="phone-number-whats-app">{{ phone }}</a>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export type PropsType = {
  phone: string;
};

export default Vue.extend({
  name: 'PhoneNumberWhatsApp',
  props: {
    phone: {
      type: String as PropType<PropsType['phone']>,
      required: true,
    },
  },
  computed: {
    transformPhone() {
      return this.phone.replace(/\s/g, '');
    },
  },
});
</script>

<style lang="scss">
.phone-number-whats-app {
  white-space: nowrap;
  color: #000;
  text-decoration: none;
  font-weight: 500;
}
</style>
