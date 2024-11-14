import { IsNumber, IsNotEmpty, IsArray, ArrayNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateCarritoItemDto } from './create-carrito-item.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCarritoDeCompraDto {
  @ApiProperty({
    description: 'ID del usuario que realiza la compra',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  usuarioId: number;

  @ApiProperty({
    description: 'Lista de items en el carrito de compras',
    type: [CreateCarritoItemDto],
  })
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateCarritoItemDto)
  items: CreateCarritoItemDto[];
}
