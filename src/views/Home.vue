<template>
  <BaseContainer>
    <Contact />
  </BaseContainer>
</template>

<script>
import Vue from 'vue';
import Contact from '@/components/Contact.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Contact,
  },
});
</script>
