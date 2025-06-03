import { AppDataSource } from "../data-source";
import { Progreso } from "../entity/Progreso";
import { Estudiante } from "../entity/Estudiante";
import { Curso } from "../entity/Curso";

const repo = AppDataSource.getRepository(Progreso);

export const crearProgreso = async (porcentaje: number, estudiante: Estudiante, curso: Curso) => {
  const nuevo = repo.create({ porcentaje, estudiante, curso });
  await repo.save(nuevo);
  console.log("Progreso registrado:", nuevo);
};

export const listarProgresos = async () => {
  const progresos = await repo.find({ relations: ["estudiante", "curso"] });
  console.log("Progresos:", progresos);
};

export const actualizarProgreso = async (id: number, porcentaje: number, estudiante: Estudiante, curso: Curso) => {
  const repo = AppDataSource.getRepository(Progreso);
  const progreso = await repo.findOneBy({ id });
  if (!progreso) {
    console.log("Progreso no encontrado");
    return;
  }
  progreso.porcentaje = porcentaje;
  progreso.estudiante = estudiante;
  progreso.curso = curso;
  await repo.save(progreso);
  console.log("Progreso actualizado:", progreso);
};

export const eliminarProgreso = async (id: number) => {
  const repo = AppDataSource.getRepository(Progreso);
  const result = await repo.delete(id);
  if (result.affected === 0) {
    console.log("Progreso no encontrado para eliminar");
  } else {
    console.log("Progreso eliminado con éxito");
  }
};
