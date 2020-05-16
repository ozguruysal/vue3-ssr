<template>
  <footer class="site-footer">
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
      currentYear
    };
  }
});
</script>
