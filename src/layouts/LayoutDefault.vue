<template>
  <div class="flex flex-col min-h-screen">
    <app-header />

    <div class="flex-1 w-full max-w-screen-xl px-5 py-6 mx-auto">
      <slot />
    </div>

    <app-footer class="px-5" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";

export default defineComponent({
  name: "LayoutDefault",

  components: {
    AppHeader,
    AppFooter,
  },
});
</script>
