<template>
  <footer class="footer px-3 py-3">
    <div class="row align-items-center">
      <div class="col-12 col-sm-3 d-none d-sm-block">
        <logo-base/>
      </div>
      <div class="col-12 col-sm-6 text-center">{{ address }}</div>
      <div class="col-12 col-sm-3 mt-2 mt-sm-0 text-center text-sm-right">
        <phone-number v-bind="phoneNumber"/>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { PropsType as PhoneNumberPropsType } from '@/components/phone/PhoneNumber.vue';

export interface PropsType extends PhoneNumberPropsType {
  address: string;
}

export default Vue.extend({
  name: 'FooterBase',
  props: {
    address: {
      type: String as PropType<PropsType['address']>,
      required: true,
    },
    phone: {
      type: String as PropType<PropsType['phone']>,
      required: true,
    },
  },
  computed: {
    phoneNumber(): PhoneNumberPropsType {
      return {
        phone: this.phone,
      };
    },
  },
});
</script>

<style lang="scss">
.footer {
  box-shadow: 0 -5px 25px 0 rgba(0, 0, 0, .05);
}
</style>
