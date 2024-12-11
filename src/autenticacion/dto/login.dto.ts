import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {

    @ApiProperty({ description: 'Correo del usuario', example: '' })
    @IsString({ message: 'El correo debe ser un string' })
    @IsEmail({}, { message: 'El correo no tiene un formato válido' })
    email: string;

    @ApiProperty({ description: 'Contraseña del usuario', example: '' })
    @IsString({ message: 'La contraseña debe ser un string' })
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    contrasenna: string;
}