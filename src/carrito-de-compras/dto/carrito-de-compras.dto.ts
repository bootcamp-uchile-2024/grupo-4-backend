import { ApiProperty } from '@nestjs/swagger';
import { CarritoItemDto } from './carrito-item.dto';

export class CarritoDeComprasDto {
  @ApiProperty({ description: 'ID del carrito de compras' })
  id: number;

  @ApiProperty({ description: 'ID del usuario' })
  usuarioId: number;

  @ApiProperty({ type: [CarritoItemDto], description: 'Lista de items del carrito' })
  items: CarritoItemDto[];
}
