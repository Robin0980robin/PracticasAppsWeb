import { Table, Column, Model, PrimaryKey, AutoIncrement } from "sequelize-typescript";

@Table({ tableName: "estudiantes_sequelize", timestamps: false })
export class EstudianteSequelizeModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  nombre!: string;

  @Column
  email!: string;
}
