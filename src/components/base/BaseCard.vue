<template>
  <div
    class="rounded bg-white dark:bg-gray-800 shadow-md flex-col
  w-full xl:w-11/12 mx-auto p-8"
  >
    <div
      v-if="$slots.header || $slots.header"
      class="text-blue-700 dark:text-blue-200 md:text-5xl text-4xl mb-12"
      :class="headerClass"
    >
      <slot name="header" />
      <div
        v-if="$slots.subtitle"
        class="md:text-3xl text-2xl ph:text-xl"
      >
        <slot name="subtitle" />
      </div>
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseCard',
  props: {
    headerClass: {
      type: [String, Object, Array],
      default: () => ['flex', 'flex-col', 'sm:flex-row', 'items-baseline'],
    },
  },
});
</script>
