import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Users } from "../entity/Users";
import { savedValue } from "../utils/cm-util";
import * as bcrypt from "bcryptjs";
import { Products } from "../entity/Products";

export class ProductController {
  private productRepo = AppDataSource.getMongoRepository(Products);

  async all(req: Request, res: Response, next: NextFunction) {}
}
