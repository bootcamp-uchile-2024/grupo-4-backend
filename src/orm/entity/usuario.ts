import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Categoria } from "./categoria";
import { TipoProducto } from "./tipoProducto";
import { PaisOrigen } from "./paisOrigen";
import { PedidoItem } from "./pedidoItem";
import { CarritoItem } from "./carritoItem";
import { EstadoDespacho } from "./estadoDespacho";
import { TipoUsuario } from "./tipoUsuario";
import { Pedido } from "./pedido";
import { CarritoDeCompra } from "src/carrito-de-compras/entities/carrito-de-compra.entity";
import { CarritoDeCompras } from "./carritoDeCompras";
import { DireccionEnvio } from "./direccionEnvio";



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
    
    @ManyToOne(()=> TipoUsuario)
    @JoinColumn({name: 'tipoUsuario'})
    tipoUsuarioId: TipoUsuario;

    @ManyToOne(()=> Pedido)
    @JoinColumn({name: 'id_pedido'})
    pedido: Pedido;

    @ManyToOne(()=> CarritoDeCompras)
    @JoinColumn({name: 'id_carritoDeCompras'})
    carritoDeCompras: CarritoDeCompras;

    @ManyToOne(()=> DireccionEnvio) 
    @JoinColumn({name: 'id_direccionEnvio'})
    direccionEnvio: DireccionEnvio;
}