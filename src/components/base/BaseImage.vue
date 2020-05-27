<template>
  <img
    v-if="typeof image === 'string'"
    :src="image"
    :class="imgClass" />
  <component
    v-else
    :is="image"
    :class="componentClass" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseImage',
  props: {
    image: [String, Object],
    imgClass: [String, Object, Array],
    componentClass: [String, Object, Array],
  },
});
</script>

<style scoped>
</style>
