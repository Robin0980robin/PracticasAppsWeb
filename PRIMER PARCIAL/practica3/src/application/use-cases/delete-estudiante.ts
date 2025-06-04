import { EstudianteRepository } from "../../domain/repositories/estudiante.repository";

export class DeleteEstudiante {
  constructor(private repo: EstudianteRepository) {}

  execute(id: number): Promise<boolean> {
    return this.repo.delete(id);
  }
}
