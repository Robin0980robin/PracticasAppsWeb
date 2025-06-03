import { inscripciones } from "./entidades/inscripcion";
import { crearInscripcion } from "./funciones/crear";
import { mostrarInscripcion } from "./funciones/mostrar";
import { procesarInscripcion } from "./funciones/procesarCallback";
import { ejecutarGuardar } from "./funciones/operacionesAsync";

// Aquí se muestran y crean las inscripciones
inscripciones.forEach(inscripcion => {
  crearInscripcion(inscripcion);
  mostrarInscripcion(inscripcion);
});

const copiaInscripciones = [...inscripciones];

// Rest: función con parámetros variables
function listarEstudiantes(...nombres: string[]) {
  console.log("Estudiantes:");
  nombres.forEach(nombre => console.log(nombre));
}
listarEstudiantes("Robinson", "Cinthia", "Anderson", "Ruddy");

// Callback
procesarInscripcion(inscripciones[0], mostrarInscripcion);

// Async/Await + Promises
ejecutarGuardar(inscripciones[1]);
