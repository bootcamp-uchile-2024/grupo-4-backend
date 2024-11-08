import { CarritoItem } from './carrito-item.entity';
import { UsuarioCarritoDeCompra } from './usuario-carrito-compra.entity';

export class CarritoDeCompra {
  
  id: number; 
  usuario: UsuarioCarritoDeCompra; 
  items: CarritoItem[];
  estadoCarrito: number;
}
