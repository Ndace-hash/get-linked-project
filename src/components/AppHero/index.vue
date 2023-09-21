<template>
  <section id="hero" class="flex flex-col items-center">
    <div
      class="flex justify-center lg:justify-end py-4 pt-8 w-max mb-6 relative lg:self-end lg:me-16"
    >
      <h3 class="font-bold capitalize text-desktop-subtext">
        Igniting a revolution in HR innovation
      </h3>
      <img
        src="@assets/underline.svg"
        alt="pen underlining"
        class="absolute bottom-1 right-1"
      />
    </div>
    <div
      class="flex flex-col items-center lg:flex-row relative w-full lg:ps-20 lg:mt-24"
    >
      <div class="flex flex-col items-center gap-2 lg:gap-4 lg:items-start">
        <div class="flex flex-col items-center lg:items-start">
          <div class="relative pt-6 w-max">
            <h1
              class="font-clash-display text-desktop-heading-2 leading-tight text-center lg:text-[48px]"
            >
              getlinked Tech
            </h1>
            <img
              src="@assets/lightbulb.svg"
              alt="A lightbulb"
              class="absolute w-6 top-0 right-2 lg:w-7"
            />
          </div>
          <div class="flex items-center">
            <h1
              class="font-clash-display text-desktop-heading-2 leading-tight text-center lg:text-[48px]"
            >
              Hackathon
              <span class="text-secondary-minor">1.0</span>
            </h1>
            <img src="@assets/chainlink.svg" class="inline w-12" />
            <img src="@assets/bang.svg" class="inline w-8" />
          </div>
        </div>
        <p class="text-mobile-paragraph text-center w-4/5 lg:text-left">
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </p>
        <RouterLink
          to="/register"
          class="bg-gradient-to-r from-primary-one to-primary-two capitalize mt-6 px-6 py-2 rounded-sm lg:px-8"
        >
          register
        </RouterLink>
        <div class="flex gap-5 mt-3 lg:mt-6">
          <p class="font-unica-one text-desktop-heading-2">
            00<span class="text-sm capitalize">h</span>
          </p>
          <p class="font-unica-one text-desktop-heading-2">
            00<span class="text-sm capitalize">m</span>
          </p>
          <p class="font-unica-one text-desktop-heading-2">
            00<span class="text-sm capitalize">s</span>
          </p>
        </div>
      </div>
      <div
        class="mt-4 w-full lg:absolute lg:bottom-0 lg:right-0 lg:w-1/2 max-w-[700px] lg:max-w-[500px]"
      >
        <img
          src="@assets/images/hero.png"
          alt="a guy wearing a VR headset"
          class="w-full"
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
