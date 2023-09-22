<template>
  <div ref="navbar" class="navbar">
    <MobileNavBar />
    <DesktopNavBar />
  </div>
</template>

<script setup lang="ts">
import MobileNavBar from "./MobileNavBar.vue";
import DesktopNavBar from "./DesktopNavBar.vue";
import { ref } from 'vue'

const navbar = ref<HTMLDivElement | null>(null)
const body = document.body;
const lastScroll = ref(0)
// logic for sticky navbar
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY

  if (currentScroll <= 0) {
    body.classList.remove('scroll-down')
    body.classList.remove('scroll-up')
  }
  if (currentScroll > lastScroll.value && !body.classList.contains('scroll-down')) {
    body.classList.remove('scroll-up')
    body.classList.add('scroll-down')
  }
  if (currentScroll < lastScroll.value && body.classList.contains('scroll-down')) {
    body.classList.remove('scroll-down')
    body.classList.add('scroll-up')
  }

  lastScroll.value = currentScroll
})
</script>

<style>
.navbar {
  @apply z-10 fixed left-0 right-0 top-0 bg-transparent duration-300 ease-in
}

body.scroll-up .navbar {
  @apply shadow-md bg-secondary-major
}

body.scroll-down .navbar {
  @apply -translate-y-full
}
</style>
