/* eslint-disable no-useless-catch */
import { initApp } from "./main";

export default async (context) => {
  try {
    const { app, router } = initApp();

    router.push(context.req.url);

    await router.isReady();

    const matchedComponents = router.currentRoute.value.matched
      .map((record) => Object.values(record.components))
      .flat();

    if (!matchedComponents.length) {
      throw { code: 404 };
    }

    return app;
  } catch (err) {
    throw err;
  }
};
