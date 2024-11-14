import { ApiProperty } from '@nestjs/swagger';

export class TipoDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

}