import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsInt,
  IsNotEmpty,
  IsEmail,
  IsPhoneNumber,
} from 'class-validator';

export class CreateCompraDto {
  @ApiProperty({ description: 'Email del usuario que realiza la compra' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'ID del tipo de despacho' })
  @IsInt()
  @IsNotEmpty()
  tipoDespachoId: number;

  @ApiProperty({ description: 'ID del colaborador encargado del despacho' })
  @IsInt()
  @IsNotEmpty()
  colaboradorId: number;

  @ApiProperty({ description: 'Dirección de entrega' })
  @IsString()
  @IsNotEmpty()
  direccion: string;

  @ApiProperty({ description: 'Teléfono de contacto' })
  @IsPhoneNumber('CL') // o @IsString() si prefieres
  @IsNotEmpty()
  telefono: string;

  @ApiProperty({ description: 'Tipo de facturación (1: boleta, 2: factura)' })
  @IsInt()
  @IsNotEmpty()
  tipoFacturacion: number;

  @ApiProperty({ description: 'Nombre del comprador' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ description: 'Apellido del comprador' })
  @IsString()
  @IsNotEmpty()
  apellido: string;

  @ApiProperty({ description: 'Comuna del comprador' })
  @IsString()
  @IsNotEmpty()
  comuna: string;

  @ApiProperty({ description: 'Región del comprador' })
  @IsString()
  @IsNotEmpty()
  region: string;

  @ApiProperty({ description: 'ID del carrito asociado' })
  @IsInt()
  @IsNotEmpty()
  carritoId: number;
}
