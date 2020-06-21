<template>
  <BaseRoundedButton
    :class="{'button-hidden': !showButton}"
    class="transition-all duration-300 button z-10 fixed bottom-right
    shadow-lg bg-blue-700 text-white dark:bg-blue-900 focus:outline-none"
  >
    <Up
      class="fill-current w-16 h-16"
      @click="scrollToTop"
    />
  </BaseRoundedButton>
</template>

<style scoped>
.button {
  transform: translate3d(0, 0, 0);
}

.button.button-hidden {
  @apply shadow-none;
  transform: translate3d(0, 150%, 0);
}

.bottom-right {
  bottom: 1rem;
  right: 1rem;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Up from '@/assets/img/vue-unicons/angle-up.svg?cmp';
import { scrollToTarget } from '@/utils/route-utils';

export default Vue.extend({
  name: 'TheScrollTopButton',
  components: {
    Up,
  },
  data() {
    return {
      showButton: false,
      lastScrollPosition: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    scrollToTop() {
      scrollToTarget();
    },
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      this.showButton = currentScrollPosition > 256;
    },
  },
});
</script>
