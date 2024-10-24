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
    @JoinColumn({name: 'id_categoria'})
    categoria: Categoria;

    @ManyToOne(()=> TipoProducto)
    @JoinColumn({name: 'id_tipoProducto'})
    tipo: TipoProducto;

    @ManyToOne(()=> PaisOrigen)
    @JoinColumn({name: 'id_paisOrigen'})
    paisOrigen: PaisOrigen;

    @ManyToOne(()=> PedidoItem)
    @JoinColumn({name: 'productoId'})
    pedidoItem: PedidoItem;

    @ManyToOne(()=> CarritoItem)
    @JoinColumn({name: 'productoId'})
    carritoItem: CarritoItem;
    
   
}