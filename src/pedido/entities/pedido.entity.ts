import { PedidoUsuarioDto } from 'src/usuario/dto/pedido-usuario.dto';
import { TipoPago } from '../enum/tipoPago';
import { TipoDespacho } from '../enum/tipoDespacho';
import { TipoBoleta } from '../enum/tipoBoleta';
import { EstadoPedido } from '../enum/estadoPedido';

export class Pedido {
  
  id: number;  
  fecha: Date;  
  montoTotal: number;  
  tipoDespacho: TipoDespacho;  
  tipoPago: TipoPago;  
  tipoBoleta: TipoBoleta;  
  estado: EstadoPedido;  
  usuario: PedidoUsuarioDto;
}
//export { TipoPago, TipoDespacho, TipoBoleta, EstadoPedido };

