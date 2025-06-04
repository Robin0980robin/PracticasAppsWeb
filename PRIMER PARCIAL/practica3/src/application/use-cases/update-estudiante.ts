import { EstudianteRepository } from "../../domain/repositories/estudiante.repository";
import { Estudiante } from "../../domain/entities/estudiante.entity";

export class UpdateEstudiante {
  constructor(private repo: EstudianteRepository) {}

  execute(id: number, data: Omit<Estudiante, "id">): Promise<Estudiante | null> {
    return this.repo.update(id, data);
  }
}
