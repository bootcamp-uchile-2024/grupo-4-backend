import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsString, IsNotEmpty, IsNumber, IsEmail, Length } from 'class-validator';

export class UpdateUsuarioDto {

    @ApiProperty({ description: 'Dirección del usuario', default: 'Direccion 1234', example: 'Calle Falsa 123' })
    @IsString()
    @IsNotEmpty()
    direccion: string;
    
    @ApiProperty({ description: 'Comuna del usuario', default: 'Comuna', example: 'Providencia' })
    @IsString()
    @IsNotEmpty()
    comuna: string;
    
    @ApiProperty({ description: 'Ciudad del usuario', default: 'Ciudad', example: 'Santiago' })
    @IsString()
    @IsNotEmpty()
    ciudad: string;
    
    @ApiProperty({ description: 'Región del usuario', default: 'Region', example: 'Metropolitana' })
    @IsString()
    @IsNotEmpty()
    region: string;
  
    @ApiProperty({ description: 'Teléfono del usuario', default: '912345678', example: '912345678' })
    @IsNumber()
    telefono: number;
  
    @ApiProperty({ description: 'Correo electrónico del usuario', default: 'test@dominio.cl', example: 'juan.perez@dominio.cl' })
    @IsEmail()
    correo: string;
  
    @ApiProperty({ description: 'Contraseña del usuario', default: '1234', example: 'password123' })
    @IsString()
    @Length(4, 20)
    contrasenna: string;

};
