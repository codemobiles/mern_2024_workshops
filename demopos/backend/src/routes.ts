import { UserController } from "./controller/UserController";

export const Routes = [
  {
    method: "post",
    route: "/register",
    controller: UserController,
    action: "register",
  },
];
