<template>
  <div
    class="flex flex-col md:flex-row justify-between text-gray-700 my-12"
  >
    <div class="w-full sm:w-9/12 md:w-5/12 lg:w-3/12 mx-auto">
      <BaseImage
        :image="item.image.src"
        :class="item.image.class"
        class="mx-auto"
      />
    </div>
    <div class="md:w-7/12 lg:w-9/12 mt-4 md:mt-0 md:ml-8">
      <h3 class="text-3xl md:text-4xl">
        <a :href="item.url">
          <strong>{{ item.title }}</strong>
        </a>
      </h3>
      <div class="mt-2 md:text-base lg:text-lg">
        <div v-html="sanitize(marked(item.description))" />
        <BaseList
          v-if="item.details"
          :list="item.details"
          class="mt-2 text-base"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import marked from 'marked';
import { sanitize } from 'dompurify';

export default Vue.extend({
  name: 'BaseTimelineItem',
  props: {
    item: {
      type: Object,
      default: () => (
        {
          id: 0,
          image: {
            src: '',
            class: [],
          },
          title: '',
          url: '',
          description: '',
          details: {
            type: '',
            children: [],
          },
        }),
    },
  },
  methods: {
    marked,
    sanitize,
  },
});
</script>
