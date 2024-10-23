import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity({name: 'TipoProducto'})
export class TipoProducto {
    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;
   
    
}