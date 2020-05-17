<template>
  <div class="home">
    <h1 class="mb-4 text-2xl font-semibold text-gray-900">
      Vue 3 Server Side Rendering
    </h1>
    <app-counter />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AppCounter from "../components/AppCounter.vue";

export default defineComponent({
  name: "Home",

  components: {
    AppCounter,
  },
});
</script>
