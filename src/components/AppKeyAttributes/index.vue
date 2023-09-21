<template>
  <section
    id="intro"
    class="flex flex-col py-8 items-center lg:flex-row lg:justify-center lg:px-20 lg:py-16"
  >
    <div class="flex items-center justify-center w-[80%] lg:w-[50%] h-full">
      <img
        src="@assets/images/analysis.svg"
        alt="An illustration of a lady reading"
        class="w-full h-full"
      />
    </div>
    <div
      class="mt-2 px-6 lg:px-3 lg:w-[50%] flex flex-col items-center lg:items-start"
    >
      <h2
        class="font-clash-display text-center text-desktop-subtext lg:text-left lg:text-desktop-heading-2 w-full"
      >
        Judging criteria
        <br /><span class="text-secondary-minor">Key attributes</span>
      </h2>
      <p
        class="w-[90%] mx-auto text-center px-1 mt-3 lg:text-left lg:mx-0 text-desktop-paragraph mb-4 lg:w-full"
        v-for="(a, index) in attributes"
        :key="index"
      >
        <span class="text-primary-one font-bold text-[16px]"
          >{{ a.attribute }}:</span
        >
        {{ a.text }}
      </p>
      <button
        class="bg-gradient-to-r from-primary-one to-primary-two py-2 px-6 rounded-sm mt-4 w-max"
      >
        Read More
      </button>
    </div>
  </section>
</template>

<script setup>
const attributes = [
  {
    attribute: "Innovation and Creativity",
    text: "Evaluate the uniqueness and creativity of thesolution.Consider whether it addresses a real- world problem in a novel way or introduces innovative features.",
  },
  {
    attribute: "Functionality",
    text: "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
  },
  {
    attribute: "Impact and Relevance",
    text: " Determine the potential impact of the solution in the real world.Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
  },
  {
    attribute: "Technical Complexity",
    text: ": Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
  },
  {
    attribute: "Adherence to Hackathon Rules",
    text: "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition- specific requirements.",
  },
];
</script>

<style lang="scss" scoped></style>
