import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      redirect: "/starter",
      component: () => import("@/layouts/full/FullLayout.vue"),
      children: [
        {
          name: "Starter",
          path: "/starter",
          component: () =>
            import("@/views/StarterPage.vue"),
        },
      ],
    },
    {
      path: "/authentication",
      component: () => import("@/layouts/blank/BlankLayout.vue"),
      children: [
        {
          name: "Login",
          path: "/authentication/fulllogin",
          component: () => import("@/views/authentication/FullLogin.vue"),
        },
        {
          name: "Boxed Login",
          path: "/authentication/boxedlogin",
          component: () => import("@/views/authentication/BoxedLogin.vue"),
        },
        {
          name: "Error",
          path: "/authentication/error",
          component: () => import("@/views/authentication/Error.vue"),
        },
        {
          name: "Register",
          path: "/authentication/fullregister",
          component: () => import("@/views/authentication/FullRegister.vue"),
        },
        {
          name: "Boxed Register",
          path: "/authentication/boxedregister",
          component: () => import("@/views/authentication/BoxedRegister.vue"),
        },
      ],
    },
  ],
});

export default router;
