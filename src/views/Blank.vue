<template>
  <h1>A Page With Blank Layout</h1>

  <p>
    Uses "Blank Layout" which has no header or footer. Layout is defined in
    route meta object. See
    <code>"/router/routes.js"</code>
  </p>

  <p>
    <router-link :to="{ name: 'Home' }">Back to Home</router-link>
  </p>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlankPage",
});
</script>
