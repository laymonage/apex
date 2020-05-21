<template>
  <div class="rounded bg-white shadow-md flex-col
  w-full xl:w-11/12 mx-auto p-8">
    <div
      class="text-blue-700 md:text-5xl text-4xl mb-8"
      :class="headerClass">
      <slot name="header"></slot>
      <div class="md:text-3xl text-2xl ph:text-xl">
        <slot name="subtitle"></slot>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseCard',
  props: {
    headerClass: {
      type: String,
      default: 'flex flex-col sm:flex-row items-baseline',
    },
  },
});
</script>

<style scoped>
</style>
