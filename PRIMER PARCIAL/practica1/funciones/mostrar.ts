import { Inscripcion } from "../interfaces/inscripcion.interface";

export function mostrarInscripcion(inscripcion: Inscripcion): void {
  console.log(`${inscripcion.estudiante.nombre} está inscrito en "${inscripcion.curso.titulo}" desde el ${inscripcion.fecha}`);
}
