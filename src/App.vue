<template>
  <div
    id="app"
    class="flex flex-col items-center font-sans antialiased"
    :class="{'dark': dark}"
  >
    <TheNavbar
      :nav-links="navLinks"
      :is-dark="dark"
      @dark="dark = !dark"
    />
    <div
      id="content"
      class="flex w-full min-h-screen items-center
      bg-gray-100 text-gray-700
      dark:bg-gray-900 dark:text-gray-300
      transition-all duration-300 ease-out"
    >
      <router-view />
    </div>
    <TheScrollTopButton />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TheNavbar from '@/components/TheNavbar.vue';
import TheScrollTopButton from '@/components/TheScrollTopButton.vue';
import { routes } from '@/router/routes';
import Contact from '@/data/contact';
import Logo from '@/assets/img/logo.png';

export default Vue.extend({
  name: 'App',
  components: {
    TheNavbar,
    TheScrollTopButton,
  },
  data() {
    return {
      navLinks: routes.filter((route) => route.path !== '/*'),
      dark: false,
    };
  },
  watch: {
    dark(value) {
      localStorage.dark = value;
    },
  },
  created() {
    if (localStorage.dark) {
      this.dark = localStorage.dark === 'true';
    } else {
      this.dark = (
        window.matchMedia
        && window.matchMedia('(prefers-color-scheme: dark)').matches
      );
    }
  },
  metaInfo() {
    return {
      meta: [
        { vmid: 'title', name: 'title', content: Contact.alias },
        { vmid: 'description', name: 'description', content: Contact.metaDescription },
        { vmid: 'og:type', property: 'og:type', content: 'website' },
        { vmid: 'og:title', property: 'og:title', content: Contact.alias },
        { vmid: 'og:description', property: 'og:description', content: Contact.metaDescription },
        { vmid: 'og:image', property: 'og:image', content: `${Logo}` },
        { vmid: 'twitter:card', property: 'twitter:card', content: 'summary' },
      ],
    };
  },
});
</script>
