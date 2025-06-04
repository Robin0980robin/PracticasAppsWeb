import { EstudianteRepository } from "../../domain/repositories/estudiante.repository";
import { Estudiante } from "../../domain/entities/estudiante.entity";
import { EstudianteSequelizeModel } from "../models/estudiante.sequelize.model";

export class EstudianteSequelizeRepository implements EstudianteRepository {
  async create(data: Omit<Estudiante, "id">): Promise<Estudiante> {
    const nuevo = await EstudianteSequelizeModel.create(data);
    return nuevo.toJSON() as Estudiante;
  }

  async findAll(): Promise<Estudiante[]> {
    const estudiantes = await EstudianteSequelizeModel.findAll();
    return estudiantes.map(e => e.toJSON() as Estudiante);
  }

  async update(id: number, data: Omit<Estudiante, "id">): Promise<Estudiante | null> {
    const estudiante = await EstudianteSequelizeModel.findByPk(id);
    if (!estudiante) return null;

    estudiante.nombre = data.nombre;
    estudiante.email = data.email;
    await estudiante.save();

    return estudiante.toJSON() as Estudiante;
  }

  async delete(id: number): Promise<boolean> {
    const deleted = await EstudianteSequelizeModel.destroy({ where: { id } });
    return deleted > 0;
  }
}
