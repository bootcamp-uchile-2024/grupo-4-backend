import { ApiProperty } from "@nestjs/swagger";
import { PedidoUsuarioDto } from "src/usuario/dto/pedido-usuario.dto";

export enum TipoDespacho {
    Retiro = "retiro",
    Envio = "envio"
};

export enum TipoPago {
    Debito = "debito",
    Credito = "Credito"
};

export enum TipoBoleta {
    Boleta = "boleta",
    Factura = "factura"
};

export enum EstadoPedido {
    Pendiente = "pendiente",
    Enviado = "enviado",
    Entregado = "entregado"
};

export class Pedido {

    @ApiProperty()
    id: number;

    @ApiProperty()
    fecha: Date;

    @ApiProperty()
    montoTotal: number;

    @ApiProperty()
    tipoDespacho: TipoDespacho;

    @ApiProperty()
    tipoPago: TipoPago;

    @ApiProperty()
    tipoBoleta: TipoBoleta;

    @ApiProperty()
    estado: EstadoPedido;

    @ApiProperty()
    usuario: PedidoUsuarioDto;

};
