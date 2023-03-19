import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "homepage",
    component: () => import("../views/MainContent.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/MainContent.vue"),
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: import("../views/about/about.vue"),
  // },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
