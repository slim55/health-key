<template>
  <layout-content class="promo pt-4-5 pb-4-5 pb-sm-0">
    <div class="row align-items-center">
      <div class="col-12 col-sm-8">
        <div class="content">
          <h1>{{ title }}</h1>
          <ul v-if="list.length">
            <li v-for="(item, index) in list" :key="index">{{ item }}</li>
          </ul>
        </div>
      </div>
      <div class="col-4 d-none d-sm-block">
        <img :src="image" :alt="title" class="d-block"/>
      </div>
    </div>
  </layout-content>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export interface PropsType {
  title: string;
  list: string[];
  image: string;
}

export default Vue.extend({
  name: 'PromoBase',
  props: {
    title: {
      type: String as PropType<PropsType['title']>,
      required: true,
    },
    list: {
      type: Array as PropType<PropsType['list']>,
      default: () => [],
    },
    image: {
      type: String as PropType<PropsType['image']>,
      required: true,
    },
  }
});
</script>

<style lang="scss">
  .promo {
    background: linear-gradient(0deg, #F2F4F6, #F2F4F6);

    .content {
      @media screen and (min-width: 1200px) {
        font-size: 1.2rem;
      }

      h1 {
        @media screen and (min-width: 1200px) {
          font-size: 2.5em;
        }
      }
    }
  }
</style>
