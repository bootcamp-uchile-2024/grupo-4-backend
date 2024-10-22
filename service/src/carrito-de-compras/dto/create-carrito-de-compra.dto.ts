import { ApiProperty } from '@nestjs/swagger';
import { UsuarioCarritoDeCompraDto } from './usuario-carrito-de-compra.dto';
import { CarritoItem } from '../entities/carrito-item.entity';
import { CarritoProductoDto } from 'src/productos/dto/carrito-producto.dto';

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
  items: CarritoItem[];
}
