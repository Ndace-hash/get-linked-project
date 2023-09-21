<template>
    <section class="flex lg:ps-20 lg:pe-20 items-start justify-around h-screen gap-4 lg:py-20">
        <div class=" hidden lg:flex flex-col justify-start gap-4 mt-20 text-desktop-heading-3">
            <h1 class="text-secondary-minor text-desktop-heading-2 font-clash-display font-semibold">Get in touch</h1>
            <p>contact <br />information</p>
            <p>27,Alara Street
                <br />Yaba 100012
                <br />Lagos State
            </p>
            <p>Call Us : 07067981819</p>
            <p>we are open from Monday-Friday
                <br />08:00am - 05:00pm
            </p>
            <div class="flex flex-col items-start gap-2 mt-6">
                <p class="text-secondary-minor">Share on</p>
                <div class="flex items-center justify-center gap-4">
                    <a href="#"><img src="@assets/images/instagram.svg" alt="instagram logo"></a>
                    <a href="#"><img src="@assets/images/twitter.svg" alt="twitter logo"></a>
                    <a href="#"><img src="@assets/images/facebook.svg" alt="facebook logo"></a>
                    <a href="#"><img src="@assets/images/linkedin.svg" alt="linkedin logo"></a>
                </div>
            </div>

        </div>
        <div
            class="px-12 py-8 lg:px-20 lg:bg-white lg:bg-opacity-[3%] lg:drop-shadow-sm w-full max-w-2xl lg:scale-90 rounded-md">
            <button
                class="bg-gradient-to-t from-primary-one to-primary-two p-[2px] w-[30px] h-[30px] rounded-full flex items-center justify-center mt-2 mb-10 lg:hidden"><span
                    class="flex items-center justify-center text-xl bg-secondary-major rounded-full w-full h-full">
                    <Chevron />
                </span></button>
            <h2 class="text-secondary-minor text-3xl font-clash-display font-semibold lg:text-xl">Question or need
                assitance?</h2>
            <h2 class="text-secondary-minor text-3xl font-clash-display font-semibold lg:text-xl">Let us know about it
            </h2>
            <p class="my-6 w-[80%] text-desktop-heading-3 lg:hidden">Email us below to any question related
                to our event</p>
            <form class="flex flex-col gap-8 py-4">
                <div>
                    <label for="team-name" class="sr-only">Team's name</label>
                    <input type="text" name="team-name" id="team-name" placeholder="Team's Name"
                        class="border border-white bg-white bg-opacity-[3%] text-white placeholder:text-white py-3 px-4 rounded-md text-lg shadow-md w-full">
                </div>
                <div>
                    <label for="topic" class="sr-only">Topic</label>
                    <input type="text" name="topic" id="topic" placeholder="Topic"
                        class="border border-white bg-white bg-opacity-[3%] text-white placeholder:text-white py-3 px-4 rounded-md text-lg shadow-md w-full">
                </div>
                <div>
                    <label for="email" class="sr-only">Email</label>
                    <input type="email" name="Email" id="email" placeholder="Email"
                        class="border border-white bg-white bg-opacity-[3%] text-white placeholder:text-white py-3 px-4 rounded-md text-lg shadow-md w-full">
                </div>
                <div>
                    <label for="message" class="sr-only">message</label>
                    <textarea name="message" id="message" placeholder="Message"
                        class="border border-white bg-white bg-opacity-[3%] text-white placeholder:text-white py-3 px-4 rounded-md text-lg shadow-md w-full h-[200px] lg:h-[150px]"></textarea>
                </div>
                <button
                    class="bg-gradient-to-r from-primary-one to-primary-two w-max self-center py-4 px-16 rounded-md capitalize">Submit</button>
            </form>
            <div class="flex flex-col items-center gap-2 mt-6 lg:hidden">
                <p class="text-secondary-minor">Share on</p>
                <div class="flex items-center justify-center gap-4">
                    <a href="#"><img src="@assets/images/instagram.svg" alt="instagram logo"></a>
                    <a href="#"><img src="@assets/images/twitter.svg" alt="twitter logo"></a>
                    <a href="#"><img src="@assets/images/facebook.svg" alt="facebook logo"></a>
                    <a href="#"><img src="@assets/images/linkedin.svg" alt="linkedin logo"></a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Chevron from '@components/icons/Chevron.vue'
</script>

<style lang="scss" scoped></style>