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
      class="text-left md:text-2xl text-xl ph:text-lg mb-8"
      v-html="sanitize(marked(contact.description))"
    />
    <div class="flex items-center">
      <a
        v-for="(link, index) in contact.links"
        :key="index"
        :href="link.url"
        class="ml-3 first:ml-0 p-1 rounded
        focus:outline-none focus:bg-gray-200 focus:text-blue-600
        hover:bg-gray-200 hover:text-blue-600
        dark:text-blue-200
        dark:focus:bg-blue-900 dark:focus:text-blue-100
        dark:hover:bg-blue-900 dark:hover:text-blue-100"
      >
        <component
          :is="link.icon"
          class="fill-current w-6 h-6"
        />
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
