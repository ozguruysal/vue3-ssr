<template>
  <header class="flex h-12 border-b border-gray-200 md:h-16">
    <div class="flex items-center w-full max-w-screen-xl px-5 mx-auto">
      <div>
        <router-link class="font-bold" to="/">Vue 3 SSR</router-link>
      </div>

      <nav class="ml-auto">
        <ul class="flex">
          <li v-for="(link, idx) in navLinks" :key="idx" class="ml-5">
            <router-link :to="link.to">{{ link.label }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppHeader",

  setup() {
    const navLinks = [
      { to: "/", label: "Home" },
      { to: { name: "About" }, label: "About" },
      { to: { name: "BlankPage" }, label: "Blank Layout" },
    ];

    return {
      navLinks,
    };
  },
});
</script>
