<template>
  <div class="rounded bg-white p-8
  flex-col xl:w-5/6 w-full mx-auto shadow-md">
    <div class="flex items-baseline xs:items-center
    text-left text-blue-700 font-bold mb-2
    md:text-5xl text-4xl">
      laymonage
      <div class="font-normal md:text-3xl text-2xl xs:text-right">
        <span class="text-gray-500 ml-4 mr-2">is</span>
        <span>Sage M. Abdullah</span>
      </div>
    </div>
    <div class="text-gray-700 text-left text-2xl mt-6 mb-8">
      <span class="font-semibold">Computer Science</span>
      student at Universitas Indonesia
      and an <span class="font-semibold">open source</span> enthusiast.
    </div>
    <div class="flex items-center">
      <a href="https://github.com/laymonage">
        <GitHubAlt class="social-icon" />
      </a>
      <a href="https://linkedin.com/in/laymonage">
        <LinkedInAlt class="social-icon" />
      </a>
      <a href="https://twitter.com/laymonage">
        <TwitterAlt class="social-icon" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GitHubAlt from '@/assets/svg/vue-unicons/github-alt.svg';
import LinkedInAlt from '@/assets/svg/vue-unicons/linkedin-alt.svg';
import TwitterAlt from '@/assets/svg/vue-unicons/twitter-alt.svg';

export default Vue.extend({
  name: 'Contact',
  components: {
    GitHubAlt,
    LinkedInAlt,
    TwitterAlt,
  },
});
</script>

<style scoped>
.social-icon {
  @apply fill-current text-blue-700 w-6 h-6 mr-3;
}
</style>
