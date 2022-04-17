<template>
  <header class="header">
    <vs-navbar
      fixed
      shadow
      center-collapsed
    >
      <template #left>
        <vs-button class="mr-3 d-sm-none" color="dark" transparent icon @click="activeSidebar = !activeSidebar">
          <icon-base icon="menu"/>
        </vs-button>
        <logo-base/>
      </template>
      <div class="d-none d-sm-block">
        <template v-for="item in navigation">
          <vs-navbar-item :key="item.id">
            <a :href="`#${item.id}`" @click.prevent="anchorClickHandler(item.id)">{{ item.name }}</a>
          </vs-navbar-item>
        </template>
      </div>
      <template #right>
        <div class="d-none d-sm-block">
          <phone-number v-bind="phoneNumber"/>
        </div>
        <vs-button :href="`tel:${phone}`" class="header__phone d-sm-none" color="rgb(30,30,30)" size="mini" circle border icon>
          <icon-base v-bind="phoneIcon"/>
        </vs-button>
      </template>
    </vs-navbar>
    <vs-sidebar
      fixed
      :open.sync="activeSidebar"
    >
      <template #logo>
        <logo-base/>
      </template>
      <template v-for="item in navigation">
        <vs-sidebar-item :key="item.id">
          <a :href="`#${item.id}`" @click.prevent="anchorClickHandler(item.id)">{{ item.name }}</a>
        </vs-sidebar-item>
      </template>
    </vs-sidebar>
  </header>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { PropsType as PhoneNumberPropsType } from '@/components/phone/PhoneNumber.vue';
import { PropsType as IconBasePropsType } from '@/components/icon/IconBase.vue';

export type NavigationItemPropType = {
  id: string;
  name: string;
};

export interface PropsType extends PhoneNumberPropsType {
  navigation: NavigationItemPropType[];
}

export default Vue.extend({
  name: 'HeaderBase',
  props: {
    phone: {
      type: String as PropType<PropsType['phone']>,
      required: true,
    },
    navigation: {
      type: Array as PropType<PropsType['navigation']>,
      default: () => [],
    }
  },
  data:() => ({
    activeSidebar: false,
  }),
  computed: {
    phoneIcon(): IconBasePropsType {
      return {
        icon: 'phone',
      };
    },
    phoneNumber(): PhoneNumberPropsType {
      return {
        phone: this.phone,
      };
    },
  },
  methods: {
    anchorClickHandler(id: string) {
      this.activeSidebar = false;
      if (typeof window !== 'undefined') {
        const yOffset = -50;
        const top = (document.getElementById(id)?.getBoundingClientRect().top || 0) + window.pageYOffset + yOffset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    },
  },
});
</script>

<style lang="scss">
.header {
  height: 45px;

  &__phone {
    .vs-button__content {
      padding: 6px !important;
    }
  }

  .vs-navbar__item,
  .vs-sidebar__item__text {
    a {
      color: #000;
      text-decoration: none;
    }
  }
}
</style>
