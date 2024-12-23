import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {IsString, IsNumber, IsEmail, Length, Matches, IsArray, ValidateNested, IsNotEmpty, IsIn,} from 'class-validator';
import { CarritoDeCompra } from 'src/carrito-de-compras/entities/carrito-de-compra.entity';
import { Pedido } from 'src/pedido/entities/pedido.entity';

export class CreateUsuarioDto {
  @ApiProperty({
    description: 'Nombre del usuario',
    default: 'Nombre',
    example: 'Juan',
  })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({
    description: 'Apellido del usuario',
    default: 'Apellido',
    example: 'Pérez',
  })
  @IsString()
  @IsNotEmpty()
  apellido: string;

  @ApiProperty({
    description: 'Dirección del usuario',
    default: 'Direccion 1234',
    example: 'Calle Falsa 123',
  })
  @IsString()
  @IsNotEmpty()
  direccion: string;

  @ApiProperty({
    description: 'Comuna del usuario',
    default: 'Comuna',
    example: 'Providencia',
  })
  @IsString()
  @IsNotEmpty()
  comuna: string;

  @ApiProperty({
    description: 'Ciudad del usuario',
    default: 'Ciudad',
    example: 'Santiago',
  })
  @IsString()
  @IsNotEmpty()
  ciudad: string;

  @ApiProperty({
    description: 'Región del usuario',
    default: 'Region',
    example: 'Metropolitana',
  })
  @IsString()
  @IsNotEmpty()
  region: string;

  @ApiProperty({
    description: 'Teléfono del usuario',
    default: '912345678',
    example: '912345678',
  })
  @IsNumber()
  telefono: number;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    default: 'test@dominio.cl',
    example: 'juan.perez@dominio.cl',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Contraseña del usuario',
    default: '1234',
    example: 'password123',
  })
  @IsString()
  @Length(4, 20)
  contrasenna: string;

  @ApiProperty({
    description: 'RUT del usuario',
    default: '12345678-9',
    example: '12345678-9',
  })
  @IsString()
  rut: string;

  @ApiProperty({
    description: 'Rol del usuario',
    default: '1, 2, 3, 4',
    example: '1',
  })
  @IsNotEmpty()
  @IsNumber()
  @IsIn([1, 2, 3, 4], { message: 'El tipoUsuarioId debe ser uno de los valores: 1, 2, 3 o 4.' })
  tipoUsuarioId: number;

  @ApiProperty({
    description: 'Pedidos del usuario',
    type: [Pedido],
    example: [],
  })
  @IsArray()
  @Type(() => Pedido)
  pedidos: Pedido[];

  @ApiProperty({
    description: 'Carrito de compras del usuario',
    type: [CarritoDeCompra],
    example: [],
  })
  @IsArray()
  @Type(() => CarritoDeCompra)
  carritoDeCompras: CarritoDeCompra[];
}
