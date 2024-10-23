import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity({name: 'PedidoItem'})
export class PedidoItem {
    @PrimaryColumn()
    id: number;

    @Column()
    productoId: number;

    @Column()
    cantidad: number;

    @Column()
    pedidoId: number;    
}