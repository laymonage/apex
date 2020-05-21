<template>
  <BaseContainer class="my-32">
    <Education />
    <WorkExperiences class="mt-16" />
  </BaseContainer>
</template>

<script>
import Education from '@/components/Education.vue';
import WorkExperiences from '@/components/WorkExperiences.vue';

export default {
  name: 'Profile',
  components: {
    Education,
    WorkExperiences,
  },
};
</script>
