<template>
  <div id="nav" class="z-10 md:fixed p-8 mb-4">
    <router-link to="/">Home</router-link> |
    <router-link to="/profile">Profile</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navbar',
  components: {},
});
</script>

<style scoped>
@media (max-height: 540px) {
  #nav {
    position: initial;
  }
}

#nav a {
  @apply font-bold text-blue-900;
}

#nav a.router-link-exact-active {
  @apply text-blue-700;
}
</style>
