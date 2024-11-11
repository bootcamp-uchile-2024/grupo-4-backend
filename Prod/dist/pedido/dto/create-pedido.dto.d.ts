import { EstadoPedido } from 'src/pedido/enum/estadoPedido';
import { TipoBoleta } from 'src/pedido/enum/tipoBoleta';
import { TipoDespacho } from 'src/pedido/enum/tipoDespacho';
import { TipoPago } from 'src/pedido/enum/tipoPago';
import { PedidoUsuarioDto } from 'src/usuario/dto/pedido-usuario.dto';
export declare class CreatePedidoDto {
    fecha: Date;
    montoTotal: number;
    tipoDespacho: TipoDespacho;
    tipoPago: TipoPago;
    tipoBoleta: TipoBoleta;
    estado: EstadoPedido;
    usuario: PedidoUsuarioDto;
}
