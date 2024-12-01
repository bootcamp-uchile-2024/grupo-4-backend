import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class UpdateHabilitadoDto {
  @ApiProperty({ description: 'Estado del campo habilitado', example: true })
  @IsBoolean()
  @IsNotEmpty()
  habilitado: boolean;
}
