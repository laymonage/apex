<template>
  <button
    type="button"
    class="rounded-full"
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
