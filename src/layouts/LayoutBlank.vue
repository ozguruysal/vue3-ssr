<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LayoutBlank",
});
</script>
