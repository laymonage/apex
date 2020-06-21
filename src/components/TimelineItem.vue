<template>
  <div
    class="flex flex-col md:flex-row-reverse justify-between my-12 md:my-0"
  >
    <div
      class="flex flex-col items-center mb-8 md:mb-0 md:w-3/12 lg:w-2/12"
    >
      <div class="w-full mb-4 md:mb-2">
        <a :href="item.institutionLogo.url">
          <BaseImage
            class="mx-auto rounded"
            :image="item.institutionLogo.image"
            :class="item.institutionLogo.class || ['w-1/2', 'ph:w-3/4', 'md:w-full']"
          />
        </a>
      </div>
      <div class="flex items-center">
        <span>{{ item.dates.start }}</span>
        <span v-if="item.dates.end !== item.dates.start">
          <span
            v-if="item.dates.start && item.dates.end"
            class="mx-1"
          >-</span>
          <span>{{ item.dates.end }}</span>
        </span>
      </div>
      <span v-if="item.dates.expected">(expected)</span>
      <div
        v-if="showLine"
        class="hidden md:flex w-1/4 h-full"
      >
        <div class="border-l border-solid border-4 mx-auto my-2" />
      </div>
    </div>
    <div class="flex flex-col items-start md:w-3/4 md:mr-8 md:mb-12">
      <div class="flex flex-col">
        <div class="flex flex-col text-xl ph:text-lg">
          <span>
            <span v-html="sanitize(marked(item.title))" />
          </span>
          <span><a :href="item.institutionLogo.url">{{ item.institution }}</a></span>
        </div>
        <div
          v-if="item.subtitle"
          class="mt-2"
        >
          <span v-html="sanitize(marked(item.subtitle))" />
        </div>
      </div>
      <div class="flex flex-col mt-4">
        <span v-html="sanitize(marked(item.description))" />
        <BaseList
          v-if="item.details"
          :list="item.details"
          class="mt-2"
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
  name: 'TimelineItem',
  props: {
    item: {
      type: Object,
      default: () => (
        {
          id: 0,
          title: '',
          institution: '',
          institutionLogo: {
            image: '',
            url: '',
          },
          description: '',
          dates: {
            start: '',
            end: '',
          },
          details: {
            type: '',
            children: [],
          },
        }),
    },
    showLine: Boolean,
  },
  methods: {
    marked,
    sanitize,
  },
});
</script>

<style scoped>
ol.list-decimal >>> ul {
  @apply list-disc ml-8;
}

ol.list-decimal {
  @apply font-semibold;
}

ol.list-decimal >>> p, ol.list-decimal >>> ul {
  @apply font-normal;
}
</style>
