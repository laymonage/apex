<template>
  <header
    class="sm:flex sm:justify-between sm:items-center
    navbar z-10 fixed w-full py-3
    bg-white dark:bg-gray-800 dark:text-blue-200 shadow-md
    transition-all duration-300 ease-out"
    :class="{ 'navbar-hidden': !showNavbar }"
  >
    <div class="mx-4 flex items-center justify-between flex-grow">
      <router-link
        to="/"
        tabindex="-1"
        class="focus:outline-none"
      >
        <Logo
          class="fill-current stroke-current w-10 h-10
          text-blue-700 dark:text-blue-100"
        />
      </router-link>
      <div
        class="flex items-center justify-between
        text-blue-700 dark:text-blue-200"
      >
        <button
          type="button"
          class="focus:outline-none
          focus:text-blue-600 hover:text-blue-600
          dark:focus:text-blue-100 dark:hover:text-blue-100"
          @click="$emit('dark')"
        >
          <component
            :is="darkToggle"
            class="fill-current w-6 h-6"
          />
        </button>
        <button
          type="button"
          class="sm:hidden ml-4 focus:outline-none
          focus:text-blue-600 hover:text-blue-600
          dark:focus:text-blue-100 dark:hover:text-blue-100"
          @click="isOpen = !isOpen"
        >
          <component
            :is="navToggle"
            class="fill-current w-8 h-8"
          />
        </button>
      </div>
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
        :class="{'router-link-exact-active': $route.name === link.name}"
        class="p-2 xs:mt-2 xs:first:mt-1 sm:ml-4 sm:first:ml-0 block rounded
        focus:outline-none focus:bg-gray-200 hover:bg-gray-200
        dark:focus:bg-blue-900 dark:hover:bg-blue-900"
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
import Moon from '@/assets/img/material/brightness_2.svg?cmp';
import Sun from '@/assets/img/vue-unicons/sun.svg?cmp';

export default Vue.extend({
  name: 'TheNavbar',
  components: {
    Logo,
    Times,
    Bars,
    Moon,
    Sun,
  },
  props: {
    navLinks: {
      type: Array,
      default: () => [{ name: 'Home', to: '/' }],
    },
    isDark: Boolean,
  },
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      isOpen: false,
    };
  },
  computed: {
    navToggle(): string {
      return this.isOpen ? 'Times' : 'Bars';
    },
    darkToggle(): string {
      return this.isDark ? 'Moon' : 'Sun';
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

.theme-dark .navbar a {
  @apply text-blue-200;
}

.navbar a.router-link-exact-active {
  @apply text-blue-600;
}

.theme-dark .navbar a.router-link-exact-active {
  @apply text-blue-100;
}

</style>
