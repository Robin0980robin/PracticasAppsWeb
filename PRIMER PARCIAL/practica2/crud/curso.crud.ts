import { AppDataSource } from "../data-source";
import { Curso } from "../entity/Curso";
import { RutaAprendizaje } from "../entity/RutaAprendizaje";

const repo = AppDataSource.getRepository(Curso);

export const crearCurso = async (titulo: string, duracionHoras: number, ruta: RutaAprendizaje) => {
  const nuevo = repo.create({ titulo, duracionHoras, ruta });
  await repo.save(nuevo);
  console.log("Curso creado:", nuevo);
};

export const listarCursos = async () => {
  const cursos = await repo.find({ relations: ["ruta"] });
  console.log("Cursos:", cursos);
};

export const actualizarCurso = async (id: number, titulo: string, duracionHoras: number, ruta: RutaAprendizaje) => {
  const repo = AppDataSource.getRepository(Curso);
  const curso = await repo.findOneBy({ id });
  if (!curso) {
    console.log("Curso no encontrado");
    return;
  }
  curso.titulo = titulo;
  curso.duracionHoras = duracionHoras;
  curso.ruta = ruta;
  await repo.save(curso);
  console.log("Curso actualizado:", curso);
};

export const eliminarCurso = async (id: number) => {
  const repo = AppDataSource.getRepository(Curso);
  const result = await repo.delete(id);
  if (result.affected === 0) {
    console.log("Curso no encontrado para eliminar");
  } else {
    console.log("Curso eliminado con éxito");
  }
};
