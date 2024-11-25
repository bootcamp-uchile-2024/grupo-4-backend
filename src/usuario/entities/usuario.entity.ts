import { CarritoDeCompra } from 'src/carrito-de-compras/entities/carrito-de-compra.entity';
import { PedidoUsuario } from './pedido-usuario.entity';

export class Usuario {
  
  id: number; 
  nombre: string;  
  apellido: string;  
  direccion: string;
  email: string;
  comuna: string;  
  ciudad: string;  
  region: string;  
  telefono: number;  
  correo: string; 
  constrasenna: string;  
  rut: string;
  pedidos: PedidoUsuario[];
  carritoDeCompras: CarritoDeCompra[];
}
