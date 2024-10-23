import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity({name: 'CarritoItem'})
export class CarritoItem {
    @PrimaryColumn()
    id: number;

    @Column()
    productoId: number;

    @Column()
   cantidad: number;

    @Column()
    carritoDeComprasId: number; 
    
}