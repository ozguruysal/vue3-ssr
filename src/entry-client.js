import { initApp } from "./main";

const { app, router } = initApp();

router.isReady().then(() => {
  app.mount("#app");
});
