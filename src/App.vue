<template>
  <div id="app" class="flex flex-col items-center">
    <Navbar />
    <div id="content" class="flex w-full min-h-screen items-center">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Navbar,
  },
});
</script>

<style>
#app {
  @apply font-sans text-gray-900 antialiased;
}
</style>
