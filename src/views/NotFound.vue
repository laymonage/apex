<template>
  <BaseContainer>
    <BaseCard
      class="w-fit"
      header-class="flex flex-row items-baseline"
    >
      <template v-slot:header>
        <div class="flex flex-row items-baseline">
          <span class="font-bold">404</span>
        </div>
      </template>

      <template v-slot:subtitle>
        <span class="text-gray-500 mx-2">—</span>
        <span>Not Found</span>
      </template>

      <div class="flex flex-col text-left text-gray-700 md:text-2xl text-xl ph:text-lg mt-6">
        <span>
          Sorry, but I can't seem to find what you're looking for
          <span class="whitespace-no-wrap">:(</span>
        </span>
        <span class="mt-4">
          <router-link to="/">Click here</router-link>
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
