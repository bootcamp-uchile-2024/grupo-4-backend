import { CarritoProductoDto } from "src/productos/dto/carrito-producto.dto";

export class CarritoItemDTO {
  
    id: number;  
    producto: CarritoProductoDto;  
    cantidad: number;  
    carritoDeComprasId: number;
  }