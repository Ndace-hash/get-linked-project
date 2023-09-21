<template>
  <section id="rewards " class="flex flex-col items-center py-6 relative">
    <img src="@assets/images/prize_bg.png" alt="prize background image"
      class="absolute inset-0 opacity-[19%] h-full w-full">
    <div class="lg:self-end lg:mb-12 w-1/2 lg:w-2/5">
      <h2 class="font-clash-display text-desktop-subtext text-center leading-tight lg:text-left pt-12">
        Prizes and <br /><span class="text-secondary-minor">Rewards</span>
      </h2>
      <p class="text-center px-3 mt-2 lg:text-left lg:px-0">
        Highlight of the prizes or rewards for winners and for participants.
      </p>
    </div>
    <div class="flex flex-col items-center mt-4 lg:mt-0 pt4 gap-8 lg:flex-row justify-center">
      <div class="w-[80%] lg:w-[50%] ps-16 flex items-center justify-center lg:-translate-y-12">
        <img src="@assets/images/trophy.svg" alt="A trophy" class="w-full" />
      </div>
      <div class="flex scale-50 gap-4 lg:scale-[0.70] lg:w-1/2 items-center">
        <div
          class="border-2 border-secondary-minor bg-secondary-minor bg-opacity-10 rounded-md flex flex-col items-center h-[260px] w-[200px] relative pt-[120px]">
          <img src="@assets/images/silver_medal.svg" alt="silver medal" class="absolute top-[-35%] scale-95" />
          <h3 class="font-bold text-desktop-subtext leading-tight text-center mb-3">
            <span class="text-desktop-heading-2">2nd</span> <br />Runner
          </h3>
          <h4 class="text-center font-bold text-secondary-minor text-[24px]">
            N300,000
          </h4>
        </div>
        <div
          class="border-2 border-primary-two bg-primary-two bg-opacity-10 rounded-md flex flex-col items-center h-[280px] w-[200px] relative pt-[120px]">
          <img src="@assets/images/gold_medal.svg" alt="gold medal" class="absolute top-[-35%] scale-[1.3]" />
          <h3 class="font-bold text-desktop-subtext leading-tight text-center mb-3">
            <span class="text-desktop-heading-2">1st</span> <br />Runner
          </h3>
          <h4 class="text-center font-bold text-primary-two text-[24px]">
            N400,000
          </h4>
        </div>
        <div
          class="border-2 border-secondary-minor bg-secondary-minor bg-opacity-10 rounded-md flex flex-col items-center h-[260px] w-[200px] relative pt-[120px]">
          <img src="@assets/images/bronze_medal.png" alt="bronze medal" class="absolute top-[-35%] scale-95" />
          <h3 class="font-bold text-desktop-subtext leading-tight text-center mb-3">
            <span class="text-desktop-heading-2">3rd</span> <br />Runner
          </h3>
          <h4 class="text-center font-bold text-secondary-minor text-[24px]">
            N150,000
          </h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
