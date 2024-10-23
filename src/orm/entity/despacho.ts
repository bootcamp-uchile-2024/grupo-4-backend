import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Categoria } from "./categoria";
import { TipoProducto } from "./tipoProducto";
import { PaisOrigen } from "./paisOrigen";
import { PedidoItem } from "./pedidoItem";
import { CarritoItem } from "./carritoItem";
import { EstadoDespacho } from "./estadoDespacho";


@Entity({name: 'Despacho'})	 
export class Despacho {
    @PrimaryColumn()
    id: number;

    @Column()
    estado: string;

    @Column()
    fechaDespacho: Date;

    @Column()
    fechaEntregaEstimada: Date;


    @Column()
    direccionEnvioId: number;

    @ManyToOne(()=> EstadoDespacho)
    @JoinColumn({name: 'id'})
    estadoDespacho: EstadoDespacho;

   
}