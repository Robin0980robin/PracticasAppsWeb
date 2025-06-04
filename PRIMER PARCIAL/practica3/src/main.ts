import "reflect-metadata";
import express from "express";
import cors from "cors";
import { envs } from "./config/envs";
import estudianteRoutes from "./presentation/routes/estudiante.routes";
import estudianteSequelizeRoutes from "./presentation/routes/estudiante.sequelize.routes";
import { AppDataSource } from "./infrastructure/datasource/typeorm/typeorm.config";
import { sequelize } from "./infrastructure/datasource/sequelize/sequelize.config";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/estudiantes", estudianteRoutes);
app.use("/estudiantes-sql", estudianteSequelizeRoutes);

AppDataSource.initialize()
  .then(async () => {
    console.log("📦 Base de datos TypeORM conectada");

    await sequelize.sync();
    console.log("📦 Base de datos Sequelize sincronizada");

    app.listen(envs.PORT, () => {
      console.log(`🚀 Servidor listo en http://localhost:${envs.PORT}`);
    });
  })
  .catch(err => console.error("❌ Error al conectar base de datos:", err));
