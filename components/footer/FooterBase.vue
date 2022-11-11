<template>
  <footer class="footer px-3 py-3">
    <div class="row align-items-center">
      <div class="col-12 col-sm-3 d-none d-sm-block">
        <logo-base/>
      </div>
      <div class="col-12 col-sm-6 text-center" v-html="address"/>
      <div class="col-12 col-sm-3 mt-2 mt-sm-0 text-center text-sm-right">
        <p>
          Детский массаж - <phone-number v-bind="phoneNumber"/>
        </p>
        <p class="mt-1">
          Взрослый массаж - <phone-number v-bind="phoneNumber2"/>
        </p>
        <p class="mt-1">
          WhatsApp - <phone-number-whats-app v-bind="phoneNumber"/>
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { PropsType as PhoneNumberPropsType } from '@/components/phone/PhoneNumber.vue';

export interface PropsType {
  address: string;
  phone: PhoneNumberPropsType['phone'];
  phone2: PhoneNumberPropsType['phone'];
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
    phone2: {
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
    phoneNumber2(): PhoneNumberPropsType {
      return {
        phone: this.phone2,
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
