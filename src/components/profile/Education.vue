<template>
  <BaseCard>

    <template v-slot:header>
      Education
    </template>

    <BaseTimeline :items="education" />

  </BaseCard>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseTimeline from '@/components/base/BaseTimeline.vue';
import Education from '@/data/education';

export default Vue.extend({
  name: 'Education',
  components: {
    BaseTimeline,
  },
  data() {
    return {
      education: Education.data,
    };
  },
});
</script>

<style scoped>
</style>
