import { Router } from "express";
import { EstudianteController } from "../controllers/estudiante.controller";

const router = Router();

router.post("/", EstudianteController.create);
router.get("/", EstudianteController.getAll);
router.put("/:id", EstudianteController.update);
router.delete("/:id", EstudianteController.delete);

export default router;
