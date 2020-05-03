<template>
  <div id="app" class="flex flex-col items-center">
    <div id="nav" class="z-10 fixed p-8 mb-4">
      <router-link to="/">Home</router-link> |
      <router-link to="/profile">Profile</router-link>
    </div>
    <div id="content" class="flex w-full min-h-screen items-center">
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  @apply font-sans text-center text-gray-900 antialiased;
}

#nav a {
  @apply font-bold text-blue-900;
}

#nav a.router-link-exact-active {
  @apply text-blue-700;
}
</style>
