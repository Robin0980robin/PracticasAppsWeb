import { AppDataSource } from "../data-source";
import { Inscripcion } from "../entity/Inscripcion";
import { Estudiante } from "../entity/Estudiante";
import { Curso } from "../entity/Curso";

const repo = AppDataSource.getRepository(Inscripcion);

export const crearInscripcion = async (fecha: string, estudiante: Estudiante, curso: Curso) => {
  const nueva = repo.create({ fecha, estudiante, curso });
  await repo.save(nueva);
  console.log("Inscripción creada:", nueva);
};

export const listarInscripciones = async () => {
  const inscripciones = await repo.find({ relations: ["estudiante", "curso"] });
  console.log("Inscripciones:", inscripciones);
};

export const actualizarInscripcion = async (
  id: number,
  fecha: string,
  estudiante: Estudiante,
  curso: Curso
) => {
  const repo = AppDataSource.getRepository(Inscripcion);
  const inscripcion = await repo.findOneBy({ id });
  if (!inscripcion) {
    console.log("Inscripción no encontrada");
    return;
  }
  inscripcion.fecha = fecha;
  inscripcion.estudiante = estudiante;
  inscripcion.curso = curso;
  await repo.save(inscripcion);
  console.log("Inscripción actualizada:", inscripcion);
};

export const eliminarInscripcion = async (id: number) => {
  const repo = AppDataSource.getRepository(Inscripcion);
  const result = await repo.delete(id);
  if (result.affected === 0) {
    console.log("Inscripción no encontrada para eliminar");
  } else {
    console.log("Inscripción eliminada con éxito");
  }
};
