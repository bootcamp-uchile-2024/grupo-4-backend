

import { ApiProperty } from '@nestjs/swagger';

export class ResponseAllProductsDto<T> {
  @ApiProperty({ description: 'Código de estado de la respuesta' })
  status: number;

  @ApiProperty({ description: 'Datos devueltos por la operación', required: false })
  data?: T;

  @ApiProperty({ description: 'Mensaje de error o éxito', required: false })
  message?: string;

  @ApiProperty({ description: 'Número de página actual', required: false })
  page?: number;

  @ApiProperty({ description: 'Tamaño de página', required: false })
  pageSize?: number;

  @ApiProperty({ description: 'Total de elementos', required: false })
  totalItems?: number;

  @ApiProperty({ description: 'Total de páginas', required: false })
  totalPages?: number;
}
