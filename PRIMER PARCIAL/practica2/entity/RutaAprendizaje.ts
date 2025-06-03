import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Curso } from "./Curso";

@Entity()
export class RutaAprendizaje {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  descripcion!: string;

  @OneToMany(() => Curso, curso => curso.ruta)
  cursos!: Curso[];
}
