import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Categoria } from "./categoria";
import { TipoProducto } from "./tipoProducto";
import { PaisOrigen } from "./paisOrigen";
import { PedidoItem } from "./pedidoItem";
import { CarritoItem } from "./carritoItem";
import { EstadoDespacho } from "./estadoDespacho";
import { DireccionEnvio } from "./direccionEnvio";


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
    @JoinColumn({name: 'id_estadoDespacho'})
    estadoDespacho: EstadoDespacho;

    @OneToMany(()=> DireccionEnvio, (direccionEnvio) => direccionEnvio.despacho)
    direccionEnvio: DireccionEnvio[];
   
}