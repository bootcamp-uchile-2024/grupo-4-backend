import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Usuarios } from "./usuario";
import { PedidoItem } from "./pedidoItem";


@Entity({name: 'Pedido'})
export class Pedido {
    @PrimaryColumn()
    id: number;

    @Column()
    fecha: Date;

    @Column()
    usuarioId: number;     
    
    @OneToMany(()=> Usuarios, (usuario) => usuario.id)
    usuarios: Usuarios[];

    @ManyToOne(()=> PedidoItem)
    @JoinColumn({name: 'id_pedidoItem'})
    pedidoItem: PedidoItem;    

}