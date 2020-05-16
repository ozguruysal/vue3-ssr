import { createSSRApp } from "vue";
import App from "./App.vue";

import { initRouter } from "./router";

export function initApp() {
  const app = createSSRApp(App);
  const router = initRouter();

  app.use(router);

  return {
    app,
    router,
  };
}
