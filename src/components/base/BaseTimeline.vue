<template>
  <ol>
    <li
      v-for="(item, itemIndex) in items"
      v-bind:key="item.id">
      <BaseTimelineItem :item="item" :showLine="itemIndex !== items.length - 1"/>
      <div
        v-if="itemIndex !== items.length - 1"
        class="block md:hidden w-full border mx-auto my-8">
      </div>
    </li>
  </ol>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseTimeline',
  components: {},
  props: {
    items: Array,
  },
});
</script>

<style scoped>
</style>
