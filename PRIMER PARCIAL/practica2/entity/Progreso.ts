import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Estudiante } from "./Estudiante";
import { Curso } from "./Curso";

@Entity()
export class Progreso {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  porcentaje!: number;

  @ManyToOne(() => Estudiante, estudiante => estudiante.progresos)
  estudiante!: Estudiante;

  @ManyToOne(() => Curso, curso => curso.progresos)
  curso!: Curso;
}
