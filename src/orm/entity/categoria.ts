import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Productos } from "./producto";


@Entity({name: 'Categoria'})
export class Categoria {
    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;
   
    @OneToMany(()=> Productos, (producto) => producto.categoria)
    productos: Productos[];
}