<template>
  <header
    class="sm:flex sm:justify-between sm:items-center
    navbar z-10 fixed w-full py-3 bg-white shadow-md
    transition-all duration-300 ease-out"
    :class="{ 'navbar-hidden': !showNavbar }"
  >
    <div class="mx-4 flex items-center justify-between">
      <router-link to="/">
        <Logo class="w-10 h-10" />
      </router-link>
      <button
        type="button"
        class="focus:outline-none focus:text-blue-600 hover:text-blue-600 sm:hidden"
        @click="isOpen = !isOpen"
      >
        <component
          :is="toggleIcon"
          class="fill-current w-8 h-8"
        />
      </button>
    </div>
    <nav
      role="navigation"
      class="px-2 pt-2 sm:p-0 xs:mx-0 sm:mr-4 sm:flex sm:items-center"
      :class="{'hidden': !isOpen}"
    >
      <router-link
        v-for="(link, idx) in navLinks"
        :key="idx"
        :to="link.to"
        class="p-2 block rounded focus:outline-none focus:bg-gray-200 hover:bg-gray-200"
      >
        {{ link.name }}
      </router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import Logo from '@/assets/img/logo.svg?cmp';
import Bars from '@/assets/img/vue-unicons/bars.svg?cmp';
import Times from '@/assets/img/vue-unicons/times.svg?cmp';

export default Vue.extend({
  name: 'TheNavbar',
  components: {
    Logo,
    Times,
    Bars,
  },
  props: {
    navLinks: {
      type: Array,
      default: () => [{ name: 'Home', to: '/' }],
    },
  },
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      isOpen: false,
    };
  },
  computed: {
    toggleIcon(): string {
      return this.isOpen ? 'Times' : 'Bars';
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
});
</script>

<style scoped>
.navbar {
  transform: translate3d(0, 0, 0);
}

.navbar.navbar-hidden {
  @apply shadow-none;
  transform: translate3d(0, -100%, 0);
}

.navbar a {
  @apply font-bold text-blue-900;
}

.navbar a.router-link-exact-active {
  @apply text-blue-600;
}
</style>
