<template>
  <div
    class="flex navbar z-10 fixed p-4 bg-white shadow-md
    transition-all duration-300 ease-out"
    :class="{ 'navbar-hidden': !showNavbar }">
    <router-link to="/">Home</router-link>
    <router-link class="ml-4" to="/profile">Profile</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

function onScroll() {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollPosition < 0) {
    return;
  }
  if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
    return;
  }
  this.showNavbar = currentScrollPosition < this.lastScrollPosition;
  this.lastScrollPosition = currentScrollPosition;
}

export default Vue.extend({
  name: 'Navbar',
  components: {},
  data() {
    return {
      showNavbar: true,
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
    onScroll,
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
