<template>
  <header>
    <div>
      <div>
        <router-link to="/">Vue 3 SSR</router-link>
      </div>

      <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/blank">Blank Layout</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppHeader"
});
</script>
