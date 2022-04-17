<template>
  <a :href="`tel:${phone}`" class="phone-number">{{ phone }}</a>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export type PropsType = {
  phone: string;
};

export default Vue.extend({
  name: 'PhoneNumber',
  props: {
    phone: {
      type: String as PropType<PropsType['phone']>,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.phone-number {
  color: #000;
  text-decoration: none;
  font-weight: 500;
}
</style>
