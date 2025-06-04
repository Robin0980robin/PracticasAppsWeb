import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "estudiantes" })
export class EstudianteModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  email!: string;
}
