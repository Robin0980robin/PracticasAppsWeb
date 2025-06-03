import { Inscripcion } from "../interfaces/inscripcion.interface";
import { estudiante1, estudiante2 } from "./estudiante";
import { curso1, curso2 } from "./curso";

export const inscripciones: Inscripcion[] = [
  {
    id: 1,
    estudiante: estudiante1,
    curso: curso1,
    fecha: "2025-06-02"
  },
  {
    id: 2,
    estudiante: estudiante2,
    curso: curso2,
    fecha: "2025-06-03"
  }
];
