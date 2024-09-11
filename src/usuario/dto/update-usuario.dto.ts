import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto {

    @ApiProperty({ default: 'Direccion 1234' })
    direccion: string;
    
    @ApiProperty({ default: 'Comuna' })
    comuna: string;
    
    @ApiProperty({ default: 'Ciudad' })
    ciudad: string;
    
    @ApiProperty({ default: 'Region' })
    region: string;
  
    @ApiProperty({ default: '912345678' })
    telefono: number;
  
    @ApiProperty({ default: 'test@dominio.cl' })
    correo: string;
  
    @ApiProperty({ default: '1234' })
    contrasenna: string;

};
