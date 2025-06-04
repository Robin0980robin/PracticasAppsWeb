import { Entity, PrimaryGeneratedColumn, Column, Repository } from "typeorm";
import { Estudiante } from "../../domain/entities/estudiante.entity";
import { EstudianteRepository } from "../../domain/repositories/estudiante.repository";
import { AppDataSource } from "../datasource/typeorm/typeorm.config";
import { EstudianteModel } from "../models/estudiante.model";

export class EstudianteTypeORMRepository implements EstudianteRepository {
  private repo: Repository<EstudianteModel>;

  constructor() {
    this.repo = AppDataSource.getRepository(EstudianteModel);
  }

  async create(data: Omit<Estudiante, "id">): Promise<Estudiante> {
    const nuevo = this.repo.create(data);
    const saved = await this.repo.save(nuevo);
    return saved;
  }

  async findAll(): Promise<Estudiante[]> {
    return this.repo.find();
  }

  async update(id: number, data: Omit<Estudiante, "id">): Promise<Estudiante | null> {
    const estudiante = await this.repo.findOneBy({ id });
    if (!estudiante) return null;

    estudiante.nombre = data.nombre;
    estudiante.email = data.email;

    return await this.repo.save(estudiante);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repo.delete(id);
    return result.affected !== 0;
  }
}
