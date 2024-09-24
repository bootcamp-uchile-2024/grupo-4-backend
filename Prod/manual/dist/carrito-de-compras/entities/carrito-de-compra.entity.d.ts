import { CarritoItem } from "./carrito-item.entity";
import { UsuarioCarritoDeCompraDto } from "../dto/usuario-carrito-de-compra.dto";
export declare class CarritoDeCompra {
    id: number;
    usuario: UsuarioCarritoDeCompraDto;
    items: CarritoItem[];
    estadoCarrito: number;
}
