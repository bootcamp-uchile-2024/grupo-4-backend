import { ApiProperty, PartialType } from '@nestjs/swagger';
import { EstadoPedido, TipoBoleta, TipoDespacho, TipoPago } from '../entities/pedido.entity';

export class UpdatePedidoDto {
    @ApiProperty({ default: new Date() })
    fecha: Date;

    @ApiProperty({ default: 1000 })
    montoTotal: number;

    @ApiProperty({ default: TipoDespacho.Retiro })
    tipoDespacho: TipoDespacho;

    @ApiProperty({ default: TipoPago.Debito })
    tipoPago: TipoPago;

    @ApiProperty({ default: TipoBoleta.Boleta })
    tipoBoleta: TipoBoleta;

    @ApiProperty({ default: EstadoPedido.Pendiente })
    estado: EstadoPedido;
}
