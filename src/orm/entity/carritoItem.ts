import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { CarritoDeCompras } from "./carritoDeCompras";
import { Producto } from "./producto";


@Entity({name: 'CarritoItem'})
export class CarritoItem {
    @PrimaryColumn()
    id: number;

    @Column()
    productoId: number;

    @Column()
   cantidad: number;

    @Column()
    carritoDeComprasId: number; 

    @OneToMany(()=> CarritoDeCompras, (carritoDeCompras) => carritoDeCompras.carritoItem)
    carritosDeCompras: CarritoDeCompras[];

    @OneToMany(()=> Producto, (producto) => producto.carritoItem)
    productos: Producto[];


    
}