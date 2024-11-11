import { CarritoItem } from './carrito-item.entity';
import { UsuarioCarritoDeCompra } from './usuario-carrito-compra.entity';
export declare class CarritoDeCompra {
    id: number;
    usuario: UsuarioCarritoDeCompra;
    items: CarritoItem[];
    estadoCarrito: number;
}
