import { Usuarios } from "./usuario";
import { PedidoItem } from "./pedidoItem";
export declare class Pedido {
    id: number;
    fecha: Date;
    usuarioId: number;
    usuarios: Usuarios[];
    pedidoItem: PedidoItem;
}
