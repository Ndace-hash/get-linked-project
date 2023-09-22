<template>
  <div class="flex flex-col lg:items-center mt-14 px-10 relative pb-4">
    <img src="@assets/images/purple_star.svg" alt="star"
      class="absolute -top-2 left-[20%] w-[10px] lg:w-[20px] lg:-top-[3%] lg:left-[20%]">
    <img src="@assets/images/white_star.svg" alt="star"
      class="absolute top-[46%] right-[20%] w-[10px] lg:w-[20px] lg:top-[37%] lg:right-[20%]">
    <img src="@assets/images/gray_star.svg" alt="star"
      class="absolute bottom-[-1%] left-[4%] w-[10px] lg:w-[20px] lg:bottom-[10%] lg:left-[13%]">



    <DesktopTimelineCard v-for="(t, index) in timeline" :key="index" :activity="t" :index="index"
      :is-last="timeline.length - 1 == index ? true : false" class="hidden lg:flex" />

    <MobileTImelineCard v-for="(t, index) in timeline" :key="index" :activity="t" :index="index"
      class="block lg:hidden" />
  </div>
</template>

<script setup>
import DesktopTimelineCard from "./DesktopTimelineCard.vue";
import MobileTImelineCard from "./MobileTImelineCard.vue";

const timeline = [
  {
    activity: "Hackthon Announcement",
    description:
      "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
    date: "November 18, 2023",
  },
  {
    activity: "Teams Registration begins",
    description:
      "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
    date: "November 18, 2023",
  },
  {
    activity: "Teams Registration ends",
    description: "Interested Participants are no longer Allowed to register",
    date: "November 18, 2023",
  },
  {
    activity: "Announcement of the accepted teams and ideas",
    description:
      "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
    date: "November 18, 2023",
  },
  {
    activity: "Getlinked Hackathon 1.0 Offically Begins",
    description:
      "Accepted teams can now proceed to build their ground breaking skill driven solutions",
    date: "November 18, 2023",
  },
  {
    activity: "Demo Day",
    description:
      "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
    date: "November 18, 2023",
  },
];
</script>

<style lang="scss" scoped></style>
