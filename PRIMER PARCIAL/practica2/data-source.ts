import "reflect-metadata";
import { DataSource } from "typeorm";
import { Estudiante } from "./entity/Estudiante";
import { Curso } from "./entity/Curso";
import { Inscripcion } from "./entity/Inscripcion";
import { Progreso } from "./entity/Progreso";
import { RutaAprendizaje } from "./entity/RutaAprendizaje";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "admin123.",
  database: "practica2",
  synchronize: true,
  logging: false,
  entities: [Estudiante, Curso, Inscripcion, Progreso, RutaAprendizaje],
});
