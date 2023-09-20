<template>
    <header
        class="hidden lg:flex justify-between items-center border-b border-white border-opacity-20 px-16 h-[90px] pt-8 pb-2">
        <div class="overflow-hidden w-[150px]">
            <img src="../../assets/get_linked.svg" alt="Get linked logo" class="w-full">
        </div>
        <nav class="flex gap-5 px-14 items-center">
            <a href="#timeline" class="capitalize text-desktop-paragraph font-medium">Timeline</a>
            <a href="#intro" class="capitalize text-desktop-paragraph font-medium">Overview</a>
            <a href="#FAQ" class="capitalize text-desktop-paragraph font-medium">FAQs</a>
            <RouterLink to="/contact" class="capitalize text-desktop-paragraph font-medium">Contact</RouterLink>
            <RouterLink to="/register"
                class="capitalize text-desktop-paragraph bg-gradient-to-r from-primary-one to-primary-two font-medium text-center rounded-sm py-2 px-10 cursor-pointer">
                Register</RouterLink>
        </nav>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>