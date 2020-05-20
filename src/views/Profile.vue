<template>
  <div class="container mx-auto px-4 my-32 items-center">
    <Education />
    <WorkExperiences class="mt-16" />
  </div>
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
