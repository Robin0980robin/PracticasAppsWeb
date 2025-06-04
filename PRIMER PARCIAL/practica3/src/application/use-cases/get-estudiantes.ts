import { EstudianteRepository } from "../../domain/repositories/estudiante.repository";
import { Estudiante } from "../../domain/entities/estudiante.entity";

export class GetEstudiantes {
  constructor(private repo: EstudianteRepository) {}

  execute(): Promise<Estudiante[]> {
    return this.repo.findAll();
  }
}
