<template>
  <button
    type="button"
    class="rounded-full focus:outline-none focus:shadow-outline"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseRoundedButton',
});
</script>
