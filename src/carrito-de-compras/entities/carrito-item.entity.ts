import { CarritoProducto } from 'src/productos/entities/carrito-producto.entity';

export class CarritoItem {
  
  id: number;  
  producto: CarritoProducto;  
  cantidad: number;  
  carritoDeComprasId: number;
}
