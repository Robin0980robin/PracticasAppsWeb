import { Sequelize } from "sequelize-typescript";
import { envs } from "../../../config/envs";
import { EstudianteSequelizeModel } from "../../models/estudiante.sequelize.model";

export const sequelize = new Sequelize({
  dialect: "mysql",
  host: envs.DB_HOST,
  port: envs.DB_PORT,
  username: envs.DB_USER,
  password: envs.DB_PASS,
  database: envs.DB_NAME,
  models: [EstudianteSequelizeModel],
  logging: false,
});
