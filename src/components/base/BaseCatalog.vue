<template>
  <ol>
    <li
      v-for="(item, itemIndex) in items"
      :key="item.id"
    >
      <div
        v-if="itemIndex !== 0"
        class="w-full border mx-auto"
        :class="dividerClass"
      />
      <slot
        :item="item"
        :item-index="itemIndex"
      />
    </li>
  </ol>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseCatalog',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    dividerClass: {
      type: [String, Object, Array],
      default: () => [],
    },
  },
});
</script>
