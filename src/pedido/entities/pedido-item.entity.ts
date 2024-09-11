import { ApiProperty } from "@nestjs/swagger";
import { Pedido } from "./pedido.entity";

export class PedidoItem {

    @ApiProperty()
    id: number;

    @ApiProperty()
    productoId: number;

    @ApiProperty()
    cantidad: number;

    @ApiProperty()
    precio: number;

    @ApiProperty()
    pedido: Pedido;

};