import { Home, Products, Product, Login } from "@pages/index";

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
    component: Login,
    auth: false,
  },
  {
    path: "/settings",
    component: Home,
    auth: true,
  },
];
