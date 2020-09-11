<template>
  <div class="container mx-auto px-4">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseContainer',
});
</script>

<style scoped>
@media screen and (max-height: 480px) {
  .container {
    @apply mt-16;
  }
}
</style>
