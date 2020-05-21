<template>
  <BaseCard>
    <div class="flex items-baseline xs:items-center
    text-blue-700 mb-8 text-5xl ph:text-4xl">
      Education
    </div>
    <div class="flex flex-col md:flex-row-reverse text-gray-700">
      <div class="flex flex-col items-center mb-8 md:mb-0 md:w-1/4">
        <div class="mb-4">
          <img
            alt="Faculty of Computer Science, Universitas Indonesia"
            src="../assets/img/csui_horizontal_transparent_english.png"
            class="w-1/2 ph:w-3/4 md:w-full mx-auto">
        </div>
        <div class="flex items-center">
          <span>Jun 2017</span><span class="mx-1">-</span><span>Aug 2021</span>
        </div>
        <span>(expected)</span>
      </div>
      <div class="flex flex-col items-start md:w-3/4 md:mr-8">
        <div class="flex flex-col">
          <div class="flex flex-col text-xl ph:text-lg">
            <span class="font-semibold">Computer Science Undergraduate</span>
            <span>Universitas Indonesia</span>
          </div>
          <div class="mt-2">
            <span class="font-semibold">3.93/4.00 CGPA</span>
          </div>
        </div>
        <div class="flex flex-col mt-8">
          <span>Relevant courses taken:</span>
          <span>
            Web Design and Programming, Software Engineering, Data Structures and Algorithms,
            Databases, Operating Systems, Computer Networks, Mobile Programming, Machine Learning,
            Natural Language Processing, Image Processing, Data Science and Analytics.
          </span>
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Education',
  components: {},
});
</script>

<style scoped>
</style>
