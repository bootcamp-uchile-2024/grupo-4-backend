import { ApiProperty } from '@nestjs/swagger';

export class CarritoItemDto {
  @ApiProperty({ description: 'ID del item del carrito' })
  id: number;

  @ApiProperty({ description: 'Cantidad del producto' })
  cantidad: number;

  @ApiProperty({ description: 'ID del producto' })
  productoId: number;

}
