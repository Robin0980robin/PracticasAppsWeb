import { Estudiante } from "../entities/estudiante.entity";

export interface EstudianteRepository {
  create(data: Omit<Estudiante, "id">): Promise<Estudiante>;
  findAll(): Promise<Estudiante[]>;
  update(id: number, data: Omit<Estudiante, "id">): Promise<Estudiante | null>;
  delete(id: number): Promise<boolean>;
}
