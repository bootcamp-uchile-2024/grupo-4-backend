import { ApiProperty } from '@nestjs/swagger';

export class UpdateImagenDto {
  @ApiProperty({
    description: 'Imagen del producto',
    type: 'string',
    format: 'binary', 
  })
  imagen: string; 
}
