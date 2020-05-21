<template>
  <div class="container mx-auto px-4">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseContainer',
});
</script>

<style scoped>
</style>
