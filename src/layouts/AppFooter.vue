<template>
  <footer
    class="flex items-center justify-center h-12 text-sm text-center border-t border-gray-200"
  >
    <p>
      &copy; {{ currentYear }} &middot;
      <a href="https://ozguruys.al">Özgür Uysal</a>
    </p>
  </footer>
</template>

<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "AppFooter",

  setup() {
    const currentYear = computed(() => new Date().getFullYear());

    return {
      currentYear,
    };
  },
});
</script>
