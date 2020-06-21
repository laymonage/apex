<template>
  <div
    id="app"
    class="flex flex-col items-center font-sans antialiased"
    :class="{'theme-dark': dark}"
  >
    <TheNavbar
      :nav-links="navLinks"
      :is-dark="dark"
      @dark="dark = !dark"
    />
    <div
      id="content"
      class="flex w-full min-h-screen items-center
      bg-gray-100 text-gray-700
      dark:bg-gray-900 dark:text-gray-300"
    >
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TheNavbar from '@/components/TheNavbar.vue';

export default Vue.extend({
  name: 'App',
  components: {
    TheNavbar,
  },
  data() {
    return {
      navLinks: [
        { name: 'Home', to: '/' },
        { name: 'Profile', to: '/profile' },
        { name: 'Projects', to: '/projects' },
      ],
      dark: false,
    };
  },
  watch: {
    dark(value) {
      localStorage.dark = value;
    },
  },
  mounted() {
    if (localStorage.dark) {
      this.dark = localStorage.dark === 'true';
    } else {
      this.dark = (
        window.matchMedia
        && window.matchMedia('(prefers-color-scheme: dark)').matches
      );
    }
  },
});
</script>
