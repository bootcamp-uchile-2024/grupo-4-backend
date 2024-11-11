import { CarritoDeCompra } from 'src/carrito-de-compras/entities/carrito-de-compra.entity';
import { Pedido } from 'src/pedido/entities/pedido.entity';
export declare class CreateUsuarioDto {
    nombre: string;
    apellido: string;
    direccion: string;
    comuna: string;
    ciudad: string;
    region: string;
    telefono: number;
    correo: string;
    contrasenna: string;
    rut: string;
    pedidos: Pedido[];
    carritoDeCompras: CarritoDeCompra[];
}
