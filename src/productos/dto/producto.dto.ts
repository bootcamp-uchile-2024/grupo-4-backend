import { ApiProperty } from '@nestjs/swagger';
import {  } from '../entities/producto.entity';
import { CategoriaDTO } from './categoria.dto';
import { TipoProducto } from 'src/orm/entity/tipoProducto';

export class ProductoDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  descripcion: string;

  @ApiProperty()
  precio: number;

  @ApiProperty()
  imagen: string;

  @ApiProperty()
  stock: number;

  @ApiProperty()
  marca: string;

  @ApiProperty()
  origen: string;

  @ApiProperty()
  tipo: TipoProducto;

  @ApiProperty()
  formato: string;

  @ApiProperty()
  fecha: Date;

  @ApiProperty()
  categorias: CategoriaDTO[];

  @ApiProperty()
  destacado: boolean;
}
