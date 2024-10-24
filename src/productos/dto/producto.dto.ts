import { ApiProperty } from '@nestjs/swagger';
import { Categorias } from 'src/productos/models/categorias';

export enum Tipos {
  Accesorios = 'Accesorios',
  Bebidas = 'Bebidas',
  Box = 'Box',
}

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
  tipo: Tipos;

  @ApiProperty()
  formato: string;

  @ApiProperty()
  fecha: Date;

  @ApiProperty()
  categorias: Categorias[];

  @ApiProperty()
  destacado: boolean;
}
