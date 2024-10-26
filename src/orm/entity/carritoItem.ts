import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { CarritoDeCompras } from "./carritoDeCompras";
import { Productos } from "./producto";


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

    @OneToMany(()=> Productos, (producto) => producto.carritoItem)
    productos: Productos[];


    
}