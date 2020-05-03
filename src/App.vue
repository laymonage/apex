<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  @apply font-sans text-center text-gray-900 antialiased;
}

#nav {
  @apply p-2 m-8;
}

#nav a {
  @apply font-bold text-blue-900;
}

#nav a.router-link-exact-active {
  @apply text-blue-700;
}
</style>
