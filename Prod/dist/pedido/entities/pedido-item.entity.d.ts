import { Pedido } from './pedido.entity';
export declare class PedidoItem {
  id: number;
  productoId: number;
  cantidad: number;
  precio: number;
  pedido: Pedido;
}
