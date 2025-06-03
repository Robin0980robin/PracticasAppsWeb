import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Inscripcion } from "./Inscripcion";
import { Progreso } from "./Progreso";

@Entity()
export class Estudiante {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  email!: string;

  @OneToMany(() => Inscripcion, inscripcion => inscripcion.estudiante)
  inscripciones!: Inscripcion[];

  @OneToMany(() => Progreso, progreso => progreso.estudiante)
  progresos!: Progreso[];
}
