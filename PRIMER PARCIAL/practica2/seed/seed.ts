import { AppDataSource } from "../data-source";
import { crearEstudiante } from "../crud/estudiante.crud";
import { crearCurso } from "../crud/curso.crud";
import { crearInscripcion } from "../crud/inscripcion.crud";
import { crearRuta } from "../crud/ruta.crud";
import { crearProgreso } from "../crud/progreso.crud";

import { RutaAprendizaje } from "../entity/RutaAprendizaje";
import { Estudiante } from "../entity/Estudiante";
import { Curso } from "../entity/Curso";

const estudianteRepo = AppDataSource.getRepository(Estudiante);
const cursoRepo = AppDataSource.getRepository(Curso);
const rutaRepo = AppDataSource.getRepository(RutaAprendizaje);

AppDataSource.initialize().then(async () => {
  console.log("Conectado para seed completo.");

  // Crear Ruta
  const ruta = rutaRepo.create({
    nombre: "Desarrollo Web",
    descripcion: "Ruta para aprender tecnologías web modernas"
  });
  await rutaRepo.save(ruta);

  // Crear Estudiantes
  const estudiantes: Estudiante[] = [];
  for (let i = 1; i <= 5; i++) {
    const est = estudianteRepo.create({
      nombre: `Estudiante ${i}`,
      email: `est${i}@correo.com`
    });
    await estudianteRepo.save(est);
    estudiantes.push(est);
  }

  // Crear Cursos
  const cursos: Curso[] = [];
  for (let i = 1; i <= 5; i++) {
    const cur = cursoRepo.create({
      titulo: `Curso ${i}`,
      duracionHoras: 10 + i,
      ruta: ruta
    });
    await cursoRepo.save(cur);
    cursos.push(cur);
  }

  // Crear Inscripciones y Progresos
  for (let i = 0; i < 5; i++) {
    await crearInscripcion(
      `2025-06-0${i + 1}`,
      estudiantes[i],
      cursos[i]
    );

    await crearProgreso(
      20 * (i + 1),
      estudiantes[i],
      cursos[i]
    );
  }

  console.log("Seed completo con Ruta y Progreso ✅");
  process.exit();

}).catch(err => console.error("Error al hacer seed:", err));
