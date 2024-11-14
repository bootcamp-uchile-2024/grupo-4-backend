import { ApiProperty } from '@nestjs/swagger';

export class CategoriaCreateDTO {
  @ApiProperty()
  nombre: string;

}