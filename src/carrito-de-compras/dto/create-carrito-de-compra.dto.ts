import { ApiProperty } from '@nestjs/swagger';
import { UsuarioCarritoDeCompraDto } from './usuario-carrito-de-compra.dto';
import { CarritoItemDTO } from './carrito-item.dto';

export class CreateCarritoDeCompraDto {
  @ApiProperty({ default: { id: 0 } })
  usuario: UsuarioCarritoDeCompraDto;

  @ApiProperty({
    default: [
      {
        producto: {
          productoId: 0,
        },
        cantidad: 0,
      },
    ],
  })
  items: CarritoItemDTO[];//revisar
}
