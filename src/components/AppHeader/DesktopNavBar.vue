<template>
  <header
    :class="['hidden lg:flex justify-between items-center border-b  border-opacity-20 px-16 h-[90px] pt-8 pb-2', $route.name != 'home' ? 'border-transparent' : 'border-white']">
    <RouterLink to="/" class="overflow-hidden w-[150px]">
      <img src="@assets/get_linked.svg" alt="Get linked logo" class="w-full" />
    </RouterLink>
    <nav class="flex gap-5 px-4 items-center">
      <a href="#timeline" class="capitalize text-desktop-paragraph font-medium">Timeline</a>
      <a href="#intro" class="capitalize text-desktop-paragraph font-medium">Overview</a>
      <a href="#FAQ" class="capitalize text-desktop-paragraph font-medium">FAQs</a>
      <RouterLink to="/contact"
        :class="['capitalize text-desktop-paragraph font-medium', $route.name == 'contact' ? 'bg-gradient-to-l from-primary-one to-primary-two bg bg-clip-text text-transparent' : 'text-white']">
        Contact</RouterLink>
      <RouterLink to="/register"
        :class="['capitalize text-desktop-paragraph  from-primary-one to-primary-two font-medium text-center rounded-sm p-[2px] w-[100px] h-[35px] cursor-pointer', $route.name == 'register' ? 'bg-gradient-to-t ' : 'bg-gradient-to-r']">
        <div
          :class="['w-full h-full flex items-center justify-center', $route.name == 'register' ? 'bg-secondary-major' : 'bg-transparent']">
          Register
        </div>
      </RouterLink>
    </nav>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
