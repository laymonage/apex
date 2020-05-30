<template>
  <ol>
    <li
      v-for="(item, itemIndex) in items"
      :key="item.id"
    >
      <BaseTimelineItem
        :item="item"
        :show-line="itemIndex !== items.length - 1"
      />
      <div
        v-if="itemIndex !== items.length - 1"
        class="block md:hidden w-full border mx-auto my-8"
      />
    </li>
  </ol>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseTimeline',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
});
</script>
