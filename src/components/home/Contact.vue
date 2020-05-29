<template>
  <BaseCard>

    <template v-slot:header>
      <strong>{{ contact.alias }}</strong>
    </template>

    <template v-slot:subtitle>
      <span class="text-gray-500 sm:ml-4 mr-2">is</span>
      <span>{{ contact.name }}</span>
    </template>

    <div
      v-html="sanitize(marked(contact.description))"
      class="text-gray-700 text-left md:text-2xl text-xl ph:text-lg mb-8">
    </div>
    <div class="flex items-center">
      <a
        v-for="(link, index) in contact.links"
        v-bind:key="index"
        :href="link.url">
        <component
          :is="link.icon"
          :class="{'ml-3': index > 0}"
          class="fill-current w-6 h-6" />
      </a>
    </div>

  </BaseCard>
</template>

<script lang="ts">
import Vue from 'vue';
import marked from 'marked';
import { sanitize } from 'dompurify';
import Contact from '@/data/contact';

export default Vue.extend({
  name: 'Contact',
  components: {},
  data() {
    return {
      contact: Contact,
    };
  },
  methods: {
    marked,
    sanitize,
  },
});
</script>

<style scoped>
</style>
