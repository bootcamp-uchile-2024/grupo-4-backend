import { Pedido } from "./pedido";
export declare class PedidoItem {
    id: number;
    productoId: number;
    cantidad: number;
    pedidoId: number;
    pedidos: Pedido[];
}
