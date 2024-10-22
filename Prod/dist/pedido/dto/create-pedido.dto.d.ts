import {
  EstadoPedido,
  TipoBoleta,
  TipoDespacho,
  TipoPago,
} from '../entities/pedido.entity';
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
