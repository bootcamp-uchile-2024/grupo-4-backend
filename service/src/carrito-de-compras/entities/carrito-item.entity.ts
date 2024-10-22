import { ApiProperty } from '@nestjs/swagger';
import { CarritoDeCompra } from './carrito-de-compra.entity';
import { CarritoProductoDto } from 'src/productos/dto/carrito-producto.dto';

export class CarritoItem {
  @ApiProperty()
  id: number;

  @ApiProperty()
  producto: CarritoProductoDto;

  @ApiProperty()
  cantidad: number;

  @ApiProperty()
  carritoDeComprasId: number;
}
