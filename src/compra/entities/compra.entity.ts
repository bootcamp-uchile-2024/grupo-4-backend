import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Compra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  tipoDespachoId: number;

  @Column()
  colaboradorId: number;

  @Column()
  direccion: string;

  @Column()
  telefono: string;

  @Column()
  tipoFacturacion: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  comuna: string;

  @Column()
  region: string;

  @Column()
  carritoId: number;
}
