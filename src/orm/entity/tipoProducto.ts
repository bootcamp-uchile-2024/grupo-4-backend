import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Producto } from "./producto";


@Entity({name: 'TipoProducto'})
export class TipoProducto {
    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;
   
    @OneToMany(() => Producto, producto => producto.tipoProducto)
    productos: Producto[];
}