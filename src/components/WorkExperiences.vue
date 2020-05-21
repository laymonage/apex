<template>
  <BaseCard>

    <template v-slot:header>
      Work Experiences
    </template>

    <div
      v-for="(exp, expIndex) in workExperiences.data"
      v-bind:key="`exp-${expIndex}`"
      class="flex flex-col md:flex-row-reverse justify-between text-gray-700">
      <div class="flex flex-col items-center mb-8 md:mb-0 md:w-3/12 lg:w-2/12">
        <div class="mb-4 md:mb-2">
          <img
            :alt="exp.employer"
            :src="exp.employerLogo.image"
            :class="exp.employerLogo.class"
            class="w-1/2 ph:w-3/4 md:w-auto mx-auto">
        </div>
        <div class="flex items-center">
          <span>{{ exp.dates.start }}</span>
          <span v-if="exp.dates.end !== exp.dates.start">
            <span class="mx-1">-</span>
            <span>{{ exp.dates.end }}</span>
          </span>
        </div>
        <div
          v-if="expIndex !== workExperiences.data.length - 1"
          class="hidden md:flex w-1/4 h-full">
          <div class="border-l border-solid border-4 mx-auto my-2"></div>
        </div>
      </div>
      <div class="flex flex-col items-start md:w-3/4 md:mr-8 md:mb-8">
        <div class="flex flex-col">
          <div class="flex flex-col text-xl ph:text-lg">
            <span>
              <span v-html="sanitize(marked(exp.title))"></span>
            </span>
            <span>{{ exp.employer }}</span>
          </div>
        </div>
        <div class="flex flex-col mt-4">
          <span>
            {{ exp.description }}
          </span>
          <component
            v-if="exp.details"
            :is="exp.details.type === 'decimal' ? 'ol' : 'ul'"
            :class="
              exp.details.type === 'decimal' ? 'list-decimal' :
              exp.details.type === 'disc' ? 'list-disc' :
              'list-none'
            "
            class="ml-6 p-2">
            <li
              v-for="(child, childIndex) in exp.details.children"
              v-bind:key="`exp-${expIndex}-${childIndex}`"
              v-html="sanitize(marked(child))">
            </li>
          </component>
        </div>
      </div>
      <div
        v-if="expIndex !== workExperiences.data.length - 1"
        class="block md:hidden w-full">
        <div class="border-b border-solid border mx-auto my-16"></div>
      </div>
    </div>

  </BaseCard>
</template>

<script lang="ts">
import Vue from 'vue';
import marked from 'marked';
import { sanitize } from 'dompurify';
import workExperiences from '@/data/work-experiences';

export default Vue.extend({
  name: 'WorkExperiences',
  components: {},
  data() {
    return {
      workExperiences,
    };
  },
  methods: {
    marked,
    sanitize,
  },
});
</script>

<style scoped>
ul >>> a {
  @apply font-semibold text-blue-700;
}

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
