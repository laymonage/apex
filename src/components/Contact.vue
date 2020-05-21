<template>
  <BaseCard>

    <template v-slot:header>
      <span class="font-bold">laymonage</span>
    </template>

    <template v-slot:subtitle>
      <span class="text-gray-500 sm:ml-4 mr-2">is</span>
      <span>Sage M. Abdullah</span>
    </template>

    <div class="text-gray-700 text-left md:text-2xl text-xl ph:text-lg mb-8">
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

  </BaseCard>
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
