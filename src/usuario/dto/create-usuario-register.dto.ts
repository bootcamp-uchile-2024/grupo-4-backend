import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Length, IsNotEmpty } from 'class-validator';

export class CreateUsuarioRegisterDto {
  @ApiProperty({
    description: 'Nombre del usuario',
    example: 'Juan',
  })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({
    description: 'Apellido del usuario',
    example: 'Pérez',
  })
  @IsString()
  @IsNotEmpty()
  apellido: string;

  @ApiProperty({
    description: 'RUT del usuario',
    default: '12345678-9',
    example: '12345678-9',
  })
  @IsString()
  rut: string;

  @ApiProperty({
    description: 'Dirección del usuario',
    example: 'Calle Falsa 123',
  })
  @IsString()
  @IsNotEmpty()
  direccion: string;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'juan.perez@dominio.cl',
  })
  @IsEmail()
  @IsNotEmpty()
  correo: string;

  @ApiProperty({
    description: 'Contraseña del usuario',
    example: 'password123',
  })
  @IsString()
  @Length(4, 20)
  @IsNotEmpty()
  contrasenna: string;
}
