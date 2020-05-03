<template>
  <div class="rounded bg-white p-8
  flex-col xl:w-3/4 w-full mx-auto shadow-md">
    <div class="mb-8">
      <div class="flex items-end text-left text-blue-700 font-bold text-xl mb-2">
        Sage M. Abdullah
        <div class="font-normal text-lg xs:text-right">
          <span class="text-gray-500 ml-2">a.k.a. </span>
          <span>laymonage</span>
        </div>
      </div>
      <p class="text-gray-700 text-left">
        <span class="font-semibold">Computer Science</span>
        student at Universitas Indonesia
        and an <span class="font-semibold">open source</span> enthusiast.
      </p>
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
.social-icon {
  @apply fill-current text-blue-700 w-6 h-6 mr-3;
}
</style>
