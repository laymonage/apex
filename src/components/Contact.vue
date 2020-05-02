<template>
  <div class="container mx-auto px-4">
    <div class="border border-gray-400 rounded bg-white p-8 flex-col w-full lg:w-3/4 mx-auto">
      <div class="mb-8">
        <div class="text-left text-gray-900 font-bold text-xl mb-2">
          Sage M. Abdullah
        </div>
        <p class="text-gray-700 text-left">
          Computer Science student at Universitas Indonesia.
        </p>
      </div>
      <div class="flex items-center">
        <a href="https://github.com/laymonage" class="fill-current text-blue-700">
          <GitHubAlt class="w-6 h-6" />
        </a>
        <a href="https://linkedin.com/in/laymonage" class="fill-current text-blue-700">
          <LinkedInAlt class="w-6 h-6 ml-3" />
        </a>
        <a href="https://twitter.com/laymonage" class="fill-current text-blue-700">
          <TwitterAlt class="w-6 h-6 ml-3" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GitHubAlt from '@/assets/svg/vue-unicons/github-alt.svg';
import LinkedInAlt from '@/assets/svg/vue-unicons/linkedin-alt.svg';
import TwitterAlt from '@/assets/svg/vue-unicons/twitter-alt.svg';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    GitHubAlt,
    LinkedInAlt,
    TwitterAlt,
  },
});
</script>

<style scoped>
</style>
