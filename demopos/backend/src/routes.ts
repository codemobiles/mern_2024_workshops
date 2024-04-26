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

const productRoutes = [
  {
    method: "get",
    route: "/product",
    controller: ProductController,
    action: "all",
  },
  {
    method: "get",
    route: "/product/id/:product_id",
    controller: ProductController,
    action: "one",
  },
  {
    method: "post",
    route: "/product",
    controller: ProductController,
    action: "add",
  },
  {
    method: "put",
    route: "/product",
    controller: ProductController,
    action: "update",
  },
  {
    method: "delete",
    route: "/product/id/:product_id",
    controller: ProductController,
    action: "remove",
  },
  {
    method: "get",
    route: "/product/name/:name",
    controller: ProductController,
    action: "allLike",
  },
];

const transactionRoutes = [];

export const Routes = [...authRoutes, ...productRoutes, ...transactionRoutes];
