<template>
  <BaseCard>

    <template v-slot:header>
      Work Experiences
    </template>

    <BaseTimeline :items="workExperiences" />

  </BaseCard>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseTimeline from '@/components/base/BaseTimeline.vue';
import WorkExperiences from '@/data/work-experiences';

export default Vue.extend({
  name: 'WorkExperiences',
  components: {
    BaseTimeline,
  },
  data() {
    return {
      workExperiences: WorkExperiences.data,
    };
  },
});
</script>

<style scoped>
</style>
