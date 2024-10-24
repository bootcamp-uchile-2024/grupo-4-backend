import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Usuario } from "./usuario";
import { PedidoItem } from "./pedidoItem";


@Entity({name: 'Pedido'})
export class Pedido {
    @PrimaryColumn()
    id: number;

    @Column()
    fecha: Date;

    @Column()
    usuarioId: number;     
    
    @OneToMany(()=> Usuario, (usuario) => usuario.pedido)
    usuarios: Usuario[];

    @ManyToOne(()=> PedidoItem)
    @JoinColumn({name: 'id_pedidoItem'})
    pedidoItem: PedidoItem;    

}