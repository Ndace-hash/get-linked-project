<template>
  <footer class="bg-footer py-16 md:px-16">
    <div class="flex gap-10 px-12 flex-col md:flex-row w-full">
      <div class="w-1/3 me-6">
        <div class="w-[150px]">
          <img
            src="@assets/get_linked.svg"
            alt="getlinked logo"
            class="w-full"
          />
        </div>
        <p class="mt-4 text-desktop-paragraph">
          Getlinked Tech Hackathon is a technology innovation program
          established by a group of organizations with the aim of showcasing
          young and talented individuals in the field of technology
        </p>
        <div class="mt-10">
          <RouterLink
            to="/"
            class="pe-2 py-1 border-r border-r-secondary-minor capitalize"
            >Terms of Use
          </RouterLink>
          <RouterLink
            to="/"
            class="ps-2 py-1 border-l border-l-secondary-minor capitalize"
            >Privacy Policy
          </RouterLink>
        </div>
      </div>
      <div class="w-1/3">
        <h3
          class="font-bold text-desktop-heading-3 text-secondary-minor capitalize"
        >
          Useful Links
        </h3>
        <div class="flex flex-col gap-4 py-4">
          <RouterLink to="/" class="capitalize">Overview</RouterLink>
          <RouterLink to="/" class="capitalize">Timeline</RouterLink>
          <RouterLink to="/" class="capitalize">FAQs</RouterLink>
          <RouterLink to="/register" class="capitalize">Register</RouterLink>
        </div>
        <div class="flex items-center gap-4">
          <h4 class="text-secondary-minor">Follow us</h4>
          <div class="flex items-center gap-4">
            <a href="#"
              ><img src="@assets/images/instagram.svg" alt="instagram logo"
            /></a>
            <a href="#"
              ><img src="@assets/images/twitter.svg" alt="twitter logo"
            /></a>
            <a href="#"
              ><img src="@assets/images/facebook.svg" alt="facebook logo"
            /></a>
            <a href="#"
              ><img src="@assets/images/linkedin.svg" alt="linkedin logo"
            /></a>
          </div>
        </div>
      </div>
      <div>
        <h3
          class="font-bold text-desktop-heading-3 text-secondary-minor capitalize"
        >
          contact us
        </h3>
        <div class="flex flex-col gap-4 mt-4">
          <a
            href="tel:+23467981819"
            class="flex items-center gap-4 text-desktop-paragraph"
            ><img
              src="@/assets/images/phone.svg"
              alt="phone icon"
              class="w-[14px]"
            /><span>+234 679 81819</span></a
          >
          <div class="flex items-start gap-4 text-desktop-paragraph">
            <img
              src="@assets/images/location.svg"
              alt="location pointer icon"
            />
            <p>27,Alara Street <br />Yaba 100012 <br />Lagos State</p>
          </div>
        </div>
      </div>
    </div>
    <p class="w-full text-center mt-12">
      All rights reserved. &copy; getlinked Ltd.
    </p>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped></style>
