<template>
  <BaseCard>

    <template v-slot:header>
      Education
    </template>

    <Timeline :items="education" />

  </BaseCard>
</template>

<script lang="ts">
import Vue from 'vue';
import Timeline from '@/components/profile/Timeline.vue';
import Education from '@/data/education';

export default Vue.extend({
  name: 'Education',
  components: {
    Timeline,
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
