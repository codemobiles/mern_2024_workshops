import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Users } from "../entity/Users";
import { savedValue } from "../utils/cm-util";
import * as bcrypt from "bcryptjs";

export class UserController {
  private userRepository = AppDataSource.getMongoRepository(Users);

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      req.body.created = savedValue(req.body.created, new Date());
      req.body.level = savedValue(req.body.level, "normal");
      req.body.__v = savedValue(req.body.__v, 0);

      req.body.password = await bcrypt.hash(req.body.password, 8);
      const doc = await this.userRepository.save(req.body);
      return { result: "ok", message: doc };
    } catch (e) {
      return { result: "nok", message: "invalid data" };
    }
  }
}
