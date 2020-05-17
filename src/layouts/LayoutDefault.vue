<template>
  <app-header />

  <div>
    <slot />
  </div>

  <app-footer />
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
