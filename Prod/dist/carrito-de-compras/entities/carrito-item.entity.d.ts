import { CarritoProducto } from 'src/productos/entities/carrito-producto.entity';
export declare class CarritoItem {
    id: number;
    producto: CarritoProducto;
    cantidad: number;
    carritoDeComprasId: number;
}
