<template>
  <div class="home">
    <p>This app is server side rendered!</p>
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
