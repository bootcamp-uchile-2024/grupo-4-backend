import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class PedidoUsuarioDto {

    @ApiProperty({ default: 1 })
    @IsNumber()
    usuarioId: number;

    nombre: string;
    apellido: string;
    direccion: string;
    comuna: string;
    ciudad: string;
    region: string;
    telefono: number;
    correo: string;
    rut: string;
    pedidoId: number;
    
};