import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  EstadoPedido,
  TipoBoleta,
  TipoDespacho,
  TipoPago,
} from '../entities/pedido.entity';
import { Type } from 'class-transformer';
import { IsDate, IsNumber, Min, IsEnum } from 'class-validator';

export class UpdatePedidoDto {
  @ApiProperty({
    description: 'Fecha del pedido',
    example: new Date().toISOString(),
  })
  @IsDate()
  @Type(() => Date)
  fecha: Date;

  @ApiProperty({ description: 'Monto total del pedido', example: 1000 })
  @IsNumber()
  @Min(0)
  montoTotal: number;

  @ApiProperty({
    description: 'Tipo de despacho del pedido',
    example: TipoDespacho.Retiro,
  })
  @IsEnum(TipoDespacho)
  tipoDespacho: TipoDespacho;

  @ApiProperty({
    description: 'Tipo de pago del pedido',
    example: TipoPago.Debito,
  })
  @IsEnum(TipoPago)
  tipoPago: TipoPago;

  @ApiProperty({
    description: 'Tipo de boleta del pedido',
    example: TipoBoleta.Boleta,
  })
  @IsEnum(TipoBoleta)
  tipoBoleta: TipoBoleta;

  @ApiProperty({
    description: 'Estado del pedido',
    example: EstadoPedido.Pendiente,
  })
  @IsEnum(EstadoPedido)
  estado: EstadoPedido;
}
