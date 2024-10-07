import {
  EstadoPedido,
  TipoBoleta,
  TipoDespacho,
  TipoPago,
} from '../entities/pedido.entity';
export declare class UpdatePedidoDto {
  fecha: Date;
  montoTotal: number;
  tipoDespacho: TipoDespacho;
  tipoPago: TipoPago;
  tipoBoleta: TipoBoleta;
  estado: EstadoPedido;
}
