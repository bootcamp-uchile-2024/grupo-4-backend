import { ApiProperty } from "@nestjs/swagger";
import { CarritoDeCompra } from "src/carrito-de-compras/entities/carrito-de-compra.entity";
import { Pedido } from "src/pedido/entities/pedido.entity";

export class CreateUsuarioDto {

    @ApiProperty({ default: 'Nombre' })
    nombre: string;
    
    @ApiProperty({ default: 'Apellido' })
    apellido: string;
    
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
   
    @ApiProperty({ default: '12345678-9' })
    rut: string;

    pedidos: Pedido[];
    
    carritoDeCompras: CarritoDeCompra[];
};
