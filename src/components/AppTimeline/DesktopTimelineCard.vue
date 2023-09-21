<template>
  <article
    :class="[
      'flex justify-center items-center gap-x-40 relative before:absolute  before:top-0 before:w-[3px] before:bg-secondary-minor py-6 px-12 mt-0 w-full',
      isLast ? 'before:h-1/2' : 'before:h-full',
      isEven == 0 ? 'flex-row-reverse' : 'flex-row',
    ]"
  >
    <div class="w-1/2 flex flex-col justify-center gap-2">
      <h3
        :class="[
          ' text-secondary-minor font-bold',
          isEven == 0 ? 'text-left' : 'text-right',
        ]"
      >
        {{ activity.activity }}
      </h3>
      <p :class="[' text-[14px]', isEven == 0 ? 'text-left' : 'text-right']">
        {{ activity.description }}
      </p>
    </div>
    <div class="w-1/2 flex flex-col justify-center">
      <p
        :class="[
          ' text-secondary-minor font-bold',
          isEven == 0 ? 'text-right' : 'text-left',
        ]"
      >
        November 18, 2023
      </p>
    </div>

    <div
      class="absolute w-[50px] h-[50px] flex items-center justify-center rounded-full overflow-hidden bg-secondary-major"
    >
      <div
        class="w-[30px] h-[30px] bg-gradient-to-r from-primary-one to-primary-two flex items-center justify-center rounded-full overflow-hidden"
      >
        <span class="font-bold">{{ index + 1 }}</span>
      </div>
    </div>
  </article>
</template>

<script>
import { computed } from "vue";
export default {
  setup({ index }) {
    const isEven = computed(() => {
      return index % 2;
    });
    return { isEven };
  },
  props: {
    activity: Object,
    index: Number,
    isLast: Boolean,
  },
};
</script>

<style lang="scss" scoped></style>
