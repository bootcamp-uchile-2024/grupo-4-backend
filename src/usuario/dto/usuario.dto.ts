import { CarritoDeCompra } from 'src/carrito-de-compras/entities/carrito-de-compra.entity';
import { PedidoUsuarioDto } from './pedido-usuario.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UsuarioDTO {
  @ApiProperty()
  id: number; 

  @ApiProperty()
  nombre: string;  

  @ApiProperty()
  apellido: string;  

  /*@ApiProperty()
  email: string;*/  

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
  constrasenna: string; 
  
  @ApiProperty()
  rut: string;

  @ApiProperty()
  pedidos: PedidoUsuarioDto[];

  @ApiProperty()
  carritoDeCompras: CarritoDeCompra;
}
