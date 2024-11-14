import { ApiProperty } from '@nestjs/swagger';

export class ResponseDto<T> {
    @ApiProperty({ description: 'Indica el estado de la operación' })
    status: number;
  
    @ApiProperty({ description: 'Datos devueltos por la operación', required: false })
    data?: T;
  
    @ApiProperty({ description: 'Mensaje de error en caso de fallo', required: false })
    message?: string;
}