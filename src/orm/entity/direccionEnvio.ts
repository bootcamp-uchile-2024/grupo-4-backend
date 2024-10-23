import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Categoria } from "./categoria";
import { TipoProducto } from "./tipoProducto";
import { PaisOrigen } from "./paisOrigen";
import { PedidoItem } from "./pedidoItem";
import { CarritoItem } from "./carritoItem";
import { Despacho } from "./despacho";


@Entity({name: 'DireccionEnvio'}) 
export class DireccionEnvio {
    @PrimaryColumn()
    id: number;

    @Column()
    direccion: string;

    @Column()
    ciudad: string;

    @Column()
    codigoPostal: string;

    @Column()
    usuarioId: number;

    @ManyToOne(()=> Despacho)
    @JoinColumn({name: 'direccionEnvioId'})
    despacho: Despacho;    
}  