import { Request, Response, NextFunction } from "express";
import { CreateEstudiante } from "../../application/use-cases/create-estudiante";
import { GetEstudiantes } from "../../application/use-cases/get-estudiantes";
import { UpdateEstudiante } from "../../application/use-cases/update-estudiante";
import { DeleteEstudiante } from "../../application/use-cases/delete-estudiante";
import { EstudianteTypeORMRepository } from "../../infrastructure/repositories/estudiante.typeorm.repository";

const repo = new EstudianteTypeORMRepository();
const createUC = new CreateEstudiante(repo);
const getUC = new GetEstudiantes(repo);
const updateUC = new UpdateEstudiante(repo);
const deleteUC = new DeleteEstudiante(repo);

export class EstudianteController {
  static create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { nombre, email } = req.body;
      const result = await createUC.execute({ nombre, email });
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };

  static getAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const result = await getUC.execute();
      res.json(result);
    } catch (error) {
      next(error);
    }
  };

  static update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const { nombre, email } = req.body;
      const result = await updateUC.execute(id, { nombre, email });

      if (!result) {
        res.status(404).json({ message: "Estudiante no encontrado" });
        return;
      }

      res.json(result);
    } catch (error) {
      next(error);
    }
  };


  static delete = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const result = await deleteUC.execute(id);

      if (!result) {
        res.status(404).json({ message: "Estudiante no encontrado" });
        return;
      }

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };

}
