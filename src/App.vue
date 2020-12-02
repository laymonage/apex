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
      text-gray-700 dark:text-gray-300
      transition duration-300 ease-out"
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
import Background from '@/assets/img/bg.svg';

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
      background: Background,
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
        { vmid: 'og:image', property: 'og:image', content: `${process.env.VUE_APP_HOST}${Logo}` },
        { vmid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      ],
    };
  },
});
</script>

<style scoped>
#content::before {
  @apply bg-gray-100 dark:bg-gray-900 fixed top-0 left-0
  w-screen h-screen bg-cover bg-center;
  background-image: url('~@/assets/img/bg.svg');
  content: '';
  z-index: -1;
  will-change: transform;
}
</style>
