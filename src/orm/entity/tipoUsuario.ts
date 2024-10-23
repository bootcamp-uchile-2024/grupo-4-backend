import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity({name: 'TipoUsuario'})
export class TipoUsuario {
    @PrimaryColumn()
    id: number;

    @Column()
    nombreTipo: string;
   
    
}