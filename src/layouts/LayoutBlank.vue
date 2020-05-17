<template>
  <div class="w-full max-w-screen-xl px-5 py-6 mx-auto">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LayoutBlank",
});
</script>
