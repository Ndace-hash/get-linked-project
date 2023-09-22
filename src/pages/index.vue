<template>
  <div class="w-full  mx-auto relative">
    <AppRadialBackground class="absolute left-[-40%] top-[-1%] scale-90 lg:scale-100 lg:left-[7%] lg:top-[-1.5%]" />
    <AppHero />
    <AppIntro />
    <AppRadialBackground class="absolute left-[-40%] top-[14%] scale-[60%] lg:scale-100 lg:left-[7%] lg:top-[14%]" />
    <AppRadialBackground class="absolute right-[-55%] top-[17%] scale-[60%] lg:scale-100 lg:right-[-20%] lg:top-[17%]" />
    <AppRules />
    <AppRadialBackground class="absolute left-[-40%] top-[22%] scale-[60%] lg:scale-100 lg:left-[-6%] lg:top-[26%]" />
    <AppRadialBackground class="absolute right-[-50%] top-[30%] scale-[60%] lg:scale-100 lg:right-[-15%] lg:top-[30%]" />
    <AppKeyAttributes />
    <AppFAQ />
    <AppTimeline />
    <AppRadialBackground class="absolute left-[-30%] top-[59.5%] scale-[60%] lg:scale-100 lg:left-[5%] lg:top-[60%]" />
    <AppRadialBackground class="absolute right-[-50%] top-[65%] scale-[60%] lg:scale-100 lg:right-[-25%] lg:top-[62%]" />
    <AppPrize />
    <AppRadialBackground class="absolute left-[-50%] top-[67.5%] scale-[60%] lg:scale-100 lg:left-[-10%] lg:top-[68%]" />
    <AppRadialBackground
      class="absolute right-[-50%] top-[71.5%] scale-[60%] lg:scale-100 lg:right-[-15%] lg:top-[74%]" />
    <AppSponsors />
    <AppRadialBackground class="absolute left-[-50%] top-[79%] scale-[60%] lg:scale-100 lg:left-[-7%] lg:top-[87%]" />
    <AppPrivacy />
    <AppFooter />
  </div>
</template>

<script setup>
import AppHero from "@components/AppHero/index.vue";
import AppIntro from "@components/AppIntro/index.vue";
import AppRules from "@components/AppRules/index.vue";
import AppKeyAttributes from "@components/AppKeyAttributes/index.vue";
import AppFAQ from "@components/AppFAQ/index.vue";
import AppTimeline from "@components/AppTimeline/index.vue";
import AppPrize from "@components/AppPrize/index.vue";
import AppSponsors from "@components/AppSponsors/index.vue";
import AppPrivacy from "@components/AppPrivacy/index.vue";
import AppFooter from "@components/AppFooter/index.vue";
import AppRadialBackground from '@components/AppRadialBackground/index.vue'
</script>

<style lang="scss" scoped></style>
