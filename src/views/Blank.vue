<template>
  <h1 class="mb-4 text-2xl font-semibold text-gray-900">
    A Page With Blank Layout
  </h1>

  <p class="mb-5">
    Uses "Blank Layout" which has no header or footer. Layout is defined in
    route meta object. See
    <code>"/router/routes.js"</code>
  </p>

  <router-link class="text-blue-500 hover:underline" :to="{ name: 'Home' }"
    >Back to Home</router-link
  >
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlankPage",
});
</script>
