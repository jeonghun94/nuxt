import { type NavigationGuard, type RouteLocationNormalized } from "vue-router";

export default (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
): ReturnType<NavigationGuard> => {
  console.log("Route middleware");

  if (to.params.id === "2") {
    return navigateTo("/");
  }

  return;
};
