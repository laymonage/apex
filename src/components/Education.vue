<template>
  <div class="rounded bg-white p-8
  flex-col xl:w-11/12 w-full mx-auto shadow-md">
    <div class="flex items-baseline xs:items-center
    text-left text-blue-700 mb-8
    md:text-5xl text-4xl">
      Education
    </div>
    <div class="flex text-gray-700">
      <div class="flex flex-col items-start text-left w-9/12 lg:mr-8 mr-8">
        <div class="flex flex-col mb-8">
          <div class="flex flex-col text-xl">
            <span class="font-semibold">Computer Science Undergraduate</span>
            <span>Universitas Indonesia</span>
          </div>
          <div class="mt-2">
            <span class="font-semibold">3.93/4.00 CGPA</span> with
            <span class="font-semibold">2-year</span> experience as a
            <span class="font-semibold">Teaching Assistant</span>.
          </div>
        </div>
        <div class="flex flex-col">
          <span>Relevant courses taken:</span>
          <span>
            Web Design and Programming, Software Engineering, Data Structures and Algorithms,
            Databases, Operating Systems, Computer Networks, Mobile Programming, Machine Learning,
            Natural Language Processing, Image Processing, Data Science and Analytics.
          </span>
        </div>
      </div>
      <div class="flex flex-col items-center w-3/12">
        <div class="mb-4">
          <img
            alt="Faculty of Computer Science, Universitas Indonesia"
            src="../assets/img/csui_horizontal_transparent_english.png" class="md:block hidden">
          <img
            alt="Faculty of Computer Science, Universitas Indonesia"
            src="../assets/img/csui_vertical_english.png" class="md:hidden block">
        </div>
        <div class="flex items-center">
          <span>Jun 2017</span><span class="lg:mx-1">-</span><span>Aug 2021</span>
        </div>
        <span>(expected)</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Contact',
  components: {},
});
</script>

<style scoped>
</style>
