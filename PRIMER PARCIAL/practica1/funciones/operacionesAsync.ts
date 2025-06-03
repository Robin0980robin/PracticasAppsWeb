import { Inscripcion } from "../interfaces/inscripcion.interface";

export function guardarInscripcion(inscripcion: Inscripcion): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Inscripción de ${inscripcion.estudiante.nombre} guardada exitosamente.`);
    }, 1000);
  });
}

export async function ejecutarGuardar(inscripcion: Inscripcion): Promise<void> {
  const mensaje = await guardarInscripcion(inscripcion);
  console.log(mensaje);
}
