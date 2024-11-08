import { Pedido } from './pedido.entity';

export class PedidoItem {
  
  id: number;  
  productoId: number;  
  cantidad: number;  
  precio: number;  
  pedido: Pedido;
}
