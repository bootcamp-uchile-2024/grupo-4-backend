import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity({name: 'Pedido'})
export class Pedido {
    @PrimaryColumn()
    id: number;

    @Column()
    fecha: Date;

    @Column()
    usuarioId: number;      
}