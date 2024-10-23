import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity({name: 'EstadoDespacho'})
export class EstadoDespacho {
    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;
   
    
}