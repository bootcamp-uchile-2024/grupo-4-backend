import { CarritoDeCompra } from 'src/carrito-de-compras/entities/carrito-de-compra.entity';
import { PedidoUsuarioDto } from './pedido-usuario.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UsuarioRegisterDTO {
  @ApiProperty()
  id: number; 

  @ApiProperty()
  nombre: string;  

  @ApiProperty()
  apellido: string;  

  @ApiProperty()
  email: string; 

  @ApiProperty()
  tipoUsuarioId: number;

}
