import { Inscripcion } from "../interfaces/inscripcion.interface";

export function procesarInscripcion(inscripcion: Inscripcion, callback: (i: Inscripcion) => void): void {
  callback(inscripcion);
}
