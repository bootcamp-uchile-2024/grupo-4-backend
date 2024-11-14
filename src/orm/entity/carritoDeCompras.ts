import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuarios } from "./usuario";
import { CarritoItem } from "./carritoItem";

@Entity({ name: 'CarritoDeCompras' })
export class CarritoDeCompras {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuarios, (usuario) => usuario.carritoDeCompras)
  @JoinColumn({ name: 'usuarioId' })
  usuario: Usuarios;

  @OneToMany(() => CarritoItem, (carritoItem) => carritoItem.carritoDeCompras)
  items: CarritoItem[];
}
