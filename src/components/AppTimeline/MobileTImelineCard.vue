<template>
    <article class="relative border-l-2 border-l-secondary-minor px-6 pt-1 my-5 h-[150px] flex flex-col justify-between">
        <div>
            <h3 class="text-secondary-minor font-bold">{{ activity.activity }}</h3>
            <p class="">{{ activity.description }}</p>
        </div>
        <p class="text-secondary-minor font-bold">{{ activity.date }}</p>
        <div
            class="absolute left-0 bottom-0 translate-y-[50%] -translate-x-[50%] w-[40px] h-[40px] flex items-center justify-center rounded-full overflow-hidden bg-secondary-major">
            <div
                class="w-[30px] h-[30px] bg-gradient-to-r from-primary-one to-primary-two flex items-center justify-center rounded-full overflow-hidden">
                <span class="font-bold">{{ index + 1 }}</span>
            </div>
        </div>

    </article>
</template>

<script>
export default {
    props: {
        activity: Object,
        index: Number,
    }
}

</script>

<style lang="scss" scoped></style>