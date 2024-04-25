import "reflect-metadata";
import { DataSource } from "typeorm";
import { Users } from "./entity/Users";
import { Products } from "./entity/Products";
import { Counters } from "./entity/Counters";

export const AppDataSource = new DataSource({
  type: "mongodb",
  database: "demopos",
  port: 27018,
  synchronize: true,
  logging: false,
  entities: [Users, Products, Counters],
  migrations: [],
  subscribers: [],
});
