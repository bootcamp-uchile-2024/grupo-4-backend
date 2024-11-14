import { ApiProperty } from '@nestjs/swagger';

export class TipoCreateDTO {
  @ApiProperty()
  nombre: string;

}