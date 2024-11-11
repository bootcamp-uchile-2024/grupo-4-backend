import { ApiProperty } from '@nestjs/swagger';
import { CategoriaDTO } from './categoria.dto';
import { TiposProducto } from '../enum/tiposProductoEnum';

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
  tipo: TiposProducto;

  @ApiProperty()
  formato: string;

  @ApiProperty()
  fecha: Date;

  @ApiProperty()
  categorias: CategoriaDTO[];

  @ApiProperty()
  destacado: boolean;
}
