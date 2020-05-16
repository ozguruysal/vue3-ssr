<template>
    <div>
        <span>Count: </span><span>{{ count }}</span>
    </div>

    <div>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
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
          decrement
      }
  }
})
</script>
