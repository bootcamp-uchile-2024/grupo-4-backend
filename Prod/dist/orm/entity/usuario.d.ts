import { TipoUsuario } from "./tipoUsuario";
import { CarritoDeCompras } from "./carritoDeCompras";
export declare class Usuarios {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    constrasenna: string;
    rut: string;
    tipoUsuario: TipoUsuario;
    carritoDeCompras: CarritoDeCompras[];
}
