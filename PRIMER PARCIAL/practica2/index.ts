import { AppDataSource } from "./data-source";
import { crearEstudiante, listarEstudiantes } from "./crud/estudiante.crud";

AppDataSource.initialize().then(async () => {
  console.log("Conexión establecida con la base de datos.");

  await crearEstudiante("Carlos Méndez", "carlos@correo.com");
  await listarEstudiantes();

}).catch(error => console.error("Error al conectar con la base de datos:", error));
