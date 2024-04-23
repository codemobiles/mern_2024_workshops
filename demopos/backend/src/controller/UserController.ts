import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Users } from "../entity/Users";

export class UserController {
  private userRepository = AppDataSource.getMongoRepository(Users);

  async register(req: Request, res: Response, next: NextFunction) {}
}
