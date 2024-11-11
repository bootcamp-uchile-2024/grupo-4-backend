import { CarritoDeCompra } from 'src/carrito-de-compras/entities/carrito-de-compra.entity';
import { PedidoUsuarioDto } from './pedido-usuario.dto';
export declare class UsuarioDTO {
    id: number;
    nombre: string;
    apellido: string;
    comuna: string;
    ciudad: string;
    region: string;
    telefono: number;
    correo: string;
    constrasenna: string;
    rut: string;
    pedidos: PedidoUsuarioDto[];
    carritoDeCompras: CarritoDeCompra;
}
