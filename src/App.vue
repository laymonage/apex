<template>
  <div
    id="app"
    class="flex flex-col items-center"
  >
    <TheNavbar :nav-links="navLinks" />
    <div
      id="content"
      class="flex w-full min-h-screen items-center bg-gray-100"
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
    };
  },
});
</script>

<style>
#app {
  @apply font-sans text-gray-900 antialiased;
}
</style>
