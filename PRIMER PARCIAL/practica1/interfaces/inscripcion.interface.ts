import { Estudiante } from "./estudiante.interface";
import { Curso } from "./curso.interface";

export interface Inscripcion {
  id: number;
  estudiante: Estudiante;
  curso: Curso;
  fecha: string;
}
