<template>
  <component
    :is="list.type === 'decimal' ? 'ol' : 'ul'"
    :class="{
      'list-decimal': list.type === 'decimal',
      'list-disc': list.type === 'disc',
      'ml-8': list.indented !== false
    }">
    <li
      v-for="(child, childIndex) in list.children"
      v-bind:key="childIndex"
      v-html="sanitize(marked(child))">
    </li>
  </component>
</template>

<script lang="ts">
import Vue from 'vue';
import marked from 'marked';
import { sanitize } from 'dompurify';

export default Vue.extend({
  name: 'BaseList',
  props: {
    list: Object,
  },
  methods: {
    marked,
    sanitize,
  },
});
</script>

<style scoped>
</style>
