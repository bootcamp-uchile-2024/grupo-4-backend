import { CarritoProductoDto } from 'src/productos/dto/carrito-producto.dto';
export declare class CarritoItem {
    id: number;
    producto: CarritoProductoDto;
    cantidad: number;
    carritoDeComprasId: number;
}