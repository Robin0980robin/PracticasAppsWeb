import { AppDataSource } from "../data-source";
import { RutaAprendizaje } from "../entity/RutaAprendizaje";

const repo = AppDataSource.getRepository(RutaAprendizaje);

export const crearRuta = async (nombre: string, descripcion: string) => {
  const nueva = repo.create({ nombre, descripcion });
  await repo.save(nueva);
  console.log("Ruta de aprendizaje creada:", nueva);
};

export const listarRutas = async () => {
  const rutas = await repo.find({ relations: ["cursos"] });
  console.log("Rutas de aprendizaje:", rutas);
};

export const actualizarRuta = async (id: number, nombre: string, descripcion: string) => {
  const repo = AppDataSource.getRepository(RutaAprendizaje);
  const ruta = await repo.findOneBy({ id });
  if (!ruta) {
    console.log("Ruta de aprendizaje no encontrada");
    return;
  }
  ruta.nombre = nombre;
  ruta.descripcion = descripcion;
  await repo.save(ruta);
  console.log("Ruta actualizada:", ruta);
};

export const eliminarRuta = async (id: number) => {
  const repo = AppDataSource.getRepository(RutaAprendizaje);
  const result = await repo.delete(id);
  if (result.affected === 0) {
    console.log("Ruta no encontrada para eliminar");
  } else {
    console.log("Ruta eliminada con éxito");
  }
};
