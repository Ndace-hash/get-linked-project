<template>
  <div class="w-full overflow-x-hidden min-h-screen max-w-7xl mx-auto">
    <AppHeader />
    <RouterView />
  </div>
</template>

<script setup>
import AppHeader from "@components/AppHeader/index.vue";
</script>

<style>
body {
  @apply bg-secondary-major text-white font-montserrat overflow-x-hidden w-screen;
}
</style>
