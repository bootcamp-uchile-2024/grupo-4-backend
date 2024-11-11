import { EstadoPedido } from 'src/pedido/enum/estadoPedido';
import { TipoBoleta } from 'src/pedido/enum/tipoBoleta';
import { TipoDespacho } from 'src/pedido/enum/tipoDespacho';
import { TipoPago } from 'src/pedido/enum/tipoPago';
export declare class UpdatePedidoDto {
    fecha: Date;
    montoTotal: number;
    tipoDespacho: TipoDespacho;
    tipoPago: TipoPago;
    tipoBoleta: TipoBoleta;
    estado: EstadoPedido;
}
