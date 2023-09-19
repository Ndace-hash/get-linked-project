<template>
    <section id="timeline" class="py-8">
        <div class="flex flex-col items-center">
            <h2 class="font-clash-display text-desktop-heading-2">Timeline</h2>
            <p class="text-center w-[400px]">Here is the breakdown of the time we anticipate
                using for the upcoming event.</p>
        </div>
        <Timeline />
    </section>
</template>

<script setup>
import Timeline from './Timeline.vue';
</script>

<style lang="scss" scoped></style>