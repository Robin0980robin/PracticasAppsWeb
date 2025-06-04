import { Router } from "express";
import { EstudianteSequelizeController } from "../controllers/estudiante.sequelize.controller";

const router = Router();

router.post("/", EstudianteSequelizeController.create);
router.get("/", EstudianteSequelizeController.getAll);
router.put("/:id", EstudianteSequelizeController.update);
router.delete("/:id", EstudianteSequelizeController.delete);

export default router;
