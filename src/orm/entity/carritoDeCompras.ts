import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity({name: 'CarritoDeCompras'})
export class CarritoDeCompras {
    @PrimaryColumn()
    id: number;

    @Column()
    usuarioId: number;
   
    
}