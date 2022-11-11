<template>
  <vs-card class="card-specialist" type="1">
    <template #title>
      <h3>{{ name }}</h3>
    </template>
    <template #img>
      <img :src="image" :alt="name"/>
    </template>
    <template v-if="description" #text>
      <p v-html="description"/>
    </template>
  </vs-card>
</template>

<script lang="ts">
import Vue from 'vue';

export type PropsType = {
  name: string;
  image: string;
  description: string;
};

export default Vue.extend({
  name: 'CardSpecialist',
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  }
});
</script>

<style lang="scss">
.card-specialist {
  .vs-card {
    cursor: default;

    &__img {
      align-items: flex-start;
    }
  }
}
</style>
