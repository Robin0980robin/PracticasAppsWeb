import { AppDataSource } from "../data-source";
import { Estudiante } from "../entity/Estudiante";

const repo = AppDataSource.getRepository(Estudiante);

// Crear estudiante
export const crearEstudiante = async (nombre: string, email: string) => {
  const nuevo = repo.create({ nombre, email });
  await repo.save(nuevo);
  console.log("Estudiante creado:", nuevo);
};

// Leer todos los estudiantes
export const listarEstudiantes = async () => {
  const estudiantes = await repo.find();
  console.log("Estudiantes:", estudiantes);
};

export const actualizarEstudiante = async (id: number, nombre: string, email: string) => {
  const estudiante = await repo.findOneBy({ id });
  if (!estudiante) {
    console.log("Estudiante no encontrado");
    return;
  }
  estudiante.nombre = nombre;
  estudiante.email = email;
  await repo.save(estudiante);
  console.log("Estudiante actualizado:", estudiante);
};

export const eliminarEstudiante = async (id: number) => {
  const resultado = await repo.delete(id);
  if (resultado.affected === 0) {
    console.log("Estudiante no encontrado para eliminar");
  } else {
    console.log("Estudiante eliminado con éxito");
  }
};
