import { ApiProperty } from '@nestjs/swagger';
import { CarritoDeCompra } from 'src/carrito-de-compras/entities/carrito-de-compra.entity';
import { PedidoUsuarioDto } from '../dto/pedido-usuario.dto';

export class Usuario {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  apellido: string;

  @ApiProperty()
  direccion: string;

  @ApiProperty()
  comuna: string;

  @ApiProperty()
  ciudad: string;

  @ApiProperty()
  region: string;

  @ApiProperty()
  telefono: number;

  @ApiProperty()
  correo: string;

  @ApiProperty()
  contrasenna: string;

  @ApiProperty()
  rut: string;

  pedidos: PedidoUsuarioDto[];

  carritoDeCompras: CarritoDeCompra;
}
