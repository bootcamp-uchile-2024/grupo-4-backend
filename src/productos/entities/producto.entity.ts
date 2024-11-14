// src/orm/entity/producto.entity.ts

import { Categoria } from 'src/orm/entity/categoria';
import { TipoProducto } from 'src/orm/entity/tipoProducto';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  JoinTable,
} from 'typeorm';

@Entity('Producto')
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @Column()
  imagen: string;

  @Column()
  stock: number;

  @Column()
  marca: string;

  @Column()
  origen: string;

  @ManyToOne(() => TipoProducto, (tipoProducto) => tipoProducto.productos)
  @JoinColumn({ name: 'tipoProductoId' })
  tipo: TipoProducto;

  @Column()
  formato: string;

  @Column({ type: 'date' })
  fecha: Date;

  @ManyToMany(() => Categoria, (categoria) => categoria.productos)
  @JoinColumn({ name: 'categoriaId' })
  categorias: Categoria[];

  @Column()
  destacado: boolean;
}
