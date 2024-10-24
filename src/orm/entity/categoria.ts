import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Producto } from "./producto";


@Entity({name: 'Categoria'})
export class Categoria {
    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;
   
    @OneToMany(()=> Producto, (producto) => producto.categoria)
    productos: Producto[];
}