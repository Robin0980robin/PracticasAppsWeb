import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Inscripcion } from "./Inscripcion";
import { Progreso } from "./Progreso";
import { RutaAprendizaje } from "./RutaAprendizaje";

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  titulo!: string;

  @Column()
  duracionHoras!: number;

  @ManyToOne(() => RutaAprendizaje, ruta => ruta.cursos)
  ruta!: RutaAprendizaje;

  @OneToMany(() => Inscripcion, inscripcion => inscripcion.curso)
  inscripciones!: Inscripcion[];

  @OneToMany(() => Progreso, progreso => progreso.curso)
  progresos!: Progreso[];
}
