import "reflect-metadata";
import { DataSource } from "typeorm";
import { EstudianteModel } from "../../models/estudiante.model";
import { envs } from "../../../config/envs";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: envs.DB_HOST,
  port: envs.DB_PORT,
  username: envs.DB_USER,
  password: envs.DB_PASS,
  database: envs.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [EstudianteModel],
});
