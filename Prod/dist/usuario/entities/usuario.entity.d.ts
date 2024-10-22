import { CarritoDeCompra } from 'src/carrito-de-compras/entities/carrito-de-compra.entity';
import { PedidoUsuarioDto } from '../dto/pedido-usuario.dto';
export declare class Usuario {
  id: number;
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
  pedidos: PedidoUsuarioDto[];
  carritoDeCompras: CarritoDeCompra;
}
