import { Usuarios } from "./usuario";
import { CarritoItem } from "./carritoItem";
export declare class CarritoDeCompras {
    id: number;
    usuarioId: number;
    usuarios: Usuarios[];
    carritoItem: CarritoItem;
}
