import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity({name: 'Categoria'})
export class Categoria {
    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;
   
    
}