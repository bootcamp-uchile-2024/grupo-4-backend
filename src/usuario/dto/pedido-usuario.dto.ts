import { ApiProperty } from "@nestjs/swagger";

export class PedidoUsuarioDto {

    @ApiProperty({ default: 1 })
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