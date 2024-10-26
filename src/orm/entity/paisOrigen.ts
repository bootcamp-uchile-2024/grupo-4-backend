import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Productos } from "./producto";


@Entity({name: 'PaisOrigen'})
export class PaisOrigen {
    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToMany(() => Productos, producto => producto.paisOrigen)
    productos: Productos[];
   
    
}