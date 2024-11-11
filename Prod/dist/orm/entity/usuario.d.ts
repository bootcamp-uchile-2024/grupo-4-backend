import { TipoUsuario } from "./tipoUsuario";
import { Pedido } from "./pedido";
import { CarritoDeCompras } from "./carritoDeCompras";
import { DireccionEnvio } from "./direccionEnvio";
export declare class Usuarios {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    constrasenna: string;
    rut: string;
    tipoUsuarioId: number;
    tipoUsuario: TipoUsuario;
    pedido: Pedido;
    carritoDeCompras: CarritoDeCompras;
    direccionEnvio: DireccionEnvio;
}
