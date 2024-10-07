import { ApiProperty } from '@nestjs/swagger';

export class CarritoProductoDto {
  @ApiProperty({ default: '0' })
  productoId: number;

  @ApiProperty({ default: '0' })
  precio: number;
}
