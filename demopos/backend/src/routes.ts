import { ProductController } from "./controller/ProductController";
import { UserController } from "./controller/UserController";

export const authRoutes = [
  {
    method: "post",
    route: "/register",
    controller: UserController,
    action: "register",
  },
  {
    method: "post",
    route: "/login",
    controller: UserController,
    action: "login",
  },
];

export const productRoutes = [
  {
    method: "get",
    route: "/product",
    controller: ProductController,
    action: "all",
  },
];

export const Routes = [...authRoutes, ...productRoutes];
