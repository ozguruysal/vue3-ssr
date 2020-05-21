<template>
  <h1 class="mb-4 text-2xl font-semibold text-gray-900">
    This is an about page with dummy content
  </h1>

  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, est at
    deserunt illum molestiae consequatur sunt. Ipsa tenetur vel culpa, ex quasi
    repellendus voluptate quae, eos, ipsum debitis quam eligendi.
  </p>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
});
</script>

<style scoped>
h1 {
  @apply text-teal-500;
}
</style>
