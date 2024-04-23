import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mongodb",
    database: "test",
    port: 27019,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
