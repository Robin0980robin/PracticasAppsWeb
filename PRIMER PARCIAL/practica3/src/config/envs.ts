export const envs = {
  PORT: process.env.PORT || 3000,
  DB_NAME: process.env.DB_NAME || "practica3",
  DB_USER: process.env.DB_USER || "root",
  DB_PASS: process.env.DB_PASS || "admin123.",
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PORT: Number(process.env.DB_PORT) || 3306,
};
