<template>
  <div class="antialiased text-gray-700">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import LayoutDefault from "./layouts/LayoutDefault.vue";
import LayoutBlank from "./layouts/LayoutBlank.vue";

export default defineComponent({
  name: "App",

  components: {
    LayoutDefault,
    LayoutBlank,
  },

  setup() {
    const route = useRoute();
    const layout = computed(() => route.meta.layout || "LayoutDefault");

    return {
      layout,
    };
  },
});
</script>

<style src="./assets/styles/main.css"></style>
