import { Pedido } from "./pedido";
import { Productos } from "./producto";
export declare class PedidoItem {
    id: number;
    productoId: number;
    cantidad: number;
    pedidoId: number;
    pedidos: Pedido[];
    productos: Productos[];
}
