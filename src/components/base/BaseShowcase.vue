<template>
  <ol>
    <li
      v-for="(item, itemIndex) in items"
      :key="item.id"
    >
      <div
        v-if="itemIndex !== 0"
        class="w-full border mx-auto"
      />
      <BaseShowcaseItem :item="item" />
    </li>
  </ol>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Project',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
});
</script>
