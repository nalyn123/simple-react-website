import { Home, Products, Product } from "@pages/index";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/product/:id",
    component: Product,
  },
  {
    path: "/login",
    component: Products,
    auth: false,
  },
  {
    path: "/settings",
    component: Home,
    auth: true,
  },
];
