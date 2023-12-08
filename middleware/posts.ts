import { NavigationGuard, RouteLocationNormalized } from "vue-router";

export default (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
): ReturnType<NavigationGuard> => {
  console.log("Route middleware");
  return;
};
