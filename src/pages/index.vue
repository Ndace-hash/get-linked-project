<template>
    <div class="w-full max-w-7xl mx-auto">
        <AppHeader />
        <AppHero />
        <AppIntro />
        <AppRules />
    </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader/index.vue'
import AppHero from '../components/AppHero/index.vue'
import AppIntro from '../components/AppIntro/index.vue'
import AppRules from '@components/AppRules/index.vue'
</script>

<style lang="scss" scoped></style>