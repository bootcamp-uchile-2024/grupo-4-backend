import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Productos } from "./producto";


@Entity({name: 'TipoProducto'})
export class TipoProducto {
    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;
   
    @OneToMany(() => Productos, producto => producto.tipoProductoId)
    productos: Productos[];
}