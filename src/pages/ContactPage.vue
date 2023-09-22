<template>
  <section class="flex lg:ps-20 lg:pe-20 items-start justify-around gap-4 lg:py-16 ">
    <div class="hidden lg:flex flex-col justify-start gap-4 mt-20 text-desktop-heading-3 relative">
      <img src="@assets/images/purple_star.svg" alt="star" class="absolute lg:w-[20px] lg:top-[-20%] lg:left-[10%]">

      <h1 class="text-secondary-minor text-desktop-heading-2 font-clash-display font-semibold">
        Get in touch
      </h1>
      <p>contact <br />information</p>
      <p>27,Alara Street <br />Yaba 100012 <br />Lagos State</p>
      <p>Call Us : 07067981819</p>
      <p>we are open from Monday-Friday <br />08:00am - 05:00pm</p>
      <div class="flex flex-col items-start gap-2 mt-6">
        <p class="text-secondary-minor">Share on</p>
        <div class="flex items-center justify-center gap-4">
          <a href="#"><img src="@assets/images/instagram.svg" alt="instagram logo" /></a>
          <a href="#"><img src="@assets/images/twitter.svg" alt="twitter logo" /></a>
          <a href="#"><img src="@assets/images/facebook.svg" alt="facebook logo" /></a>
          <a href="#"><img src="@assets/images/linkedin.svg" alt="linkedin logo" /></a>
        </div>
      </div>
    </div>
    <div
      class="px-12 py-8 lg:px-20 lg:bg-white lg:bg-opacity-[3%] lg:drop-shadow-sm w-full max-w-xl lg:scale-[85%] rounded-md relative">
      <img src="@assets/images/purple_star.svg" alt="star" class="absolute top-[7%] left-[50%] w-[15px] lg:hidden ">
      <img src="@assets/images/gray_star.svg" alt="star"
        class="absolute top-[15%] right-[10%] w-[15px] lg:w-[20px] lg:top-[-10%] ">
      <img src="@assets/images/white_star.svg" alt="star"
        class="absolute bottom-[23%] right-[5%] w-[20px] lg:bottom-[0%] lg:right-[-10%] ">
      <img src="@assets/images/purple_star.svg" alt="star"
        class="absolute bottom-[15%] left-[9%] w-[15px] lg:w-[20px] lg:bottom-[18%] lg:left-[-1%] ">

      <button
        class="bg-gradient-to-t from-primary-one to-primary-two p-[2px] w-[30px] h-[30px] rounded-full flex items-center justify-center mt-2 mb-10 lg:hidden"
        @click="() => $router.push({ name: 'home' })">
        <span class="flex items-center justify-center text-xl bg-secondary-major rounded-full w-full h-full">
          <Chevron />
        </span>
      </button>
      <h2 class="text-secondary-minor text-3xl font-clash-display font-semibold lg:text-xl">
        Question or need assitance?
      </h2>
      <h2 class="text-secondary-minor text-3xl font-clash-display font-semibold lg:text-xl">
        Let us know about it
      </h2>
      <p class="my-6 w-[80%] text-desktop-heading-3 lg:hidden">
        Email us below to any question related to our event
      </p>
      <form class="flex flex-col gap-8 py-4" @submit.prevent="submitMessage">
        <div>
          <label for="first-name" class="sr-only">First name</label>
          <input type="text" name="first-name" id="first-name" placeholder="First Name" v-model="formData.first_name"
            class="border border-white bg-white bg-opacity-[3%] text-white placeholder:text-white py-3 px-4 rounded-md text-lg shadow-md w-full" />
          <p v-for="e in v$.first_name.$errors" class="text-sm text-primary-one" v-if="v$.first_name.$error">
            {{ e.$message }}
          </p>
        </div>
        <div>
          <label for="phone" class="sr-only">phone</label>
          <input type="text" name="phone" id="phone" placeholder="Phone Number" v-model="formData.phone_number"
            class="border border-white bg-white bg-opacity-[3%] text-white placeholder:text-white py-3 px-4 rounded-md text-lg shadow-md w-full" />
          <p v-for="e in v$.phone_number.$errors" class="text-sm text-primary-one" v-if="v$.phone_number.$error">
            {{ e.$message }}
          </p>
        </div>
        <div>
          <label for="email" class="sr-only">Email</label>
          <input type="email" name="Email" id="email" placeholder="Email" v-model="formData.email"
            class="border border-white bg-white bg-opacity-[3%] text-white placeholder:text-white py-3 px-4 rounded-md text-lg shadow-md w-full" />
          <p v-for="e in v$.email.$errors" class="text-sm text-primary-one" v-if="v$.email.$error">
            {{ e.$message }}
          </p>
        </div>
        <div>
          <label for="message" class="sr-only">message</label>
          <textarea name="message" id="message" placeholder="Message" v-model="formData.message"
            class="border border-white bg-white bg-opacity-[3%] text-white placeholder:text-white py-3 px-4 rounded-md text-lg shadow-md w-full h-[200px] lg:h-[150px]"></textarea>
          <p v-for="e in v$.message.$errors" class="text-sm text-primary-one" v-if="v$.message.$error">
            {{ e.$message }}
          </p>
        </div>
        <button :class="[
          'bg-gradient-to-r from-primary-one to-primary-two self-center py-4 px-16 rounded-md capitalize w-[200px]',
          successfullySent ? 'opacity-80' : 'opacity-100',
        ]" :disabled="successfullySent" type="submit">
          {{ successfullySent ? "Sent" : "Submit" }}
        </button>
      </form>
      <div class="flex flex-col items-center gap-2 mt-6 lg:hidden">
        <p class="text-secondary-minor">Share on</p>
        <div class="flex items-center justify-center gap-4">
          <a href="#"><img src="@assets/images/instagram.svg" alt="instagram logo" /></a>
          <a href="#"><img src="@assets/images/twitter.svg" alt="twitter logo" /></a>
          <a href="#"><img src="@assets/images/facebook.svg" alt="facebook logo" /></a>
          <a href="#"><img src="@assets/images/linkedin.svg" alt="linkedin logo" /></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Chevron from "@components/icons/Chevron.vue";
import { reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import Axios from "@/utils/axios";

const successfullySent = ref(false);
const formData = reactive({
  phone_number: "",
  first_name: "",
  email: "",
  message: "",
});
const vuelidateRules = {
  phone_number: { required },
  first_name: { required },
  email: { required, email },
  message: { required },
};
const v$ = useVuelidate(vuelidateRules, formData);

const submitMessage = async () => {
  const validated = await v$.value.$validate();
  if (validated) {
    const { status } = await Axios.post("/hackathon/contact-form", formData);
    if (status === 201) successfullySent.value = true;
    formData.email = "";
    formData.first_name = "";
    formData.phone_number = "";
    formData.message = "";
    v$.value.$reset();
    setTimeout(() => {
      successfullySent.value = false;
    }, 2000);
  }
};
</script>

<style lang="scss" scoped></style>
