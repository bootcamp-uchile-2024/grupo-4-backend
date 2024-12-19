import { ApiProperty } from "@nestjs/swagger";

export class CompraDto {
    @ApiProperty({ description: 'ID de la compra' })
    id: number;
  
    @ApiProperty({ description: 'Email del usuario' })
    email: string;
  
    @ApiProperty({ description: 'Dirección de entrega' })
    direccion: string;
  
    @ApiProperty({ description: 'Teléfono de contacto' })
    telefono: string;

    @ApiProperty({ description: 'ID del carrito asociado' })
    carritoId: number;
}
  