import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity({name: 'PaisOrigen'})
export class PaisOrigen {
    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;
   
    
}