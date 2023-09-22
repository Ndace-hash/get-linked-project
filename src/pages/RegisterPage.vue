<template>
  <section class="min-h-full flex items-center relative px-12 mt-[100px] lg:mt-[90px] mx-auto">
    <AppRadialBackground class="absolute left-[-35%] top-[4%] lg:top-[10%] lg:left-[-10%]" />
    <AppRadialBackground class="absolute hidden lg:flex lg:bottom-[-10%] lg:right-[-10%]" />

    <div class="hidden lg:flex relative">
      <img src="@assets/images/purple_star.svg" alt="star" class="absolute lg:w-[16px] lg:top-[5%] lg:left-[15%]">
      <img src="@assets/images/gray_star.svg" alt="star" class="absolute lg:w-[16px] lg:bottom-[5%] lg:left-[20%]">
      <img src="@assets/images/purple_star.svg" alt="star" class="absolute lg:w-[16px] lg:bottom-[20%] lg:right-[15%]">

      <img src="@assets/images/man_sitting_at_table.svg"
        alt="An illustration of a man sitting at a table with crossed legs" />
    </div>
    <div
      class="py-8 px-6 lg:px-12 lg:bg-white lg:bg-opacity-5 lg:shadow-md md:mx-auto lg:scale-90 rounded-md relative  flex flex-col items-center">
      <img src="@assets/images/purple_star.svg" alt="star" class="absolute top-[20%] right-[15%] w-[15px] lg:hidden ">
      <img src="@assets/images/gray_star.svg" alt="star"
        class="absolute top-[40%] left-[5%] w-[15px] lg:w-[20px] lg:top-[4%] lg:left-[70%]">
      <img src="@assets/images/purple_star.svg" alt="star" class="absolute bottom-[25%] right-[5%] w-[10px] lg:hidden">
      <img src="@assets/images/white_star.svg" alt="star"
        class="absolute hidden w-[10px] lg:flex lg:bottom-[-1%] lg:right-[10%]">

      <h2 class="text-secondary-minor font-bold font-clash-display text-desktop-subtext self-start">
        Register
      </h2>
      <div>
        <img src="@assets/images/man_sitting_at_table.svg"
          alt="An illustration of a man sitting at a table with crossed legs" class="mx-auto lg:hidden w-full max-w-sm" />
      </div>
      <p class="flex gap-2 items-end text-desktop-paragraph self-start">
        Be part of this movement!<span
          class="flex items-end border-b-2 border-b-secondary-minor border-dashed w-[80px] justify-center"><img
            src="@assets/images/woman_walking.svg" alt="a woman walking" /><img src="@assets/images/man_walking.svg"
            alt="a man walking" /></span>
      </p>
      <p class="uppercase text-desktop-subtext my-2 self-start">create your account</p>
      <form class="flex flex-col gap-4" @submit.prevent="submitRegistrationForm">
        <div class="flex flex-col my-6 gap-4 lg:grid lg:grid-cols-2">
          <div class="flex flex-col gap-2">
            <label for="team-name" class="capitalize">team's name</label>
            <input type="text" name="team-name" id="team-name" placeholder="Enter the name of your group"
              v-model="formData.team_name"
              class="bg-transparent border-2 border-white placeholder:text-white placeholder:opacity-25 py-4 px-4 text-desktop-heading-3 rounded-md" />
            <p v-for="e in v$.team_name.$errors" class="text-desktop-paragraph text-primary-one"
              v-if="v$.team_name.$error">
              {{ e.$message }}
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <label for="phone" class="capitalize">phone</label>
            <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
              v-model="formData.phone_number"
              class="bg-transparent border-2 border-white placeholder:text-white placeholder:opacity-25 py-4 px-4 text-desktop-heading-3 rounded-md" />
            <p v-for="e in v$.phone_number.$errors" class="text-desktop-paragraph text-primary-one"
              v-if="v$.phone_number.$error">
              {{ e.$message }}
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <label for="email" class="capitalize">email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email address" v-model="formData.email"
              class="bg-transparent border-2 border-white placeholder:text-white placeholder:opacity-25 py-4 px-4 text-desktop-heading-3 rounded-md" />
            <p v-for="e in v$.email.$errors" class="text-desktop-paragraph text-primary-one" v-if="v$.email.$error">
              {{ e.$message }}
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <label for="project-topic" class="capitalize">project topic</label>
            <input type="text" name="project-topic" id="project-topic" placeholder="What is your group project topic"
              v-model="formData.project_topic"
              class="bg-transparent border-2 border-white placeholder:text-white placeholder:opacity-25 py-4 px-4 text-desktop-heading-3 rounded-md" />
            <p v-for="e in v$.project_topic.$errors" class="text-desktop-paragraph text-primary-one"
              v-if="v$.project_topic.$error">
              {{ e.$message }}
            </p>
          </div>
          <div class="flex gap-2 lg:gap-4 w-full col-span-2 items-center">
            <div class="flex flex-col gap-2 grow">
              <label for="category" class="capitalize">category</label>
              <select id="category" v-model="formData.category"
                class="bg-transparent border-2 border-white placeholder:text-white placeholder:opacity-25 py-4 px-4 text-desktop-heading-3 rounded-md text-sm">
                <option value="" selected disabled>Select your category</option>
                <option :value="category.id" class="text-white bg-secondary-major" v-for="category in categories">
                  {{ category.name }}
                </option>
              </select>
              <p v-for="e in v$.category.$errors" class="text-desktop-paragraph text-primary-one"
                v-if="v$.category.$error">
                {{ e.$message }}
              </p>
            </div>
            <div class="flex flex-col gap-2 md:w-1/2 grow">
              <label for="group-size" class="capitalize text-sm">group size</label>
              <select id="group-size" v-model="formData.group_size"
                class="bg-transparent border-2 border-white placeholder:text-white placeholder:opacity-25 py-4 px-4 text-desktop-heading-3 rounded-md w-full text-sm">
                <option value="" selected disabled class="opacity-50">
                  Select
                </option>
                <option :value="n" class="text-white bg-secondary-major" v-for="n in 10">
                  {{ n }}
                </option>
              </select>
              <p v-for="e in v$.group_size.$errors" class="text-sm text-primary-one" v-if="v$.group_size.$error">
                {{ e.$message }}
              </p>
            </div>
          </div>
        </div>
        <p class="text-primary-one text-[10px] italic text-center lg:text-left">
          Please review your registration details before submitting
        </p>
        <div class="flex items-start">
          <label for="policy" class="flex items-start gap-2">
            <input type="checkbox" name="policy" id="policy" v-model="formData.privacy_policy_accepted" class="hidden" />
            <div class="w-[30px] h-[25px] border-2 border-white rounded-sm flex items-center justify-center font-bold"
              id="checkbox">
              <Check v-if="formData.privacy_policy_accepted" />
            </div>
            I agreed with the event terms and conditions and privacy
            policy
          </label>
        </div>
        <p class="text-sm text-primary-one" v-if="!formData.privacy_policy_accepted">
          Please check the agreement.
        </p>

        <input type="submit" value="Register Now"
          class="bg-gradient-to-r from-primary-one to-primary-two py-4 px-10 text-desktop-heading-3 capitalize rounded-md w-max self-center lg:w-full" />
      </form>
    </div>

    <div class="fixed inset-0 bg-secondary-major bg-opacity-90 flex items-center justify-center px-8"
      v-if="succesfullRegistration">
      <div class="border border-secondary-minor rounded-md flex flex-col items-center px-16 py-8">
        <img src="@assets/images/congratulation.png" alt="happy man" />
        <h3 class="text-center font-semibold">
          Congratulations <br />you have successfully Registered!
        </h3>
        <p class="flex flex-col text-center item-end mt-2 lg:text-desktop-paragraph text-[12px]">
          Yes, it was easy and you did it! <br /><span class="flex items-end gap-1">check your mail box for next step
            <img src="@assets/images/wink_emoji_woman.svg" /></span>
        </p>
        <button class="bg-gradient-to-r from-primary-one to-primary-two w-full py-3 rounded-md mt-6"
          @click="closeCongratulation">
          Back
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Axios from "@/utils/axios";
import { reactive, onMounted, ref } from "vue";
import { useRouter } from 'vue-router'
import { required, email } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import Check from "@/components/icons/Check.vue";
import AppRadialBackground from '@components/AppRadialBackground/index.vue'

interface CategoryObj {
  id: number;
  name: string;
}
interface FormDataObj {
  team_name: string;
  email: string;
  phone_number: string;
  project_topic: string;
  category: string | number;
  group_size: string | number;
  privacy_policy_accepted: boolean;
}
const router = useRouter()
const categories = ref<CategoryObj[]>([]);
const succesfullRegistration = ref(false);
const isLoading = ref(false);

const formData = reactive<FormDataObj>({
  team_name: "",
  email: "",
  phone_number: "",
  project_topic: "",
  category: "",
  group_size: "",
  privacy_policy_accepted: false,
});

const vuelidateRules = {
  team_name: { required },
  email: { required, email },
  phone_number: { required },
  project_topic: { required },
  category: { required },
  group_size: { required },
  privacy_policy_accepted: { required },
};

const v$ = useVuelidate(vuelidateRules, formData);

onMounted(async () => {
  const reponse = await Axios.get("/hackathon/categories-list");
  const data = await reponse.data;
  data.forEach((d: CategoryObj) => categories.value.push(d));
});

const closeCongratulation = () => {
  succesfullRegistration.value = false
  router.push({ name: 'home' })
}
const submitRegistrationForm = async () => {
  const validated = await v$.value.$validate();
  setTimeout(() => {
    isLoading.value = true;
  }, 200);
  if (validated && formData.privacy_policy_accepted == true) {
    const response = await Axios.post("/hackathon/registration", formData);
    if ((await response).status === 201) succesfullRegistration.value = true;
    formData.team_name = "";
    formData.email = "";
    formData.phone_number = "";
    formData.project_topic = "";
    formData.category = "";
    formData.group_size = "";
    formData.privacy_policy_accepted = false;
    isLoading.value = false;
  } else {
    console.log(v$.value.$errors);
  }
};
</script>

<style scoped>
#policy:checked+#checkbox {
  border-color: transparent;
  background-image: linear-gradient(to top, #FE34B9, #903AFF);
}
</style>
