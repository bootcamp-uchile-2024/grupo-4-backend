import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Categoria } from "./categoria";
import { TipoProducto } from "./tipoProducto";
import { PaisOrigen } from "./paisOrigen";
import { PedidoItem } from "./pedidoItem";
import { CarritoItem } from "./carritoItem";
import { EstadoDespacho } from "./estadoDespacho";


@Entity({name: 'Usuario'})	 
export class Usuario {
    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    email: string;

    @Column()
    constrasenna: string;

    @Column()
    rut: string;

    @Column()
    tipoUsuario: number;   
}