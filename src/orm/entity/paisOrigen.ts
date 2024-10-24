import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Producto } from "./producto";


@Entity({name: 'PaisOrigen'})
export class PaisOrigen {
    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToMany(() => Producto, producto => producto.paisOrigen)
    productos: Producto[];
   
    
}