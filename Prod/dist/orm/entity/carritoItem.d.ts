import { CarritoDeCompras } from "./carritoDeCompras";
import { Productos } from "./producto";
export declare class CarritoItem {
    id: number;
    cantidad: number;
    producto: Productos;
    carritoDeCompras: CarritoDeCompras;
}
