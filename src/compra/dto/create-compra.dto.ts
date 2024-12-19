import { ApiProperty } from "@nestjs/swagger";

export class CreateCompraDto {
    @ApiProperty({ description: 'Email del usuario que realiza la compra' })
    email: string;
  
    @ApiProperty({ description: 'ID del tipo de despacho' })
    tipoDespachoId: number;
  
    @ApiProperty({ description: 'ID del colaborador encargado del despacho' })
    colaboradorId: number;
  
    @ApiProperty({ description: 'Dirección de entrega' })
    direccion: string;
  
    @ApiProperty({ description: 'Teléfono de contacto' })
    telefono: string;
  
    @ApiProperty({ description: 'Tipo de facturación (1: boleta, 2: factura)' })
    tipoFacturacion: number;
  
    @ApiProperty({ description: 'Nombre del comprador' })
    nombre: string;
  
    @ApiProperty({ description: 'Apellido del comprador' })
    apellido: string;
  
    @ApiProperty({ description: 'Comuna del comprador' })
    comuna: string;
  
    @ApiProperty({ description: 'Región del comprador' })
    region: string;

    @ApiProperty({ description: 'ID del carrito asociado' })
    carritoId: number;
}