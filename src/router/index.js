import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";
import { routes } from "./routes";

const history =
  process.env.VUE_ENV === "server" ? createMemoryHistory() : createWebHistory();

export function initRouter() {
  const router = createRouter({
    history,

    routes,
  });

  return router;
}
