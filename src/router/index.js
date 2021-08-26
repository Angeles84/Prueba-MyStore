import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Products.vue"),
  },
  {
    path: "/newproduct",
    name: "NewProduct",
    component: () => import("../views/NewProduct.vue"),
  },
  {
    path: "/comprar",
    name: "Comprar",
    component: () => import("../views/Comprar.vue"),
  },
  {
    path: "/carrito",
    name: "Carrito",
    component: () => import("../views/Carrito.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
