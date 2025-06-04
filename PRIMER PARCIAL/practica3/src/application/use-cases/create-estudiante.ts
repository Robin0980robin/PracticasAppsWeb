import { EstudianteRepository } from "../../domain/repositories/estudiante.repository";
import { Estudiante } from "../../domain/entities/estudiante.entity";

export class CreateEstudiante {
  constructor(private repo: EstudianteRepository) {}

  execute(data: Omit<Estudiante, "id">): Promise<Estudiante> {
    return this.repo.create(data);
  }
}
