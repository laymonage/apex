<template>
  <img v-lazy="image">
</template>

<script lang="ts">
import Vue from 'vue';
import spinner from '@/assets/img/common/spinner.svg';

export default Vue.extend({
  name: 'BaseImage',
  props: {
    image: {
      type: String,
      default: spinner,
    },
  },
});
</script>

<style scoped>
img[lazy=loading] {
  @apply w-1/4;
}
</style>
