import { CarritoDeCompras } from "./carritoDeCompras";
import { Productos } from "./producto";
export declare class CarritoItem {
    id: number;
    productoId: number;
    cantidad: number;
    carritoDeComprasId: number;
    carritosDeCompras: CarritoDeCompras[];
    productos: Productos[];
}
