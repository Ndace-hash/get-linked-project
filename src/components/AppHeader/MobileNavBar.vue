<template>
  <header
    class="flex items-center justify-between h-[100px] border-b border-white border-opacity-20 pt-4 px-[50px] lg:hidden w-full relative"
  >
    <div class="overflow-hidden w-[100px]">
      <img src="@assets/get_linked.svg" alt="Get linked logo" class="w-full" />
    </div>
    <button
      class="flex flex-col w-[30px] gap-1"
      @click="() => (showMenu = true)"
    >
      <span
        class="h-[4px] bg-white block w-1/2 shrink-0 self-start rounded-sm"
      ></span>
      <span class="h-[4px] bg-white block w-full shrink-0 rounded-sm"></span>
      <span
        class="h-[4px] bg-white block w-1/2 shrink-0 self-end rounded-sm"
      ></span>
    </button>
    <div
      :class="[
        'absolute w-screen md:justify-center flex top-0 left-0 h-[600px] items-center bg-secondary-major z-50 ease-linear duration-300',
        showMenu ? 'translate-x-0 opacity-100 ' : 'translate-x-full opacity-50',
      ]"
    >
      <nav class="flex flex-col gap-5 px-14 md:items-center">
        <a
          href="#timeline"
          class="capitalize text-desktop-subtext font-medium"
          @click="() => (showMenu = false)"
          >Timeline</a
        >
        <a
          href="#intro"
          class="capitalize text-desktop-subtext font-medium"
          @click="() => (showMenu = false)"
          >Overview</a
        >
        <a
          href="#FAQ"
          class="capitalize text-desktop-subtext font-medium"
          @click="() => (showMenu = false)"
          >FAQs</a
        >
        <RouterLink
          to="/contact"
          class="capitalize text-desktop-subtext font-medium"
          @click="() => (showMenu = false)"
          >Contact</RouterLink
        >
        <RouterLink
          to="/"
          class="capitalize text-desktop-subtext bg-gradient-to-r from-primary-one to-primary-two font-medium text-center rounded-md py-3 px-10 mt-4"
          @click="() => (showMenu = false)"
        >
          Register</RouterLink
        >
      </nav>
      <button
        class="absolute top-8 right-12 text-4xl text-white font-bold w-[40px] h-[40px] rounded-full flex items-center justify-center bg-gradient-to-t from-primary-one to-primary-two"
        @click="() => (showMenu = false)"
      >
        <div class="bg-secondary-major rounded-full">
          <Close />
        </div>
      </button>
    </div>
  </header>
</template>

<script setup>
import Close from "../icons/Close.vue";
import { ref } from "vue";

const showMenu = ref(false);
</script>

<style scoped></style>
