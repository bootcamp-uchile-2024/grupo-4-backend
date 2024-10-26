import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Pedido } from "./pedido";
import { Productos } from "./producto";


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
    
    @OneToMany(()=> Pedido, (pedido) => pedido.pedidoItem)
    pedidos: Pedido[];

    /*@OneToMany(()=> Productos, (producto) => producto.pedidoItem)
    productos: Productos[];*/


}