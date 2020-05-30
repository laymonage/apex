<template>
  <img
    v-if="typeof image === 'string'"
    :src="image"
    :class="imgClass"
  >
  <component
    :is="image"
    v-else
    :class="componentClass"
  />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseImage',
  props: {
    image: {
      type: [String, Object],
      default: '',
    },
    imgClass: {
      type: [String, Object, Array],
      default: '',
    },
    componentClass: {
      type: [String, Object, Array],
      default: '',
    },
  },
});
</script>
