import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Categorias } from 'src/productos/models/valores';
import { Tipos } from '../entities/producto.entity';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Min,
  IsEnum,
  IsDate,
} from 'class-validator';

export class UpdateProductoDto {
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
  @Min(0)
  precio: number;

  @ApiProperty({ description: 'Imagen del producto', example: 'imagen.jpg' })
  @IsString()
  @IsNotEmpty()
  imagen: string;

  @ApiProperty({ description: 'Stock del producto', example: 10 })
  @IsNumber()
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
  @IsEnum(Tipos)
  @IsNotEmpty()
  tipo: Tipos;

  @ApiProperty({ description: 'Formato del producto', example: 'Formato A' })
  @IsString()
  @IsNotEmpty()
  formato: string;

  @ApiProperty({
    description: 'Fecha de creación del producto',
    example: '2023-01-01T00:00:00.000Z',
  })
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  fecha: Date;

  @ApiProperty({
    description: 'Categorías del producto',
    example: ['Categoría A', 'Categoría B'],
  })
  @IsString({ each: true })
  @IsNotEmpty()
  categorias: Categorias[];

  @ApiProperty({ description: 'Producto destacado', example: true })
  @IsNotEmpty()
  destacado: boolean;
}
