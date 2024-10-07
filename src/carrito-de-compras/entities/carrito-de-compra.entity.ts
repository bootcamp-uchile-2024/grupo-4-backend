import { ApiProperty } from '@nestjs/swagger';
import { CarritoItem } from './carrito-item.entity';
import { UsuarioCarritoDeCompraDto } from '../dto/usuario-carrito-de-compra.dto';

export class CarritoDeCompra {
  @ApiProperty()
  id: number;

  @ApiProperty()
  usuario: UsuarioCarritoDeCompraDto;

  @ApiProperty()
  items: CarritoItem[];

  estadoCarrito: number;
}
