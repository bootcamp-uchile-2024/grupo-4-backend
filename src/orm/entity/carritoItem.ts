import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CarritoDeCompras } from "./carritoDeCompras";
import { Productos } from "./producto";

@Entity({ name: 'CarritoItem' })
export class CarritoItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cantidad: number;

  @ManyToOne(() => Productos, (producto) => producto.carritoItem)
  @JoinColumn({ name: 'productoId' })
  producto: Productos;

  @ManyToOne(() => CarritoDeCompras, (carritoDeCompras) => carritoDeCompras.items)
  @JoinColumn({ name: 'carritoDeComprasId' })
  carritoDeCompras: CarritoDeCompras;
}
