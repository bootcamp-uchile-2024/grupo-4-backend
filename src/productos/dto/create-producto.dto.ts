import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {IsString, IsNotEmpty, IsNumber, Min, IsEnum, IsDate,} from 'class-validator';


export class CreateProductoDto {
  @ApiProperty({ description: 'Nombre del producto', example: 'Producto A' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({
    description: 'Descripción del producto',
    example: 'Descripción del producto A',
  })
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @ApiProperty({ description: 'Precio del producto', example: 100 })
  @IsNumber()
  @Type(() => Number) // Convierte el valor a número
  @Min(0)
  precio: number;

  @ApiProperty({ description: 'Imagen del producto (archivo)', type: 'string', format: 'binary' })
  imagen: string;

  @ApiProperty({ description: 'Stock del producto', example: 10 })
  @IsNumber()
  @Type(() => Number) // Convierte el valor a número
  @Min(0)
  stock: number;

  @ApiProperty({ description: 'Marca del producto', example: 'Marca A' })
  @IsString()
  @IsNotEmpty()
  marca: string;

  @ApiProperty({ description: 'Origen del producto', example: 'País A' })
  @IsString()
  @IsNotEmpty()
  origen: string;

  @ApiProperty({ description: 'Tipo del producto', example: 'Bebidas' })
  @IsNotEmpty()
  tipo: string;

  @ApiProperty({ description: 'Formato del producto', example: 'Formato A' })
  @IsString()
  @IsNotEmpty()
  formato: string;

  @ApiProperty({
    description: 'Fecha de creación del producto',
    example: '2023-01-01T00:00:00.000Z',
  })
  @IsDate()
  @Type(() => Date) // Convierte el valor a Date
  @IsNotEmpty()
  fecha: Date;

  @ApiProperty({
    description: 'Categorías del producto',
    example: 'Categoría A',
  })
  @IsString()
  @IsNotEmpty()
  categorias: string;

  @ApiProperty({ description: 'Producto destacado', example: true })
  @Type(() => Boolean) // Convierte el valor a booleano
  @IsNotEmpty()
  destacado: boolean;
}
