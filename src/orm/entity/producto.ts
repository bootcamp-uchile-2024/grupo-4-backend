import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Categoria } from "./categoria";
import { TipoProducto } from "./tipoProducto";
import { PaisOrigen } from "./paisOrigen";
import { PedidoItem } from "./pedidoItem";
import { CarritoItem } from "./carritoItem";


@Entity({name: 'Producto'}) 
export class Productos {
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
    tipoProductoId: number;

    @Column()
    paisOrigenId: number;
 
    @ManyToOne(()=> Categoria)
    @JoinColumn({name: 'categoriaId'})
    categoria: Categoria;

    @ManyToOne(()=> TipoProducto)
    @JoinColumn({name: 'tipoProductoId'})
    tipo: TipoProducto;

    @ManyToOne(()=> PaisOrigen)
    @JoinColumn({name: 'paisOrigenId'})
    paisOrigen: PaisOrigen;

    @ManyToOne(()=> PedidoItem)
    @JoinColumn({name: 'id'})
    pedidoItem: PedidoItem;

    @ManyToOne(()=> CarritoItem)
    @JoinColumn({name: 'id'})
    carritoItem: CarritoItem;
    
   
}