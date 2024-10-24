import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Despacho } from "./despacho";


@Entity({name: 'EstadoDespacho'})
export class EstadoDespacho {
    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToMany(()=> Despacho, (despacho) => despacho.estadoDespacho)
    despachos: Despacho[];
   
    
}