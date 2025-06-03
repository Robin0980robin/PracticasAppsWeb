import { Inscripcion } from "../interfaces/inscripcion.interface";

export function crearInscripcion(inscripcion: Inscripcion): void {
  console.log(`Inscripción creada para ${inscripcion.estudiante.nombre} en el curso ${inscripcion.curso.titulo}`);
}
