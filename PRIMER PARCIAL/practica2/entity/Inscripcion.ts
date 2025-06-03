import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Estudiante } from "./Estudiante";
import { Curso } from "./Curso";

@Entity()
export class Inscripcion {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  fecha!: string;

  @ManyToOne(() => Estudiante, estudiante => estudiante.inscripciones)
  estudiante!: Estudiante;

  @ManyToOne(() => Curso, curso => curso.inscripciones)
  curso!: Curso;
}
