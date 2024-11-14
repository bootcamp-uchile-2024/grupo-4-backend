import { ApiProperty } from '@nestjs/swagger';
import { Categoria } from 'src/orm/entity/categoria';
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
  categoria: Categoria;

  @ApiProperty()
  destacado: boolean;
}
