import { PedidoUsuarioDto } from "src/usuario/dto/pedido-usuario.dto";
export declare enum TipoDespacho {
    Retiro = "retiro",
    Envio = "envio"
}
export declare enum TipoPago {
    Debito = "debito",
    Credito = "Credito"
}
export declare enum TipoBoleta {
    Boleta = "boleta",
    Factura = "factura"
}
export declare enum EstadoPedido {
    Pendiente = "pendiente",
    Enviado = "enviado",
    Entregado = "entregado"
}
export declare class Pedido {
    id: number;
    fecha: Date;
    montoTotal: number;
    tipoDespacho: TipoDespacho;
    tipoPago: TipoPago;
    tipoBoleta: TipoBoleta;
    estado: EstadoPedido;
    usuario: PedidoUsuarioDto;
}
