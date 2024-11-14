import { IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCarritoItemDto {
  @ApiProperty({
    description: 'ID del producto a agregar al carrito',
    example: 5,
  })
  @IsNumber()
  @IsNotEmpty()
  productoId: number;

  @ApiProperty({
    description: 'Cantidad del producto',
    example: 2,
  })
  @IsNumber()
  @IsNotEmpty()
  cantidad: number;
}
