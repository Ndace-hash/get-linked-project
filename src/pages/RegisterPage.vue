<template>
    <section class="min-h-full flex items-center">
        <div class="hidden lg:flex">
            <img src="@assets/images/man_sitting_at_table.svg"
                alt="An illustration of a man sitting at a table with crossed legs">
        </div>
        <div class="py-8 px-12 lg:bg-white lg:bg-opacity-5 lg:shadow-md md:mx-auto lg:scale-90 rounded-md">
            <h2 class="text-secondary-minor font-bold font-clash-display text-desktop-subtext">Register</h2>
            <div>
                <img src="@assets/images/man_sitting_at_table.svg"
                    alt="An illustration of a man sitting at a table with crossed legs"
                    class="mx-auto lg:hidden w-full max-w-sm" />
            </div>
            <p class="flex gap-2 items-end text-desktop-paragraph">Be part of this movement!<span
                    class="flex items-end border-b-2 border-b-secondary-minor border-dashed w-[80px] justify-center"><img
                        src="@assets/images/woman_walking.svg" alt="a woman walking" /><img
                        src="@assets/images/man_walking.svg" alt="a man walking" /></span>
            </p>
            <p class="uppercase text-desktop-subtext my-2">create your account</p>
            <form class="flex flex-col gap-4">
                <div class="flex flex-col my-6 gap-4 lg:grid lg:grid-cols-2 ">
                    <div class="flex flex-col gap-2">
                        <label for="team-name" class="capitalize">team's name</label>
                        <input type="text" name="team-name" id="team-name" placeholder="Enter the name of your group"
                            v-model="formData.team_name" required
                            class="bg-transparent border-2 border-white placeholder:text-white placeholder:opacity-25 py-4 px-4 text-desktop-heading-3 rounded-md">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="phone" class="capitalize">phone</label>
                        <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                            v-model="formData.phone_number" required
                            class="bg-transparent border-2 border-white placeholder:text-white placeholder:opacity-25 py-4 px-4 text-desktop-heading-3 rounded-md">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="email" class="capitalize">email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email address"
                            v-model="formData.email" required
                            class="bg-transparent border-2 border-white placeholder:text-white placeholder:opacity-25 py-4 px-4 text-desktop-heading-3 rounded-md">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="project-topic" class="capitalize">project topic</label>
                        <input type="text" name="project-topic" id="project-topic" required
                            placeholder="What is your group project topic" v-model="formData.project_topic"
                            class="bg-transparent border-2 border-white placeholder:text-white placeholder:opacity-25 py-4 px-4 text-desktop-heading-3 rounded-md">
                    </div>
                    <div class="flex gap-2 lg:gap-4 w-full col-span-2">
                        <div class="flex flex-col gap-2">
                            <label for="category" class="capitalize">category</label>
                            <select id="category" v-model="formData.category" required
                                class="bg-transparent border-2 border-white placeholder:text-white placeholder:opacity-25 py-4 px-4 text-desktop-heading-3 rounded-md text-sm">
                                <option value="" selected disabled>Select your category</option>
                                <option :value="category.id" class="text-white bg-secondary-major"
                                    v-for="category in categories">{{ category.name }}</option>
                            </select>
                        </div>
                        <div class="flex flex-col gap-2 md:grow">
                            <label for="group-size" class="capitalize">group size</label>
                            <select id="group-size" v-model="formData.group_size" required
                                class=" bg-transparent border-2 border-white placeholder:text-white placeholder:opacity-25 py-4 px-4 text-desktop-heading-3 rounded-md w-full text-sm">
                                <option value="" selected disabled class=" opacity-50">Select</option>
                                <option :value="n" class="text-white bg-secondary-major " v-for="n in 10">{{ n }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <p class="text-primary-one text-[10px] italic text-center lg:text-left">Please review your registration
                    details before
                    submitting
                </p>
                <div class="flex items-start gap-2">
                    <input type="checkbox" name="policy" id="policy" class="border border-white bg-transparent"
                        v-model="formData.privacy_policy_accepted">
                    <label for="policy">I agreed with the event terms and conditions and privacy policy</label>
                </div>

                <button
                    class="bg-gradient-to-r from-primary-one to-primary-two py-4 px-10 text-desktop-heading-3 capitalize rounded-md w-max self-center lg:w-full"
                    @click.prevent="submitRegistrationForm">Register
                    Now</button>
            </form>
        </div>

        <!-- <div class="fixed inset-0 bg-secondary-major bg-opacity-90 flex items-center justify-center px-8">
            <div class="border border-secondary-minor rounded-md flex flex-col items-center px-16 py-8">
                <img src="@assets/images/congratulation.png" alt="happy man">
                <h3 class="text-center font-semibold">Congratulations <br />you have successfully Registered!</h3>
                <p class="flex  flex-col text-center item-end mt-2 lg:text-desktop-paragraph text-[12px]">Yes, it was easy
                    and
                    you did it!
                    <br /><span class="flex items-end gap-1">check your mail box for next step <img
                            src="@assets/images/wink_emoji_woman.svg" /></span>
                </p>
                <button class="bg-gradient-to-r from-primary-one to-primary-two w-full py-3 rounded-md mt-6">Back</button>
            </div>
        </div> -->
    </section>
</template>

<script setup lang="ts">
import Axios from '@/utils/axios'
import { reactive, onMounted, ref } from 'vue';

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
    privacy_policy_accepted: boolean
}
const categories = ref<CategoryObj[]>([])
const formData = reactive<FormDataObj>({
    team_name: '',
    email: '',
    phone_number: '',
    project_topic: '',
    category: '',
    group_size: '',
    privacy_policy_accepted: false
})
onMounted(async () => {
    const reponse = await Axios.get('/hackathon/categories-list')
    const data = await reponse.data
    data.forEach((d: CategoryObj) => categories.value.push(d))
})

const submitRegistrationForm = async () => {
    const response = await Axios.post('/hackathon/registration', formData)
    console.log(response)
}
</script>

<style lang="scss" scoped></style>