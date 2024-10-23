import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Categoria } from "./categoria";
import { TipoProducto } from "./tipoProducto";
import { PaisOrigen } from "./paisOrigen";
import { PedidoItem } from "./pedidoItem";
import { CarritoItem } from "./carritoItem";


@Entity({name: 'Producto'}) 
export class Producto {
    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column()
    imagen: string;

    @Column()
    marca: string;

    @Column()
    formato: string;

    @Column()
    fechaVencimiento: Date;

    @Column()
    precio: number;

    @Column()
    stock: number;

    @Column()
    categoriaId: number;

    @Column()
    tipoProducto: number;

    @Column()
    paisOrigenId: number;
 
    @ManyToOne(()=> Categoria)
    @JoinColumn({name: 'id'})
    categoria: Categoria;

    @ManyToOne(()=> TipoProducto)
    @JoinColumn({name: 'id'})
    tipo: TipoProducto;

    @ManyToOne(()=> PaisOrigen)
    @JoinColumn({name: 'id'})
    pais: PaisOrigen;

    @ManyToOne(()=> PedidoItem)
    @JoinColumn({name: 'productoId'})
    producto: PedidoItem;

    @ManyToOne(()=> CarritoItem)
    @JoinColumn({name: 'productoId'})
   productoCarrito: CarritoItem;
}