# 📘 Práctica 2 – Gestión de Cursos Online (TypeORM + MySQL + TypeScript)

Práctica 2 de la unidad: "Fundamentos BackEnd".  
Se desarrolló utilizando Node.js con TypeScript, MySQL y TypeORM.

---

## 📁 Estructura del proyecto

practica2/
├── crud/ ← Archivos CRUD para cada entidad
├── entity/ ← Definición de entidades (con relaciones)
├── seed/ ← Script para insertar datos de prueba
├── data-source.ts ← Conexión y configuración de TypeORM
├── index.ts ← Punto de entrada principal
├── README.md ← Este documento


---

## 🧱 Entidades y relaciones

Se implementaron 5 entidades con relaciones entre ellas:

- Estudiante
- Curso
- Inscripción
- Ruta de Aprendizaje
- Progreso

Cada entidad tiene su CRUD completo: crear, listar, actualizar y eliminar.

Relaciones implementadas:

- Un Estudiante puede tener muchas Inscripciones y muchos Progresos
- Un Curso puede tener muchas Inscripciones y muchos Progresos
- Un Curso pertenece a una Ruta de Aprendizaje
- Una Ruta de Aprendizaje tiene muchos Cursos

---

## ⚙️ Requisitos previos

- Tener instalado:
  - Node.js
  - MySQL o MariaDB (local)
- Tener creada una base de datos llamada practica2 en MySQL

Puedes crearla desde consola:

```sql
CREATE DATABASE practica2;

🔌 Configuración de la base de datos
En el archivo data-source.ts asegúrate de definir los datos correctos:
username: "root",           // o el usuario que uses
password: "tu_contraseña",
database: "practica2",

📦 Instalación de dependencias
Desde la carpeta PRIMER PARCIAL:
npm install

🚀 Ejecución del proyecto
1. Ejecutar el archivo principal:
npm run dev:p2

2. Para poblar la base de datos con datos de prueba:
npm run seed:p2
