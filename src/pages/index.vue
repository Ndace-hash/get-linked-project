<template>
    <div class="w-full max-w-7xl mx-auto">
        <AppHeader />
        <AppHero />
        <AppIntro />
        <AppRules />
        <AppKeyAttributes />
        <AppFAQ />
        <AppTimeline />
        <AppPrize />
    </div>
</template>

<script setup>
import AppHeader from '@components/AppHeader/index.vue'
import AppHero from '@components/AppHero/index.vue'
import AppIntro from '@components/AppIntro/index.vue'
import AppRules from '@components/AppRules/index.vue'
import AppKeyAttributes from '@components/AppKeyAttributes/index.vue'
import AppFAQ from '@components/AppFAQ/index.vue'
import AppTimeline from '@components/AppTimeline/index.vue'
import AppPrize from '@components/AppPrize/index.vue'
</script>

<style lang="scss" scoped></style>