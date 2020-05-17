<template>
  <div>
    <span class="font-semibold text-gray-900">Count: </span>
    <span>{{ count }}</span>
  </div>

  <div class="mt-4">
    <button
      class="inline-flex items-center justify-center h-10 px-4 font-semibold text-white transition-colors duration-150 ease-linear bg-blue-500 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700"
      @click="increment"
    >
      Increment
    </button>
    <button
      class="inline-flex items-center justify-center h-10 px-4 ml-3 font-semibold text-blue-500 transition-colors duration-150 ease-linear border border-blue-500 rounded focus:outline-none focus:shadow-outline hover:bg-blue-100"
      @click="decrement"
    >
      Decrement
    </button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AppCounter",

  setup() {
    const count = ref(0);

    function increment() {
      count.value++;
    }

    function decrement() {
      count.value--;
    }

    return {
      count,
      increment,
      decrement,
    };
  },
});
</script>
