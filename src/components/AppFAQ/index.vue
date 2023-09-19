<template>
    <section id="FAQ" class="flex flex-col items-center lg:flex-row lg:px-12 py-6">
        <div class="px-6 ">
            <h2 class="font-clash-display  text-center text-desktop-subtext lg:text-left lg:text-desktop-heading-2 w-full">
                Frequently Ask <br /><span class="text-secondary-minor">Question</span></h2>
            <p
                class="text-center lg:text-left lg:mx-0 w-[90%] mx-auto text-desktop-paragraph lg:text-[13px] mt-3 lg:leading-relaxed leading-loose">
                We got
                answers to
                the
                questions that you
                might
                want to ask about <span class="font-bold">getlinked Hackathon 1.0</span></p>
            <div class="mt-6 flex flex-col items-center gap-2">
                <div class="flex border-b-2 border-b-secondary-minor py-2 items-center gap-2 w-full justify-between pe-2"
                    v-for="(question, index) in questions" :key="index">
                    <p>{{ question.question }}</p>
                    <span>+</span>
                </div>
            </div>
        </div>
        <div class="relative pt-16">
            <img src="@assets/images/question_mark.svg" alt="question mark"
                class="absolute w-[30px] top-[9%] left-[35%] opacity-50">
            <img src="@assets/images/question_mark.svg" alt="question mark"
                class="absolute w-[20px] top-[15%] left-[15%] opacity-40">
            <img src="@assets/images/question_mark.svg" alt="question mark"
                class="absolute w-[20px] top-[15%] left-[55%] opacity-40">
            <img src="@assets/images/man_thinking.svg" alt="An illustration of a man sitting on an cloud and thinking.">
        </div>
    </section>
</template>

<script setup>
const questions = [
    {
        question: 'Can I work on a project I started before the hackathon?',
        answer: ''
    },
    {
        question: 'What happens if I need help during the hackathon?',
        answer: ''
    },
    {
        question: 'What happens if I don\'t have an idea for a project?',
        answer: ''
    },
    {
        question: 'Can I join a team or do I have to come with one?',
        answer: ''
    },
    {
        question: 'What happens after the hackathon ends',
        answer: ''
    },
    {
        question: 'Can I work on a project I started before the hackathon?',
        answer: ''
    },
]
</script>

<style lang="scss" scoped></style>