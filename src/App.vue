<template>
  <div id="app" class="flex flex-col items-center">
    <TheNavbar />
    <div id="content" class="flex w-full min-h-screen items-center bg-gray-100">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TheNavbar from '@/components/base/TheNavbar.vue';

export default Vue.extend({
  name: 'App',
  components: {
    TheNavbar,
  },
});
</script>

<style>
#app {
  @apply font-sans text-gray-900 antialiased;
}
</style>
