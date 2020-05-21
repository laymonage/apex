<template>
  <BaseCard>

    <template v-slot:header>
      Work Experiences
    </template>

    <Timeline :items="workExperiences" />

  </BaseCard>
</template>

<script lang="ts">
import Vue from 'vue';
import Timeline from '@/components/profile/Timeline.vue';
import WorkExperiences from '@/data/work-experiences';

export default Vue.extend({
  name: 'WorkExperiences',
  components: {
    Timeline,
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
