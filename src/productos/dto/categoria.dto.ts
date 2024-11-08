import { ApiProperty } from '@nestjs/swagger';

export class CategoriaDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  descripcion: string;
}