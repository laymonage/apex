<template>
  <BaseContainer>
    <BaseCard class="w-fit">
      <div class="flex items-baseline text-blue-700 font-bold mb-2 md:text-5xl text-4xl">
        404
        <div class="font-normal md:text-3xl text-2xl ph:text-xl">
          <span class="text-gray-500 mx-2">—</span>
          <span>Not Found</span>
        </div>
      </div>
      <div class="flex flex-col text-left text-gray-700 md:text-2xl text-xl ph:text-lg mt-6">
        <span>Sorry, but I can't seem to find what you're looking for :(</span>
        <span class="mt-4">
          <router-link class="text-blue-700" to="/">Click here</router-link>
          to go back to the homepage.
        </span>
      </div>
    </BaseCard>
  </BaseContainer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NotFound',
});
</script>

<style scoped>
.w-fit {
  width: fit-content;
}
</style>
