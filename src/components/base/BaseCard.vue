<template>
  <div class="rounded bg-white p-8 flex-col xl:w-11/12 w-full mx-auto shadow-md">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseCard',
});
</script>

<style scoped>
</style>
