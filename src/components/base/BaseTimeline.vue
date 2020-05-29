<template>
  <ol>
    <li
      v-for="(item, itemIndex) in items"
      v-bind:key="item.id"
      class="flex flex-col md:flex-row-reverse justify-between text-gray-700">
      <div
        class="flex flex-col items-center mb-8 md:mb-0 md:w-3/12 lg:w-2/12">
        <div class="mb-4 md:mb-2">
          <a :href="item.institutionLogo.url">
            <BaseImage
              :image="item.institutionLogo.image"
              :class="item.institutionLogo.class"
              :imgClass="['w-1/2', 'ph:w-3/4', 'md:w-auto', 'mx-auto']"
              :componentClass="['w-1/2', 'md:w-4/6', 'xl:w-7/12', 'mx-auto']" />
          </a>
        </div>
        <div class="flex items-center">
          <span>{{ item.dates.start }}</span>
          <span v-if="item.dates.end !== item.dates.start">
            <span class="mx-1">-</span>
            <span>{{ item.dates.end }}</span>
          </span>
        </div>
        <span v-if="item.dates.expected">(expected)</span>
        <div
          v-if="itemIndex !== items.length - 1"
          class="hidden md:flex w-1/4 h-full">
          <div class="border-l border-solid border-4 mx-auto my-2"></div>
        </div>
      </div>
      <div class="flex flex-col items-start md:w-3/4 md:mr-8 md:mb-8">
        <div class="flex flex-col">
          <div class="flex flex-col text-xl ph:text-lg">
            <span>
              <span v-html="sanitize(marked(item.title))"></span>
            </span>
            <span>{{ item.institution }}</span>
          </div>
          <div v-if="item.subtitle" class="mt-2">
            <span v-html="sanitize(marked(item.subtitle))" />
          </div>
        </div>
        <div class="flex flex-col mt-4">
          <span>
            {{ item.description }}
          </span>
          <BaseList
            :list="item.details"
            v-if="item.details"
            class="mt-2" />
        </div>
      </div>
      <div
        v-if="itemIndex !== items.length - 1"
        class="block md:hidden w-full">
        <div class="border-b border-solid border mx-auto my-8"></div>
      </div>
    </li>
  </ol>
</template>

<script lang="ts">
import Vue from 'vue';
import marked from 'marked';
import { sanitize } from 'dompurify';

export default Vue.extend({
  name: 'BaseTimeline',
  components: {},
  methods: {
    marked,
    sanitize,
  },
  props: ['items'],
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
